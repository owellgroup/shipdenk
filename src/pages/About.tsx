import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <div className="pt-24 md:pt-28 pb-16 px-4">
      <div className="container mx-auto max-w-3xl">
        <h1 className="font-display text-4xl font-bold text-foreground mb-4">About Shipdenk</h1>
        <p className="text-muted-foreground text-lg leading-relaxed mb-6">
          Shipdenk is a trusted pre-owned vehicle dealership based in Windhoek, Namibia. We specialize in sourcing quality German and Japanese vehicles, carefully inspected and competitively priced.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Our mission is simple: help you find the perfect car at a fair price. Whether you're looking for a fuel-efficient daily driver or a premium sedan, our curated inventory has something for every budget and lifestyle.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Visit our showroom to experience the vehicles in person, or browse our online inventory from the comfort of your home. We're here to make your car buying journey smooth and enjoyable.
        </p>
      </div>
    </div>
    <Footer />
  </div>
);

export default About;
