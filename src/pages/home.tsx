import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import {
  //  ChevronDown,
  Menu,
  ArrowRight,
} from "lucide-react";
import HeaderImg from "../assets/images/header-img.png";
import MultiModalAnalysisImg from "../assets/images/multimodal-analysis.png";
import AccuracyImg from "../assets/images/Accuracy.png";
import WorkflowImg from "../assets/images/Workflow.png";
import JournalismWorkspaceImg from "../assets/images/Journalism.png";
import CybersecurityImg from "../assets/images/cybersecurity.png";
import PublicInfoImg from "../assets/images/publicInfo.png";
import FooterImg from "../assets/images/footerImage.png";
import Logo from "../assets/images/SafeguardLogo4 (2).png";
// import Logo2 from "../assets/images/SafeguardLogo4 (1).png";

export default function Home() {
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

      {/* Features Section */}
      <section className="py-16 lg:py-24 px-6 lg:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Our Flagship Solution:
                <br />
                AI Deepfake Detection.
              </h2>
              <p className="text-gray-600 mb-8 text-lg">
                Our model instantly verify your media and protect you from
                digital deception.
              </p>
              <Button
                className="bg-[#250DAD] hover:bg-blue-700 text-white"
                onClick={() => (window.location.href = "/get-started")}
              >
                Try Our DeepFake Detector
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>

            <div className="space-y-6">
              <div
                className="p-6 bg-white shadow-2xl"
                style={{ boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)" }}
              >
                {/* <CardContent className="p-0"> */}
                <div className="flex flex-col items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <img
                      src={MultiModalAnalysisImg}
                      alt="Multimodal Analysis"
                      className="w-6 h-6"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 my-2">
                      Multimodal Detection Engine
                    </h3>
                    <p className="text-gray-600">
                      Accurately define manipulated content across video, audio
                      and images using our integrated AI-powered detection
                      System designed to deliver comprehensive analysis through
                      a unified cross-modal framework.
                    </p>
                  </div>
                </div>
                {/* </CardContent> */}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-12">
            <div
              className="p-6 bg-white shadow-2xl"
              style={{ boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="flex flex-col items-start space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <img
                    src={AccuracyImg}
                    alt="Multimodal Analysis"
                    className="w-6 h-6"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 my-2">
                    High Accuracy Results
                  </h3>
                  <p className="text-gray-600">
                    Powered by AI models with a 90+ detection accuracy rate.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="p-6 bg-white shadow-2xl"
              style={{ boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="flex flex-col items-start space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <img
                    src={WorkflowImg}
                    alt="Multimodal Analysis"
                    className="w-6 h-6"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 my-2">
                    Built for Your Workflow
                  </h3>
                  <p className="text-gray-600">
                    Integrate seamlessly with our API or use our intuitive web
                    interface designed for verifiers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities Section */}
      <section className="py-16 lg:py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Core Capabilities at a Glance
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              These tools are designed to move beyond the initial question of
              authenticity and provide answers to the more profound challenges
              of accuracy and safety.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 bg-gray-50 border-0">
              <CardContent className="p-0">
                <h3 className="font-semibold text-gray-900 mb-3">
                  Deepfake Detection
                </h3>
                <p className="text-gray-600 text-sm">
                  Detects manipulated faces, lip-syncing, face-swapping,
                  expressions, and AI-generated voices in images, videos, and
                  audio files.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 bg-gray-50 border-0">
              <CardContent className="p-0">
                <h3 className="font-semibold text-gray-900 mb-3">
                  Cheapfake & Shallowfake Detection
                </h3>
                <p className="text-gray-600 text-sm">
                  Identifies low-tech edits such as speed manipulation, frame
                  splicing, miscontexting, or cropping unrelated to mislead.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 bg-gray-50 border-0">
              <CardContent className="p-0">
                <h3 className="font-semibold text-gray-900 mb-3">
                  Metadata and Geolocation Analysis
                </h3>
                <p className="text-gray-600 text-sm">
                  Extracts and analyzes metadata (e.g., EXIF data) from media
                  files to determine the original time, location, and device
                  used.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 bg-gray-50 border-0">
              <CardContent className="p-0">
                <h3 className="font-semibold text-gray-900 mb-3">
                  Real-Time Fact-Checking
                </h3>
                <p className="text-gray-600 text-sm">
                  Integrates with reputable fact-checking sources such as Google
                  Fact Check Tools, Snopes, and PolitiFact.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 bg-gray-50 border-0">
              <CardContent className="p-0">
                <h3 className="font-semibold text-gray-900 mb-3">
                  Crowdsourced Verification Portal
                </h3>
                <p className="text-gray-600 text-sm">
                  Allows verified journalists, fact-checkers, and experts to
                  annotate AI findings. Add context or citations, and vote on
                  accuracy.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 bg-gray-50 border-0">
              <CardContent className="p-0">
                <h3 className="font-semibold text-gray-900 mb-3">
                  Risk Scoring System
                </h3>
                <p className="text-gray-600 text-sm">
                  Combines multiple analysis results into a single risk score
                  indicating whether the media is likely authentic or
                  manipulated.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 bg-gray-50 border-0">
              <CardContent className="p-0">
                <h3 className="font-semibold text-gray-900 mb-3">
                  Visual Authenticity Reports
                </h3>
                <p className="text-gray-600 text-sm">
                  Generates downloadable and shareable reports showing detected
                  manipulations, metadata and provenance breakdown and more.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 bg-gray-50 border-0">
              <CardContent className="p-0">
                <h3 className="font-semibold text-gray-900 mb-3">
                  Live Detection Tool
                </h3>
                <p className="text-gray-600 text-sm">
                  A browser extension to enables seamless, on-the-fly
                  verification of viral or suspicious content as users browse
                  the internet.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Securing Channels Section */}
      <section className="py-16 lg:py-24 px-6 lg:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            <div>
              <h2 className="text-3xl lg:text-4xl text-[#080808] font-[500] font-[Lufga] font-bold text-gray-900 mb-6">
                Securing the Channels You Trust
              </h2>
            </div>
            <div>
              <p className="text-[#080808] text-lg font-[400]">
                Deepfakes are attacks on our most critical channels of
                communication, commerce, and democracy. See areas SafeguardMedia
                is deployed to protect these vital pathways from being
                compromised.
              </p>
            </div>
          </div>

          <div className="space-y-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl font-semibold text-[#080808]  mb-4">
                  Journalism & News Integrity
                </h3>
                <p className="text-[#080808] font-[400]">
                  SafeguardMedia's API automatically analyzes both video and
                  audio for signs of manipulation, providing a confidence score
                  and a detailed report showing deepfakes.
                </p>
              </div>
              <div className="relative h-48 lg:h-64 rounded-lg overflow-hidden">
                <img
                  src={JournalismWorkspaceImg}
                  alt="Journalism workspace with newspapers and devices"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="lg:order-2">
                <h3 className="text-xl font-semibold text-[#080808]  mb-4">
                  Corporate Cybersecurity & Fraud Prevention
                </h3>
                <p className="text-[#080808] font-[400]">
                  SafeguardMedia's monitors internal files for synthetic
                  artifacts of AI-generated voices and AI-powered impersonation
                  threats.
                </p>
              </div>
              <div className="relative h-48 lg:h-64 rounded-lg overflow-hidden lg:order-1">
                <img
                  src={CybersecurityImg}
                  alt="Person working on cybersecurity"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl font-semibold text-[#080808]  mb-4">
                  Safeguarding Public Information Channels
                </h3>
                <p className="text-[#080808] font-[400]">
                  Detect media-based election interference and disinformation
                </p>
              </div>
              <div className="relative h-48 lg:h-64 rounded-lg overflow-hidden">
                <img
                  src={PublicInfoImg}
                  alt="News anchor in broadcast studio"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
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
                    Protect Your Business
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
