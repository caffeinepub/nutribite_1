import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "@tanstack/react-router";
import {
  CheckCircle2,
  ChevronRight,
  Heart,
  Leaf,
  Star,
  TrendingDown,
  Wheat,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";
import ProductCard from "../components/ProductCard";
import { bestSellers } from "../data/products";

const benefits = [
  {
    Icon: Wheat,
    title: "High Fiber",
    desc: "Rich in dietary fiber for better digestion",
  },
  {
    Icon: Heart,
    title: "Rich Protein",
    desc: "Plant-based protein for sustained energy",
  },
  {
    Icon: TrendingDown,
    title: "Low Glycemic",
    desc: "Helps manage blood sugar levels naturally",
  },
  {
    Icon: Leaf,
    title: "Eco Friendly",
    desc: "Biodegradable packaging, zero plastic waste",
  },
];

const testimonials = [
  {
    name: "Priya Menon",
    initials: "PM",
    rating: 5,
    text: "Finally found healthy snacks my entire family loves! The Ragi Chips are incredibly crispy and the Millet Cookies are my kids' favourite after-school treat. Zero guilt snacking!",
    product: "Ragi Chips – Original Salted",
  },
  {
    name: "Rohit Sharma",
    initials: "RS",
    rating: 5,
    text: "As a diabetic, I was always worried about snacking. NutriBite's low-glycemic snacks have been a game changer. The Jowar Puffs taste amazing and don't spike my sugar levels.",
    product: "Jowar Puffs – Cheese & Herb",
  },
  {
    name: "Ananya Krishnan",
    initials: "AK",
    rating: 5,
    text: "Ordered the Mega Millet Box for our office and it was a hit! Everyone loved the variety and the eco-friendly packaging was a bonus. Will definitely order again!",
    product: "Mega Millet Box",
  },
];

export default function Home() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    toast.success("Subscribed! Check your email for a special welcome offer.");
    setEmail("");
  };

  return (
    <main>
      {/* Hero */}
      <section
        className="relative h-[600px] md:h-[680px] overflow-hidden"
        data-ocid="home.section"
      >
        <img
          src="/assets/generated/hero-banner.dim_1400x700.jpg"
          alt="Millet snacks hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-deep-green/80 via-deep-green/50 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-xl"
          >
            <span className="inline-block bg-brown/90 text-cream text-sm font-medium px-4 py-1 rounded-full mb-4">
              Bengaluru's Millet Snack Brand
            </span>
            <h1 className="font-serif font-bold text-4xl md:text-5xl lg:text-6xl text-cream leading-tight mb-4">
              Snack Smart,
              <br />
              Live Healthy
            </h1>
            <p className="text-cream/85 text-lg md:text-xl mb-8 leading-relaxed">
              Low-oil, low-sugar, zero harmful preservatives. Made from ancient
              millets for modern, mindful living.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/products">
                <Button
                  size="lg"
                  className="bg-brown hover:bg-brown/90 text-white rounded-full px-8"
                  data-ocid="home.primary_button"
                >
                  Shop Now
                </Button>
              </Link>
              <Link to="/health">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-cream text-cream hover:bg-cream hover:text-deep-green rounded-full px-8 bg-transparent"
                  data-ocid="home.secondary_button"
                >
                  Health Benefits
                </Button>
              </Link>
            </div>
            <div className="flex flex-wrap gap-4 mt-8">
              {["Low Oil", "No Preservatives", "Low Sugar", "High Protein"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="flex items-center gap-1.5 text-cream/80 text-sm"
                  >
                    <CheckCircle2 className="w-4 h-4 text-sage" />
                    {tag}
                  </span>
                ),
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-16 bg-background" data-ocid="home.section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <p className="text-sage font-medium text-sm uppercase tracking-widest mb-2">
              Customer Favourites
            </p>
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-deep-green">
              Best Sellers
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bestSellers.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <ProductCard product={product} index={i + 1} />
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/products">
              <Button
                variant="outline"
                className="border-deep-green text-deep-green hover:bg-deep-green hover:text-cream gap-2"
                data-ocid="home.secondary_button"
              >
                View All Products <ChevronRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Band */}
      <section className="py-16 bg-deep-green" data-ocid="home.section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-cream">
              The Goodness of Millets
            </h2>
            <p className="text-cream/70 mt-3 text-lg">
              Ancient grains, modern nutrition science
            </p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {benefits.map(({ Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-cream/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-cream" />
                </div>
                <h3 className="font-serif font-semibold text-cream text-lg mb-2">
                  {title}
                </h3>
                <p className="text-cream/60 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-background" data-ocid="home.section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <p className="text-sage font-medium text-sm uppercase tracking-widest mb-2">
              Happy Customers
            </p>
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-deep-green">
              What People Say
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-card"
                data-ocid={`home.item.${i + 1}`}
              >
                <div className="flex gap-1 mb-3">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star
                      key={s}
                      className="w-4 h-4 text-amber-400 fill-amber-400"
                    />
                  ))}
                </div>
                <p className="text-foreground/80 text-sm leading-relaxed mb-4">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-3">
                  <Avatar className="w-10 h-10 bg-deep-green">
                    <AvatarFallback className="bg-deep-green text-cream text-sm font-semibold">
                      {t.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-sm text-foreground">
                      {t.name}
                    </p>
                    <p className="text-xs text-muted-foreground">{t.product}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscription Strip */}
      <section className="py-12 bg-background" data-ocid="home.section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-deep-green to-sage rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <div>
              <h3 className="font-serif font-bold text-2xl md:text-3xl text-cream mb-2">
                Monthly Snack Box Subscription
              </h3>
              <p className="text-cream/80 text-base">
                Fresh millet snacks delivered to your door every month
              </p>
              <p className="text-cream font-bold text-2xl mt-3">
                ₹799
                <span className="text-cream/60 text-base font-normal">
                  /month
                </span>
              </p>
              <ul className="mt-3 space-y-1">
                {[
                  "10% off on all snacks",
                  "Free shipping",
                  "Cancel anytime",
                ].map((b) => (
                  <li
                    key={b}
                    className="flex items-center gap-2 text-cream/80 text-sm"
                  >
                    <CheckCircle2 className="w-4 h-4 text-cream" /> {b}
                  </li>
                ))}
              </ul>
            </div>
            <Button
              size="lg"
              className="bg-brown hover:bg-brown/90 text-white rounded-full px-10 shrink-0"
              data-ocid="home.primary_button"
            >
              Subscribe Now
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-12 bg-muted" data-ocid="home.section">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h3 className="font-serif font-bold text-2xl text-deep-green mb-2">
            Stay in the Loop
          </h3>
          <p className="text-muted-foreground mb-6">
            Get exclusive health tips, recipes, and Buy 2 Get 1 Free offers
            straight to your inbox.
          </p>
          <form
            onSubmit={handleSubscribe}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1"
              data-ocid="newsletter.input"
            />
            <Button
              type="submit"
              className="bg-deep-green hover:bg-deep-green/90 text-cream"
              data-ocid="newsletter.submit_button"
            >
              Get Offers
            </Button>
          </form>
        </div>
      </section>
    </main>
  );
}
