import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { cars } from "@/data/cars";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { toast } from "sonner";

const OrderPage = () => {
  const { id } = useParams();
  const car = cars.find((c) => c.id === id);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  if (!car) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Car not found.</p>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.phone.trim()) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setSubmitted(true);
    toast.success("Order submitted successfully!");
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-24 md:pt-28 pb-16 px-4 flex items-center justify-center min-h-[70vh]">
          <div className="text-center animate-fade-up">
            <CheckCircle className="w-16 h-16 text-emerald-400 mx-auto mb-4" />
            <h2 className="font-display text-2xl font-bold text-foreground mb-2">Order Confirmed!</h2>
            <p className="text-muted-foreground mb-6 max-w-md">
              Thank you for your order. Please complete payment using the bank details provided. We'll be in touch shortly.
            </p>
            <Link to="/" className="inline-flex bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity">
              Back to Home
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-24 md:pt-28 pb-16 px-4">
        <div className="container mx-auto max-w-3xl">
          <Link to={`/car/${car.id}`} className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Details
          </Link>

          <h1 className="font-display text-3xl font-bold text-foreground mb-2">Place Your Order</h1>
          <p className="text-muted-foreground mb-8">Complete the form below to reserve your vehicle.</p>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Form */}
            <form onSubmit={handleSubmit} className="lg:col-span-3 space-y-5">
              <div className="bg-card border border-border rounded-xl p-5 flex items-center gap-4 mb-2">
                <img src={car.image} alt={car.name} className="w-20 h-14 rounded-lg object-cover" />
                <div>
                  <p className="font-semibold text-foreground">{car.name}</p>
                  <p className="text-primary font-bold">N${car.price.toLocaleString()}</p>
                </div>
              </div>

              {[
                { label: "Full Name *", key: "name", type: "text" },
                { label: "Email Address *", key: "email", type: "email" },
                { label: "Phone Number *", key: "phone", type: "tel" },
              ].map((field) => (
                <div key={field.key}>
                  <label className="text-sm font-medium text-muted-foreground mb-1.5 block">{field.label}</label>
                  <input
                    type={field.type}
                    value={form[field.key as keyof typeof form]}
                    onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                    className="w-full bg-secondary text-foreground rounded-lg px-4 py-3 text-sm border border-border focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>
              ))}
              <div>
                <label className="text-sm font-medium text-muted-foreground mb-1.5 block">Message (optional)</label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows={3}
                  className="w-full bg-secondary text-foreground rounded-lg px-4 py-3 text-sm border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                />
              </div>

              <button type="submit" className="w-full bg-primary text-primary-foreground font-semibold py-3 rounded-lg hover:opacity-90 transition-opacity">
                Confirm Order
              </button>
            </form>

            {/* Bank Details */}
            <div className="lg:col-span-2">
              <div className="bg-card border border-border rounded-xl p-6 sticky top-28">
                <h3 className="font-display font-bold text-foreground mb-4">Payment Details</h3>
                <div className="space-y-3 text-sm">
                  {[
                    { label: "Bank Name", value: "First National Bank" },
                    { label: "Branch Name", value: "Windhoek Main" },
                    { label: "Branch Code", value: "280172" },
                    { label: "Beneficiary", value: "Shipdenk Auto" },
                    { label: "Account No.", value: "62845901234" },
                  ].map((item) => (
                    <div key={item.label} className="flex justify-between">
                      <span className="text-muted-foreground">{item.label}</span>
                      <span className="font-medium text-foreground">{item.value}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground mt-4 leading-relaxed">
                  Please use your full name as reference when making payment. Your order will be confirmed once payment is verified.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OrderPage;
