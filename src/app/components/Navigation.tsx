import { Code2 } from "lucide-react";
// import { Button } from "./ui/button"; 

export function Navigation() {
  // ඔයාගේ Social Media Links ටික මෙතනින් හදාගන්න පුළුවන්
  const socialLinks = [
    { 
      name: "LinkedIn", 
      url: "www.linkedin.com/in/bhagyaekanayake" // <-- මෙතනට ඔයාගේ ඇත්ත LinkedIn ලින්ක් එක දාන්න
    },
    { 
      name: "GitHub", 
      url: "https://github.com/poornabhagya" // <-- ඔයාගේ අලුත් GitHub එක
    },
    { 
      name: "X", 
      url: "https://x.com/poorna_bhagya" // <-- මෙතනට ඔයාගේ X/Twitter ලින්ක් එක දාන්න
    }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#121212]/95 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2 text-[#FACC15]">
          <Code2 className="w-8 h-8" />
          <span className="font-bold text-xl">Bhagya Ekanayake</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {socialLinks.map((item) => (
            <a
              key={item.name}
              href={item.url}
              target="_blank" // අලුත් Tab එකක open වෙන්න
              rel="noopener noreferrer" // Security එකට හොඳයි
              className="text-gray-300 hover:text-[#FACC15] transition-colors capitalize"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}