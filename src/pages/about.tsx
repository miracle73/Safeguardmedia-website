import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import {
  //  ChevronDown,
  Menu,
  ArrowRight,
} from "lucide-react";
import HeaderImg from "../assets/images/header-img.png";
import IntegratedImg from "../assets/images/Integrated.png";
import HCDImg from "../assets/images/HCD.png";
import HolisticImg from "../assets/images/HolisticDetection.png";
import EthicalImg from "../assets/images/Ethical.png";
import FooterImg from "../assets/images/footerImage.png";
import ProductImg from "../assets/images/Product.png";
import ReearchImg from "../assets/images/Research.png";
import PolicyImg from "../assets/images/Policy.png";
import OperationImg from "../assets/images/Operations.png";
import Logo from "../assets/images/SafeguardLogo4 (2).png";
// import Logo2 from "../assets/images/SafeguardLogo4 (1).png";

export default function About() {
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
            {/* <div className="flex items-center space-x-1 text-white cursor-pointer">
              <span>Solutions</span>
              <ChevronDown className="w-4 h-4" />
            </div>
            <div className="flex items-center space-x-1 text-white cursor-pointer">
              <span>Industries</span>
              <ChevronDown className="w-4 h-4" />
            </div> */}
            <a
              href="/integration"
              className="text-white hover:text-gray-200 transition-colors"
            >
              Business Integration
            </a>
            <a
              href="/about"
              className="text-white hover:text-gray-200 transition-colors"
            >
              About Us
            </a>
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
        <div className="relative z-10 flex items-center justify-center min-h-[calc(100vh-100px)] px-6">
          <div className="text-center max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              The Standard for Digital Trust
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
              Arm your organization with the industry's most comprehensive AI
              suite to instantly detect deepfakes, verify multimedia content,
              and protect your assets from digital fraud.
            </p>
            <a href="/get-started">
              <Button
                size="lg"
                className="bg-[#250DAD] hover:bg-blue-700 text-white px-8 py-3"
              >
                Get Started Free
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Our Founding Story Section */}
      <section className="py-16 lg:py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#080808] font-[Lufga] mb-6">
                Our Founding Story
              </h2>
            </div>
            <div>
              <p className="text-[#080808] font-[400] font-[Lora] text-lg leading-relaxed">
                As AI grew more powerfully, so also the profound challenge of
                using the same AI to create deceptions. SafeguardMedia's purpose
                is to provide a single source of clarity in a world of digital
                noise, creating the tools necessary to verify authenticity,
                validate accuracy, and defend against the threats of a synthetic
                future.
              </p>
            </div>
          </div>

          {/* Mission and Vision Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Our Mission Card */}
            <div className="p-8 bg-[#FFE0D6] border-0 shadow-sm rounded-lg">
              <h3 className="text-xl font-bold text-[#080808] font-[Lufga] mb-4">
                Our Mission
              </h3>
              <p className="text-[#080808] font-[400] font-[Lora] text-base leading-relaxed">
                SafeguardMedia empowers individuals, journalists, and
                institutions to detect, analyze, and verify manipulated digital
                content through artificial intelligence and real-time
                fact-checking technologies.
              </p>
            </div>

            {/* Our Vision Card */}
            <div className="p-8 bg-[#DED9FC] border-0 shadow-sm rounded-lg">
              <h3 className="text-xl font-bold text-[#080808] font-[Lufga] mb-4">
                Our Vision
              </h3>
              <p className="text-[#080808] font-[400] font-[Lora] text-base leading-relaxed">
                To restore trust in digital media by enabling users to verify
                the authenticity of the content they consume and share instantly
                and accurately.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How We're Building the Solution Section */}
      <section className="py-16 lg:py-24 px-6 lg:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#080808] font-[Lufga] mb-6">
              How We're Building the Solution
            </h2>
            <p className="text-[#080808] font-[400] font-[Lora] text-lg max-w-2xl mx-auto">
              Our mission is not just to see the truth, but to make it
              verifiable for everyone.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Holistic Detection */}
            <div
              className="p-8 bg-white border-0 shadow-2xl"
              style={{ boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="flex flex-col items-start mb-4">
                <img src={HolisticImg} alt="Holistic Detection" className="" />

                <h3 className="text-xl font-bold text-[#080808] mt-4 font-[Lufga]">
                  Holistic Detection
                </h3>
              </div>
              <p className="text-[#080808] font-[400] font-[Lora] text-base leading-relaxed">
                Our tools uniquely detect manipulation across image, video, and
                audio, providing a comprehensive analysis.
              </p>
            </div>

            {/* Human-Centric Design */}
            <div
              className="p-8 bg-white border-0 shadow-2xl"
              style={{ boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="flex flex-col items-start mb-4">
                <img src={HCDImg} alt="Human-Centric Design" className="" />

                <h3 className="text-xl font-bold text-[#080808] mt-4 font-[Lufga]">
                  Human-Centric Design
                </h3>
              </div>
              <p className="text-[#080808] font-[400] font-[Lora] text-base leading-relaxed">
                Designed with intuitive workflows for journalists, creators, and
                cybersecurity teams who need clear results without technical
                barriers.
              </p>
            </div>

            {/* Ethical by Design */}
            <div
              className="p-8 bg-white border-0 shadow-2xl"
              style={{ boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="flex flex-col items-start mb-4">
                <img src={EthicalImg} alt="Ethical by Design" className="" />

                <h3 className="text-xl font-bold text-[#080808] mt-4 font-[Lufga]">
                  Ethical by Design
                </h3>
              </div>
              <p className="text-[#080808] font-[400] font-[Lora] text-base leading-relaxed">
                We prioritize your privacy. With compliance to NDPR, CCPA, and
                GDPR, ensuring auditability and data protection.
              </p>
            </div>

            {/* Integrated Cyber Defense */}
            <div
              className="p-8 bg-white border-0 shadow-2xl"
              style={{ boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="flex flex-col items-start mb-4">
                <img
                  src={IntegratedImg}
                  alt="Integrated Cyber Defense"
                  className=""
                />

                <h3 className="text-xl font-bold text-[#080808] mt-4 font-[Lufga]">
                  Integrated Cyber Defense
                </h3>
              </div>
              <p className="text-[#080808] font-[400] font-[Lora] text-base leading-relaxed">
                Our solutions support incident response, voice fraud detection,
                and identity protection, addressing cyber risk contexts beyond
                journalism.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Team Section */}
      <section className="py-16 lg:py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#080808] font-[Lufga] mb-6">
              The Team
            </h2>
            <p className="text-[#080808] font-[400] font-[Lora] text-lg max-w-3xl mx-auto">
              SafeguardMedia's mission is driven by a multidisciplinary team,
              each bringing specialized expertise to the complex challenges of
              deepfake detection and digital content integrity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Research */}
            <Card className="p-8 bg-white border-0 shadow-sm">
              <CardContent className="p-0">
                <div className="flex flex-col items-center mb-4">
                  <img src={ReearchImg} alt="Research Icon" className="" />

                  <h3 className="text-xl font-bold text-[#080808] mt-4 font-[Lufga]">
                    Research
                  </h3>
                </div>
                <p className="text-[#080808] font-[400] font-[Lora] text-base text-center leading-relaxed">
                  We conduct advanced AI research across multimedia modalities
                  focusing on developing deepfake detection algorithms to
                  pioneering new safety research areas.
                </p>
              </CardContent>
            </Card>

            {/* Policy */}
            <Card className="p-8 bg-white border-0 shadow-sm">
              <CardContent className="p-0">
                <div className="flex flex-col items-center mb-4">
                  <img src={PolicyImg} alt="Policy Icon" className="" />

                  <h3 className="text-xl font-bold text-[#080808] mt-4 font-[Lufga]">
                    Policy
                  </h3>
                </div>
                <p className="text-[#080808] font-[400] font-[Lora] text-base text-center leading-relaxed">
                  We champion ethical AI by design, embedding compliance with
                  global privacy regulations (NDPR, CCPA, GDPR) into every layer
                  of our technology.
                </p>
              </CardContent>
            </Card>

            {/* Operations */}
            <Card className="p-8 bg-white border-0 shadow-sm">
              <CardContent className="p-0">
                <div className="flex flex-col items-center mb-4">
                  <img src={OperationImg} alt="Operations Icon" className="" />

                  <h3 className="text-xl font-bold text-[#080808] mt-4 font-[Lufga]">
                    Operations
                  </h3>
                </div>
                <p className="text-[#080808] font-[400] font-[Lora] text-base text-center leading-relaxed">
                  We build and maintain the robust infrastructure that powers
                  SafeguardMedia, ensuring seamless deployment and unwavering
                  reliability.
                </p>
              </CardContent>
            </Card>

            {/* Product */}
            <Card className="p-8 bg-white border-0 shadow-sm">
              <CardContent className="p-0">
                <div className="flex flex-col items-center mb-4">
                  <img src={ProductImg} alt="Product Icon" className="" />

                  <h3 className="text-xl font-bold text-[#080808] mt-4 font-[Lufga]">
                    Product
                  </h3>
                </div>
                <p className="text-[#080808] font-[400] font-[Lora] text-center text-base leading-relaxed">
                  We transform complex AI capabilities into intuitive,
                  user-centric solutions crafting tools that empower
                  journalists, cybersecurity teams, and content creators to
                  confidently navigate the digital landscape.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Future Section */}
      <section className="py-16 lg:py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#080808] font-[Lufga] mb-6">
                Shaping The Future of Digital Security
              </h2>
            </div>
            <div>
              <p className="text-[#080808] font-[400] font-[Lora] text-lg mb-8">
                At SafeguardMedia, we believe the best way to predict the future
                is to build it. Join our passionate team on a mission to ensure
                that AI is a tool for clarity and creativity, not deception and
                doubt.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                {/* <Button variant="outline" size="lg">
                  See Open Roles
                </Button> */}
                <a href="/integration">
                  <Button
                    size="lg"
                    className="bg-[#250DAD] hover:bg-blue-700 text-white"
                  >
                    Protect your business
                  </Button>
                </a>
              </div>
            </div>
          </div>

          <div className="relative h-64 lg:h-96 rounded-xl overflow-hidden">
            <img
              src={FooterImg}
              alt="Diverse team collaborating in modern office"
              className="w-full h-full object-cover"
            />
          </div>
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
