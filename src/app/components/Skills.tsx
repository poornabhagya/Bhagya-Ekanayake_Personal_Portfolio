import { motion } from "framer-motion";
import { 
  SiReact, SiTypescript, SiTailwindcss, SiNextdotjs, SiHtml5, SiRedux, SiReactquery, 
  SiPython, SiDjango, SiNodedotjs, SiPostgresql, SiMongodb, SiRedis, SiGraphql, 
  SiDocker, SiGithubactions, SiNginx, SiLinux, SiGit, SiJenkins, 
  SiPytest, SiJest, SiPostman, SiSwagger, SiJira, SiFigma
} from "react-icons/si";

// AWS එක FaAws විදිහට මෙතනට දැම්මා
import { FaMobileAlt, FaSyncAlt, FaUsers, FaAws } from "react-icons/fa";

// VS Code ඔරිජිනල් අයිකන් එක ගන්න මේක අලුතින් දැම්මා
import { VscVscode } from "react-icons/vsc";

export function Skills() {
  const skillCategories = [
    {
      title: "FRONTEND",
      skills: [
        { name: "React", icon: SiReact, color: "text-[#61DAFB]" },
        { name: "TypeScript", icon: SiTypescript, color: "text-[#3178C6]" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-[#06B6D4]" },
        { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
        { name: "HTML5/CSS3", icon: SiHtml5, color: "text-[#E34F26]" },
        { name: "Redux", icon: SiRedux, color: "text-[#764ABC]" },
        { name: "React Query", icon: SiReactquery, color: "text-[#FF4154]" },
        { name: "Responsive", icon: FaMobileAlt, color: "text-gray-400" }
      ]
    },
    {
      title: "BACKEND",
      skills: [
        { name: "Python", icon: SiPython, color: "text-[#3776AB]" },
        { name: "Django", icon: SiDjango, color: "text-[#092E20]" },
        { name: "Django REST", icon: SiDjango, color: "text-[#A30000]" },
        { name: "Node.js", icon: SiNodedotjs, color: "text-[#339933]" },
        { name: "PostgreSQL", icon: SiPostgresql, color: "text-[#4169E1]" },
        { name: "MongoDB", icon: SiMongodb, color: "text-[#47A248]" },
        { name: "Redis", icon: SiRedis, color: "text-[#DC382D]" },
        { name: "GraphQL", icon: SiGraphql, color: "text-[#E10098]" }
      ]
    },
    {
      title: "CLOUD & DEVOPS",
      skills: [
        { name: "Docker", icon: SiDocker, color: "text-[#2496ED]" },
        { name: "AWS", icon: FaAws, color: "text-[#FF9900]" },
        { name: "CI/CD", icon: FaSyncAlt, color: "text-gray-400" },
        { name: "GitHub Actions", icon: SiGithubactions, color: "text-[#2088FF]" },
        { name: "Nginx", icon: SiNginx, color: "text-[#009639]" },
        { name: "Linux", icon: SiLinux, color: "text-[#FCC624]" },
        { name: "Git", icon: SiGit, color: "text-[#F05032]" },
        { name: "Jenkins", icon: SiJenkins, color: "text-[#D24939]" }
      ]
    },
    {
      title: "TOOLS",
      skills: [
        { name: "Agile/Scrum", icon: FaUsers, color: "text-[#0052CC]" },
        { name: "PyTest", icon: SiPytest, color: "text-[#0A9EDC]" },
        { name: "Jest", icon: SiJest, color: "text-[#C21325]" },
        { name: "Postman", icon: SiPostman, color: "text-[#FF6C37]" },
        { name: "OpenAPI/Swagger", icon: SiSwagger, color: "text-[#85EA2D]" },
        { name: "Jira", icon: SiJira, color: "text-[#0052CC]" },
        { name: "Figma", icon: SiFigma, color: "text-[#F24E1E]" },
        { name: "VS Code", icon: VscVscode, color: "text-[#007ACC]" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-[#121212]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-center text-white mb-4">
            MY <span className="text-[#FACC15]">STACK</span>
          </h2>
        </motion.div>

        <div className="flex flex-col gap-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row md:items-start gap-8 md:gap-24"
            >
              {/* Left Column: Category Title */}
              <div className="md:w-1/4">
                <h3 className="text-3xl font-extrabold uppercase tracking-wide text-gray-400 font-sans">
                  {category.title}
                </h3>
              </div>

              {/* Right Column: Skills Grid */}
              <div className="md:w-3/4 grid grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center gap-4 group">
                    <skill.icon className={`w-8 h-8 ${skill.color} transition-transform group-hover:scale-110`} />
                    <span className="text-gray-300 text-lg font-medium group-hover:text-white transition-colors">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}