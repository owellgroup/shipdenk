import { useParams, Link } from "react-router-dom";
import { cars } from "@/data/cars";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, Fuel, Gauge, Settings2, Calendar } from "lucide-react";

const statusClass: Record<string, string> = {
  Available: "badge-available",
  Reserved: "badge-reserved",
  Sold: "badge-sold",
};

const CarDetail = () => {
  const { id } = useParams();
  const car = cars.find((c) => c.id === id);

  if (!car) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Car not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-24 md:pt-28 pb-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <Link to="/inventory" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Inventory
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Image */}
            <div className="rounded-xl overflow-hidden aspect-[4/3]">
              <img src={car.image} alt={car.name} className="w-full h-full object-cover" />
            </div>

            {/* Info */}
            <div>
              <div className="flex items-start justify-between mb-2">
                <h1 className="font-display text-3xl font-bold text-foreground">{car.name}</h1>
                <span className={`text-xs font-semibold px-3 py-1 rounded-full ${statusClass[car.status]}`}>{car.status}</span>
              </div>
              <p className="font-display text-2xl font-bold text-primary mb-6">N${car.price.toLocaleString()}</p>

              <p className="text-muted-foreground mb-6">{car.description}</p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: Gauge, label: "Kilometers", value: `${car.kilometers.toLocaleString()} km` },
                  { icon: Fuel, label: "Fuel", value: car.fuel },
                  { icon: Settings2, label: "Transmission", value: car.transmission },
                  { icon: Calendar, label: "Year", value: car.year.toString() },
                ].map((spec) => (
                  <div key={spec.label} className="bg-secondary rounded-lg p-4">
                    <spec.icon className="w-4 h-4 text-primary mb-1" />
                    <p className="text-xs text-muted-foreground">{spec.label}</p>
                    <p className="text-sm font-semibold text-foreground">{spec.value}</p>
                  </div>
                ))}
              </div>

              <div className="flex gap-3">
                {car.status === "Available" && (
                  <Link
                    to={`/order/${car.id}`}
                    className="flex-1 text-center font-semibold py-3 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
                  >
                    Order Now
                  </Link>
                )}
                <Link
                  to="/inventory"
                  className="flex-1 text-center font-semibold py-3 rounded-lg bg-secondary text-secondary-foreground hover:bg-accent transition-colors"
                >
                  Browse More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CarDetail;
