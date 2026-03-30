import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  Building2,
  CreditCard,
  Minus,
  Plus,
  ShoppingBag,
  Smartphone,
  Trash2,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useCart } from "../context/CartContext";

type PaymentMethod = "upi" | "card" | "netbanking";

export default function CartSidebar() {
  const {
    items,
    isOpen,
    setIsOpen,
    updateQuantity,
    removeItem,
    totalPrice,
    clearCart,
  } = useCart();
  const [checkout, setCheckout] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("upi");

  const handleOrder = () => {
    toast.success(
      "Order placed successfully! We'll deliver within 3–5 business days.",
    );
    clearCart();
    setCheckout(false);
    setIsOpen(false);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent
        className="w-full sm:max-w-md overflow-y-auto bg-cream"
        data-ocid="cart.sheet"
      >
        <SheetHeader className="mb-4">
          <SheetTitle className="font-serif text-deep-green flex items-center gap-2">
            <ShoppingBag className="w-5 h-5" />
            Your Cart
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div
            className="flex flex-col items-center justify-center h-64 text-center"
            data-ocid="cart.empty_state"
          >
            <ShoppingBag className="w-12 h-12 text-muted-foreground mb-3" />
            <p className="text-muted-foreground font-medium">
              Your cart is empty
            </p>
            <p className="text-sm text-muted-foreground/70 mt-1">
              Add some healthy snacks to get started!
            </p>
            <Button
              variant="outline"
              className="mt-4 border-deep-green text-deep-green hover:bg-deep-green hover:text-cream"
              onClick={() => setIsOpen(false)}
              data-ocid="cart.close_button"
            >
              Continue Shopping
            </Button>
          </div>
        ) : (
          <>
            {!checkout ? (
              <div className="space-y-3">
                {items.map((item, idx) => (
                  <div
                    key={`${item.product.id}-${item.size.name}`}
                    className="bg-white rounded-lg p-3 shadow-xs"
                    data-ocid={`cart.item.${idx + 1}`}
                  >
                    <div className="flex items-start gap-3">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-16 h-16 rounded object-cover"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-sm text-foreground truncate">
                          {item.product.name}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {item.size.label}
                        </p>
                        <p className="text-sm font-semibold text-brown mt-1">
                          ₹{item.size.price} × {item.quantity}
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() =>
                          removeItem(item.product.id, item.size.name)
                        }
                        className="text-muted-foreground hover:text-destructive transition-colors p-1"
                        data-ocid={`cart.delete_button.${idx + 1}`}
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        type="button"
                        onClick={() =>
                          updateQuantity(
                            item.product.id,
                            item.size.name,
                            item.quantity - 1,
                          )
                        }
                        className="w-7 h-7 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
                        data-ocid={`cart.secondary_button.${idx + 1}`}
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm font-medium w-6 text-center">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() =>
                          updateQuantity(
                            item.product.id,
                            item.size.name,
                            item.quantity + 1,
                          )
                        }
                        className="w-7 h-7 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
                        data-ocid={`cart.primary_button.${idx + 1}`}
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                ))}

                <Separator />
                <div className="flex justify-between items-center font-semibold text-lg">
                  <span>Total</span>
                  <span className="text-brown">₹{totalPrice}</span>
                </div>
                <Button
                  className="w-full bg-deep-green hover:bg-deep-green/90 text-cream"
                  onClick={() => setCheckout(true)}
                  data-ocid="cart.submit_button"
                >
                  Proceed to Checkout
                </Button>
              </div>
            ) : (
              <div className="space-y-4" data-ocid="cart.modal">
                <h3 className="font-serif font-semibold text-deep-green">
                  Select Payment Method
                </h3>

                <div className="space-y-2">
                  {[
                    {
                      id: "upi" as PaymentMethod,
                      label: "UPI (Google Pay / PhonePe)",
                      Icon: Smartphone,
                    },
                    {
                      id: "card" as PaymentMethod,
                      label: "Credit / Debit Card",
                      Icon: CreditCard,
                    },
                    {
                      id: "netbanking" as PaymentMethod,
                      label: "Net Banking",
                      Icon: Building2,
                    },
                  ].map(({ id, label, Icon }) => (
                    <button
                      type="button"
                      key={id}
                      onClick={() => setPaymentMethod(id)}
                      className={`w-full flex items-center gap-3 p-3 rounded-lg border-2 transition-all ${
                        paymentMethod === id
                          ? "border-deep-green bg-deep-green/5"
                          : "border-border bg-white hover:border-deep-green/40"
                      }`}
                      data-ocid="cart.radio"
                    >
                      <Icon className="w-5 h-5 text-deep-green" />
                      <span className="text-sm font-medium">{label}</span>
                    </button>
                  ))}
                </div>

                {paymentMethod === "upi" && (
                  <div className="bg-white rounded-lg p-3 border border-border">
                    <p className="text-sm font-medium mb-2">Pay via UPI</p>
                    <div className="flex gap-2">
                      <div className="flex-1 border border-border rounded p-2 text-center text-xs font-medium text-deep-green">
                        Google Pay
                      </div>
                      <div className="flex-1 border border-border rounded p-2 text-center text-xs font-medium text-deep-green">
                        PhonePe
                      </div>
                      <div className="flex-1 border border-border rounded p-2 text-center text-xs font-medium text-deep-green">
                        BHIM UPI
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex justify-between font-semibold">
                  <span>Total Amount</span>
                  <span className="text-brown">₹{totalPrice}</span>
                </div>

                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    className="flex-1 border-deep-green text-deep-green"
                    onClick={() => setCheckout(false)}
                    data-ocid="cart.cancel_button"
                  >
                    Back
                  </Button>
                  <Button
                    className="flex-1 bg-brown hover:bg-brown/90 text-white"
                    onClick={handleOrder}
                    data-ocid="cart.confirm_button"
                  >
                    Place Order
                  </Button>
                </div>
              </div>
            )}
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
