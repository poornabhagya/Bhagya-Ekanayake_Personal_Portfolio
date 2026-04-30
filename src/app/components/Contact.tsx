import { motion, AnimatePresence } from "framer-motion"; // AnimatePresence එකතු කළා
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Mail, Linkedin, Github, ExternalLink, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { SiX } from "react-icons/si";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  // Status message එක පාලනය කිරීමට අලුත් state එක
  const [status, setStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null);
  
  const [formData, setFormData] = useState({
    from_name: "",
    reply_to: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null); // අලුතින් message එකක් යවද්දී පරණ status එක අයින් කරන්න

    // --- මෙතනට ඔයාගේ IDs ටික ඇතුළත් කරන්න ---
    const SERVICE_ID = "service_pdpo0al";
    const MAIN_TEMPLATE_ID = "template_0pfsc4d"; 
    const AUTO_REPLY_TEMPLATE_ID = "template_mdhpvic"; 
    const PUBLIC_KEY = "YBCYdlbes982oMCWj";

    try {
      // 1. ඔයාට Email එක එවන එක
      await emailjs.sendForm(
        SERVICE_ID,
        MAIN_TEMPLATE_ID,
        formRef.current!,
        PUBLIC_KEY
      );

      // 2. එවපු කෙනාට Auto-Reply එකක් යවන එක
      await emailjs.send(
        SERVICE_ID,
        AUTO_REPLY_TEMPLATE_ID,
        {
          from_name: formData.from_name,
          reply_to: formData.reply_to,
          message: formData.message,
        },
        PUBLIC_KEY
      );

      // සාර්ථක වුණාම ලස්සන success message එකක් පෙන්වන්න
      setStatus({ 
        type: 'success', 
        message: "Thank you! Your message has been sent successfully." 
      });
      
      setFormData({ from_name: "", reply_to: "", message: "" });

      // තත්පර 5කට පස්සේ message එක auto අයින් වෙන්න (optional)
      setTimeout(() => setStatus(null), 5000);

    } catch (error) {
      console.error("EmailJS Error:", error);
      // Error එකක් ආවොත් ඒක පෙන්වන්න
      setStatus({ 
        type: 'error', 
        message: "Oops! Something went wrong. Please try again later." 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-12 text-center">
            Let's Build <span className="text-[#FACC15]">Something</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
              <p className="text-gray-400 mb-8">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                Feel free to reach out!
              </p>

              <div className="space-y-4 mb-8">
                <a href="mailto:poornabhagy@gmail.com" className="flex items-center gap-4 text-gray-300 hover:text-[#FACC15] transition-colors">
                  <div className="bg-gray-800 p-3 rounded-lg"><Mail className="w-6 h-6" /></div>
                  <span>poornabhagy@gmail.com</span>
                </a>
                <a href="https://linkedin.com/in/bhagyaekanayake" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-[#FACC15] transition-colors">
                  <div className="bg-gray-800 p-3 rounded-lg"><Linkedin className="w-6 h-6" /></div>
                  <span>LinkedIn Profile</span>
                </a>
                <a href="https://github.com/poornabhagya" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-[#FACC15] transition-colors">
                  <div className="bg-gray-800 p-3 rounded-lg"><Github className="w-6 h-6" /></div>
                  <span>GitHub Profile</span>
                </a>
                <a href="https://x.com/poorna_bhagya" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-[#FACC15] transition-colors">
                  <div className="bg-gray-800 p-3 rounded-lg"><SiX className="w-6 h-6" /></div>
                  <span>X Profile</span>
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-8">
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="from_name">Name</Label>
                  <Input
                    id="from_name"
                    name="from_name"
                    value={formData.from_name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="mt-2 bg-gray-800 border-gray-700 focus:border-[#FACC15]"
                  />
                </div>

                <div>
                  <Label htmlFor="reply_to">Email</Label>
                  <Input
                    id="reply_to"
                    name="reply_to"
                    type="email"
                    value={formData.reply_to}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                    className="mt-2 bg-gray-800 border-gray-700 focus:border-[#FACC15]"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    required
                    rows={5}
                    className="mt-2 bg-gray-800 border-gray-700 focus:border-[#FACC15]"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#FACC15] hover:bg-[#e5b800] text-black font-semibold py-6 text-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                  {isSubmitting ? (
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  ) : (
                    <Mail className="w-5 h-5 mr-2" />
                  )}
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>

                {/* Modern Status Message Animation */}
                <AnimatePresence>
                  {status && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      className={`mt-4 p-4 rounded-xl text-sm font-medium flex items-center gap-3 border shadow-sm ${
                        status.type === 'success' 
                          ? 'bg-green-500/10 border-green-500/20 text-green-400' 
                          : 'bg-red-500/10 border-red-500/20 text-red-400'
                      }`}
                    >
                      {status.type === 'success' ? (
                        <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                      ) : (
                        <AlertCircle className="w-5 h-5 flex-shrink-0" />
                      )}
                      {status.message}
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </div>
          </div>

          {/* Hire Me Section */}
          <div className="mt-12 bg-gradient-to-r from-[#FACC15]/20 to-transparent border border-[#FACC15]/30 rounded-lg p-8">
            <div className="flex flex-col md:flex-row items-center md:justify-between gap-6">
              <div className="w-full md:w-auto text-center md:text-left">
                <h3 className="text-2xl font-bold mb-2">Ready to Work Together?</h3>
                <p className="text-gray-400">Available for freelance projects and full-time opportunities</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                <Button
                  size="lg"
                  className="w-full md:w-auto bg-green-600 hover:bg-green-700 text-white font-semibold"
                  onClick={() => window.open("https://www.fiverr.com/poornabhagya", "_blank")}
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Hire on Fiverr
                </Button>
                <Button
                  size="lg"
                  className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold"
                  onClick={() => window.open("https://www.upwork.com/freelancers/~01ff20f2a92e5cca98", "_blank")}
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Hire on Upwork
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}