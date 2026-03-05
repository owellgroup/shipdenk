import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="bg-card border-t border-border mt-20">
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <img src={logo} alt="Shipdenk" className="h-12 mb-4" />
          <p className="text-sm text-muted-foreground leading-relaxed">
            Your trusted dealership for quality pre-owned vehicles. Drive your dreams home today.
          </p>
        </div>

        <div>
          <h4 className="font-display font-bold text-foreground mb-4">Quick Links</h4>
          <div className="flex flex-col gap-2">
            {["Home", "Inventory", "About", "Contact"].map((l) => (
              <Link key={l} to={l === "Home" ? "/" : `/${l.toLowerCase()}`} className="text-sm text-muted-foreground hover:text-primary transition-colors">{l}</Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display font-bold text-foreground mb-4">Contact</h4>
          <div className="flex flex-col gap-3 text-sm text-muted-foreground">
            <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-primary" />Windhoek, Namibia</span>
            <span className="flex items-center gap-2"><Phone className="w-4 h-4 text-primary" />+264 81 123 4567</span>
            <span className="flex items-center gap-2"><Mail className="w-4 h-4 text-primary" />info@shipdenk.com</span>
          </div>
        </div>

        <div>
          <h4 className="font-display font-bold text-foreground mb-4">Hours</h4>
          <div className="text-sm text-muted-foreground space-y-1">
            <p>Mon - Fri: 8:00 AM - 5:30 PM</p>
            <p>Saturday: 8:00 AM - 1:00 PM</p>
            <p>Sunday: Closed</p>
          </div>
        </div>
      </div>

      <div className="border-t border-border mt-8 pt-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Shipdenk. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
