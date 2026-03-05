import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MapPin, Phone, Mail } from "lucide-react";

const Contact = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <div className="pt-24 md:pt-28 pb-16 px-4">
      <div className="container mx-auto max-w-3xl">
        <h1 className="font-display text-4xl font-bold text-foreground mb-4">Contact Us</h1>
        <p className="text-muted-foreground text-lg mb-8">We'd love to hear from you. Reach out anytime.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            { icon: MapPin, title: "Visit Us", text: "Windhoek, Namibia" },
            { icon: Phone, title: "Call Us", text: "+264 81 123 4567" },
            { icon: Mail, title: "Email Us", text: "info@shipdenk.com" },
          ].map((item) => (
            <div key={item.title} className="bg-card border border-border rounded-xl p-6 text-center">
              <item.icon className="w-6 h-6 text-primary mx-auto mb-3" />
              <h3 className="font-display font-bold text-foreground mb-1">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

export default Contact;
