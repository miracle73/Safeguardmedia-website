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
  Clock,
  AlertCircle,
  Check,
  Mail,
  Send,
} from "lucide-react";
import Logo from "../assets/images/SafeguardLogo3.svg";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
    urgency: "",
    agreeToComms: false,
  });

  type Errors = {
    name?: string;
    email?: string;
    company?: string;
    service?: string;
    message?: string;
    agreeToComms?: string;
    submit?: string;
    [key: string]: string | undefined;
  };

  const [errors, setErrors] = useState<Errors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "cipheztechdigitalsolutions@gmail.com",
      href: "mailto:cipheztechdigitalsolutions@gmail.com",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: Clock,
      label: "Business Hours",
      value: "Mon-Fri 9AM-6PM WAT",
      href: "#",
      color: "from-purple-500 to-pink-500",
    },
  ];

  const services = [
    "AI & Machine Learning",
    "Cloud Solutions",
    "Web Development",
    "Custom Software Development",
    "Mobile App Development",
    "Other",
  ];

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
    if (!formData.name.trim()) {
      newErrors.name = "Full name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else {
      const emailError = validateBusinessEmail(formData.email);
      if (emailError) {
        newErrors.email = emailError;
      }
    }
    if (!formData.message.trim()) {
      newErrors.message = "Project details are required";
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
      // Create email content
      const subject = `New Project Inquiry from ${formData.name}`;
      const body = `
Hello CiphezTech Team,

I am interested in your services and would like to discuss a potential project.

Contact Details:
- Name: ${formData.name}
- Email: ${formData.email}
- Company: ${formData.company || "Not specified"}

Project Information:
- Service Interested In: ${formData.service || "Not specified"}
- Urgency: ${formData.urgency || "Not specified"}

Project Details:
${formData.message}

Please get back to me at your earliest convenience.

Best regards,
${formData.name}
      `;

      // Simulate sending delay
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Create mailto link
      const mailtoLink = `mailto:cipheztechdigitalsolutions@gmail.com?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;

      // Open email client
      window.location.href = mailtoLink;

      setIsSubmitted(true);

      // Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        company: "",
        service: "",
        message: "",
        urgency: "",
        agreeToComms: false,
      });

      // Hide success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
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
        <span className="font-medium">Message sent successfully!</span>
      </div>
      <p className="text-green-700 text-sm mt-2">
        Thank you for contacting us. We'll get back to you within 24 hours.
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
            alt="CiphezTech Logo"
            className="w-10 h-10 rounded-full"
          />
          <span className="text-white font-semibold text-lg">
            CiphezTech Innovations
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
                  Let's Start Your Digital Transformation
                </h1>
                <p className="text-xl text-gray-600 font-[Lora] leading-relaxed mb-8">
                  Ready to take your business to the next level? We'd love to
                  hear about your project and discuss how we can help you
                  achieve your goals through innovative technology solutions.
                </p>
              </div>

              {/* What You'll Get */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-[#080808] font-[Lufga] mb-4">
                  What you'll get when you contact us:
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">
                      Free consultation call within 24 hours
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">
                      Detailed project proposal within 48 hours
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">
                      Custom solution tailored to your needs
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">
                      Transparent pricing and timeline estimates
                    </span>
                  </div>
                </div>
              </div>

              {/* Contact Info Cards */}
              <div className="mb-8 space-y-4">
                <h3 className="text-xl font-bold text-[#080808] font-[Lufga] mb-4">
                  Get in touch directly:
                </h3>
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className="group flex items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-gray-100"
                  >
                    <div
                      className={`w-12 h-12 bg-gradient-to-br ${info.color} rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <info.icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-600 font-medium">
                        {info.label}
                      </div>
                      <div className="text-gray-900 font-semibold group-hover:text-blue-600 transition-colors duration-300">
                        {info.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Perfect For Section */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-[#080808] font-[Lufga] mb-4">
                  We help businesses like:
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white p-3 rounded-lg border text-sm">
                    <strong className="text-[#080808]">Startups</strong>
                    <br />
                    MVP development and scaling
                  </div>
                  <div className="bg-white p-3 rounded-lg border text-sm">
                    <strong className="text-[#080808]">Healthcare</strong>
                    <br />
                    Patient management systems
                  </div>
                  <div className="bg-white p-3 rounded-lg border text-sm">
                    <strong className="text-[#080808]">E-commerce</strong>
                    <br />
                    Online stores and marketplaces
                  </div>
                  <div className="bg-white p-3 rounded-lg border text-sm">
                    <strong className="text-[#080808]">Manufacturing</strong>
                    <br />
                    Process automation and IoT
                  </div>
                </div>
              </div>

              {/* Quick Response Promise */}
              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-6 text-white">
                <div className="flex items-center space-x-3 mb-4">
                  <h4 className="text-lg font-bold">
                    Quick Response Guarantee
                  </h4>
                </div>
                <p className="text-blue-100 mb-4 text-sm">
                  We understand that time is crucial for your business. That's
                  why we guarantee:
                </p>
                <ul className="space-y-2 text-blue-100 text-sm">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-yellow-300 rounded-full"></div>
                    <span>Response within 2 hours during business hours</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-yellow-300 rounded-full"></div>
                    <span>Free consultation call within 24 hours</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-yellow-300 rounded-full"></div>
                    <span>Detailed project proposal within 48 hours</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column - Form */}
            <div>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                        <Send className="h-6 w-6 text-blue-600" />
                      </div>
                      <h2 className="text-2xl font-bold text-[#080808] font-[Lufga]">
                        Send us a message
                      </h2>
                    </div>
                    <p className="text-gray-600">
                      Tell us about your project and we'll get back to you soon
                    </p>
                  </div>

                  {isSubmitted && <SuccessMessage />}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Full Name and Email */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label
                          htmlFor="name"
                          className="text-[#080808] font-[Lufga] font-medium"
                        >
                          Full Name *
                        </Label>
                        <Input
                          id="name"
                          type="text"
                          placeholder="Your full name"
                          value={formData.name}
                          onChange={(e) =>
                            handleInputChange("name", e.target.value)
                          }
                          className={`border-gray-300 focus:border-[#250DAD] focus:ring-[#250DAD] ${
                            errors.name ? "border-red-500" : ""
                          }`}
                          required
                        />
                        {errors.name && <ErrorMessage message={errors.name} />}
                      </div>
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
                          placeholder="your.email@company.com"
                          value={formData.email}
                          onChange={(e) =>
                            handleInputChange("email", e.target.value)
                          }
                          className={`border-gray-300 focus:border-[#250DAD] focus:ring-[#250DAD] ${
                            errors.email ? "border-red-500" : ""
                          }`}
                          required
                        />
                        {errors.email && (
                          <ErrorMessage message={errors.email} />
                        )}
                      </div>
                    </div>

                    {/* Company and Service */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label
                          htmlFor="company"
                          className="text-[#080808] font-[Lufga] font-medium"
                        >
                          Company Name
                        </Label>
                        <Input
                          id="company"
                          type="text"
                          placeholder="Your company name"
                          value={formData.company}
                          onChange={(e) =>
                            handleInputChange("company", e.target.value)
                          }
                          className="border-gray-300 focus:border-[#250DAD] focus:ring-[#250DAD]"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label
                          htmlFor="service"
                          className="text-[#080808] font-[Lufga] font-medium"
                        >
                          Service Interested In
                        </Label>
                        <Select
                          value={formData.service}
                          onValueChange={(value) =>
                            handleInputChange("service", value)
                          }
                        >
                          <SelectTrigger className="border-gray-300 focus:border-[#250DAD] w-full focus:ring-[#250DAD]">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            {services.map((service, index) => (
                              <SelectItem key={index} value={service}>
                                {service}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Urgency */}
                    <div className="space-y-2">
                      <Label
                        htmlFor="urgency"
                        className="text-[#080808] font-[Lufga] font-medium"
                      >
                        Project Timeline
                      </Label>
                      <Select
                        value={formData.urgency}
                        onValueChange={(value) =>
                          handleInputChange("urgency", value)
                        }
                      >
                        <SelectTrigger className="border-gray-300 focus:border-[#250DAD] w-full focus:ring-[#250DAD]">
                          <SelectValue placeholder="When do you need this?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="asap">
                            ASAP - Emergency project
                          </SelectItem>
                          <SelectItem value="this-week">
                            Within this week
                          </SelectItem>
                          <SelectItem value="this-month">
                            Within this month
                          </SelectItem>
                          <SelectItem value="1-3-months">
                            1-3 months from now
                          </SelectItem>
                          <SelectItem value="planning">
                            Planning for the future
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Project Details */}
                    <div className="space-y-2">
                      <Label
                        htmlFor="message"
                        className="text-[#080808] font-[Lufga] font-medium"
                      >
                        Project Details *
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your project, timeline, and requirements..."
                        value={formData.message}
                        onChange={(e) =>
                          handleInputChange("message", e.target.value)
                        }
                        className={`border-gray-300 focus:border-[#250DAD] focus:ring-[#250DAD] min-h-[120px] resize-none ${
                          errors.message ? "border-red-500" : ""
                        }`}
                        rows={6}
                        required
                      />
                      {errors.message && (
                        <ErrorMessage message={errors.message} />
                      )}
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
                          I'd like to receive updates about my project and
                          helpful tips from CiphezTech Innovations.
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
                            <span>Sending...</span>
                          </div>
                        ) : (
                          <div className="flex items-center space-x-2">
                            <Send className="h-5 w-5" />
                            <span>Send Message</span>
                          </div>
                        )}
                      </Button>
                      <p className="text-center text-sm text-gray-500 mt-3">
                        We'll respond within 24 hours • Free consultation
                        included
                      </p>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#10064C] text-white py-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="">
              <div className="flex items-center space-x-2 mb-6">
                <img
                  src={Logo}
                  alt="CiphezTech Logo"
                  className="w-10 h-10 rounded-full"
                />
                <span className="font-semibold text-lg">
                  CiphezTech Innovations
                </span>
              </div>
              <div className=" flex px-2 gap-4 items-center ">
                <div className="flex justify-start gap-4  items-center">
                  <a
                    href="mailto:cipheztechdigitalsolutions@gmail.com"
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
                  <span className="font-semibold text-sm">
                    cipheztechdigitalsolutions@gmail.com
                  </span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-gray-300">Services</h4>
              <ul className="space-y-3">
                <li>
                  <div className="text-gray-400">AI & Machine Learning</div>
                </li>
                <li>
                  <div className="text-gray-400">Cloud Solutions</div>
                </li>
                <li>
                  <div className="text-gray-400">
                    Custom Software Development
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <div className="font-semibold mb-4 text-gray-300">
                Support & Contact
              </div>
              <ul className="space-y-3">
                <li>
                  <div className="text-gray-400">24/7 Technical Support</div>
                </li>
                <li>
                  <div className="text-gray-400">Project Consultation</div>
                </li>
                <li>
                  <div className="text-gray-400">
                    Email: cipheztechdigitalsolutions@gmail.com
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8">
            <p className="text-center text-gray-400 text-sm">
              © 2025 CiphezTech Innovations. All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
