import { Github, Linkedin} from "lucide-react";
import { SiX } from "react-icons/si";

export function Footer() {
  return (
    <footer className="border-t border-gray-800 py-12 px-6 bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-gray-400 flex items-center gap-2">
            © 2026 Bhagya Ekanayake. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/poornabhagya"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#FACC15] transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="www.linkedin.com/in/bhagyaekanayake"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#FACC15] transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://x.com/poorna_bhagya"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#FACC15] transition-colors"
              aria-label="Twitter"
            >
              <SiX className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
