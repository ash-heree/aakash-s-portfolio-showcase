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
        scale: 1.03,
        y: -4,
        transition: { duration: 0.25, ease: "easeOut" },
      }}
      className={cn(
        "bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-xl transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20 hover:border-cyan-400/30 hover:bg-white/15",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedCard;
