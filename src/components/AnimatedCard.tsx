import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const AnimatedCard = ({ children, className = "", delay = 0 }: AnimatedCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.2 },
      }}
      className={cn(
        "bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-xl transition-shadow duration-300 hover:shadow-2xl hover:shadow-accent/10 hover:border-white/30",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedCard;
