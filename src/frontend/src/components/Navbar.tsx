import { Badge } from "@/components/ui/badge";
import { Link, useLocation } from "@tanstack/react-router";
import { Leaf, Menu, ShoppingCart, X } from "lucide-react";
import { useState } from "react";
import { useCart } from "../context/CartContext";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/health", label: "Health Benefits" },
  { to: "/about", label: "About Us" },
];

export default function Navbar() {
  const { totalItems, setIsOpen } = useCart();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-cream border-b border-border shadow-xs">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2" data-ocid="nav.link">
            <div className="w-8 h-8 bg-deep-green rounded-full flex items-center justify-center">
              <Leaf className="w-4 h-4 text-cream" />
            </div>
            <span className="font-serif font-bold text-xl text-deep-green">
              NutriBite
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === link.to
                    ? "text-deep-green bg-deep-green/10"
                    : "text-foreground/70 hover:text-deep-green hover:bg-deep-green/5"
                }`}
                data-ocid="nav.link"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Cart icon */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setIsOpen(true)}
              className="relative p-2 rounded-md hover:bg-deep-green/5 transition-colors"
              data-ocid="cart.open_modal_button"
            >
              <ShoppingCart className="w-5 h-5 text-deep-green" />
              {totalItems > 0 && (
                <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center text-xs bg-brown text-white border-0">
                  {totalItems}
                </Badge>
              )}
            </button>
            {/* Mobile menu */}
            <button
              type="button"
              className="md:hidden p-2 rounded-md hover:bg-deep-green/5"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {menuOpen && (
          <div className="md:hidden pb-3 border-t border-border mt-0.5">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="block px-4 py-2.5 text-sm font-medium text-foreground/80 hover:text-deep-green"
                onClick={() => setMenuOpen(false)}
                data-ocid="nav.link"
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
