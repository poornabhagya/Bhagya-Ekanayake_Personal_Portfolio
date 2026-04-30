import { motion } from "motion/react";
import { Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

export function Testimonials() {
  const testimonials = [
    {
      quote: "Outstanding developer with exceptional problem-solving skills. Delivered complex features ahead of schedule while maintaining code quality.",
      author: "John Smith",
      position: "Senior Engineering Manager",
      company: "Nenasewana (Pvt) Ltd"
    },
    {
      quote: "A natural team player who brings both technical expertise and collaborative spirit. Their work on optimizing our database queries saved us thousands in infrastructure costs.",
      author: "Sarah Johnson",
      position: "Product Lead",
      company: "Tech Solutions Inc"
    },
    {
      quote: "Impressive ability to quickly learn new technologies and apply them effectively. Their contributions to our React codebase set new standards for the team.",
      author: "Michael Chen",
      position: "CTO",
      company: "Innovation Labs"
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-12 text-center">
            Client <span className="text-[#FACC15]">Testimonials</span>
          </h2>

          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-8 md:p-12">
                    <Quote className="w-12 h-12 text-[#FACC15] mb-6" />

                    <p className="text-xl md:text-2xl text-gray-300 mb-8 italic">
                      "{testimonial.quote}"
                    </p>

                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-full bg-[#FACC15]/20 flex items-center justify-center">
                        <span className="text-2xl font-bold text-[#FACC15]">
                          {testimonial.author.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg">{testimonial.author}</h4>
                        <p className="text-gray-400">{testimonial.position}</p>
                        <p className="text-gray-500 text-sm">{testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="bg-gray-800 border-gray-700 hover:bg-gray-700" />
            <CarouselNext className="bg-gray-800 border-gray-700 hover:bg-gray-700" />
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
}
