import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import {
  Menu,
  ArrowRight,
  AlertCircle,
  Check,
  Brain,
  Cloud,
  Shield,
  Smartphone,
  Code,
  Zap,
  CheckCircle,
  Star,
  Globe,
} from "lucide-react";
import HeaderImg from "../assets/images/header-img.png";
// import BrandImg from "../assets/images/Brand.png";
// import CuttingEdgeImg from "../assets/images/cutting-edge.png";
// import OpportunitiesImg from "../assets/images/Opportunities.png";
// import NetworkImg from "../assets/images/Network.png";
import { useState } from "react";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import Logo from "../assets/images/SafeguardLogo3.svg";
import { useBusinessIntegrationMutation } from "../services/apiService";

export default function Services() {
  const services = [
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description:
        "Harness the power of artificial intelligence to automate processes, gain insights, and create intelligent applications that drive business growth.",
      features: [
        "Custom AI Models",
        "Natural Language Processing",
        "Computer Vision",
        "Predictive Analytics",
        "Deep Learning Solutions",
        "AI Integration",
      ],
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50",
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description:
        "Scalable, secure, and cost-effective cloud infrastructure solutions that grow with your business and ensure maximum uptime.",
      features: [
        "Cloud Migration",
        "DevOps & CI/CD",
        "Microservices Architecture",
        "Auto-scaling Solutions",
        "Container Orchestration",
        "Cloud Security",
      ],
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
    },
    {
      icon: Globe,
      title: "Web Development",
      description:
        "Modern, responsive, and high-performance web applications built with the latest technologies to enhance your online presence.",
      features: [
        "Responsive Web Design",
        "E-commerce Solutions",
        "Content Management Systems",
        "Progressive Web Apps",
        "SEO Optimization",
        "Website Maintenance",
      ],
      gradient: "from-green-500 to-teal-500",
      bgGradient: "from-green-50 to-teal-50",
    },
    {
      icon: Code,
      title: "Custom Software Development",
      description:
        "Tailored software solutions built with cutting-edge technologies to address your unique business challenges and requirements.",
      features: [
        "Web Applications",
        "Enterprise Software",
        "API Development",
        "System Integration",
        "Legacy Modernization",
        "Performance Optimization",
      ],
      gradient: "from-indigo-500 to-purple-500",
      bgGradient: "from-indigo-50 to-purple-50",
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description:
        "Native and cross-platform mobile applications that deliver exceptional user experiences across iOS and Android platforms.",
      features: [
        "iOS Development",
        "Android Development",
        "Cross-platform Apps",
        "App Store Optimization",
        "Mobile UI/UX",
        "App Maintenance",
      ],
      gradient: "from-red-500 to-orange-500",
      bgGradient: "from-red-50 to-orange-50",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Planning",
      description:
        "We start by understanding your business needs, goals, and challenges through comprehensive consultation.",
    },
    {
      step: "02",
      title: "Strategy & Design",
      description:
        "Our team creates a detailed strategy and design blueprint tailored to your specific requirements.",
    },
    {
      step: "03",
      title: "Development & Testing",
      description:
        "We build your solution using agile methodologies with continuous testing and quality assurance.",
    },
    {
      step: "04",
      title: "Deployment & Support",
      description:
        "We deploy your solution and provide ongoing support to ensure optimal performance and growth.",
    },
  ];

  const whyChooseUs = [
    {
      icon: Star,
      title: "Proven Expertise",
      description:
        "3+ years of experience delivering successful technology solutions across various industries.",
    },
    {
      icon: Zap,
      title: "Cutting-edge Technology",
      description:
        "We use the latest technologies and best practices to ensure your solution is future-ready.",
    },
    {
      icon: Shield,
      title: "Security First",
      description:
        "Every solution is built with security as a priority, protecting your data and users.",
    },
    {
      icon: CheckCircle,
      title: "Quality Guaranteed",
      description:
        "We maintain the highest quality standards with rigorous testing and quality assurance.",
    },
  ];

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
  const [businessIntegration] = useBusinessIntegrationMutation();

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
      // Call the actual API instead of simulating
      const response = await businessIntegration({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.workEmail, // Note: API expects 'email', your form has 'workEmail'
        companyName: formData.companyName,
        companyWebsite: formData.website, // Note: API expects 'companyWebsite', your form has 'website'
        businessNeeds: formData.businessNeeds,
      }).unwrap();

      console.log("Service inquiry submitted successfully:", response);

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

  const handleContactNavigation = () => {
    document
      .getElementById("consultation-form")
      ?.scrollIntoView({ behavior: "smooth" });
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
          Service consultation request submitted successfully!
        </span>
      </div>
      <p className="text-green-700 text-sm mt-2">
        We'll contact you within 24 hours to discuss your project requirements.
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
              alt="CiphezTech Logo"
              className="w-10 h-10 rounded-full"
            />
            <span className="text-white font-semibold text-lg">
              CiphezTech Innovations
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Button
              className="bg-[#250DAD] hover:bg-blue-700 text-white"
              onClick={() =>
                document
                  .getElementById("consultation-form")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Schedule Consultation
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
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
              Comprehensive Tech Solutions
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
              We offer a full spectrum of technology services designed to
              accelerate your digital transformation and drive sustainable
              business growth through innovative AI, cloud, and software
              solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 lg:py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#080808] font-[Lufga] mb-6">
              Our Core Services
            </h2>
            <p className="text-[#080808] font-[400] font-[Lora] text-lg max-w-3xl mx-auto">
              From AI-powered solutions to cloud infrastructure, we provide
              comprehensive technology services that transform businesses and
              drive innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.slice(0, 3).map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div
                  className={`w-16 h-16 bg-[#10064C] ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon className="h-8 w-8 text-white" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center space-x-3"
                    >
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-6">
                  <button
                    onClick={handleContactNavigation}
                    className={`group/btn w-full bg-[#10064C] ${service.gradient} text-white px-6 py-3 rounded-xl font-medium hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2`}
                  >
                    <span>Get Started</span>
                    <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.slice(3).map((service, index) => (
              <div
                key={index + 3}
                className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div
                  className={`w-16 h-16 bg-[#10064C] ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon className="h-8 w-8 text-white" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center space-x-3"
                    >
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-6">
                  <button
                    onClick={handleContactNavigation}
                    className={`group/btn w-full bg-[#10064C] ${service.gradient} text-white px-6 py-3 rounded-xl font-medium hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2`}
                  >
                    <span>Get Started</span>
                    <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 lg:py-24 px-6 lg:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#080808] font-[Lufga] mb-6">
              Our Process
            </h2>
            <p className="text-[#080808] font-[400] font-[Lora] text-lg max-w-3xl mx-auto">
              We follow a proven methodology to ensure successful project
              delivery and client satisfaction.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 lg:py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#080808] font-[Lufga] mb-6">
              Why Choose CiphezTech?
            </h2>
            <p className="text-[#080808] font-[400] font-[Lora] text-lg max-w-3xl mx-auto">
              We combine technical expertise with business acumen to deliver
              solutions that drive real results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <Card key={index} className="p-8 bg-white border-0 shadow-sm">
                <CardContent className="p-0">
                  <div className="flex flex-col items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <item.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-bold text-[#080808] mt-4 font-[Lufga]">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-[#080808] font-[400] font-[Lora] text-center text-sm leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-16 lg:py-24 px-6 lg:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#080808] font-[Lufga] mb-6">
              Industries We Serve
            </h2>
            <p className="text-[#080808] font-[400] font-[Lora] text-lg max-w-3xl mx-auto">
              Our technology solutions help businesses across various industries
              overcome challenges and achieve sustainable growth.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 bg-white border-0 shadow-sm">
              <CardContent className="p-0">
                <h3 className="text-lg font-bold text-[#080808] mb-3 font-[Lufga]">
                  Healthcare & Medical Services
                </h3>
                <p className="text-[#080808] font-[400] font-[Lora] text-sm leading-relaxed">
                  Custom software solutions for patient management, data
                  analytics, and operational efficiency in healthcare
                  organizations.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 bg-white border-0 shadow-sm">
              <CardContent className="p-0">
                <h3 className="text-lg font-bold text-[#080808] mb-3 font-[Lufga]">
                  Financial Services & Fintech
                </h3>
                <p className="text-[#080808] font-[400] font-[Lora] text-sm leading-relaxed">
                  Secure cloud infrastructure and AI-powered solutions for
                  financial institutions and fintech startups.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 bg-white border-0 shadow-sm">
              <CardContent className="p-0">
                <h3 className="text-lg font-bold text-[#080808] mb-3 font-[Lufga]">
                  E-commerce & Retail
                </h3>
                <p className="text-[#080808] font-[400] font-[Lora] text-sm leading-relaxed">
                  Modern web applications and mobile solutions that enhance
                  customer experience and drive online sales.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 bg-white border-0 shadow-sm">
              <CardContent className="p-0">
                <h3 className="text-lg font-bold text-[#080808] mb-3 font-[Lufga]">
                  Manufacturing & Logistics
                </h3>
                <p className="text-[#080808] font-[400] font-[Lora] text-sm leading-relaxed">
                  IoT solutions and process automation for manufacturing and
                  supply chain optimization.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 bg-white border-0 shadow-sm">
              <CardContent className="p-0">
                <h3 className="text-lg font-bold text-[#080808] mb-3 font-[Lufga]">
                  Education & Training
                </h3>
                <p className="text-[#080808] font-[400] font-[Lora] text-sm leading-relaxed">
                  Learning management systems and educational platforms that
                  enhance teaching and learning experiences.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 bg-white border-0 shadow-sm">
              <CardContent className="p-0">
                <h3 className="text-lg font-bold text-[#080808] mb-3 font-[Lufga]">
                  Startups & Enterprises
                </h3>
                <p className="text-[#080808] font-[400] font-[Lora] text-sm leading-relaxed">
                  Scalable solutions that grow with your business, from MVP
                  development to enterprise-grade systems.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Consultation Form Section */}
      <section
        id="consultation-form"
        className="py-16 lg:py-24 px-6 lg:px-12 bg-white"
      >
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#080808] font-[Lufga] mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-[#080808] font-[400] font-[Lora] text-lg">
              Let's discuss your project requirements and create a custom
              solution that drives your business forward.
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
                    What are your specific project requirements?
                  </Label>
                  <Textarea
                    id="businessNeeds"
                    placeholder="Tell us about your technology challenges, project goals, or specific services you're interested in..."
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
                      "Schedule Consultation"
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
