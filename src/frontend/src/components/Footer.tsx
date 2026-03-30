import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "@tanstack/react-router";
import {
  Facebook,
  Instagram,
  Leaf,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function Footer() {
  const [email, setEmail] = useState("");
  const year = new Date().getFullYear();

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    toast.success(
      "You're subscribed! Expect health tips and exclusive offers.",
    );
    setEmail("");
  };

  const socialLinks = [
    { Icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { Icon: Facebook, href: "https://facebook.com", label: "Facebook" },
    { Icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { Icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  ];

  return (
    <footer className="bg-deep-green text-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-cream/20 rounded-full flex items-center justify-center">
                <Leaf className="w-4 h-4 text-cream" />
              </div>
              <span className="font-serif font-bold text-xl">NutriBite</span>
            </div>
            <p className="text-cream/70 text-sm leading-relaxed mb-4">
              Transforming traditional Indian millets into modern, healthy
              snacks. Snack Smart, Live Healthy.
            </p>
            <p className="text-cream/60 text-xs mb-4">
              🌿 100% eco-friendly biodegradable packaging
            </p>
            <div className="flex gap-3">
              {socialLinks.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-cream/60 hover:text-cream transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif font-semibold text-lg mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { to: "/", label: "Home" },
                { to: "/products", label: "Products" },
                { to: "/health", label: "Health Benefits" },
                { to: "/about", label: "About Us" },
              ].map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-cream/70 hover:text-cream text-sm transition-colors"
                    data-ocid="nav.link"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h3 className="font-serif font-semibold text-lg mb-4">
              Customer Care
            </h3>
            <ul className="space-y-3 text-sm text-cream/70">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-sage" />
                <span>
                  #42, Koramangala 5th Block,
                  <br />
                  Bengaluru – 560095
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-sage" />
                <a
                  href="mailto:hello@nutribite.in"
                  className="hover:text-cream transition-colors"
                >
                  hello@nutribite.in
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-sage" />
                <a
                  href="tel:+919876543210"
                  className="hover:text-cream transition-colors"
                >
                  +91 98765 43210
                </a>
              </li>
            </ul>
            <p className="mt-4 text-xs text-cream/50">
              FSSAI License No: 21221032000123
            </p>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-serif font-semibold text-lg mb-2">
              Stay Healthy
            </h3>
            <p className="text-cream/70 text-sm mb-4">
              Get health tips & exclusive offers. Buy 2 Get 1 Free deals!
            </p>
            <form onSubmit={handleNewsletter} className="flex flex-col gap-2">
              <Input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/10 border-white/20 text-cream placeholder:text-cream/40 focus:border-sage"
                data-ocid="newsletter.input"
              />
              <Button
                type="submit"
                className="bg-brown hover:bg-brown/90 text-white w-full"
                data-ocid="newsletter.submit_button"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-cream/50 text-xs">
            © {year}. Built with ❤️ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
              className="hover:text-cream transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              caffeine.ai
            </a>
          </p>
          <div className="flex items-center gap-3 text-cream/40 text-xs">
            <span className="border border-white/20 px-2 py-0.5 rounded">
              UPI
            </span>
            <span className="border border-white/20 px-2 py-0.5 rounded">
              VISA
            </span>
            <span className="border border-white/20 px-2 py-0.5 rounded">
              Mastercard
            </span>
            <span className="border border-white/20 px-2 py-0.5 rounded">
              RuPay
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
