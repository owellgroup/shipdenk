import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cars } from "@/data/cars";
import CarCard from "./CarCard";

const featuredCars = cars.filter((c) => c.status === "Available").slice(0, 4);

const FeaturedSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % featuredCars.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-xl">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {featuredCars.map((car) => (
            <div key={car.id} className="min-w-full px-1">
              <CarCard car={car} />
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center gap-3 mt-4">
        <button
          onClick={() => setCurrent((p) => (p - 1 + featuredCars.length) % featuredCars.length)}
          className="p-2 rounded-full bg-secondary hover:bg-accent transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <div className="flex gap-2">
          {featuredCars.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all ${
                i === current ? "bg-primary w-6" : "bg-muted-foreground/30"
              }`}
            />
          ))}
        </div>
        <button
          onClick={() => setCurrent((p) => (p + 1) % featuredCars.length)}
          className="p-2 rounded-full bg-secondary hover:bg-accent transition-colors"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default FeaturedSlider;
