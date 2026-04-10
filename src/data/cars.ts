import audiA3Img from "@/assets/cars/Audi A3 - 2015model - Panaromic sunroof - Leather seats - 76000KM - lots of extras - available o.jpg";
import audiQ7Img from "@/assets/cars/Audi Q7 Quattro - 2016model - 78000KM - Seven seats - Panaromic sunroof - Black leather seats - .jpg";
import discoverySportImg from "@/assets/cars/Discovery Sport - 2017model - Panaromic sunroof - 73999KM - available on order price is N$175 00.jpg";
import jaguarFpaceImg from "@/assets/cars/Jaguar F-PACE 25T Prestige (RWD) - 2018model - Panaromic sunroof - Black interior seats - 92000K.jpg";
import mazdaCx3Img from "@/assets/cars/Mazda Cx3 - 2018model - Sunroof - Leather seats - 98000KM - well maintained - available on order.jpg";
import mazdaDemioImg from "@/assets/cars/Mazda Demio - 64000 - 2014model - available on order price is N$75 000 shipping&Namra included d.jpg";
import mercedesA250Img from "@/assets/cars/Mercedes Benz A250 - 2015model - Panaromic sunroof - 98000KM - available on order price is N$138.jpg";
import vwGolf7rImg from "@/assets/cars/Volkswagen Golf 7R - 2015model - 71999KM - Panaromic sunroof - Black Leather Interior - lots of .jpg";
import vwTouranImg from "@/assets/cars/Volkswagen Touran - 2016model - 99899KM - Leather seats - Double sunroof - available on order pr (1).jpg";

export interface Car {
  id: string;
  name: string;
  make: string;
  model: string;
  type: string;
  /** N$; use 0 for price on request */
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
    name: "Audi A3",
    make: "Audi",
    model: "A3",
    type: "Hatchback",
    price: 0,
    kilometers: 76000,
    fuel: "Petrol",
    transmission: "Automatic",
    year: 2015,
    status: "Available",
    image: audiA3Img,
    images: [audiA3Img],
    description:
      "2015 Audi A3 with panoramic sunroof, leather seats, and lots of extras. Well specified and available on order.",
  },
  {
    id: "2",
    name: "Audi Q7 Quattro",
    make: "Audi",
    model: "Q7",
    type: "SUV",
    price: 0,
    kilometers: 78000,
    fuel: "Petrol",
    transmission: "Automatic",
    year: 2016,
    status: "Available",
    image: audiQ7Img,
    images: [audiQ7Img],
    description:
      "2016 Audi Q7 Quattro with seven seats, panoramic sunroof, and black leather interior. Spacious family SUV.",
  },
  {
    id: "3",
    name: "Land Rover Discovery Sport",
    make: "Land Rover",
    model: "Discovery Sport",
    type: "SUV",
    price: 175000,
    kilometers: 73999,
    fuel: "Petrol",
    transmission: "Automatic",
    year: 2017,
    status: "Available",
    image: discoverySportImg,
    images: [discoverySportImg],
    description:
      "2017 Discovery Sport with panoramic sunroof. Available on order; shipping and pricing on enquiry.",
  },
  {
    id: "4",
    name: "Jaguar F-PACE 25T Prestige",
    make: "Jaguar",
    model: "F-PACE",
    type: "SUV",
    price: 0,
    kilometers: 92000,
    fuel: "Petrol",
    transmission: "Automatic",
    year: 2018,
    status: "Available",
    image: jaguarFpaceImg,
    images: [jaguarFpaceImg],
    description:
      "2018 Jaguar F-PACE 25T Prestige (RWD) with panoramic sunroof and black interior. Around 92,000 km.",
  },
  {
    id: "5",
    name: "Mazda CX-3",
    make: "Mazda",
    model: "CX-3",
    type: "SUV",
    price: 0,
    kilometers: 98000,
    fuel: "Petrol",
    transmission: "Automatic",
    year: 2018,
    status: "Available",
    image: mazdaCx3Img,
    images: [mazdaCx3Img],
    description:
      "2018 Mazda CX-3 with sunroof and leather seats. Well maintained, 98,000 km. Available on order.",
  },
  {
    id: "6",
    name: "Mazda Demio",
    make: "Mazda",
    model: "Demio",
    type: "Hatchback",
    price: 75000,
    kilometers: 64000,
    fuel: "Petrol",
    transmission: "Automatic",
    year: 2014,
    status: "Available",
    image: mazdaDemioImg,
    images: [mazdaDemioImg],
    description:
      "2014 Mazda Demio, 64,000 km. Price includes shipping and NamRA. Available on order.",
  },
  {
    id: "7",
    name: "Mercedes-Benz A250",
    make: "Mercedes-Benz",
    model: "A250",
    type: "Hatchback",
    price: 138000,
    kilometers: 98000,
    fuel: "Petrol",
    transmission: "Automatic",
    year: 2015,
    status: "Available",
    image: mercedesA250Img,
    images: [mercedesA250Img],
    description:
      "2015 Mercedes-Benz A250 with panoramic sunroof. 98,000 km. Available on order.",
  },
  {
    id: "8",
    name: "Volkswagen Golf 7R",
    make: "Volkswagen",
    model: "Golf 7R",
    type: "Hatchback",
    price: 0,
    kilometers: 71999,
    fuel: "Petrol",
    transmission: "Automatic",
    year: 2015,
    status: "Available",
    image: vwGolf7rImg,
    images: [vwGolf7rImg],
    description:
      "2015 Volkswagen Golf 7R with panoramic sunroof, black leather interior, and lots of extras. Around 72,000 km.",
  },
  {
    id: "9",
    name: "Volkswagen Touran",
    make: "Volkswagen",
    model: "Touran",
    type: "MPV",
    price: 0,
    kilometers: 99899,
    fuel: "Petrol",
    transmission: "Automatic",
    year: 2016,
    status: "Available",
    image: vwTouranImg,
    images: [vwTouranImg],
    description:
      "2016 Volkswagen Touran with leather seats and double sunroof. Around 99,900 km. Available on order.",
  },
];

export function formatCarPrice(car: Car): string {
  if (car.price <= 0) return "On request";
  return `N$${car.price.toLocaleString()}`;
}

export const makes = [
  "All",
  "Audi",
  "Jaguar",
  "Land Rover",
  "Mazda",
  "Mercedes-Benz",
  "Volkswagen",
];

export const types = ["All", "Sedan", "Hatchback", "SUV", "MPV"];
