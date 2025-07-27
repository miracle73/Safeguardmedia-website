import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import {
  Menu,
  ArrowRight,
  Target,
  Users,
  Award,
  TrendingUp,
  Zap,
  Shield,
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
import Logo from "../assets/images/SafeguardLogo3.svg";

export default function About() {
  // const values = [
  //   {
  //     icon: Target,
  //     title: "Innovation First",
  //     description:
  //       "We stay ahead of technology trends to deliver cutting-edge solutions that give you a competitive advantage.",
  //   },
  //   {
  //     icon: Users,
  //     title: "Client-Centric",
  //     description:
  //       "Your success is our priority. We work closely with you to understand your needs and exceed expectations.",
  //   },
  //   {
  //     icon: Award,
  //     title: "Quality Assured",
  //     description:
  //       "We maintain the highest standards in every project, ensuring reliable and scalable solutions.",
  //   },
  //   {
  //     icon: TrendingUp,
  //     title: "Growth Focused",
  //     description:
  //       "Our solutions are designed to scale with your business and drive sustainable growth.",
  //   },
  // ];

  const stats = [
    { number: "30+", label: "Projects Completed", icon: Zap },
    { number: "15+", label: "Satisfied Clients", icon: Users },
    { number: "24/7", label: "Support Available", icon: Target },
  ];

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
            <a
              href="/services"
              className="text-white hover:text-gray-200 transition-colors"
            >
              Our Services
            </a>
            <a
              href="/about"
              className="text-white hover:text-gray-200 transition-colors"
            >
              About Us
            </a>
            <a href="/contact">
              <Button className="bg-[#250DAD] hover:bg-blue-700 text-white">
                Contact Us
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
              Pioneering the Future of Technology
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
              We're more than just a technology company – we're your strategic
              partner in digital transformation, helping organizations harness
              the power of innovation for over 3 years.
            </p>
            <a href="/contact">
              <Button
                size="lg"
                className="bg-[#250DAD] hover:bg-blue-700 text-white px-8 py-3"
              >
                Lets build something amazing for you
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 lg:py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#080808] font-[Lufga] mb-6">
                Our Story
              </h2>
            </div>
            <div>
              <p className="text-[#080808] font-[400] font-[Lora] text-lg leading-relaxed mb-6">
                Founded with a vision to bridge the gap between complex
                technology and business success, CiphezTech Innovations has been
                at the forefront of digital transformation for over 3 years.
              </p>
              <p className="text-[#080808] font-[400] font-[Lora] text-lg leading-relaxed">
                Our team of expert engineers, designers, and strategists work
                collaboratively to deliver solutions that not only meet today's
                challenges but anticipate tomorrow's opportunities. From
                AI-powered applications to robust cloud infrastructure, we turn
                your technological vision into reality.
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
                CiphezTech Innovations empowers businesses to thrive in the
                digital age by delivering innovative technology solutions that
                automate workflows, enhance efficiency, and drive sustainable
                growth across all industries.
              </p>
            </div>

            {/* Our Vision Card */}
            <div className="p-8 bg-[#DED9FC] border-0 shadow-sm rounded-lg">
              <h3 className="text-xl font-bold text-[#080808] font-[Lufga] mb-4">
                Our Vision
              </h3>
              <p className="text-[#080808] font-[400] font-[Lora] text-base leading-relaxed">
                To be the leading catalyst for digital transformation, creating
                intelligent solutions that bridge the gap between complex
                technology and business success, making innovation accessible to
                organizations of all sizes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 lg:py-24 px-6 lg:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#10064C] rounded-3xl p-12 text-white">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4">Our Impact in Numbers</h3>
              <p className="text-blue-100 text-lg">
                These numbers represent our commitment to excellence and client
                success
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold mb-2">{stat.number}</div>
                  <div className="text-blue-100">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How We Build Solutions Section */}
      <section className="py-16 lg:py-24 px-6 lg:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#080808] font-[Lufga] mb-6">
              Why Choose CiphezTech?
            </h2>
            <p className="text-[#080808] font-[400] font-[Lora] text-lg max-w-2xl mx-auto">
              We combine technical expertise with business acumen to deliver
              solutions that truly make a difference for your organization.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Rapid Implementation */}
            <div
              className="p-8 bg-white border-0 shadow-2xl"
              style={{ boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="flex flex-col items-start mb-4">
                <img
                  src={HolisticImg}
                  alt="Rapid Implementation"
                  className=""
                />

                <h3 className="text-xl font-bold text-[#080808] mt-4 font-[Lufga]">
                  Rapid Implementation
                </h3>
              </div>
              <p className="text-[#080808] font-[400] font-[Lora] text-base leading-relaxed">
                Our agile approach ensures quick project delivery without
                compromising on quality. Get your solutions up and running
                faster with our streamlined development process.
              </p>
            </div>

            {/* Proven Expertise */}
            <div
              className="p-8 bg-white border-0 shadow-2xl"
              style={{ boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="flex flex-col items-start mb-4">
                <img src={HCDImg} alt="Proven Expertise" className="" />

                <h3 className="text-xl font-bold text-[#080808] mt-4 font-[Lufga]">
                  Proven Expertise
                </h3>
              </div>
              <p className="text-[#080808] font-[400] font-[Lora] text-base leading-relaxed">
                Our team brings years of experience in AI, cloud solutions, and
                software development across various industries, ensuring
                reliable and innovative solutions.
              </p>
            </div>

            {/* Scalable Solutions */}
            <div
              className="p-8 bg-white border-0 shadow-2xl"
              style={{ boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="flex flex-col items-start mb-4">
                <img src={EthicalImg} alt="Scalable Solutions" className="" />

                <h3 className="text-xl font-bold text-[#080808] mt-4 font-[Lufga]">
                  Scalable Solutions
                </h3>
              </div>
              <p className="text-[#080808] font-[400] font-[Lora] text-base leading-relaxed">
                Our solutions grow with your business, ensuring long-term value
                and adaptability to changing market demands while maintaining
                peak performance.
              </p>
            </div>

            {/* 24/7 Support */}
            <div
              className="p-8 bg-white border-0 shadow-2xl"
              style={{ boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="flex flex-col items-start mb-4">
                <img src={IntegratedImg} alt="24/7 Support" className="" />

                <h3 className="text-xl font-bold text-[#080808] mt-4 font-[Lufga]">
                  24/7 Support & Maintenance
                </h3>
              </div>
              <p className="text-[#080808] font-[400] font-[Lora] text-base leading-relaxed">
                Continuous support and maintenance to ensure your systems run
                smoothly and efficiently at all times, with our dedicated
                technical team always available.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Core Values Section */}
      <section className="py-16 lg:py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#080808] font-[Lufga] mb-6">
              Our Core Values
            </h2>
            <p className="text-[#080808] font-[400] font-[Lora] text-lg max-w-3xl mx-auto">
              These values guide everything we do and define how we approach
              every project, ensuring we deliver exceptional results for our
              clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Innovation First */}
            <Card className="p-8 bg-white border-0 shadow-sm">
              <CardContent className="p-0">
                <div className="flex flex-col items-center mb-4">
                  <img src={ReearchImg} alt="Innovation First" className="" />

                  <h3 className="text-xl font-bold text-[#080808] mt-4 font-[Lufga]">
                    Innovation First
                  </h3>
                </div>
                <p className="text-[#080808] font-[400] font-[Lora] text-base text-center leading-relaxed">
                  We stay ahead of technology trends to deliver cutting-edge
                  solutions that give you a competitive advantage in your
                  industry.
                </p>
              </CardContent>
            </Card>

            {/* Client-Centric */}
            <Card className="p-8 bg-white border-0 shadow-sm">
              <CardContent className="p-0">
                <div className="flex flex-col items-center mb-4">
                  <img src={PolicyImg} alt="Client-Centric" className="" />

                  <h3 className="text-xl font-bold text-[#080808] mt-4 font-[Lufga]">
                    Client-Centric Approach
                  </h3>
                </div>
                <p className="text-[#080808] font-[400] font-[Lora] text-base text-center leading-relaxed">
                  Your success is our priority. We work closely with you to
                  understand your needs and exceed expectations in every
                  project.
                </p>
              </CardContent>
            </Card>

            {/* Quality Assured */}
            <Card className="p-8 bg-white border-0 shadow-sm">
              <CardContent className="p-0">
                <div className="flex flex-col items-center mb-4">
                  <img src={OperationImg} alt="Quality Assured" className="" />

                  <h3 className="text-xl font-bold text-[#080808] mt-4 font-[Lufga]">
                    Quality Assured
                  </h3>
                </div>
                <p className="text-[#080808] font-[400] font-[Lora] text-center text-base leading-relaxed">
                  We maintain the highest standards in every project, ensuring
                  reliable and scalable solutions through rigorous testing and
                  quality control processes.
                </p>
              </CardContent>
            </Card>

            {/* Growth Focused */}
            <Card className="p-8 bg-white border-0 shadow-sm">
              <CardContent className="p-0">
                <div className="flex flex-col items-center mb-4">
                  <img src={ProductImg} alt="Growth Focused" className="" />

                  <h3 className="text-xl font-bold text-[#080808] mt-4 font-[Lufga]">
                    Growth Focused
                  </h3>
                </div>
                <p className="text-[#080808] font-[400] font-[Lora] text-center text-base leading-relaxed">
                  Our solutions are designed to scale with your business and
                  drive sustainable growth, adapting to your evolving needs and
                  market opportunities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="py-16 lg:py-24 px-6 lg:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#080808] font-[Lufga] mb-6">
              What Sets Us Apart
            </h2>
            <p className="text-[#080808] font-[400] font-[Lora] text-lg max-w-3xl mx-auto">
              Our comprehensive approach to technology solutions ensures that
              every aspect of your digital transformation is handled with
              expertise and care.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-3xl p-8 hover:bg-white hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-[#10064C] rounded-2xl flex items-center justify-center mb-6">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Rapid Implementation
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our agile approach ensures quick project delivery without
                compromising on quality. Get your solutions up and running
                faster.
              </p>
            </div>

            <div className="bg-gray-50 rounded-3xl p-8 hover:bg-white hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-[#10064C] rounded-2xl flex items-center justify-center mb-6">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Proven Expertise
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our team brings years of experience in AI, cloud solutions, and
                software development across various industries.
              </p>
            </div>

            <div className="bg-gray-50 rounded-3xl p-8 hover:bg-white hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-[#10064C] rounded-2xl flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Personalized Approach
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We take time to understand your unique challenges and tailor
                solutions that fit your specific business needs.
              </p>
            </div>

            <div className="bg-gray-50 rounded-3xl p-8 hover:bg-white hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-[#10064C] rounded-2xl flex items-center justify-center mb-6">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Scalable Solutions
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our solutions grow with your business, ensuring long-term value
                and adaptability to changing market demands.
              </p>
            </div>

            <div className="bg-gray-50 rounded-3xl p-8 hover:bg-white hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-[#10064C] rounded-2xl flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                24/7 Support
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Continuous support and maintenance to ensure your systems run
                smoothly and efficiently at all times.
              </p>
            </div>

            <div className="bg-gray-50 rounded-3xl p-8 hover:bg-white hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-[#10064C] rounded-2xl flex items-center justify-center mb-6">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Quality Assurance
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Rigorous testing and quality control processes ensure reliable,
                secure, and high-performing solutions.
              </p>
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
                Ready to Transform Your Business?
              </h2>
            </div>
            <div>
              <p className="text-[#080808] font-[400] font-[Lora] text-lg mb-8">
                At CiphezTech Innovations, we believe the best way to predict
                the future is to build it. Join our passionate team on a mission
                to ensure that technology is a tool for growth and innovation,
                not complexity and confusion.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/contact">
                  <Button
                    size="lg"
                    className="bg-[#250DAD] hover:bg-blue-700 text-white"
                  >
                    Reach out today
                  </Button>
                </a>
              </div>
            </div>
          </div>

          <div className="relative h-64 lg:h-96 rounded-xl overflow-hidden">
            <img
              src={FooterImg}
              alt="CiphezTech team collaborating on innovative solutions"
              className="w-full h-full object-cover"
            />
          </div>
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
                  <div className="text-gray-400">Software Development</div>
                </li>
                <li>
                  <div className="text-gray-400">Cloud Infrastructure</div>
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
