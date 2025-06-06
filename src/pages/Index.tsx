import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ProductCards from "@/components/ProductCards";
import TrustSignals from "@/components/TrustSignals";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-brand-background font-inter">
      <Navigation />
      <main>
        <Hero />
        <ProductCards />
        <TrustSignals />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
