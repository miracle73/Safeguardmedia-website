import type React from "react";
import { useState } from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { Checkbox } from "../components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import {
  CheckCircle,
  Play,
  Shield,
  Users,
  AlertCircle,
  Check,
} from "lucide-react";
import Logo from "../assets/images/SafeguardLogo3.svg";
import { useDemoRequestMutation } from "../services/apiService";

export default function RequestDemo2() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    profession: "",
    primaryUseCase: "",
    contentType: "",
    urgency: "",
    specificQuestion: "",
    agreeToComms: false,
  });

  type Errors = {
    firstName?: string;
    lastName?: string;
    email?: string;
    profession?: string;
    primaryUseCase?: string;
    agreeToComms?: string;
    submit?: string;
    [key: string]: string | undefined;
  };

  const [errors, setErrors] = useState<Errors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [demoRequest] = useDemoRequestMutation();

  // Validation functions
  interface ValidateBusinessEmailResult {
    (email: string): string;
  }

  const validateBusinessEmail: ValidateBusinessEmailResult = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return "Please enter a valid email address";
    }

    return "";
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors: Errors = {};

    // Required fields validation
    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else {
      const emailError = validateBusinessEmail(formData.email);
      if (emailError) {
        newErrors.email = emailError;
      }
    }

    if (!formData.profession) {
      newErrors.profession = "Please select your role";
    }
    if (!formData.primaryUseCase) {
      newErrors.primaryUseCase = "Please select your main goal";
    }

    if (!formData.agreeToComms) {
      newErrors.agreeToComms = "Please agree to receive communications";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setErrors({}); // Clear any previous errors

    try {
      // Map form data to API expected format
      const apiPayload = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        role: formData.profession,
        goal: formData.primaryUseCase,
        contentType: formData.contentType,
        urgencyLevel: formData.urgency,
        metadata: JSON.stringify({
          specificQuestion: formData.specificQuestion,
          agreeToComms: formData.agreeToComms,
          source: "demo-request-form",
          submittedAt: new Date().toISOString(),
        }),
      };

      console.log("Submitting to API:", apiPayload);

      // Call the API
      const response = await demoRequest(apiPayload).unwrap();

      console.log("API Response:", response);

      if (response.success) {
        // Reset form after successful submission

        setIsSubmitted(true);

        // Hide success message after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      } else {
        setErrors({
          submit: response.message || "Failed to submit demo request",
        });
      }
    } catch (error) {
      console.error("Submission error:", error);

      // Handle different types of errors
      let errorMessage = "Something went wrong. Please try again.";

      if (error && typeof error === "object") {
        if (
          "data" in error &&
          error.data &&
          typeof error.data === "object" &&
          "message" in error.data
        ) {
          errorMessage = error.data.message as string;
        } else if ("message" in error && typeof error.message === "string") {
          errorMessage = error.message;
        }
      }

      setErrors({ submit: errorMessage });
    } finally {
      setIsSubmitting(false);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        profession: "",
        primaryUseCase: "",
        contentType: "",
        urgency: "",
        specificQuestion: "",
        agreeToComms: false,
      });
    }
  };

  const ErrorMessage: React.FC<{ message: string }> = ({ message }) => (
    <div className="flex items-center space-x-2 text-red-600 text-sm mt-1">
      <AlertCircle className="w-4 h-4" />
      <span>{message}</span>
    </div>
  );

  const SuccessMessage = () => (
    <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
      <div className="flex items-center space-x-2 text-green-800">
        <Check className="w-5 h-5" />
        <span className="font-medium">
          Demo request submitted successfully!
        </span>
      </div>
      <p className="text-green-700 text-sm mt-2">
        We'll contact you within 24 hours to schedule your personalized demo.
      </p>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-[#10064C] border-b px-6 lg:px-12 py-6">
        <div className="flex items-center space-x-2">
          <img
            src={Logo}
            alt="SafeguardMedia Logo"
            className="w-10 h-10 rounded-full"
          />
          <span className="text-white font-semibold text-lg">
            SafeguardMedia
          </span>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-6 lg:px-12 py-8 lg:py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Value Proposition */}
            <div>
              <div className="mb-8">
                <h1 className="text-4xl lg:text-5xl font-bold text-[#080808] font-[Lufga] mb-6">
                  Protect Your Content & Reputation
                </h1>
                <p className="text-xl text-gray-600 font-[Lora] leading-relaxed mb-8">
                  See how SafeguardMedia helps creators, journalists, and
                  professionals verify content authenticity and protect against
                  deepfakes in real-time.
                </p>
              </div>

              {/* What You'll Experience */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-[#080808] font-[Lufga] mb-4">
                  What you'll experience in your demo:
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">
                      Upload and verify your own content instantly
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">
                      Learn to spot deepfakes and manipulated media
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">
                      Discover tools tailored to your content type
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">
                      Get personalized recommendations for your workflow
                    </span>
                  </div>
                </div>
              </div>

              {/* Perfect For Section */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-[#080808] font-[Lufga] mb-4">
                  Perfect for:
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white p-3 rounded-lg border text-sm">
                    <strong className="text-[#080808]">Content Creators</strong>
                    <br />
                    Protect your brand from impersonation
                  </div>
                  <div className="bg-white p-3 rounded-lg border text-sm">
                    <strong className="text-[#080808]">Journalists</strong>
                    <br />
                    Verify sources and user-generated content
                  </div>
                  <div className="bg-white p-3 rounded-lg border text-sm">
                    <strong className="text-[#080808]">Educators</strong>
                    <br />
                    Teach media literacy and fact-checking
                  </div>
                  <div className="bg-white p-3 rounded-lg border text-sm">
                    <strong className="text-[#080808]">Researchers</strong>
                    <br />
                    Analyze and verify digital evidence
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="bg-white p-6 rounded-lg border">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="flex items-center justify-center mb-2">
                      <Play className="w-6 h-6 text-[#250DAD]" />
                    </div>
                    <div className="text-2xl font-bold text-[#080808]">
                      10 min
                    </div>
                    <div className="text-sm text-gray-600">
                      Interactive demo
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-center mb-2">
                      <Users className="w-6 h-6 text-[#250DAD]" />
                    </div>
                    <div className="text-2xl font-bold text-[#080808]">
                      10K+
                    </div>
                    <div className="text-sm text-gray-600">
                      Creators protected
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-center mb-2">
                      <Shield className="w-6 h-6 text-[#250DAD]" />
                    </div>
                    <div className="text-2xl font-bold text-[#080808]">
                      Free
                    </div>
                    <div className="text-sm text-gray-600">
                      Basic protection
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonial */}
              <div className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg border-l-4 border-[#250DAD]">
                <blockquote className="text-gray-700 italic mb-3">
                  "As a journalist, SafeguardMedia has become essential for
                  verifying user-submitted videos. It's saved me from publishing
                  manipulated content multiple times."
                </blockquote>
                <cite className="text-sm font-medium text-gray-900">
                  — Sarah M., Investigative Journalist
                </cite>
              </div>
            </div>

            {/* Right Column - Form */}
            <div>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <h2 className="text-2xl font-bold text-[#080808] font-[Lufga] mb-2">
                      Try SafeguardMedia Free
                    </h2>
                    <p className="text-gray-600">
                      Get instant access • No credit card required
                    </p>
                  </div>

                  {isSubmitted && <SuccessMessage />}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* First Name and Last Name */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label
                          htmlFor="firstName"
                          className="text-[#080808] font-[Lufga] font-medium"
                        >
                          First Name *
                        </Label>
                        <Input
                          id="firstName"
                          type="text"
                          placeholder="John"
                          value={formData.firstName}
                          onChange={(e) =>
                            handleInputChange("firstName", e.target.value)
                          }
                          className={`border-gray-300 focus:border-[#250DAD] focus:ring-[#250DAD] ${
                            errors.firstName ? "border-red-500" : ""
                          }`}
                          required
                        />
                        {errors.firstName && (
                          <ErrorMessage message={errors.firstName} />
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label
                          htmlFor="lastName"
                          className="text-[#080808] font-[Lufga] font-medium"
                        >
                          Last Name *
                        </Label>
                        <Input
                          id="lastName"
                          type="text"
                          placeholder="Smith"
                          value={formData.lastName}
                          onChange={(e) =>
                            handleInputChange("lastName", e.target.value)
                          }
                          className={`border-gray-300 focus:border-[#250DAD] focus:ring-[#250DAD] ${
                            errors.lastName ? "border-red-500" : ""
                          }`}
                          required
                        />
                        {errors.lastName && (
                          <ErrorMessage message={errors.lastName} />
                        )}
                      </div>
                    </div>

                    {/* Business Email */}
                    <div className="space-y-2">
                      <Label
                        htmlFor="email"
                        className="text-[#080808] font-[Lufga] font-medium"
                      >
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your email "
                        value={formData.email}
                        onChange={(e) =>
                          handleInputChange("email", e.target.value)
                        }
                        className={`border-gray-300 focus:border-[#250DAD] focus:ring-[#250DAD] ${
                          errors.email ? "border-red-500" : ""
                        }`}
                        required
                      />
                      {errors.email && <ErrorMessage message={errors.email} />}
                      <p className="text-xs text-gray-500">
                        Please use your business email (not Gmail, Yahoo, etc.)
                      </p>
                    </div>

                    {/* Profession/Role */}
                    <div className="space-y-2">
                      <Label
                        htmlFor="profession"
                        className="text-[#080808] font-[Lufga] font-medium"
                      >
                        What best describes you? *
                      </Label>
                      <Select
                        value={formData.profession}
                        onValueChange={(value) =>
                          handleInputChange("profession", value)
                        }
                      >
                        <SelectTrigger
                          className={`border-gray-300 focus:border-[#250DAD] w-full focus:ring-[#250DAD] ${
                            errors.profession ? "border-red-500" : ""
                          }`}
                        >
                          <SelectValue placeholder="Select your role" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="content-creator">
                            Content Creator/Influencer
                          </SelectItem>
                          <SelectItem value="journalist">
                            Journalist/Reporter
                          </SelectItem>
                          <SelectItem value="educator">
                            Educator/Teacher
                          </SelectItem>
                          <SelectItem value="researcher">
                            Researcher/Academic
                          </SelectItem>
                          <SelectItem value="freelancer">
                            Freelancer/Consultant
                          </SelectItem>
                          <SelectItem value="student">Student</SelectItem>
                          <SelectItem value="individual">
                            Individual User
                          </SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.profession && (
                        <ErrorMessage message={errors.profession} />
                      )}
                    </div>

                    {/* Primary Use Case */}
                    <div className="space-y-2">
                      <Label
                        htmlFor="primaryUseCase"
                        className="text-[#080808] font-[Lufga] font-medium"
                      >
                        What's your main goal? *
                      </Label>
                      <Select
                        value={formData.primaryUseCase}
                        onValueChange={(value) =>
                          handleInputChange("primaryUseCase", value)
                        }
                      >
                        <SelectTrigger
                          className={`border-gray-300 focus:border-[#250DAD] w-full focus:ring-[#250DAD] ${
                            errors.primaryUseCase ? "border-red-500" : ""
                          }`}
                        >
                          <SelectValue placeholder="What do you want to achieve?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="verify-content">
                            Verify content I receive
                          </SelectItem>
                          <SelectItem value="protect-brand">
                            Protect my personal brand
                          </SelectItem>
                          <SelectItem value="fact-checking">
                            Fact-checking and research
                          </SelectItem>
                          <SelectItem value="education">
                            Teaching/learning about deepfakes
                          </SelectItem>
                          <SelectItem value="detect-manipulation">
                            Detect manipulated media
                          </SelectItem>
                          <SelectItem value="general-security">
                            General digital security
                          </SelectItem>
                          <SelectItem value="curiosity">
                            Just curious about the technology
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.primaryUseCase && (
                        <ErrorMessage message={errors.primaryUseCase} />
                      )}
                    </div>

                    {/* Content Type */}
                    <div className="space-y-2">
                      <Label
                        htmlFor="contentType"
                        className="text-[#080808] font-[Lufga] font-medium"
                      >
                        What type of content do you work with most?
                      </Label>
                      <Select
                        value={formData.contentType}
                        onValueChange={(value) =>
                          handleInputChange("contentType", value)
                        }
                      >
                        <SelectTrigger className="border-gray-300 focus:border-[#250DAD] w-full focus:ring-[#250DAD]">
                          <SelectValue placeholder="Select content type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="videos">Videos</SelectItem>
                          <SelectItem value="images">Images/Photos</SelectItem>
                          <SelectItem value="audio">Audio content</SelectItem>
                          <SelectItem value="social-media">
                            Social media posts
                          </SelectItem>
                          <SelectItem value="news-articles">
                            News articles
                          </SelectItem>
                          <SelectItem value="user-generated">
                            User-generated content
                          </SelectItem>
                          <SelectItem value="mixed">
                            Mixed content types
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Urgency */}
                    <div className="space-y-2">
                      <Label
                        htmlFor="urgency"
                        className="text-[#080808] font-[Lufga] font-medium"
                      >
                        How urgent is this for you?
                      </Label>
                      <Select
                        value={formData.urgency}
                        onValueChange={(value) =>
                          handleInputChange("urgency", value)
                        }
                      >
                        <SelectTrigger className="border-gray-300 focus:border-[#250DAD] w-full focus:ring-[#250DAD]">
                          <SelectValue placeholder="Select urgency level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="immediate">
                            Need help right now
                          </SelectItem>
                          <SelectItem value="this-week">
                            Within this week
                          </SelectItem>
                          <SelectItem value="this-month">
                            Within this month
                          </SelectItem>
                          <SelectItem value="planning">
                            Planning for the future
                          </SelectItem>
                          <SelectItem value="exploring">
                            Just exploring options
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Specific Question */}
                    <div className="space-y-2">
                      <Label
                        htmlFor="specificQuestion"
                        className="text-[#080808] font-[Lufga] font-medium"
                      >
                        Any specific questions or concerns?
                      </Label>
                      <Textarea
                        id="specificQuestion"
                        placeholder="e.g., I received a suspicious video and want to verify it, worried about deepfakes of myself, need to check sources for my articles..."
                        value={formData.specificQuestion}
                        onChange={(e) =>
                          handleInputChange("specificQuestion", e.target.value)
                        }
                        className="border-gray-300 focus:border-[#250DAD] focus:ring-[#250DAD] min-h-[80px] resize-none"
                        rows={3}
                      />
                    </div>

                    {/* Agreement Checkbox */}
                    <div className="space-y-2">
                      <div className="flex items-start space-x-3">
                        <Checkbox
                          id="agreeToComms"
                          checked={formData.agreeToComms}
                          onCheckedChange={(checked) =>
                            handleInputChange(
                              "agreeToComms",
                              checked as boolean
                            )
                          }
                          className={`mt-1 border-[#250DAD] data-[state=checked]:bg-[#250DAD] data-[state=checked]:border-[#250DAD] ${
                            errors.agreeToComms ? "border-red-500" : ""
                          }`}
                        />
                        <Label
                          htmlFor="agreeToComms"
                          className="text-sm text-[#080808] font-[Lora] leading-relaxed cursor-pointer"
                        >
                          I'd like to receive helpful tips and updates about
                          digital security from SafeguardMedia. View our{" "}
                        </Label>
                      </div>
                      {errors.agreeToComms && (
                        <ErrorMessage message={errors.agreeToComms} />
                      )}
                    </div>

                    {/* Submit Error */}
                    {errors.submit && (
                      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                        <ErrorMessage message={errors.submit} />
                      </div>
                    )}

                    {/* Submit Button */}
                    <div className="pt-4">
                      <Button
                        type="submit"
                        className="w-full bg-[#250DAD] hover:bg-blue-700 text-white font-[Lufga] font-medium py-4 px-8 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <div className="flex items-center space-x-2">
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            <span>Submitting...</span>
                          </div>
                        ) : (
                          "Start My Free Demo"
                        )}
                      </Button>
                      <p className="text-center text-sm text-gray-500 mt-3">
                        Get instant access • No setup required
                      </p>
                    </div>
                  </form>
                </CardContent>
              </Card>

              {/* Additional Trust Signals */}
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600 mb-3">
                  Join thousands of creators staying safe online
                </p>
                <div className="flex justify-center space-x-4 text-xs text-gray-500">
                  <span>✓ Free forever plan</span>
                  <span>✓ No credit card needed</span>
                  <span>✓ 2-minute setup</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* Footer */}
      {/* Footer */}
      <footer className="bg-[#10064C] text-white py-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="">
              <div className="flex items-center space-x-2 mb-6">
                <img
                  src={Logo}
                  alt="SafeguardMedia Logo"
                  className="w-10 h-10 rounded-full"
                />
                <span className="font-semibold text-lg">SafeguardMedia</span>
              </div>
              <div className=" px-2 flex justify- gap-4 items-center">
                <div>
                  <a
                    href="https://www.instagram.com/safe_guard_media/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white text-sm flex items-center"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                </div>
                <div>
                  <a
                    href="https://x.com/safeguardmedia1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white text-sm flex items-center"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                </div>
                <div>
                  <a
                    href="https://www.linkedin.com/company/safeguardmedia/about/?viewAsMember=true"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white text-sm flex items-center"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </div>
                <div>
                  <a
                    href="mailto:admin@safeguardmedia.org"
                    className="text-gray-400 hover:text-white text-sm flex items-center"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                      <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-gray-300">Solutions</h4>
              <ul className="space-y-3">
                <li>
                  <div className="text-gray-400">AI Deepfake Detection</div>
                </li>
                <li>
                  <div className="text-gray-400">AI-Assisted Fact-Checking</div>
                </li>
                <li>
                  <div className="text-gray-400">
                    Cybersecurity & Fraud Prevention
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <div className="font-semibold mb-4 text-gray-300">
                Legal & Trust
              </div>
              <ul className="space-y-3">
                <li>
                  <div className="text-gray-400">Privacy Policy</div>
                </li>
                <li>
                  <div className="text-gray-400">Terms Of Service</div>
                </li>
                <li>
                  <div className="text-gray-400">
                    Compliance (GDPR, CCPA, NDPR)
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8">
            <p className="text-center text-gray-400 text-sm">
              © 2025. All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
