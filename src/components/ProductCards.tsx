import { useState, useEffect } from "react";
import {
  CreditCard,
  Clock,
  TrendingUp,
  Users,
  Shield,
  Star,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const ProductCards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const products = [
    {
      icon: CreditCard,
      title: "Instant Credit Line",
      description:
        "Get immediate access to credit lines up to ₹50L with minimal documentation and instant approval.",
      gradient: "from-primary-blue to-light-blue",
    },
    {
      icon: Clock,
      title: "1-Day Payment",
      description:
        "Receive payments in just 24 hours. No more waiting weeks for your money to clear.",
      gradient: "from-primary-emerald to-brand-teal",
    },
    {
      icon: TrendingUp,
      title: "Supply Chain Finance",
      description:
        "Optimize your supply chain with smart financing solutions and automated workflows.",
      gradient: "from-primary-gold to-brand-orange",
    },
    {
      icon: Users,
      title: "MSME Empowerment",
      description:
        "Join 63M+ MSMEs who have transformed their business with our comprehensive solutions.",
      gradient: "from-primary-blue to-primary-emerald",
    },
    {
      icon: Shield,
      title: "Secure Transactions",
      description:
        "Bank-grade security with RBI compliance ensures your transactions are always protected.",
      gradient: "from-brand-teal to-primary-emerald",
    },
    {
      icon: Star,
      title: "Smart Analytics",
      description:
        "Get real-time insights and analytics to make informed business decisions and track growth.",
      gradient: "from-primary-gold to-primary-blue",
    },
  ];

  // Auto-rotation effect
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % products.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, products.length]);

  const nextCard = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length);
    setIsAutoPlaying(false);
  };

  const prevCard = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
    setIsAutoPlaying(false);
  };

  const getVisibleCards = () => {
    const cards = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % products.length;
      cards.push({ ...products[index], originalIndex: index });
    }
    return cards;
  };

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-dark-gray mb-6">
            Our{" "}
            <span className="bg-blue-700 bg-clip-text text-transparent">
              Products
            </span>
          </h2>
          <p className="text-xl text-medium-gray max-w-3xl mx-auto">
            Comprehensive financial solutions designed to empower MSMEs with
            cutting-edge technology and seamless user experience.
          </p>
        </div>

        {/* Mobile Carousel */}
        <div className="block lg:hidden relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {products.map((product, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="flex items-center justify-center mt-8 space-x-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevCard}
              className="w-10 h-10 rounded-full"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            <div className="flex space-x-2">
              {products.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                    index === currentIndex ? "bg-primary-blue" : "bg-light-gray"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextCard}
              className="w-10 h-10 rounded-full"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:block">
          <div className="grid lg:grid-cols-3 gap-8">
            {getVisibleCards().map((product, index) => (
              <ProductCard
                key={`${product.originalIndex}-${index}`}
                product={product}
              />
            ))}
          </div>

          {/* Desktop Navigation */}
          <div className="flex items-center justify-center mt-12 space-x-6">
            <Button
              variant="outline"
              onClick={prevCard}
              className="px-6 py-3 rounded-full font-semibold"
            >
              <ChevronLeft className="mr-2 h-5 w-5" />
              Previous
            </Button>

            <div className="flex space-x-3">
              {products.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index);
                    setIsAutoPlaying(false);
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentIndex
                      ? "bg-primary-blue scale-125"
                      : "bg-light-gray hover:bg-medium-gray"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              onClick={nextCard}
              className="px-6 py-3 rounded-full font-semibold"
            >
              Next
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProductCard = ({ product }: { product: any }) => {
  const IconComponent = product.icon;

  return (
    <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-light-gray hover:border-primary-blue/20">
      {/* Icon Container */}
      <div
        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${product.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
      >
        <IconComponent className="h-8 w-8 text-white" />
      </div>

      {/* Content */}
      <h3 className="text-2xl font-bold text-dark-gray mb-4 group-hover:text-primary-blue transition-colors duration-300">
        {product.title}
      </h3>

      <p className="text-medium-gray leading-relaxed mb-6">
        {product.description}
      </p>

      {/* CTA */}
      <div className="flex items-center text-primary-blue font-semibold group-hover:text-primary-emerald transition-colors duration-300">
        Learn More
        <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
      </div>
    </div>
  );
};

export default ProductCards;
