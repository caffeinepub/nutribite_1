import {
  Brain,
  Heart,
  Leaf,
  ShieldCheck,
  TrendingDown,
  Weight,
  Wheat,
} from "lucide-react";
import { motion } from "motion/react";

const stats = [
  { value: "3x", label: "More fiber than wheat" },
  { value: "12g", label: "Protein per 100g serving" },
  { value: "Low GI", label: "Glycemic Index < 55" },
  { value: "0%", label: "Artificial additives" },
];

const benefits = [
  {
    Icon: Wheat,
    title: "Rich in Dietary Fiber",
    desc: "Millets contain 3–4x more dietary fiber than refined wheat. This supports healthy digestion, prevents constipation, and promotes satiety — helping you eat less overall and maintain a healthy weight.",
  },
  {
    Icon: Heart,
    title: "High-Quality Plant Protein",
    desc: "Ragi (finger millet) provides all essential amino acids and contains up to 12g of protein per 100g. Unlike animal protein, it's completely plant-based, cholesterol-free, and easier on your digestive system.",
  },
  {
    Icon: TrendingDown,
    title: "Diabetes Management",
    desc: "With a Glycemic Index (GI) below 55, millets release sugar slowly into the bloodstream — preventing dangerous spikes. Studies show regular millet consumption can reduce HbA1c levels in Type 2 diabetics by up to 1.5%.",
  },
  {
    Icon: Weight,
    title: "Weight Management",
    desc: "The high fiber content and complex carbohydrates in millets promote longer satiety and reduce binge snacking. Replacing refined snacks with millet alternatives has been shown to reduce caloric intake by 20–30%.",
  },
  {
    Icon: Brain,
    title: "Mental Wellness",
    desc: "Ragi is one of the richest plant sources of tryptophan, an amino acid precursor to serotonin. Regular consumption supports better mood, reduced anxiety, and improved sleep quality.",
  },
  {
    Icon: ShieldCheck,
    title: "Immune Boosting Minerals",
    desc: "Jowar (sorghum) is packed with iron, zinc, magnesium, and phosphorus. These micronutrients strengthen the immune system, support bone density, and prevent anemia — especially critical for women and children.",
  },
];

const millets = [
  {
    name: "Ragi (Finger Millet)",
    color: "bg-amber-50 border-amber-200",
    iconColor: "text-amber-600",
    desc: "The richest plant source of calcium (344mg/100g) — better than milk! Also high in iron, making it ideal for growing children and anemic individuals. Ragi flour has been used in South Indian cuisine for centuries.",
    nutrients: [
      "Calcium: 344mg/100g",
      "Iron: 3.9mg/100g",
      "Fiber: 3.6g/100g",
      "Protein: 7.7g/100g",
    ],
  },
  {
    name: "Jowar (Sorghum)",
    color: "bg-green-50 border-green-200",
    iconColor: "text-green-600",
    desc: "A gluten-free ancient grain with powerful antioxidants and a low glycemic profile. Jowar is especially effective for heart health, cholesterol management, and digestive wellness. One of the most drought-resistant crops — truly eco-friendly.",
    nutrients: [
      "Protein: 10.4g/100g",
      "Fiber: 6.3g/100g",
      "Iron: 4.1mg/100g",
      "Zinc: 1.6mg/100g",
    ],
  },
];

export default function HealthBenefits() {
  return (
    <main className="bg-background min-h-screen">
      {/* Hero */}
      <section className="bg-deep-green py-20 px-4" data-ocid="health.section">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Leaf className="w-12 h-12 text-cream/60 mx-auto mb-4" />
            <h1 className="font-serif font-bold text-4xl md:text-5xl text-cream mb-4">
              The Science of Millet Nutrition
            </h1>
            <p className="text-cream/75 text-xl max-w-2xl mx-auto leading-relaxed">
              Ancient grains backed by modern science. Discover why
              nutritionists and doctors are recommending millets for managing
              lifestyle diseases.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section
        className="py-12 bg-background border-b border-border"
        data-ocid="health.section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-white rounded-2xl shadow-card"
                data-ocid="health.card"
              >
                <p className="font-serif font-bold text-3xl md:text-4xl text-brown mb-1">
                  {stat.value}
                </p>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits grid */}
      <section className="py-16 bg-background" data-ocid="health.section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-deep-green">
              Health Benefits
            </h2>
            <p className="text-muted-foreground mt-3">
              Why every NutriBite snack is a step towards better health
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map(({ Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-2xl shadow-card"
                data-ocid="health.card"
              >
                <div className="w-12 h-12 bg-deep-green/10 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-deep-green" />
                </div>
                <h3 className="font-serif font-semibold text-lg text-foreground mb-2">
                  {title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Millet Profiles */}
      <section className="py-16 bg-muted" data-ocid="health.section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-deep-green">
              Know Your Millet
            </h2>
            <p className="text-muted-foreground mt-3">
              A closer look at the supergrains in every NutriBite snack
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {millets.map((m, i) => (
              <motion.div
                key={m.name}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className={`${m.color} border-2 rounded-2xl p-8`}
                data-ocid="health.card"
              >
                <h3
                  className={`font-serif font-bold text-2xl ${m.iconColor} mb-3`}
                >
                  {m.name}
                </h3>
                <p className="text-foreground/80 text-sm leading-relaxed mb-6">
                  {m.desc}
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {m.nutrients.map((n) => (
                    <div key={n} className="bg-white/60 rounded-lg p-3">
                      <p className="text-foreground font-medium text-sm">{n}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8 bg-background border-t border-border">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <ShieldCheck className="w-5 h-5 text-sage" />
            <span className="font-medium text-sm text-deep-green">
              Nutrition Disclaimer
            </span>
          </div>
          <p className="text-muted-foreground text-xs leading-relaxed">
            These statements have not been evaluated by the FSSAI or any medical
            authority. NutriBite snacks are not intended to diagnose, treat,
            cure, or prevent any disease. Always consult a qualified healthcare
            provider for personalized dietary advice.
          </p>
        </div>
      </section>
    </main>
  );
}
