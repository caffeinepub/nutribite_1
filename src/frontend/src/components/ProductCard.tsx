import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Star } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useCart } from "../context/CartContext";
import type { Product, ProductSize } from "../data/products";

export default function ProductCard({
  product,
  index,
}: { product: Product; index: number }) {
  const { addItem } = useCart();
  const [selectedSize, setSelectedSize] = useState<ProductSize>(
    product.sizes[1],
  );

  const handleAdd = () => {
    addItem(product, selectedSize);
    toast.success(`${product.name} (${selectedSize.name}) added to cart!`);
  };

  return (
    <div
      className="bg-white rounded-2xl shadow-card overflow-hidden flex flex-col group"
      data-ocid={`products.item.${index}`}
    >
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {product.badge && (
          <Badge className="absolute top-3 left-3 bg-brown text-white border-0">
            {product.badge}
          </Badge>
        )}
      </div>

      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-serif font-semibold text-foreground text-base leading-tight mb-1">
          {product.name}
        </h3>
        <p className="text-muted-foreground text-xs leading-relaxed mb-3 flex-1">
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-3">
          {[1, 2, 3, 4, 5].map((s) => (
            <Star
              key={s}
              className={`w-3.5 h-3.5 ${
                s <= Math.round(product.rating)
                  ? "text-amber-400 fill-amber-400"
                  : "text-muted-foreground"
              }`}
            />
          ))}
          <span className="text-xs text-muted-foreground ml-1">
            ({product.reviews})
          </span>
        </div>

        {/* Size selector */}
        {product.category !== "combo" && (
          <div className="flex gap-1.5 mb-3">
            {product.sizes.map((size) => (
              <button
                type="button"
                key={size.name}
                onClick={() => setSelectedSize(size)}
                className={`flex-1 text-xs py-1 px-1 rounded border transition-all ${
                  selectedSize.name === size.name
                    ? "border-deep-green bg-deep-green text-cream"
                    : "border-border hover:border-deep-green"
                }`}
                data-ocid="products.toggle"
              >
                {size.name}
              </button>
            ))}
          </div>
        )}

        <div className="flex items-center justify-between">
          <span className="font-bold text-lg text-brown">
            ₹{selectedSize.price}
          </span>
          <Button
            size="sm"
            className="bg-brown hover:bg-brown/90 text-white gap-1"
            onClick={handleAdd}
            data-ocid="products.primary_button"
          >
            <ShoppingCart className="w-3.5 h-3.5" />
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
}
