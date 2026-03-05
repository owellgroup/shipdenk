import poloGold from "@/assets/cars/polo-gold.jpeg";
import poloRed from "@/assets/cars/polo-red.jpeg";
import mercedesBlack from "@/assets/cars/mercedes-black.jpeg";
import golfSilver from "@/assets/cars/golf-silver.jpeg";
import bmwWhite from "@/assets/cars/bmw-white.jpeg";
import bmwBlack from "@/assets/cars/bmw-black.jpeg";
import audiQ3 from "@/assets/cars/audi-q3.jpeg";
import audiA3 from "@/assets/cars/audi-a3.jpeg";
import poloNewRed from "@/assets/cars/polo-new-red.jpeg";

export interface Car {
  id: string;
  name: string;
  make: string;
  model: string;
  type: string;
  price: number;
  kilometers: number;
  fuel: "Petrol" | "Diesel" | "Hybrid" | "Electric";
  transmission: "Automatic" | "Manual";
  year: number;
  status: "Available" | "Reserved" | "Sold";
  image: string;
  images: string[];
  description: string;
}

export const cars: Car[] = [
  {
    id: "1",
    name: "Volkswagen Polo TSI",
    make: "Volkswagen",
    model: "Polo",
    type: "Hatchback",
    price: 189000,
    kilometers: 45000,
    fuel: "Petrol",
    transmission: "Manual",
    year: 2019,
    status: "Available",
    image: poloGold,
    images: [poloGold],
    description: "Well-maintained VW Polo in beautiful gold. Economical and reliable daily driver.",
  },
  {
    id: "2",
    name: "Volkswagen Polo GP",
    make: "Volkswagen",
    model: "Polo",
    type: "Hatchback",
    price: 175000,
    kilometers: 62000,
    fuel: "Petrol",
    transmission: "Manual",
    year: 2018,
    status: "Available",
    image: poloRed,
    images: [poloRed],
    description: "Sporty red Polo GP with low mileage. Perfect city car with excellent fuel economy.",
  },
  {
    id: "3",
    name: "Mercedes-Benz E-Class AMG",
    make: "Mercedes-Benz",
    model: "E-Class",
    type: "Sedan",
    price: 485000,
    kilometers: 78000,
    fuel: "Petrol",
    transmission: "Automatic",
    year: 2016,
    status: "Available",
    image: mercedesBlack,
    images: [mercedesBlack],
    description: "Stunning black E-Class with AMG package. Luxury meets performance.",
  },
  {
    id: "4",
    name: "Volkswagen Golf 7",
    make: "Volkswagen",
    model: "Golf",
    type: "Hatchback",
    price: 225000,
    kilometers: 89000,
    fuel: "Petrol",
    transmission: "Automatic",
    year: 2015,
    status: "Reserved",
    image: golfSilver,
    images: [golfSilver],
    description: "Reliable Golf 7 in elegant silver. Great all-rounder with automatic transmission.",
  },
  {
    id: "5",
    name: "BMW 320i Sport",
    make: "BMW",
    model: "3 Series",
    type: "Sedan",
    price: 345000,
    kilometers: 55000,
    fuel: "Petrol",
    transmission: "Automatic",
    year: 2017,
    status: "Available",
    image: bmwWhite,
    images: [bmwWhite],
    description: "Sleek white BMW 320i with Sport package. The ultimate driving machine.",
  },
  {
    id: "6",
    name: "BMW M135i",
    make: "BMW",
    model: "1 Series",
    type: "Hatchback",
    price: 395000,
    kilometers: 42000,
    fuel: "Petrol",
    transmission: "Automatic",
    year: 2015,
    status: "Available",
    image: bmwBlack,
    images: [bmwBlack],
    description: "Powerful M135i in black. Thrilling performance in a compact package.",
  },
  {
    id: "7",
    name: "Audi Q3 2.0 TDI",
    make: "Audi",
    model: "Q3",
    type: "SUV",
    price: 295000,
    kilometers: 68000,
    fuel: "Diesel",
    transmission: "Automatic",
    year: 2016,
    status: "Sold",
    image: audiQ3,
    images: [audiQ3],
    description: "Versatile Audi Q3 SUV with diesel efficiency. Perfect for families.",
  },
  {
    id: "8",
    name: "Audi A3 Sportback",
    make: "Audi",
    model: "A3",
    type: "Hatchback",
    price: 265000,
    kilometers: 73000,
    fuel: "Petrol",
    transmission: "Automatic",
    year: 2016,
    status: "Available",
    image: audiA3,
    images: [audiA3],
    description: "Elegant Audi A3 Sportback. Premium German engineering at its finest.",
  },
  {
    id: "9",
    name: "Volkswagen Polo 1.0 TSI",
    make: "Volkswagen",
    model: "Polo",
    type: "Hatchback",
    price: 285000,
    kilometers: 22000,
    fuel: "Petrol",
    transmission: "Manual",
    year: 2021,
    status: "Available",
    image: poloNewRed,
    images: [poloNewRed],
    description: "Nearly new VW Polo in striking red. Low mileage, still under warranty.",
  },
];

export const makes = ["All", "Volkswagen", "BMW", "Mercedes-Benz", "Audi"];
export const types = ["All", "Sedan", "Hatchback", "SUV", "Pickup"];
