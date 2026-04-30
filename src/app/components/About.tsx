import { motion } from "framer-motion";
import { Lightbulb, Target, TrendingUp } from "lucide-react";

export function About() {
  const stats = [
    { value: "10+", label: "Projects Delivered" },
    { value: "1+", label: "Years Experience" },
    { value: "5+", label: "Happy Clients" },
    { value: "4+", label: "Core Tech Stacks" }
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-12 text-center">
            About <span className="text-[#FACC15]">Me</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: Target,
                title: "Problem Solver",
                description: "Transforming complex business requirements into scalable, type-safe, and high-performance digital solutions across the full stack."
              },
              {
                icon: TrendingUp,
                title: "Continuous Learner",
                description: "Actively expanding my expertise in Cloud Architecture, DevOps (Docker, CI/CD), and enterprise-grade system design."
              },
              {
                icon: Lightbulb,
                title: "Innovation Driven",
                description: "Committed to engineering production-ready applications with clean code, rigorous testing, and modern UI/UX principles."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-[#FACC15]/50 transition-colors"
              >
                <item.icon className="w-12 h-12 text-[#FACC15] mb-4" />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Text and Stats Container */}
          <div className="grid lg:grid-cols-5 gap-8 items-center">
            {/* Description Text */}
            <div className="lg:col-span-3 bg-gray-900/50 border border-gray-800 rounded-lg p-8 h-full flex flex-col justify-center">
              <p className="text-lg text-gray-300 leading-relaxed mb-4">
                As a BSc (Hons) IT graduate and an active Associate Software Engineer, my journey is driven by an unwavering passion for technology. I specialize in engineering scalable, production-ready full stack applications that bridge the gap between complex business logic and seamless user experiences.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                With hands-on experience across modern ecosystems including React, TypeScript, Python, and Django, I bring technical excellence to both enterprise teams and global freelance clients. As I actively progress toward Cloud Architecture and DevOps, my focus remains on writing clean, maintainable code and delivering robust digital solutions using Agile methodologies.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="lg:col-span-2 grid grid-cols-2 gap-4 h-full">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 flex flex-col items-center justify-center text-center hover:border-[#FACC15]/50 transition-colors"
                >
                  <h4 className="text-4xl md:text-5xl font-extrabold text-[#FACC15] mb-2">
                    {stat.value}
                  </h4>
                  <p className="text-sm md:text-base text-gray-400 font-medium uppercase tracking-wider">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}