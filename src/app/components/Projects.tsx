import { motion } from "framer-motion"; 
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink, Github, Zap, PlayCircle, FileText, ArrowRight } from "lucide-react"; 
import coHostImg from "./src/projImg/co-host.png";
import iceCreamImg from "./src/projImg/iceCream.png";
import teaWedhaImg from "./src/projImg/teaWedha.png";
import canmeeImg from "./src/projImg/canmee.png";

export function Projects() {
  const projects = [
    {
      title: "Co-Host Ceylon",
      description: "A premium property platform connecting travelers with luxury accommodations.",
      image: coHostImg,
      tech: ["React", "Tailwind CSS", "Vite", "Leaflet Maps", "EmailJS"],
      highlights: [
        "State Management: Synced interactive Leaflet maps with dynamic carousels.",
        "Serverless: Built secure EmailJS pipelines for real-time booking automation.",
        "Modern UI/UX: Engineered a responsive masonry layout using React & Tailwind."
      ],
      links: {
        demo: "https://poornabhagya.github.io/Co-Host_FrontendWeb/", 
        code: "" 
      }
    },
    {
      title: "Canmee Dairies Platform",
      description: "A scalable web platform architected for rapid development and high performance.",
      image: canmeeImg, 
      tech: ["React 19", "TypeScript", "Vite", "ESLint"],
      highlights: [
        "Architecture: Built a robust frontend using React 19 & Vite for fast builds.",
        "Code Quality: Enforced strict type-safety via TS and advanced ESLint configs.",
        "Optimization: Implemented regional localization and optimized asset delivery."
      ],
      links: {
        demo: "https://poornabhagya.github.io/Canmee-Dairies-frontend/", 
        code: "" 
      }
    },
    {
      title: "Ice Cream POS System",
      description: "An offline-first desktop application to accelerate checkouts and manage inventory.",
      image: iceCreamImg, 
      tech: ["Python", "PySide6", "SQLite", "ReportLab"],
      highlights: [
        "Accelerated UX: Built a keyboard-first PySide6 interface for fast billing.",
        "Complex Logic: Handled intricate stock unit conversions using SQLite.",
        "Hardware Integration: Added ReportLab thermal printing & English/Sinhala support."
      ],
      links: {
        caseStudy: "https://notion.so/your-case-study", 
        code: "" 
      }
    },
    // අලුතින් add කරපු Projects දෙක
    {
      title: "TeaWedha AI Assistant",
      description: "An AI-powered mobile IoT solution for real-time tea plant disease detection and pest control.",
      image: teaWedhaImg, // තේ වත්තක වගේ ලස්සන image එකක්
      tech: ["AI/ML", "IoT", "Mobile Development", "Python"],
      highlights: [
        "AI Integration: Built and integrated models for real-time disease detection.",
        "IoT Connectivity: Interfaced mobile applications with hardware sensors.",
        "Research Excellence: Executed as a major academic research project at SLIIT."
      ],
      links: {
        demo: "https://theguard.netlify.app/teawedha", 
        code: "" 
      }
    },
    {
      title: "CareerLeap Social Network",
      description: "A comprehensive social media platform designed for professional networking and job searching.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop", // Networking වගේ image එකක්
      tech: ["React", "Express.js", "Node.js", "MongoDB"],
      highlights: [
        "Backend Architecture: Engineered a robust RESTful API using Express.js.",
        "Full-Stack Integration: Developed end-to-end features including user authentication and posts.",
        "Scalable Database: Designed optimized MongoDB schemas for high-performance data retrieval."
      ],
      links: {
        
        code: "https://github.com/poornabhagya/CareerLeap_Unique_Social_Media_Platform" // මේකට Code ලින්ක් එක දෙන්න පුළුවන්
      }
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-12 text-center">
            Featured <span className="text-[#FACC15]">Projects</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Main Projects Loop */}
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#0f0f11] border border-white/10 rounded-2xl overflow-hidden hover:border-[#FACC15]/50 transition-all duration-300 group flex flex-col shadow-lg"
              >
                <div className="relative overflow-hidden h-48 flex-shrink-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f11] via-transparent to-transparent opacity-90"></div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed">{project.description}</p>

                  <div className="bg-white/5 border-l-2 border-[#FACC15] p-4 mb-5 rounded-r-lg flex-grow">
                    <div className="flex items-center gap-2 mb-3">
                      <Zap className="w-4 h-4 text-[#FACC15]" />
                      <h4 className="font-semibold text-[#FACC15] text-xs uppercase tracking-wider">Technical Highlights</h4>
                    </div>
                    
                    <ul className="list-disc pl-4 space-y-1.5 text-xs text-gray-300">
                      {project.highlights.map((highlight, i) => {
                        const [boldPart, ...restParts] = highlight.split(': ');
                        const restText = restParts.join(': '); 
                        
                        return (
                          <li key={i} className="leading-relaxed">
                            {restText ? (
                              <>
                                <strong className="text-white">{boldPart}: </strong>
                                {restText}
                              </>
                            ) : (
                              highlight
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                    {project.tech.map((tech) => (
                      <Badge key={tech} className="bg-white/5 text-gray-300 border-white/10 hover:bg-[#FACC15]/20 hover:text-[#FACC15] hover:border-[#FACC15]/30 transition-colors text-[10px] uppercase tracking-wider">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    {project.links.code && (
                      <Button size="sm" className="bg-white/5 hover:bg-white/10 text-white border border-white/10 flex-1" onClick={() => window.open(project.links.code, '_blank')}>
                        <Github className="w-4 h-4 mr-2" /> Code
                      </Button>
                    )}

                    {project.links.demo && (
                      <Button size="sm" className="bg-[#FACC15] hover:bg-[#e5b800] text-black flex-1" onClick={() => window.open(project.links.demo, '_blank')}>
                        <ExternalLink className="w-4 h-4 mr-2" /> Live Demo
                      </Button>
                    )}

                    

                    {project.links.caseStudy && (
                      <Button size="sm" className="bg-white/5 hover:bg-white/10 text-white border border-white/10 flex-1" onClick={() => window.open(project.links.caseStudy, '_blank')}>
                        <FileText className="w-4 h-4 mr-2" /> Details
                      </Button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* 6th Card: "View More Projects" */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: projects.length * 0.1 }}
              viewport={{ once: true }}
              className="bg-transparent border-2 border-dashed border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center text-center hover:border-[#FACC15]/30 transition-all duration-300 group min-h-[400px]"
            >
              <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#FACC15]/10 transition-all duration-300">
                <Github className="w-8 h-8 text-gray-400 group-hover:text-[#FACC15] transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">More Projects</h3>
              <p className="text-gray-400 text-sm mb-8 max-w-[250px]">
                Check out my GitHub for more academic projects, mini-apps, and open-source contributions.
              </p>
              <Button 
                variant="outline" 
                className="bg-white/5 text-white border-white/20 hover:bg-[#FACC15] hover:text-black hover:border-[#FACC15] transition-all duration-300 group-hover:-translate-y-1"
                onClick={() => window.open('https://github.com/poornabhagya', '_blank')}
              >
                View GitHub <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}