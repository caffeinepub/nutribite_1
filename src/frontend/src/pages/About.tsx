import { Award, Heart, Leaf, Lightbulb, Sprout, Users } from "lucide-react";
import { motion } from "motion/react";

const teamMembers = [
  {
    name: "Kallangouda B",
    role: "Co-Founder & CEO",
    initials: "KB",
    bg: "bg-deep-green",
    photo:
      "/assets/28cbe2c8-6f9b-4292-8675-85e86d510f00-019d428f-0d1e-718b-960b-f06dad84bfe6.jpeg",
    desc: "Food tech enthusiast and entrepreneur from Bengaluru. Passionate about sustainable food systems and making millets mainstream.",
  },
  {
    name: "Manamohan K.H",
    role: "Co-Founder & Product Head",
    initials: "MK",
    bg: "bg-brown",
    photo:
      "/assets/1c6bd813-5db9-4af8-83ef-f5618e775f15_original-019d4293-9768-705d-bdc6-753c3bbfd885.jpeg",
    desc: "Nutrition and product development expert. Designs every NutriBite recipe to deliver the perfect balance of taste and health.",
  },
];

const values = [
  {
    Icon: Heart,
    title: "Health First",
    desc: "Every snack is crafted with nutritional science, not just taste. Your health is our primary ingredient.",
  },
  {
    Icon: Leaf,
    title: "Planet Friendly",
    desc: "Biodegradable packaging, locally sourced millets, reduced water footprint. We care about tomorrow.",
  },
  {
    Icon: Award,
    title: "Uncompromising Quality",
    desc: "FSSAI certified, third-party lab tested, and manufactured in ISO-certified facilities in Bengaluru.",
  },
  {
    Icon: Users,
    title: "Community Driven",
    desc: "We work directly with millet farmers in Karnataka, ensuring fair prices and sustainable livelihoods.",
  },
  {
    Icon: Lightbulb,
    title: "Innovation",
    desc: "We take 2000-year-old supergrains and turn them into snacks that compete with the best in the world.",
  },
  {
    Icon: Sprout,
    title: "Accessibility",
    desc: "Affordable healthy snacking for every Indian household — from ₹49 starter packs to bulk family boxes.",
  },
];

export default function About() {
  return (
    <main className="bg-background min-h-screen">
      {/* Hero */}
      <section className="bg-deep-green py-20 px-4" data-ocid="about.section">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Sprout className="w-12 h-12 text-cream/60 mx-auto mb-4" />
            <h1 className="font-serif font-bold text-4xl md:text-5xl text-cream mb-4">
              Our Story
            </h1>
            <p className="text-cream/75 text-xl max-w-2xl mx-auto leading-relaxed">
              Two entrepreneurs from Bengaluru on a mission to make healthy
              snacking accessible, delicious, and sustainable for every Indian.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 bg-background" data-ocid="about.section">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif font-bold text-3xl text-deep-green mb-6">
              How NutriBite Began
            </h2>
            <div className="space-y-5 text-foreground/80 leading-relaxed">
              <p>
                In 2023, Kallangouda B and Manamohan K.H — two entrepreneurs
                from Bengaluru — were united by a common frustration. The
                healthy snack options in India were either tasteless,
                unaffordable, or full of artificial ingredients. Meanwhile,
                India's ancient millets — ragi, jowar, bajra — sat largely
                unused in pantries, dismissed as "village food."
              </p>
              <p>
                They started NutriBite in a small kitchen in Koramangala with
                one goal:{" "}
                <strong>
                  make millets the coolest, tastiest snack in India.
                </strong>{" "}
                They experimented with dozens of recipes, tweaking spice blends
                and baking techniques until they created chips and puffs that
                rivalled the best conventional snacks — but with a fraction of
                the oil and none of the harmful additives.
              </p>
              <p>
                They launched at a college fest in March 2023 and sold out
                within two hours. The response was overwhelming. By August 2023,
                they had their FSSAI license, a manufacturing partnership in
                Peenya Industrial Area, and orders coming in from across
                Karnataka.
              </p>
              <p>
                Today, NutriBite ships to over 50 cities across India. They work
                directly with 30+ millet farmers in the Dharwad district, paying
                fair prices that support rural livelihoods while ensuring the
                freshest, highest-quality ingredients for every snack.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-muted" data-ocid="about.section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-deep-green">
              Our Values
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map(({ Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-card"
                data-ocid="about.card"
              >
                <div className="w-12 h-12 bg-deep-green/10 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-deep-green" />
                </div>
                <h3 className="font-serif font-semibold text-lg mb-2">
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

      {/* Team */}
      <section className="py-16 bg-background" data-ocid="about.section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-deep-green">
              Meet the Founders
            </h2>
            <p className="text-muted-foreground mt-3">
              The passionate entrepreneurs behind every NutriBite snack
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {teamMembers.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-card text-center"
                data-ocid={`about.item.${i + 1}`}
              >
                {member.photo ? (
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-20 h-20 rounded-full object-cover mx-auto mb-4"
                  />
                ) : (
                  <div
                    className={`w-20 h-20 ${member.bg} rounded-full flex items-center justify-center mx-auto mb-4`}
                  >
                    <span className="text-2xl font-bold text-white">
                      {member.initials}
                    </span>
                  </div>
                )}
                <h3 className="font-serif font-semibold text-lg">
                  {member.name}
                </h3>
                <p className="text-brown text-sm font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  {member.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Numbers */}
      <section className="py-12 bg-deep-green" data-ocid="about.section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "50+", label: "Cities across India" },
              { value: "30+", label: "Millet farmers supported" },
              { value: "12K+", label: "Happy customers" },
              { value: "2023", label: "Founded in Bengaluru" },
            ].map(({ value, label }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <p className="font-serif font-bold text-4xl text-cream mb-1">
                  {value}
                </p>
                <p className="text-cream/60 text-sm">{label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
