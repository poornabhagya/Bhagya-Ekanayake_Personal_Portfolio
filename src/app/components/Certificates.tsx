import { motion } from "framer-motion";
import { Award, ArrowUpRight, ExternalLink } from "lucide-react";
// Importing brand icons for new certificates
import { SiMongodb, SiPostman, SiGoogle } from "react-icons/si";
import { FaAws, FaServer, FaCloud, FaDatabase } from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";

export function Certificates() {
  // Cloud, AI & Backend වලට අදාළ හොඳම Certificates 9ක් තෝරලා දැම්මා
  const certificates = [
    {
      title: "Introduction to Azure fundamentals",
      issuer: "Microsoft",
      date: "Dec 2022",
      icon: VscAzure,
      iconColor: "text-[#0089D6]",
      link: "https://learn.microsoft.com/en-us/training/achievements/learn.azure.intro-to-azure-fundamentals.badge?username=BhagyaEkanayake-6215" // මෙතනට ඔයාගේ Azure link එක දාන්න
    },
    {
      title: "Google AI Essentials",
      issuer: "Google",
      date: "Oct 2025",
      icon: SiGoogle,
      iconColor: "text-[#4285F4]",
      link: "https://www.coursera.org/account/accomplishments/specialization/I1LI0693JZ3W"
    },
    {
      title: "Oracle Cloud Infrastructure 2025 Associate",
      issuer: "Oracle",
      date: "Oct 2025",
      icon: FaDatabase,
      iconColor: "text-[#F80000]",
      link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=C033ED5AA14BEC9DC7269B29E3094245B2D76008B0559EAF5B124994C3BF94D7"
    },
    {
      title: "Postman API Fundamentals Student Expert",
      issuer: "Postman (Canvas Credentials)",
      date: "Aug 2025",
      icon: SiPostman,
      iconColor: "text-[#FF6C37]",
      link: "https://badges.parchment.com/public/assertions/rSkcYIXUTuGY9c2QTwMinQ"
    },
    {
      title: "AWS Academy - Generative AI Foundations",
      issuer: "Amazon Web Services (AWS)",
      date: "Aug 2025",
      icon: FaAws,
      iconColor: "text-[#FF9900]",
      link: "https://www.credly.com/badges/2c3b8f54-c558-45ca-a106-1fc2911130a6/linked_in_profile"
    },
    {
      title: "Multicloud Network Associate",
      issuer: "Aviatrix",
      date: "Oct 2025",
      icon: FaCloud, // Generic cloud icon for Aviatrix
      iconColor: "text-[#00B4E6]",
      link: "https://www.credly.com/badges/95c9a73f-60d7-4c2c-8ef4-83dcdd150380/linked_in_profile"
    },
    {
      title: "Operating Systems Fundamentals",
      issuer: "Akamai Technologies",
      date: "Feb 2024",
      icon: FaServer, // පරණ Error එක එයි කියලා FaServer එකම දැම්මා IBM එකට
      iconColor: "text-[#0530AD]",
      link: "https://www.coursera.org/account/accomplishments/verify/7CUU2CN3CKQD"
    },
    {
      title: "MongoDB CRUD Operations",
      issuer: "MongoDB",
      date: "Mar 2024",
      icon: SiMongodb,
      iconColor: "text-[#47A248]",
      link: "https://learn.mongodb.com/c/onD7mrHHRvmtxPOb2u1RLg"
    },
    {
      title: "Introduction to Cloud Computing",
      issuer: "IBM",
      date: "March 2024",
      icon: VscAzure,
      iconColor: "text-[#0089D6]",
      link: "https://www.coursera.org/account/accomplishments/verify/Q8EEVP8RS6E7"
    }
  ];

  return (
    <section id="certificates" className="py-24 px-6 bg-[#121212]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-center text-white">
            Certificates & <span className="text-[#FACC15]">Achievements</span>
          </h2>
          <p className="text-center text-gray-400 max-w-2xl mx-auto">
            Professional certifications and continuous learning milestones that validate my expertise across cloud architecture, AI, and full-stack development.
          </p>
        </motion.div>

        {/* Minimalist Tech Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-[#1a1a1a] border border-gray-800 hover:border-[#FACC15]/50 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(250,204,21,0.1)] flex flex-col h-full"
            >
              {/* Top Row: Icon & Date */}
              <div className="flex justify-between items-start mb-6">
                <div className={`p-3 rounded-xl bg-gray-900/80 border border-gray-800 ${cert.iconColor}`}>
                  {(() => {
                    const Icon = cert.icon;
                    return <Icon className="w-8 h-8" />;
                  })()}
                </div>
                <div className="flex items-center gap-1.5 text-xs font-medium text-gray-500 bg-gray-900/50 px-3 py-1.5 rounded-full border border-gray-800">
                  <Award className="w-3.5 h-3.5 text-[#FACC15]" />
                  {cert.date}
                </div>
              </div>

              {/* Title & Issuer */}
              <div className="flex-1 mb-6">
                <h3 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-[#FACC15] transition-colors leading-snug">
                  {cert.title}
                </h3>
                <p className="text-gray-400 text-sm font-medium">
                  {cert.issuer}
                </p>
              </div>

              {/* Bottom: Verify Link */}
              <div className="pt-4 border-t border-gray-800/50 mt-auto">
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold text-gray-300 hover:text-[#FACC15] transition-colors"
                >
                  Verify Credential
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <a
            href="https://www.linkedin.com/in/bhagyaekanayake/details/certifications/" // මෙතනට ඔයාගේ LinkedIn Certificates Page Link එක දාන්න
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 border border-gray-800 hover:border-[#FACC15] text-white font-semibold rounded-lg transition-colors group"
          >
            View All on LinkedIn
            <ExternalLink className="w-4 h-4 text-[#FACC15] group-hover:scale-110 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}