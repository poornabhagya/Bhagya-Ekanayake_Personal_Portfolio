import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

export function Education() {
  // ඔයාගේ Education විස්තර ටික මෙතන Array එකකට දැම්මා, එතකොට Code එක ගොඩක් Clean
  const educationData = [
    {
      title: "BSc (Hons) in Information Technology",
      institution: "Sri Lanka Institute of Information Technology (SLIIT)",
      date: "Graduated",
    },
    {
      title: "BICT (Hons) in Information Communication Technology",
      institution: "South Eastern University of Sri Lanka (SEUSL)",
      date: "2022 - Present",
    },
    {
      title: "Diploma in Human Resources Management",
      institution: "IMBS Green Campus - Sri Lanka",
      date: "2020 - 2021",
    },
    {
      title: "St. Sylvester's College, Kandy",
      institution: "GCE Advanced Level & Ordinary Level",
      date: "2007 - 2020",
    },
  ];

  return (
    <section className="py-24 px-6 bg-[#121212]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-center text-white">
            <span className="text-[#FACC15]">Education</span>
          </h2>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* මැදින් යන ප්‍රධාන Line එක (Desktop වලදී මැද, Mobile වලදී වම් පැත්තේ) */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-800 md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {educationData.map((edu, index) => {
              // එකක් වමට, එකක් දකුණට යන්න හදන logic එක
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative flex flex-col md:flex-row items-center justify-between w-full"
                >
                  {/* Desktop Layout - Left Side */}
                  <div className={`hidden md:block w-5/12 ${isLeft ? "text-right pr-12" : "pl-12"}`}>
                    {isLeft ? (
                      <EducationCard edu={edu} />
                    ) : (
                      <span className="text-[#FACC15] font-bold tracking-wide">{edu.date}</span>
                    )}
                  </div>

                  {/* Center Icon */}
                  <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 w-12 h-12 bg-[#1a1a1a] border-4 border-[#FACC15] rounded-full z-10 flex items-center justify-center shadow-[0_0_15px_rgba(250,204,21,0.2)]">
                    <GraduationCap className="w-5 h-5 text-[#FACC15]" />
                  </div>

                  {/* Desktop Layout - Right Side */}
                  <div className={`hidden md:block w-5/12 ${isLeft ? "pl-12 text-left" : "pr-12 text-right"}`}>
                    {isLeft ? (
                      <span className="text-[#FACC15] font-bold tracking-wide">{edu.date}</span>
                    ) : (
                      <EducationCard edu={edu} />
                    )}
                  </div>

                  {/* Mobile Layout (Screens කුඩා වෙද්දී) */}
                  <div className="md:hidden w-full pl-20 pb-4">
                    <span className="inline-block text-[#FACC15] font-bold text-sm mb-2">{edu.date}</span>
                    <EducationCard edu={edu} />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

// Card එක සඳහා වෙනම හදපු පුංචි Component එකක් (කෝඩ් එක අඩු කරන්න)
function EducationCard({ edu }) {
  return (
    <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-[#FACC15]/50 transition-all hover:-translate-y-1 hover:shadow-lg w-full text-left">
      <h3 className="text-xl font-extrabold text-white mb-2 leading-snug">
        {edu.title}
      </h3>
      {edu.institution && (
        <p className="text-gray-400 font-medium text-sm">
          {edu.institution}
        </p>
      )}
    </div>
  );
}