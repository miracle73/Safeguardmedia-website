import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Menu, ArrowRight, Zap, Rocket, Shield, Star } from "lucide-react";
import HeaderImg from "../assets/images/header-img.png";
// import MultiModalAnalysisImg from "../assets/images/multimodal-analysis.png";
// import AccuracyImg from "../assets/images/Accuracy.png";
// import WorkflowImg from "../assets/images/Workflow.png";
import JournalismWorkspaceImg from "../assets/images/Journalism.png";
import CybersecurityImg from "../assets/images/cybersecurity.png";
import PublicInfoImg from "../assets/images/publicInfo.png";
import FooterImg from "../assets/images/footerImage.png";
import Logo from "../assets/images/SafeguardLogo3.svg";

export default function Home() {
  const services = [
    {
      icon: Rocket,
      title: "AI & Machine Learning",
      description:
        "Custom AI solutions that automate workflows and provide intelligent insights for your business",
    },
    {
      icon: Shield,
      title: "Software Development & Business Transformation",
      description:
        "Custom software applications and digital transformation strategies that modernize your operations",
    },
    {
      icon: Zap,
      title: "Cloud Infrastructure",
      description:
        "Scalable cloud solutions and DevOps services that grow with your business needs",
    },
  ];

  const testimonials = [
    {
      name: "James Okafor",
      role: "Managing Director, TechFlow Solutions",
      content:
        "CiphezTech helped us migrate to the cloud seamlessly. Their expertise saved us both time and money while improving our system performance.",
      rating: 5,
    },
    {
      name: "Adaora Nwosu",
      role: "Operations Manager, HealthPlus Nigeria",
      content:
        "The custom software application they built streamlined our patient management system. It has transformed how we operate and improved our efficiency significantly.",
      rating: 5,
    },
  ];

  const handleServicesNavigation = () => {
    window.location.href = "/services";
  };

  const handleContactNavigation = () => {
    window.location.href = "/contact";
  };

  // const handleEmailContact = () => {
  //   window.location.href = "mailto:cipheztechdigitalsolutions@gmail.com";
  // };

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
              Empowering Your Digital Journey
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
              At CiphezTech Innovations, we bridge the gap between complex
              technology and business success. Specializing in AI development,
              software development, and cloud solutions that drive real growth.
            </p>
            <a href="/services">
              <Button
                size="lg"
                className="bg-[#250DAD] hover:bg-blue-700 text-white px-8 py-3"
              >
                Explore Our Services
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
                Our Flagship Solutions:
                <br />
                AI & Machine Learning.
              </h2>
              <p className="text-gray-600 mb-8 text-lg">
                Custom AI solutions that automate workflows and provide
                intelligent insights for your business.
              </p>
              <Button
                className="bg-[#250DAD] hover:bg-blue-700 text-white"
                onClick={handleServicesNavigation}
              >
                Explore Solutions
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>

            <div className="space-y-6">
              <div
                className="p-6 bg-white shadow-2xl"
                style={{ boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)" }}
              >
                <div className="flex flex-col items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Rocket className="w-6 h-6 text-[#250DAD]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 my-2">
                      Advanced AI Development
                    </h3>
                    <p className="text-gray-600">
                      We create intelligent systems that learn and adapt to your
                      business needs, providing automated solutions that scale
                      with your operations while delivering measurable results.
                    </p>
                  </div>
                </div>
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
                  <Shield className="w-6 h-6 text-[#250DAD]" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 my-2">
                    Enterprise-Grade Solutions
                  </h3>
                  <p className="text-gray-600">
                    Robust software applications built with security and
                    scalability in mind.
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
                  <Zap className="w-6 h-6 text-[#250DAD]" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 my-2">
                    24/7 Support & Maintenance
                  </h3>
                  <p className="text-gray-600">
                    Continuous support and system optimization to ensure peak
                    performance of your technology solutions.
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
              What We Specialize In
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              We focus on delivering practical technology solutions that solve
              real business challenges and accelerate growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-6 bg-gray-50 border-0">
                <CardContent className="p-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </CardContent>
              </Card>
            ))}

            <Card className="p-6 bg-gray-50 border-0">
              <CardContent className="p-0">
                <h3 className="font-semibold text-gray-900 mb-3">
                  Digital Transformation
                </h3>
                <p className="text-gray-600 text-sm">
                  Comprehensive strategies to modernize your business processes
                  and improve operational efficiency.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 bg-gray-50 border-0">
              <CardContent className="p-0">
                <h3 className="font-semibold text-gray-900 mb-3">
                  System Integration
                </h3>
                <p className="text-gray-600 text-sm">
                  Seamless integration of new technologies with your existing
                  systems for optimal performance.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 bg-gray-50 border-0">
              <CardContent className="p-0">
                <h3 className="font-semibold text-gray-900 mb-3">
                  Performance Optimization
                </h3>
                <p className="text-gray-600 text-sm">
                  Continuous monitoring and optimization to ensure your systems
                  perform at their best.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 lg:py-24 px-6 lg:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              What Our Clients Say
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Hear from businesses that have transformed their operations with
              our technology solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-lg">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-6">
                  "{testimonial.content}"
                </p>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Industries Section */}
      <section className="py-16 lg:py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            <div>
              <h2 className="text-3xl lg:text-4xl text-[#080808] font-[500] font-[Lufga] font-bold text-gray-900 mb-6">
                Industries We Serve
              </h2>
            </div>
            <div>
              <p className="text-[#080808] text-lg font-[400]">
                Our technology solutions help businesses across various
                industries overcome challenges and achieve sustainable growth
                through digital transformation.
              </p>
            </div>
          </div>

          <div className="space-y-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl font-semibold text-[#080808] mb-4">
                  Healthcare & Medical Services
                </h3>
                <p className="text-[#080808] font-[400]">
                  Custom software solutions for patient management, data
                  analytics, and operational efficiency in healthcare
                  organizations.
                </p>
              </div>
              <div className="relative h-48 lg:h-64 rounded-lg overflow-hidden">
                <img
                  src={JournalismWorkspaceImg}
                  alt="Healthcare technology workspace"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="lg:order-2">
                <h3 className="text-xl font-semibold text-[#080808] mb-4">
                  Financial Services & Fintech
                </h3>
                <p className="text-[#080808] font-[400]">
                  Secure cloud infrastructure and AI-powered solutions for
                  financial institutions and fintech startups.
                </p>
              </div>
              <div className="relative h-48 lg:h-64 rounded-lg overflow-hidden lg:order-1">
                <img
                  src={CybersecurityImg}
                  alt="Financial technology solutions"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl font-semibold text-[#080808] mb-4">
                  Manufacturing & Logistics
                </h3>
                <p className="text-[#080808] font-[400]">
                  IoT solutions and process automation for manufacturing and
                  supply chain optimization.
                </p>
              </div>
              <div className="relative h-48 lg:h-64 rounded-lg overflow-hidden">
                <img
                  src={PublicInfoImg}
                  alt="Manufacturing and logistics technology"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#080808] font-[Lufga] mb-6">
                Ready to Scale Your Business?
              </h2>
            </div>
            <div>
              <p className="text-[#080808] font-[400] font-[Lora] text-lg mb-8">
                Let's discuss how our technology solutions can help you overcome
                challenges and achieve sustainable growth. Join our passionate
                team on a mission to transform businesses through innovative
                technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-[#250DAD] hover:bg-blue-700 text-white"
                  onClick={handleContactNavigation}
                >
                  Reach out today
                </Button>
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
