import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "motion/react";
import { useState } from "react";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

const categories = [
  { value: "all", label: "All Products" },
  { value: "ragi-chips", label: "Ragi Chips" },
  { value: "jowar-puffs", label: "Jowar Puffs" },
  { value: "millet-cookies", label: "Millet Cookies" },
  { value: "combo", label: "Combo Packs" },
];

export default function Products() {
  const [activeTab, setActiveTab] = useState("all");

  const filtered =
    activeTab === "all"
      ? products
      : products.filter((p) => p.category === activeTab);

  return (
    <main className="py-12 bg-background min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <p className="text-sage font-medium text-sm uppercase tracking-widest mb-2">
            Our Range
          </p>
          <h1 className="font-serif font-bold text-4xl text-deep-green">
            Millet Snack Collection
          </h1>
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
            Every snack is crafted from ancient millets, baked not fried, with
            real ingredients and zero nasties.
          </p>
        </motion.div>

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList
            className="flex flex-wrap h-auto bg-white border border-border rounded-xl p-1 mb-8 mx-auto w-fit gap-1"
            data-ocid="products.tab"
          >
            {categories.map((cat) => (
              <TabsTrigger
                key={cat.value}
                value={cat.value}
                className="rounded-lg data-[state=active]:bg-deep-green data-[state=active]:text-cream"
                data-ocid="products.tab"
              >
                {cat.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((cat) => (
            <TabsContent key={cat.value} value={cat.value}>
              {filtered.length === 0 ? (
                <div
                  className="text-center py-20"
                  data-ocid="products.empty_state"
                >
                  <p className="text-muted-foreground">No products found.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {filtered.map((product, i) => (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: i * 0.05 }}
                    >
                      <ProductCard product={product} index={i + 1} />
                    </motion.div>
                  ))}
                </div>
              )}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </main>
  );
}
