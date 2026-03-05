import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, User, ShoppingCart, Menu, X, MapPin, Phone, Mail } from "lucide-react";
import logo from "@/assets/logo.png";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/inventory", label: "Cars" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top contact bar */}
      <div className="w-full bg-black/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-1.5 flex flex-col gap-1 text-xs text-white md:flex-row md:items-center md:justify-between md:text-sm">
          <div className="flex items-center gap-2">
            <MapPin className="w-3 h-3 md:w-4 md:h-4" />
            <span>140 RENDSBURGER ST LAFRENZ WINDHOEK</span>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="tel:+264811705060"
              className="inline-flex items-center gap-1 hover:text-primary transition-colors"
            >
              <Phone className="w-3 h-3 md:w-4 md:h-4" />
              <span>+264 81 170 5060</span>
            </a>
            <a
              href="mailto:smd@shipdenk.com"
              className="inline-flex items-center gap-1 hover:text-primary transition-colors"
            >
              <Mail className="w-3 h-3 md:w-4 md:h-4" />
              <span>smd@shipdenk.com</span>
            </a>
          </div>
        </div>
      </div>

      <div
        className={`w-full transition-all duration-300 ${
          scrolled
            ? "bg-background/95 backdrop-blur-md border-b border-border shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Shipdenk" className="h-12 md:h-16" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-lg md:text-xl font-bold transition-colors hover:text-primary ${
                location.pathname === link.to ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link to="/inventory" className="p-2 rounded-lg hover:bg-accent transition-colors text-muted-foreground hover:text-foreground">
            <Search className="w-5 h-5" />
          </Link>
          <button className="p-2 rounded-lg hover:bg-accent transition-colors text-muted-foreground hover:text-foreground">
            <User className="w-5 h-5" />
          </button>
          <button className="p-2 rounded-lg hover:bg-accent transition-colors text-muted-foreground hover:text-foreground">
            <ShoppingCart className="w-5 h-5" />
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden bg-background/98 backdrop-blur-md border-b border-border">
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className={`text-lg font-bold py-2 transition-colors ${
                    location.pathname === link.to ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
