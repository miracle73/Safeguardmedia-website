import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Menu, ArrowRight } from "lucide-react";
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
// import Logo2 from "../assets/images/SafeguardLogo4 (1).png";

export default function Partner() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    workEmail: "",
    companyName: "",
    website: "",
    partnershipGoals: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Partnership inquiry submitted:", formData);
    // Handle form submission here
  };

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
            <a href="/request-demo">
              <Button className="bg-[#250DAD] hover:bg-blue-700 text-white">
                Request a Demo
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
        <div className="relative z-10 flex items-center justify-start px-6 lg:px-12   min-h-[calc(100vh-100px)] px-6">
          <div className="text-start max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Partner with SafeguardMedia
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8  mx-auto leading-relaxed">
              We partner with industry leaders, researchers, and mission-driven
              organizations to create a safer, more verifiable digital ecosystem
              for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* The Team Section */}
      <section className="py-16 lg:py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#080808] font-[Lufga] mb-6">
              Why Partner with SafeguardMedia?
            </h2>
            <p className="text-[#080808] font-[400] font-[Lora] text-lg max-w-3xl mx-auto">
              The fight against digital deception is too big for any one
              organization to tackle alone.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Product */}
            <Card className="p-8 bg-white border-0 shadow-sm">
              <CardContent className="p-0">
                <div className="flex flex-col items-center mb-4">
                  <img src={CuttingEdgeImg} alt="Product Icon" className="" />

                  <h3 className="text-xl font-bold text-[#080808] mt-4 font-[Lufga]">
                    Integrate Cutting-Edge AI
                  </h3>
                </div>
                <p className="text-[#080808] font-[400] font-[Lora] text-center text-base leading-relaxed">
                  Gain a competitive advantage by integrating our best-in-class
                  deepfake detection and media verification technology directly
                  into your products and services.
                </p>
              </CardContent>
            </Card>
            {/* Research */}
            <Card className="p-8 bg-white border-0 shadow-sm">
              <CardContent className="p-0">
                <div className="flex flex-col items-center mb-4">
                  <img src={BrandImg} alt="Research Icon" className="" />

                  <h3 className="text-xl font-bold text-[#080808] mt-4 font-[Lufga]">
                    Enhance Brand Trust & Safety
                  </h3>
                </div>
                <p className="text-[#080808] font-[400] font-[Lora] text-base text-center leading-relaxed">
                  Demonstrate a powerful commitment to your users' safety and
                  the integrity of your platform. Position your brand as a
                  leader in the fight for digital authenticity.
                </p>
              </CardContent>
            </Card>

            {/* Policy */}
            <Card className="p-8 bg-white border-0 shadow-sm">
              <CardContent className="p-0">
                <div className="flex flex-col items-center mb-4">
                  <img src={OpportunitiesImg} alt="Policy Icon" className="" />

                  <h3 className="text-xl font-bold text-[#080808] mt-4 font-[Lufga]">
                    Unlock New Opportunities
                  </h3>
                </div>
                <p className="text-[#080808] font-[400] font-[Lora] text-base text-center leading-relaxed">
                  Co-develop new solutions, expand your service offerings, and
                  address critical customer needs around misinformation and
                  cybersecurity threats.
                </p>
              </CardContent>
            </Card>

            {/* Operations */}
            <Card className="p-8 bg-white border-0 shadow-sm">
              <CardContent className="p-0">
                <div className="flex flex-col items-center mb-4">
                  <img src={NetworkImg} alt="Operations Icon" className="" />

                  <h3 className="text-xl font-bold text-[#080808] mt-4 font-[Lufga]">
                    Join a Network of Experts
                  </h3>
                </div>
                <p className="text-[#080808] font-[400] font-[Lora] text-base text-center leading-relaxed">
                  Collaborate with our team of experts in AI, media forensics,
                  and cybersecurity to stay ahead of emerging threats and shape
                  the future of verification technology.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Become a SafeguardMedia Partner Section */}
      <section className="py-16 lg:py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-2">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#080808] font-[Lufga] mb-6">
              Become a SafeguardMedia Partner
            </h2>
            <p className="text-[#080808] font-[400] font-[Lora] text-lg">
              A member of our partnerships team will be in touch shortly.
            </p>
          </div>

          <Card className="border-0 shadow-sm">
            <CardContent className="px-8 lg:px-12 py-4 lg:py-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* First Name and Last Name */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label
                      htmlFor="firstName"
                      className="text-[#080808] font-[Lufga] font-medium"
                    >
                      First Name
                    </Label>
                    <Input
                      id="firstName"
                      type="text"
                      placeholder="placeholder"
                      value={formData.firstName}
                      onChange={(e) =>
                        handleInputChange("firstName", e.target.value)
                      }
                      className="border-gray-300 focus:border-[#250DAD] focus:ring-[#250DAD]"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="lastName"
                      className="text-[#080808] font-[Lufga] font-medium"
                    >
                      Last Name
                    </Label>
                    <Input
                      id="lastName"
                      type="text"
                      placeholder="placeholder"
                      value={formData.lastName}
                      onChange={(e) =>
                        handleInputChange("lastName", e.target.value)
                      }
                      className="border-gray-300 focus:border-[#250DAD] focus:ring-[#250DAD]"
                      required
                    />
                  </div>
                </div>

                {/* Work Email Address */}
                <div className="space-y-2">
                  <Label
                    htmlFor="workEmail"
                    className="text-[#080808] font-[Lufga] font-medium"
                  >
                    Work Email Address
                  </Label>
                  <Input
                    id="workEmail"
                    type="email"
                    placeholder="user.example@email.com"
                    value={formData.workEmail}
                    onChange={(e) =>
                      handleInputChange("workEmail", e.target.value)
                    }
                    className="border-gray-300 focus:border-[#250DAD] focus:ring-[#250DAD]"
                    required
                  />
                </div>

                {/* Company Name */}
                <div className="space-y-2">
                  <Label
                    htmlFor="companyName"
                    className="text-[#080808] font-[Lufga] font-medium"
                  >
                    Company Name
                  </Label>
                  <Input
                    id="companyName"
                    type="text"
                    placeholder="placeholder"
                    value={formData.companyName}
                    onChange={(e) =>
                      handleInputChange("companyName", e.target.value)
                    }
                    className="border-gray-300 focus:border-[#250DAD] focus:ring-[#250DAD]"
                    required
                  />
                </div>

                {/* Website */}
                <div className="space-y-2">
                  <Label
                    htmlFor="website"
                    className="text-[#080808] font-[Lufga] font-medium"
                  >
                    Website
                  </Label>
                  <Input
                    id="website"
                    type="url"
                    placeholder="placeholder"
                    value={formData.website}
                    onChange={(e) =>
                      handleInputChange("website", e.target.value)
                    }
                    className="border-gray-300 focus:border-[#250DAD] focus:ring-[#250DAD]"
                  />
                </div>

                {/* Tell us about your partnership goals */}
                <div className="space-y-2">
                  <Label
                    htmlFor="partnershipGoals"
                    className="text-[#080808] font-[Lufga] font-medium"
                  >
                    Tell us about your partnership goals?
                  </Label>
                  <Textarea
                    id="partnershipGoals"
                    placeholder="placeholder"
                    value={formData.partnershipGoals}
                    onChange={(e) =>
                      handleInputChange("partnershipGoals", e.target.value)
                    }
                    className="border-gray-300 focus:border-[#250DAD] focus:ring-[#250DAD] min-h-[120px] resize-none"
                    rows={5}
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-6 flex justify-center">
                  <Button
                    type="submit"
                    className=" bg-[#250DAD] hover:bg-blue-700 text-white font-[Lufga] font-medium py-3 px-8 text-lg"
                  >
                    Submit Partnership Inquiry
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
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
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
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    AI Deepfake Detection
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    AI-Assisted Fact-Checking
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Cybersecurity & Fraud Prevention
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-gray-300">
                Legal & Trust
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Terms Of Service
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Compliance (GDPR, CCPA, NDPR)
                  </a>
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
