import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Menu, ArrowRight, AlertCircle, Check } from "lucide-react";
import HeaderImg from "../assets/images/header-img.png";
import BrandImg from "../assets/images/Brand.png";
import CuttingEdgeImg from "../assets/images/cutting-edge.png";
import OpportunitiesImg from "../assets/images/Opportunities.png";
import NetworkImg from "../assets/images/Network.png";
import { useState } from "react";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import Logo from "../assets/images/SafeguardLogo4 (2).png";

export default function Partner() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    workEmail: "",
    companyName: "",
    website: "",
    businessNeeds: "",
  });

  interface Errors {
    firstName?: string;
    lastName?: string;
    workEmail?: string;
    companyName?: string;
    website?: string;
    businessNeeds?: string;
    submit?: string;
    [key: string]: string | undefined;
  }

  const [errors, setErrors] = useState<Errors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Email validation function
  interface EmailValidationResult {
    (email: string): string;
  }

  const validateEmail: EmailValidationResult = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return "Please enter a valid email address";
    }
    return "";
  };

  // Website validation function
  interface WebsiteValidationResult {
    (website: string): string;
  }

  const validateWebsite: WebsiteValidationResult = (website) => {
    if (!website) return ""; // Optional field

    const urlRegex =
      /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;
    if (!urlRegex.test(website)) {
      return "Please enter a valid website URL";
    }
    return "";
  };

  const handleInputChange = (field: string, value: string) => {
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

    // Auto-clear error after 3 seconds
    if (errors[field]) {
      setTimeout(() => {
        setErrors((prev) => ({
          ...prev,
          [field]: "",
        }));
      }, 3000);
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
    if (!formData.workEmail.trim()) {
      newErrors.workEmail = "Email is required";
    } else {
      const emailError = validateEmail(formData.workEmail);
      if (emailError) {
        newErrors.workEmail = emailError;
      }
    }
    if (!formData.companyName.trim()) {
      newErrors.companyName = "Company name is required";
    }

    // Website validation (optional field)
    if (formData.website) {
      const websiteError = validateWebsite(formData.website);
      if (websiteError) {
        newErrors.website = websiteError;
      }
    }

    setErrors(newErrors);

    // Auto-clear errors after 3 seconds
    if (Object.keys(newErrors).length > 0) {
      setTimeout(() => {
        setErrors({});
      }, 3000);
    }

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      console.log("Integration inquiry submitted:", formData);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Reset form after successful submission
      setFormData({
        firstName: "",
        lastName: "",
        workEmail: "",
        companyName: "",
        website: "",
        businessNeeds: "",
      });

      setIsSubmitted(true);

      // Hide success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error("Submission error:", error);
      setErrors({ submit: "Something went wrong. Please try again." });
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
        <span className="font-medium">
          Integration inquiry submitted successfully!
        </span>
      </div>
      <p className="text-green-700 text-sm mt-2">
        We'll contact you within 24 hours to discuss your integration needs.
      </p>
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-[#10064C] overflow-hidden">
        {/* Header background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: `url(${HeaderImg})`,
          }}
        />

        {/* Navigation */}
        <nav className="relative z-10 flex items-center justify-between px-6 lg:px-12 py-6">
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

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="/get-started">
              <Button className="bg-[#250DAD] hover:bg-blue-700 text-white">
                Get Started Free
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="lg:hidden text-white">
            <Menu className="w-6 h-6" />
          </Button>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 flex items-center justify-start px-6 lg:px-12 min-h-[calc(100vh-100px)]">
          <div className="text-start max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Integrate AI-Powered Media Verification Into Your Business
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
              Protect your business from deepfakes, misinformation, and digital
              fraud. Seamlessly integrate our cutting-edge verification
              technology into your existing workflows and safeguard your
              operations.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 lg:py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#080808] font-[Lufga] mb-6">
              Why Integrate SafeguardMedia Into Your Workflow?
            </h2>
            <p className="text-[#080808] font-[400] font-[Lora] text-lg max-w-3xl mx-auto">
              Don't let digital deception compromise your business. Our
              API-first approach makes it easy to add enterprise-grade
              verification to your existing systems.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Seamless Integration */}
            <Card className="p-8 bg-white border-0 shadow-sm">
              <CardContent className="p-0">
                <div className="flex flex-col items-center mb-4">
                  <img
                    src={CuttingEdgeImg}
                    alt="Integration Icon"
                    className=""
                  />
                  <h3 className="text-xl font-bold text-[#080808] mt-4 font-[Lufga]">
                    Seamless API Integration
                  </h3>
                </div>
                <p className="text-[#080808] font-[400] font-[Lora] text-center text-base leading-relaxed">
                  Deploy our deepfake detection and media verification APIs in
                  minutes, not months. Compatible with your existing tech stack
                  and scalable to handle millions of requests.
                </p>
              </CardContent>
            </Card>

            {/* Risk Mitigation */}
            <Card className="p-8 bg-white border-0 shadow-sm">
              <CardContent className="p-0">
                <div className="flex flex-col items-center mb-4">
                  <img src={BrandImg} alt="Risk Icon" className="" />
                  <h3 className="text-xl font-bold text-[#080808] mt-4 font-[Lufga]">
                    Reduce Business Risk
                  </h3>
                </div>
                <p className="text-[#080808] font-[400] font-[Lora] text-base text-center leading-relaxed">
                  Protect your business from financial fraud, reputation damage,
                  and regulatory violations. Automatically flag suspicious
                  content before it impacts your operations.
                </p>
              </CardContent>
            </Card>

            {/* Competitive Advantage */}
            <Card className="p-8 bg-white border-0 shadow-sm">
              <CardContent className="p-0">
                <div className="flex flex-col items-center mb-4">
                  <img
                    src={OpportunitiesImg}
                    alt="Advantage Icon"
                    className=""
                  />
                  <h3 className="text-xl font-bold text-[#080808] mt-4 font-[Lufga]">
                    Gain Competitive Advantage
                  </h3>
                </div>
                <p className="text-[#080808] font-[400] font-[Lora] text-base text-center leading-relaxed">
                  Differentiate your platform with built-in verification
                  features. Offer your users unprecedented security while
                  building trust and credibility in your brand.
                </p>
              </CardContent>
            </Card>

            {/* Expert Support */}
            <Card className="p-8 bg-white border-0 shadow-sm">
              <CardContent className="p-0">
                <div className="flex flex-col items-center mb-4">
                  <img src={NetworkImg} alt="Support Icon" className="" />
                  <h3 className="text-xl font-bold text-[#080808] mt-4 font-[Lufga]">
                    Enterprise-Grade Support
                  </h3>
                </div>
                <p className="text-[#080808] font-[400] font-[Lora] text-base text-center leading-relaxed">
                  Get dedicated technical support, custom integration
                  assistance, and ongoing optimization from our team of AI and
                  cybersecurity experts.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 lg:py-24 px-6 lg:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#080808] font-[Lufga] mb-6">
              Perfect for Your Industry
            </h2>
            <p className="text-[#080808] font-[400] font-[Lora] text-lg max-w-3xl mx-auto">
              Our technology adapts to various business needs across industries
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 bg-white border-0 shadow-sm">
              <CardContent className="p-0">
                <h3 className="text-lg font-bold text-[#080808] mb-3 font-[Lufga]">
                  Social Media & Content Platforms
                </h3>
                <p className="text-[#080808] font-[400] font-[Lora] text-sm leading-relaxed">
                  Automatically detect and flag deepfakes, manipulated media,
                  and misinformation before they spread on your platform.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 bg-white border-0 shadow-sm">
              <CardContent className="p-0">
                <h3 className="text-lg font-bold text-[#080808] mb-3 font-[Lufga]">
                  Financial Services
                </h3>
                <p className="text-[#080808] font-[400] font-[Lora] text-sm leading-relaxed">
                  Prevent identity fraud and verify customer authenticity during
                  onboarding, transactions, and video-based authentication.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 bg-white border-0 shadow-sm">
              <CardContent className="p-0">
                <h3 className="text-lg font-bold text-[#080808] mb-3 font-[Lufga]">
                  E-commerce & Marketplaces
                </h3>
                <p className="text-[#080808] font-[400] font-[Lora] text-sm leading-relaxed">
                  Verify product images, detect fake reviews, and protect your
                  marketplace from fraudulent sellers and listings.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 bg-white border-0 shadow-sm">
              <CardContent className="p-0">
                <h3 className="text-lg font-bold text-[#080808] mb-3 font-[Lufga]">
                  News & Media Organizations
                </h3>
                <p className="text-[#080808] font-[400] font-[Lora] text-sm leading-relaxed">
                  Verify the authenticity of user-generated content, images, and
                  videos before publication to maintain editorial integrity.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 bg-white border-0 shadow-sm">
              <CardContent className="p-0">
                <h3 className="text-lg font-bold text-[#080808] mb-3 font-[Lufga]">
                  HR & Recruitment
                </h3>
                <p className="text-[#080808] font-[400] font-[Lora] text-sm leading-relaxed">
                  Ensure candidate authenticity during video interviews and
                  verify submitted credentials and documentation.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 bg-white border-0 shadow-sm">
              <CardContent className="p-0">
                <h3 className="text-lg font-bold text-[#080808] mb-3 font-[Lufga]">
                  Government & Public Sector
                </h3>
                <p className="text-[#080808] font-[400] font-[Lora] text-sm leading-relaxed">
                  Combat misinformation campaigns and verify the authenticity of
                  digital evidence and public communications.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Integration Form Section */}
      <section className="py-16 lg:py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#080808] font-[Lufga] mb-6">
              Start Your Integration Today
            </h2>
            <p className="text-[#080808] font-[400] font-[Lora] text-lg">
              Tell us about your business needs and we'll show you how
              SafeguardMedia can protect and enhance your operations.
            </p>
          </div>

          <Card className="border-0 shadow-lg">
            <CardContent className="px-8 lg:px-12 py-4 lg:py-6">
              {isSubmitted && <SuccessMessage />}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* First Name and Last Name */}
                <div className="grid md:grid-cols-2 gap-6">
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
                      placeholder="Enter your first name"
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
                      placeholder="Enter your last name"
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

                {/* Work Email Address */}
                <div className="space-y-2">
                  <Label
                    htmlFor="workEmail"
                    className="text-[#080808] font-[Lufga] font-medium"
                  >
                    Business Email Address *
                  </Label>
                  <Input
                    id="workEmail"
                    type="email"
                    placeholder="you@company.com"
                    value={formData.workEmail}
                    onChange={(e) =>
                      handleInputChange("workEmail", e.target.value)
                    }
                    className={`border-gray-300 focus:border-[#250DAD] focus:ring-[#250DAD] ${
                      errors.workEmail ? "border-red-500" : ""
                    }`}
                    required
                  />
                  {errors.workEmail && (
                    <ErrorMessage message={errors.workEmail} />
                  )}
                </div>

                {/* Company Name */}
                <div className="space-y-2">
                  <Label
                    htmlFor="companyName"
                    className="text-[#080808] font-[Lufga] font-medium"
                  >
                    Company Name *
                  </Label>
                  <Input
                    id="companyName"
                    type="text"
                    placeholder="Enter your company name"
                    value={formData.companyName}
                    onChange={(e) =>
                      handleInputChange("companyName", e.target.value)
                    }
                    className={`border-gray-300 focus:border-[#250DAD] focus:ring-[#250DAD] ${
                      errors.companyName ? "border-red-500" : ""
                    }`}
                    required
                  />
                  {errors.companyName && (
                    <ErrorMessage message={errors.companyName} />
                  )}
                </div>

                {/* Website */}
                <div className="space-y-2">
                  <Label
                    htmlFor="website"
                    className="text-[#080808] font-[Lufga] font-medium"
                  >
                    Company Website
                  </Label>
                  <Input
                    id="website"
                    type="url"
                    placeholder="https://yourcompany.com"
                    value={formData.website}
                    onChange={(e) =>
                      handleInputChange("website", e.target.value)
                    }
                    className={`border-gray-300 focus:border-[#250DAD] focus:ring-[#250DAD] ${
                      errors.website ? "border-red-500" : ""
                    }`}
                  />
                  {errors.website && <ErrorMessage message={errors.website} />}
                </div>

                {/* Business Needs */}
                <div className="space-y-2">
                  <Label
                    htmlFor="businessNeeds"
                    className="text-[#080808] font-[Lufga] font-medium"
                  >
                    What are your specific business needs?
                  </Label>
                  <Textarea
                    id="businessNeeds"
                    placeholder="Tell us about your current challenges with digital content verification, fraud prevention, or security concerns..."
                    value={formData.businessNeeds}
                    onChange={(e) =>
                      handleInputChange("businessNeeds", e.target.value)
                    }
                    className="border-gray-300 focus:border-[#250DAD] focus:ring-[#250DAD] min-h-[120px] resize-none"
                    rows={5}
                  />
                </div>

                {/* Submit Error */}
                {errors.submit && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <ErrorMessage message={errors.submit} />
                  </div>
                )}

                {/* Submit Button */}
                <div className="pt-6 flex justify-center">
                  <Button
                    type="submit"
                    className="bg-[#250DAD] hover:bg-blue-700 text-white font-[Lufga] font-medium py-3 px-8 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Submitting...</span>
                      </div>
                    ) : (
                      "Get Integration Details"
                    )}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#10064C] text-white py-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <img
                  src={Logo}
                  alt="SafeguardMedia Logo"
                  className="w-10 h-10 rounded-full"
                />
                <span className="font-semibold text-lg">SafeguardMedia</span>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-gray-300">Company</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="/about"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    About Us
                  </a>
                </li>

                <li>
                  <a
                    href="/get-started"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="/get-started"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Resources
                  </a>
                </li>
              </ul>
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
