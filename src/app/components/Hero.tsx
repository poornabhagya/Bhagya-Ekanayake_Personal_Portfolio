import { motion, Variants } from "framer-motion";
import { Button } from "./ui/button";
import { Download, ArrowRight } from "lucide-react";
// propic2 path එක හරියටම තියාගන්න
import propic2 from "./src/propic2.jpg"; 
import resumePdf from "./src/documents/Bhagya_Ekanayake_Resume.pdf";
import { SiReact, SiPython, SiTypescript, SiDjango } from "react-icons/si";
import { FaAws } from "react-icons/fa";

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const customEase = "easeOut";

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0, filter: "blur(5px)" },
    visible: { 
      y: 0, 
      opacity: 1, 
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: customEase } 
    },
  };

  const floatVariants: Variants = {
    animate: {
      y: [0, -12, 0],
      transition: { duration: 5, repeat: Infinity, ease: "easeInOut" }
    }
  };

  return (
    // Section එක හැමතිස්සෙම මැදට වෙන්න flex justify-center පාවිච්චි කළා
    <section className="relative min-h-[100svh] w-full flex items-center justify-center py-10 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#030303]">
      
      {/* Background elements */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.1]" 
        style={{
          backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(ellipse 60% 50% at 50% 50%, #000 70%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 60% 50% at 50% 50%, #000 70%, transparent 100%)'
        }}
      ></div>
      <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#FACC15]/5 rounded-full blur-[150px] -z-10"></div>
      <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -z-10"></div>

      {/* Grid gap එක device එකෙන් device එකට adjust වෙනවා */}
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-[1.15fr_0.85fr] gap-6 sm:gap-10 lg:gap-16 items-center relative z-10 overflow-visible">
        
        {/* TEXT CONTENT */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="order-2 lg:order-1 text-center lg:text-left flex flex-col items-center lg:items-start w-full"
        >
          <motion.div variants={itemVariants} className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-6 lg:mb-8 bg-white/5 backdrop-blur-md border border-white/5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full shadow-lg">
            <span className="relative flex h-2 sm:h-2.5 w-2 sm:w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FACC15] opacity-50"></span>
              <span className="relative inline-flex rounded-full h-2 sm:h-2.5 w-2 sm:w-2.5 bg-[#FACC15]"></span>
            </span>
            <span className="text-gray-400 text-[10px] sm:text-xs font-mono tracking-wider uppercase">Open for opportunities</span>
          </motion.div>

          {/* Heading එක size 4කට adjust වෙනවා (Mobile -> Tablet -> Laptop -> Desktop) */}
          <motion.h1 variants={itemVariants} className="text-[2.2rem] sm:text-5xl md:text-6xl lg:text-[4.5rem] xl:text-[5rem] font-extrabold mb-3 sm:mb-4 lg:mb-6 text-white leading-[1.15] sm:leading-[1.1] lg:leading-[1.05] tracking-tight">
            Building <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FACC15] via-[#ffeda1] to-[#FACC15]">
              modern web
            </span> solutions.
          </motion.h1>
          
          <motion.p variants={itemVariants} className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 mb-6 sm:mb-8 lg:mb-10 max-w-xl font-normal leading-relaxed">
            Hi, I'm <strong className="text-[#FACC15] font-semibold">Bhagya Ekanayake</strong>. A Full-Stack Developer & Associate Software Engineer transforming complex ideas into elegant, production-ready code.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-5 w-full sm:w-auto">
            <Button 
              className="bg-[#FACC15] w-full sm:w-auto hover:bg-white text-black font-bold px-5 py-4 sm:px-6 sm:py-5 lg:px-8 lg:py-6 text-sm sm:text-base rounded-xl sm:rounded-2xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(250,204,21,0.4)] hover:-translate-y-1 group"
              onClick={() => window.open(resumePdf, '_blank')}
            >
              <Download className="w-4 h-4 sm:w-5 sm:h-5 mr-2 transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-110" />
              Download Resume
            </Button>
            
            <Button
              variant="outline"
              className="bg-transparent w-full sm:w-auto text-white border-white/20 hover:bg-white hover:text-black hover:border-white px-5 py-4 sm:px-6 sm:py-5 lg:px-8 lg:py-6 text-sm sm:text-base rounded-xl sm:rounded-2xl transition-all duration-300 group font-medium backdrop-blur-sm shadow-sm"
              onClick={scrollToContact}
            >
              Let's Build
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1.5" />
            </Button>
          </motion.div>
        </motion.div>

        {/* PROFILE IMAGE & ORBITAL DECORATIONS */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.3, ease: customEase }}
          className="order-1 lg:order-2 flex justify-center lg:justify-end relative perspective-[1000px] mt-2 lg:mt-0 w-full"
        >
          <div className="relative">
            
            {/* Orbital Wrapper - හැම size එකටම dynamic විදිහට හැදෙනවා */}
            <div className="relative flex items-center justify-center w-[240px] h-[240px] sm:w-[320px] sm:h-[320px] md:w-[380px] md:h-[380px] lg:w-[450px] lg:h-[450px] xl:w-[500px] xl:h-[500px] pointer-events-none overflow-visible">
              
              {/* Main Image Container */}
              <div className="w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-[400px] xl:h-[400px] rounded-full p-1 sm:p-1.5 bg-gradient-to-br from-white/10 via-transparent to-[#FACC15]/20 backdrop-blur-sm border border-white/5 shadow-2xl relative z-10 pointer-events-auto overflow-hidden">
                <img
                  src={propic2}
                  alt="Bhagya Ekanayake"
                  className="w-full h-full object-cover rounded-full grayscale-[10%] hover:grayscale-0 transition-all duration-700"
                />
              </div>

              {/* TECH COINS - Sizes & Positions dynamic කළා */}
              <motion.div variants={floatVariants} animate="animate" transition={{ delay: 0.4 }} className="absolute top-0 left-0 lg:top-6 lg:left-6 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 flex items-center justify-center bg-white/5 backdrop-blur-xl rounded-full border border-white/10 text-[#61DAFB] shadow-xl z-20 hover:scale-110 transition-transform pointer-events-auto">
                <SiReact className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
              </motion.div>

              <motion.div variants={floatVariants} animate="animate" transition={{ delay: 0.7 }} className="absolute top-0 right-0 lg:top-6 lg:right-6 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 flex items-center justify-center bg-white/5 backdrop-blur-xl rounded-full border border-white/10 text-[#3178C6] shadow-xl z-20 hover:scale-110 transition-transform pointer-events-auto">
                <SiTypescript className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
              </motion.div>

              <motion.div variants={floatVariants} animate="animate" transition={{ delay: 1.0 }} className="absolute top-[40%] -left-3 sm:-left-5 lg:-left-6 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 flex items-center justify-center bg-white/5 backdrop-blur-xl rounded-full border border-white/10 text-[#3776AB] shadow-xl z-20 hover:scale-110 transition-transform pointer-events-auto">
                <SiPython className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
              </motion.div>

              <motion.div variants={floatVariants} animate="animate" transition={{ delay: 1.6 }} className="absolute top-[40%] -right-3 sm:-right-5 lg:-right-6 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 flex items-center justify-center bg-white/5 backdrop-blur-xl rounded-full border border-white/10 text-[#44B78B] shadow-xl z-20 hover:scale-110 transition-transform pointer-events-auto">
                <SiDjango className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" /> 
              </motion.div>

              <motion.div variants={floatVariants} animate="animate" transition={{ delay: 1.3 }} className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 lg:bottom-10 lg:right-8 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 flex items-center justify-center bg-white/5 backdrop-blur-xl rounded-full border border-white/10 text-[#FF9900] shadow-xl z-20 hover:scale-110 transition-transform pointer-events-auto">
                <FaAws className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
              </motion.div>

            </div>
            
            {/* Terminal Box - Screen එක අනුව Scale වෙනවා */}
            <motion.div 
              variants={floatVariants}
              animate="animate"
              className="absolute -bottom-3 -left-4 sm:-bottom-6 sm:-left-6 lg:-bottom-8 lg:-left-12 scale-[0.65] sm:scale-75 md:scale-90 lg:scale-100 origin-bottom-left bg-[#09090b]/95 backdrop-blur-2xl border border-white/10 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] w-64 sm:w-72 md:w-80 z-30 overflow-hidden"
              transition={{ delay: 0.1 }}
            >
              <div className="flex items-center justify-between px-4 py-2.5 bg-white/5 border-b border-white/5">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]"></div>
                </div>
                <div className="text-[11px] text-gray-500 font-mono tracking-wider">hero.ts</div>
              </div>
              <div className="p-4 md:p-5 font-mono text-[12px] md:text-[13px] leading-relaxed">
                <p><span className="text-[#c678dd]">const</span> <span className="text-[#61afef]">developer</span> <span className="text-[#56b6c2]">=</span> {"{"}</p>
                <p className="ml-4 text-gray-400">name: <span className="text-[#98c379]">"Bhagya"</span>,</p>
                <p className="ml-4 text-gray-400">role: <span className="text-[#98c379]">"Full-Stack Developer"</span>,</p>
                <p className="ml-4 text-gray-400">status: <span className="text-[#98c379]">"Available"</span></p>
                <p className="text-gray-400">{"}"};</p>
              </div>
            </motion.div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}