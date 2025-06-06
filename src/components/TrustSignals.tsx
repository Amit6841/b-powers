import { Shield, Award, CheckCircle, Building } from "lucide-react";

const TrustSignals = () => {
  const trustItems = [
    {
      icon: Building,
      title: "Startup India",
      subtitle: "Recognized",
      description: "Government of India recognized startup",
      bgColor: "bg-gradient-to-br from-orange-50 to-red-50",
      iconColor: "text-orange-600",
    },
    {
      icon: Building,
      title: "ICICI Bank",
      subtitle: "Partnership",
      description: "Banking partner for secure transactions",
      bgColor: "bg-gradient-to-br from-blue-50 to-indigo-50",
      iconColor: "text-blue-600",
    },
    {
      icon: Shield,
      title: "RBI Approved",
      subtitle: "Regulated",
      description: "Reserve Bank of India compliance",
      bgColor: "bg-gradient-to-br from-green-50 to-emerald-50",
      iconColor: "text-green-600",
    },
    {
      icon: Award,
      title: "ISO Certified",
      subtitle: "Quality Assured",
      description: "International standards certification",
      bgColor: "bg-gradient-to-br from-purple-50 to-violet-50",
      iconColor: "text-purple-600",
    },
  ];

  return (
    <section className="py-20 bg-brand-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-dark-gray mb-4">
            Trusted by{" "}
            <span className="bg-gradient-to-r from-primary-blue to-primary-emerald bg-clip-text text-transparent">
              Industry Leaders
            </span>
          </h2>
          <p className="text-lg text-medium-gray max-w-2xl mx-auto">
            Our partnerships and certifications ensure the highest standards of
            security, compliance, and reliability.
          </p>
        </div>

        {/* Trust Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {trustItems.map((item, index) => (
            <TrustCard key={index} item={item} />
          ))}
        </div>

        {/* Additional Trust Indicators */}
        <div className="mt-16 pt-16 border-t border-light-gray">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary-blue">99.9%</div>
              <div className="text-sm text-medium-gray font-medium">Uptime</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary-emerald">
                256-bit
              </div>
              <div className="text-sm text-medium-gray font-medium">
                SSL Encryption
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary-gold">24/7</div>
              <div className="text-sm text-medium-gray font-medium">
                Support
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-brand-teal">SOC 2</div>
              <div className="text-sm text-medium-gray font-medium">
                Compliant
              </div>
            </div>
          </div>
        </div>

        {/* Security Badges */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-6 p-6 bg-white rounded-2xl shadow-lg">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <span className="text-sm font-medium text-dark-gray">
                Bank Grade Security
              </span>
            </div>
            <div className="w-px h-6 bg-light-gray"></div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <span className="text-sm font-medium text-dark-gray">
                GDPR Compliant
              </span>
            </div>
            <div className="w-px h-6 bg-light-gray"></div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <span className="text-sm font-medium text-dark-gray">
                PCI DSS Certified
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const TrustCard = ({ item }: { item: any }) => {
  const IconComponent = item.icon;

  return (
    <div className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-light-gray hover:border-primary-blue/20 hover:-translate-y-1">
      {/* Icon Container */}
      <div
        className={`w-16 h-16 rounded-xl ${item.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
      >
        <IconComponent className={`h-8 w-8 ${item.iconColor}`} />
      </div>

      {/* Content */}
      <div className="space-y-2">
        <h3 className="font-bold text-dark-gray text-lg group-hover:text-primary-blue transition-colors duration-300">
          {item.title}
        </h3>
        <p className="text-primary-blue font-semibold text-sm">
          {item.subtitle}
        </p>
        <p className="text-medium-gray text-sm leading-relaxed">
          {item.description}
        </p>
      </div>

      {/* Hover Effect Indicator */}
      <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="w-8 h-1 bg-gradient-to-r from-primary-blue to-primary-emerald rounded-full"></div>
      </div>
    </div>
  );
};

export default TrustSignals;
