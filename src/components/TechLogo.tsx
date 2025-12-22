import { motion } from "framer-motion";

const TechLogo = () => {
  return (
    <motion.div
      className="relative w-10 h-10 flex items-center justify-center cursor-pointer"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {/* Outer glow ring - slow pulse */}
      <motion.div
        className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-400/20 to-blue-500/10 blur-sm"
        animate={{
          opacity: [0.4, 0.7, 0.4],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Main logo container */}
      <div className="relative w-full h-full rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center overflow-hidden">
        {/* Animated circuit lines */}
        <svg
          viewBox="0 0 40 40"
          className="w-7 h-7"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Center hexagon node */}
          <motion.path
            d="M20 12L26 16V24L20 28L14 24V16L20 12Z"
            stroke="url(#logoGradient)"
            strokeWidth="1.5"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />

          {/* Inner triangle */}
          <motion.path
            d="M20 15L24 20L20 25L16 20L20 15Z"
            fill="url(#logoGradient)"
            fillOpacity="0.3"
            animate={{
              fillOpacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Top connection line */}
          <motion.line
            x1="20"
            y1="12"
            x2="20"
            y2="6"
            stroke="url(#logoGradient)"
            strokeWidth="1.5"
            strokeLinecap="round"
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          />

          {/* Top node */}
          <motion.circle
            cx="20"
            cy="5"
            r="2"
            fill="url(#logoGradient)"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          />

          {/* Bottom left connection */}
          <motion.line
            x1="14"
            y1="24"
            x2="8"
            y2="30"
            stroke="url(#logoGradient)"
            strokeWidth="1.5"
            strokeLinecap="round"
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />

          {/* Bottom left node */}
          <motion.circle
            cx="7"
            cy="31"
            r="2"
            fill="url(#logoGradient)"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />

          {/* Bottom right connection */}
          <motion.line
            x1="26"
            y1="24"
            x2="32"
            y2="30"
            stroke="url(#logoGradient)"
            strokeWidth="1.5"
            strokeLinecap="round"
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5,
            }}
          />

          {/* Bottom right node */}
          <motion.circle
            cx="33"
            cy="31"
            r="2"
            fill="url(#logoGradient)"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5,
            }}
          />

          {/* Gradient definition */}
          <defs>
            <linearGradient
              id="logoGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#67e8f9" />
              <stop offset="50%" stopColor="#8ECFFF" />
              <stop offset="100%" stopColor="#60a5fa" />
            </linearGradient>
          </defs>
        </svg>

        {/* Rotating subtle glow */}
        <motion.div
          className="absolute inset-0 bg-gradient-conic from-cyan-400/0 via-cyan-400/10 to-cyan-400/0"
          animate={{ rotate: 360 }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ opacity: 0.5 }}
        />
      </div>
    </motion.div>
  );
};

export default TechLogo;
