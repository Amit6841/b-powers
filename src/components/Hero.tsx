import { ChevronRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const stats = [
    { value: "63M+", label: "MSMEs Empowered" },
    { value: "48", label: "Days Interest-Free" },
    { value: "1", label: "Day Payments" },
    { value: "₹50L+", label: "Credit Available" },
  ];

  return (
    <section className="relative pt-24 pb-16 bg-hero-bg overflow-hidden">
      {/* Floating elements for visual appeal */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary-blue/10 rounded-full animate-bounce opacity-50"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-primary-emerald/10 rounded-full animate-pulse opacity-50"></div>
      <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-primary-gold/10 rounded-full animate-bounce opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-blue/10 text-primary-blue text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-primary-blue rounded-full mr-2 animate-pulse"></span>
              Empowering 63M+ MSMEs
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="bg-gradient-to-r from-primary-blue to-primary-emerald bg-clip-text text-transparent">
                Transform Your
              </span>
              <br />
              <span className="text-dark-gray">Supply Chain Finance</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-medium-gray mb-8 max-w-lg mx-auto lg:mx-0">
              Get 48-day interest-free credit and 1-day payments. Revolutionize
              your MSME business with smart financial solutions.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Button className="bg-hero-gradient hover:scale-105 transition-all duration-300 text-white font-semibold px-8 py-4 rounded-full text-lg shadow-lg hover:shadow-xl">
                Get Started Now
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                className="border-2 border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>
          </div>

          {/* Right Column - Stats */}
          <div className="relative">
            {/* Main stats card */}
            <div className="bg-white rounded-3xl p-8 shadow-2xl">
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="text-center p-4 rounded-2xl bg-gradient-to-br from-slate-50 to-blue-50 hover:scale-105 transition-transform duration-300"
                  >
                    <div className="text-3xl font-bold text-dark-gray mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-medium-gray font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Additional visual element */}
              <div className="mt-6 pt-6 border-t border-light-gray">
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-3 h-3 bg-primary-blue rounded-full animate-pulse"></div>
                  <div className="w-3 h-3 bg-primary-emerald rounded-full animate-pulse delay-100"></div>
                  <div className="w-3 h-3 bg-primary-gold rounded-full animate-pulse delay-200"></div>
                </div>
                <p className="text-center text-sm text-medium-gray mt-2 font-medium">
                  Trusted by thousands of businesses
                </p>
              </div>
            </div>

            {/* Decorative gradient background */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary-blue/20 to-primary-emerald/20 rounded-3xl -z-10 transform rotate-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
