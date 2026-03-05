import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CarCard from "@/components/CarCard";
import { cars, makes, types } from "@/data/cars";

const Inventory = () => {
  const [searchParams] = useSearchParams();
  const [make, setMake] = useState(searchParams.get("make") || "All");
  const [type, setType] = useState(searchParams.get("type") || "All");

  const filtered = cars.filter((car) => {
    if (make !== "All" && car.make !== make) return false;
    if (type !== "All" && car.type !== type) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-24 md:pt-28 pb-16 px-4">
        <div className="container mx-auto">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">Our Inventory</h1>
          <p className="text-muted-foreground mb-8">Browse {filtered.length} vehicles</p>

          <div className="flex flex-wrap gap-4 mb-8">
            <select value={make} onChange={(e) => setMake(e.target.value)} className="bg-secondary text-foreground rounded-lg px-4 py-2.5 text-sm border border-border">
              {makes.map((m) => <option key={m} value={m}>{m === "All" ? "All Makes" : m}</option>)}
            </select>
            <select value={type} onChange={(e) => setType(e.target.value)} className="bg-secondary text-foreground rounded-lg px-4 py-2.5 text-sm border border-border">
              {types.map((t) => <option key={t} value={t}>{t === "All" ? "All Types" : t}</option>)}
            </select>
          </div>

          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((car) => <CarCard key={car.id} car={car} />)}
            </div>
          ) : (
            <div className="text-center py-20 text-muted-foreground">
              <p className="text-lg">No vehicles match your filters.</p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Inventory;
