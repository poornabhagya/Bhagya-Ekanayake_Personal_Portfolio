import { motion } from "framer-motion"; 
import { Briefcase, Building2, CalendarDays } from "lucide-react";

export function WorkExperience() {
  const experiences = [
    {
      type: "freelance",
      title: "Freelance Software Engineer",
      company: "Self-Employed",
      location: "Global / Remote",
      duration: "Nov 2025 - Present",
      description:
        "Delivering custom full-stack web solutions to a global client base. Specializing in end-to-end project lifecycle management—from requirement gathering with international clients to the development, testing, and deployment of scalable, user-centric applications.",
      skills: ["Postman API", "GitHub Actions", "CI/CD", "REST APIs"],
    },
    {
      type: "company",
      company: "Nenasewana (Pvt) Ltd",
      roles: [
        {
          title: "Associate Software Engineer",
          duration: "Nov 2025 - Present",
          active: true, // මේකෙන් තමයි කහ පාට තිත වැටෙන්නේ
          description:
            "Leading full-stack development to architect and deploy scalable, production-grade web platforms. Transforming complex business requirements into type-safe, high-performance solutions like Co-Host Ceylon and Canmee Dairies using React, TypeScript, and Tailwind CSS, while implementing robust CI/CD workflows and rigorous testing standards.",
        },
        {
          title: "Software Engineer Intern",
          duration: "May 2025 - Nov 2025",
          active: false, // පරණ එක නිසා මේක අළු පාටින් තියෙයි
          description:
            "Delivered three major production-level applications across React, Python, and PHP during a 6-month internship. Actively contributed to the full SDLC in a strict Agile environment, developing scalable inventory systems, high-performance web platforms with serverless integrations, and localized offline desktop POS applications.",
        },
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 px-6 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white">
            Work <span className="text-[#FACC15]">Experience</span>
          </h2>
          <p className="text-center text-gray-400 mt-4 max-w-2xl mx-auto">
            My professional journey, from intern to associate engineer, showcasing growth and core contributions in software development.
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Main vertical line - Dashed like the sample */}
          <div className="absolute left-4 md:left-[224px] top-0 bottom-0 w-0 border-l-2 border-dashed border-gray-800 z-0"></div>

          <div className="space-y-16">
            {experiences.map((exp, expIndex) => (
              <div key={expIndex} className="relative">
                {/* 1. Freelance Structure */}
                {exp.type === "freelance" && (
                  <div className="grid md:grid-cols-[200px_1fr] gap-x-12 relative z-10">
                    {/* Left side: Date & Visual */}
                    <div className="flex md:justify-end items-start md:pt-1 gap-4 md:gap-8 pr-6 mb-4 md:mb-0">
                      <div className="flex items-center gap-2 text-gray-500 whitespace-nowrap pt-1">
                        <CalendarDays className="w-4 h-4" />
                        <span className="text-sm font-medium">{exp.duration}</span>
                      </div>
                      <div className="relative mt-0.5">
                        <div className="w-9 h-9 rounded-full bg-[#1a1a1a] border-4 border-[#FACC15] flex items-center justify-center shadow-[0_0_15px_rgba(250,204,21,0.15)]">
                          <Briefcase className="w-4 h-4 text-[#FACC15]" />
                        </div>
                      </div>
                    </div>
                    {/* Right side: Content */}
                    <div className="pl-14 md:pl-0">
                      <h3 className="text-2xl font-extrabold text-white leading-tight">
                        {exp.title}
                      </h3>
                      <p className="text-lg text-gray-300 font-semibold mt-1">
                        {exp.company}
                      </p>
                      <p className="text-sm text-gray-500 mb-5">{exp.location}</p>
                      <p className="text-gray-400 leading-relaxed mb-6">
                        {exp.description}
                      </p>
                      <div className="flex flex-wrap gap-2.5">
                        {exp.skills?.map((skill) => (
                          <span
                            key={skill}
                            className="px-3.5 py-1.5 bg-gray-900 border border-gray-800 text-gray-300 text-xs font-semibold rounded-full hover:border-[#FACC15]/50 transition-colors cursor-default"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* 2. Company Structure with Sub-roles */}
                {exp.type === "company" && (
                  <div className="space-y-12">
                    {/* Company Header Row */}
                    <div className="grid md:grid-cols-[200px_1fr] gap-x-12 relative z-10">
                      <div className="flex md:justify-end items-center pr-6 mb-2 md:mb-0">
                        <div className="relative">
                            <div className="w-9 h-9 rounded-full bg-[#1a1a1a] border-4 border-[#FACC15] flex items-center justify-center shadow-[0_0_15px_rgba(250,204,21,0.15)]">
                                <Building2 className="w-4 h-4 text-[#FACC15]" />
                            </div>
                        </div>
                      </div>
                      <div className="pl-14 md:pl-0 flex items-center">
                        <h3 className="text-2xl font-extrabold text-white leading-tight">
                            {exp.company}
                        </h3>
                      </div>
                    </div>

                    {/* Sequential Roles under company */}
                    {exp.roles?.map((role, roleIndex) => (
                      <div key={roleIndex} className="grid md:grid-cols-[200px_1fr] gap-x-12 relative z-10">
                        {/* Left side: Date & Visual Sub-dot */}
                        <div className="flex md:justify-end items-start pt-1 gap-4 md:gap-8 pr-6 mb-2 md:mb-0">
                          <div className="flex items-center gap-2 text-gray-500 whitespace-nowrap pt-1">
                            <CalendarDays className="w-4 h-4" />
                            <span className="text-sm font-medium">{role.duration}</span>
                          </div>
                          <div className="relative mt-2">
                            {/* Active role එක කහ පාටයි, පරණ එක අළු පාටයි */}
                            <div className={`w-5 h-5 rounded-full z-10 ${
                              role.active 
                                ? "bg-[#121212] border-4 border-[#FACC15] shadow-[0_0_10px_rgba(250,204,21,0.3)]" 
                                : "bg-[#121212] border-4 border-gray-700"
                            }`}></div>
                          </div>
                        </div>
                        {/* Right side: Content */}
                        <div className="pl-14 md:pl-0">
                          <h4 className="text-xl font-bold text-[#FACC15] mb-4 leading-snug">
                            {role.title}
                          </h4>
                          <p className="text-gray-400 leading-relaxed max-w-3xl">
                            {role.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}