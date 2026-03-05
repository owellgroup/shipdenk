import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";
import { makes, types } from "@/data/cars";
import FeaturedSlider from "@/components/FeaturedSlider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CarCard from "@/components/CarCard";
import { cars } from "@/data/cars";

const Index = () => {
  const navigate = useNavigate();
  const [selectedMake, setSelectedMake] = useState("All");
  const [selectedType, setSelectedType] = useState("All");

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (selectedMake !== "All") params.set("make", selectedMake);
    if (selectedType !== "All") params.set("type", selectedType);
    navigate(`/inventory?${params.toString()}`);
  };

  const latestCars = cars.slice(0, 6);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-24 md:pt-32 pb-16 px-4">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Search */}
          <div className="animate-fade-up">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-4">
              Find Your Perfect{" "}
              <span className="text-primary">Car</span> Today
            </h1>
            <p className="text-muted-foreground text-lg mb-8 max-w-md">
              Browse our curated selection of quality pre-owned vehicles. Every car inspected, every drive guaranteed.
            </p>

            <div className="glass-card rounded-xl p-6 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Car Make</label>
                  <select
                    value={selectedMake}
                    onChange={(e) => setSelectedMake(e.target.value)}
                    className="w-full bg-secondary text-foreground rounded-lg px-4 py-3 text-sm border border-border focus:outline-none focus:ring-2 focus:ring-primary/50"
                  >
                    {makes.map((m) => (
                      <option key={m} value={m}>{m === "All" ? "All Makes" : m}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Car Type</label>
                  <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="w-full bg-secondary text-foreground rounded-lg px-4 py-3 text-sm border border-border focus:outline-none focus:ring-2 focus:ring-primary/50"
                  >
                    {types.map((t) => (
                      <option key={t} value={t}>{t === "All" ? "All Types" : t}</option>
                    ))}
                  </select>
                </div>
              </div>
              <button
                onClick={handleSearch}
                className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground font-semibold py-3 rounded-lg hover:opacity-90 transition-opacity"
              >
                <Search className="w-4 h-4" />
                Search Cars
              </button>
            </div>
          </div>

          {/* Right - Slider */}
          <div className="animate-slide-in">
            <FeaturedSlider />
          </div>
        </div>
      </section>

      {/* Latest Listings */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="font-display text-3xl font-bold text-foreground">Latest Arrivals</h2>
              <p className="text-muted-foreground mt-1">Fresh additions to our showroom</p>
            </div>
            <button
              onClick={() => navigate("/inventory")}
              className="text-sm font-medium text-primary hover:underline"
            >
              View All →
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestCars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="glass-card rounded-2xl p-10 md:p-16 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Drive Your Dream?
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto mb-8">
              Visit our showroom or browse online. Financing options available. Trade-ins welcome.
            </p>
            <button
              onClick={() => navigate("/inventory")}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity"
            >
              Browse Inventory
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
