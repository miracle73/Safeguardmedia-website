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
import Logo from "../assets/images/SafeguardLogo4 (2).png";
import Logo2 from "../assets/images/SafeguardLogo4 (1).png";

export default function RequestDemo() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    workEmail: "",
    companyName: "",
    role: "",
    primaryUseCase: "",
    specificInterest: "",
    specificQuestion: "",
    agreeToComms: false,
    agreeToUpdates: false,
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="px-6 lg:px-12 py-6">
        <div className="flex items-center space-x-2">
          <img
            src={Logo2}
            alt="SafeguardMedia Logo"
            className="w-10 h-10 rounded-full"
          />
          <span className="text-gray-800 font-semibold text-lg">
            SafeguardMedia
          </span>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-6 lg:px-12 py-8 lg:py-16">
        <div className="max-w-2xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl lg:text-4xl font-bold text-[#080808] font-[Lufga] mb-6">
              Request a Demo
            </h1>
            <p className="text-[#080808] font-[400] font-[Lora] text-lg leading-relaxed max-w-xl mx-auto">
              See how SafeguardMedia's AI-powered platform detects deepfakes,
              verifies content, and protects your digital integrity in
              real-time.
            </p>
          </div>

          {/* Demo Request Form */}
          <Card className="border-0 shadow-sm">
            <CardContent className="p-8 lg:p-12">
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

                {/* Company Name and Your Role */}
                <div className="grid md:grid-cols-2 gap-6">
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
                  <div className="space-y-2">
                    <Label
                      htmlFor="role"
                      className="text-[#080808] font-[Lufga] font-medium"
                    >
                      Your Role
                    </Label>
                    <Input
                      id="role"
                      type="text"
                      placeholder="placeholder"
                      value={formData.role}
                      onChange={(e) =>
                        handleInputChange("role", e.target.value)
                      }
                      className="border-gray-300 focus:border-[#250DAD] focus:ring-[#250DAD]"
                      required
                    />
                  </div>
                </div>

                {/* Primary Use Case */}
                <div className="space-y-2">
                  <Label
                    htmlFor="primaryUseCase"
                    className="text-[#080808] font-[Lufga] font-medium"
                  >
                    Primary Use Case
                  </Label>
                  <Select
                    onValueChange={(value) =>
                      handleInputChange("primaryUseCase", value)
                    }
                  >
                    <SelectTrigger className="border-gray-300 focus:border-[#250DAD] w-full focus:ring-[#250DAD]">
                      <SelectValue placeholder="Select options --" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="journalism">
                        Journalism & News Verification
                      </SelectItem>
                      <SelectItem value="cybersecurity">
                        Corporate Cybersecurity
                      </SelectItem>
                      <SelectItem value="content-moderation">
                        Content Moderation
                      </SelectItem>
                      <SelectItem value="legal">Legal & Compliance</SelectItem>
                      <SelectItem value="education">
                        Education & Research
                      </SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Specific Interest */}
                <div className="space-y-2">
                  <Label
                    htmlFor="specificInterest"
                    className="text-[#080808] font-[Lufga] font-medium"
                  >
                    Specific Interest
                  </Label>
                  <Select
                    onValueChange={(value) =>
                      handleInputChange("specificInterest", value)
                    }
                  >
                    <SelectTrigger className="border-gray-300 focus:border-[#250DAD] w-full focus:ring-[#250DAD]">
                      <SelectValue placeholder="Select options --" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="deepfake-detection">
                        AI Deepfake Detection
                      </SelectItem>
                      <SelectItem value="fact-checking">
                        Real-time Fact Checking
                      </SelectItem>
                      <SelectItem value="api-integration">
                        API Integration
                      </SelectItem>
                      <SelectItem value="enterprise-solution">
                        Enterprise Solution
                      </SelectItem>
                      <SelectItem value="custom-deployment">
                        Custom Deployment
                      </SelectItem>
                      <SelectItem value="training">
                        Training & Support
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Any Specific Question */}
                <div className="space-y-2">
                  <Label
                    htmlFor="specificQuestion"
                    className="text-[#080808] font-[Lufga] font-medium"
                  >
                    Any Specific Question?
                  </Label>
                  <Textarea
                    id="specificQuestion"
                    placeholder="placeholder"
                    value={formData.specificQuestion}
                    onChange={(e) =>
                      handleInputChange("specificQuestion", e.target.value)
                    }
                    className="border-gray-300 focus:border-[#250DAD] focus:ring-[#250DAD] min-h-[120px] resize-none"
                    rows={5}
                  />
                </div>

                {/* Checkboxes */}
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="agreeToComms"
                      checked={formData.agreeToComms}
                      onCheckedChange={(checked) =>
                        handleInputChange("agreeToComms", checked as boolean)
                      }
                      className="mt-1 border-[#250DAD] data-[state=checked]:bg-[#250DAD] data-[state=checked]:border-[#250DAD]"
                    />
                    <Label
                      htmlFor="agreeToComms"
                      className="text-sm text-[#080808] font-[Lora] leading-relaxed cursor-pointer"
                    >
                      I agree to receive communications from SafeguardMedia. By
                      submitting this form, you acknowledge that SafeguardMedia
                      will process your data in accordance with our Privacy
                      Policy.
                    </Label>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="agreeToUpdates"
                      checked={formData.agreeToUpdates}
                      onCheckedChange={(checked) =>
                        handleInputChange("agreeToUpdates", checked as boolean)
                      }
                      className="mt-1 border-[#250DAD] data-[state=checked]:bg-[#250DAD] data-[state=checked]:border-[#250DAD]"
                    />
                    <Label
                      htmlFor="agreeToUpdates"
                      className="text-sm text-[#080808] font-[Lora] leading-relaxed cursor-pointer"
                    >
                      I'd like to receive occasional updates, news, and insights
                      from SafeguardMedia about digital trust and AI.
                    </Label>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-6">
                  <Button
                    type="submit"
                    className="w-full bg-[#250DAD] hover:bg-blue-700 text-white font-[Lufga] font-medium py-3 px-8 text-lg"
                    disabled={!formData.agreeToComms}
                  >
                    Request a Demo
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
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
