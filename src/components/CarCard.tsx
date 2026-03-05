import { Car } from "@/data/cars";
import { Link } from "react-router-dom";
import { Fuel, Gauge, Settings2 } from "lucide-react";

const statusClass = {
  Available: "badge-available",
  Reserved: "badge-reserved",
  Sold: "badge-sold",
};

const CarCard = ({ car }: { car: Car }) => {
  return (
    <div className="car-card-hover rounded-xl overflow-hidden bg-card border border-border group">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={car.image}
          alt={car.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <span className={`absolute top-3 right-3 text-xs font-semibold px-3 py-1 rounded-full ${statusClass[car.status]}`}>
          {car.status}
        </span>
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h3 className="font-display font-bold text-foreground text-lg leading-tight">{car.name}</h3>
            <p className="text-muted-foreground text-sm">{car.year}</p>
          </div>
          <p className="font-display font-bold text-primary text-lg whitespace-nowrap">
            N${car.price.toLocaleString()}
          </p>
        </div>

        <div className="flex items-center gap-4 mt-4 text-muted-foreground text-xs">
          <span className="flex items-center gap-1"><Gauge className="w-3.5 h-3.5" />{car.kilometers.toLocaleString()} km</span>
          <span className="flex items-center gap-1"><Fuel className="w-3.5 h-3.5" />{car.fuel}</span>
          <span className="flex items-center gap-1"><Settings2 className="w-3.5 h-3.5" />{car.transmission}</span>
        </div>

        <div className="flex gap-2 mt-4">
          <Link
            to={`/car/${car.id}`}
            className="flex-1 text-center text-sm font-medium py-2.5 rounded-lg bg-secondary text-secondary-foreground hover:bg-accent transition-colors"
          >
            View Details
          </Link>
          {car.status === "Available" && (
            <Link
              to={`/order/${car.id}`}
              className="flex-1 text-center text-sm font-medium py-2.5 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
            >
              Order Now
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default CarCard;
