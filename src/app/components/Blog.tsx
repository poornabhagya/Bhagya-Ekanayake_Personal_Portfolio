import { motion } from "motion/react";
import { Badge } from "./ui/badge";
import { Calendar, ArrowRight } from "lucide-react";

export function Blog() {
  const posts = [
    {
      title: "Optimizing Django ORM Queries: A Deep Dive",
      excerpt: "Learn how to eliminate N+1 queries and improve database performance in Django applications.",
      date: "Apr 20, 2026",
      category: "Backend",
      readTime: "8 min read"
    },
    {
      title: "Building Scalable React Applications with TypeScript",
      excerpt: "Best practices for architecting large-scale React apps with type safety and maintainability.",
      date: "Apr 15, 2026",
      category: "Frontend",
      readTime: "6 min read"
    },
    {
      title: "Docker & CI/CD: Complete Deployment Pipeline",
      excerpt: "Step-by-step guide to setting up automated deployment with Docker and GitHub Actions.",
      date: "Apr 10, 2026",
      category: "DevOps",
      readTime: "10 min read"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gray-900/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-12 text-center">
            Latest <span className="text-[#FACC15]">Articles</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-[#FACC15]/50 transition-all cursor-pointer group"
              >
                <Badge className="mb-4 bg-[#FACC15]/20 text-[#FACC15] border-[#FACC15]/30">
                  {post.category}
                </Badge>

                <h3 className="text-xl font-bold mb-3 group-hover:text-[#FACC15] transition-colors">
                  {post.title}
                </h3>

                <p className="text-gray-400 mb-4">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </div>
                  <span>{post.readTime}</span>
                </div>

                <div className="mt-4 flex items-center gap-2 text-[#FACC15] group-hover:gap-4 transition-all">
                  <span>Read more</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
