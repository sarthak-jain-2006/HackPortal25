import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import InitialSubmission from "./InitialSubmission";
import FinalSubmission from "./FinalSubmission";

// Drizzle effect function
const createDrizzleEffect = () => {
  const drizzleContainer = document.createElement("div");
  drizzleContainer.style.position = "fixed";
  drizzleContainer.style.top = "0";
  drizzleContainer.style.left = "0";
  drizzleContainer.style.width = "100%";
  drizzleContainer.style.height = "100%";
  drizzleContainer.style.pointerEvents = "none";
  drizzleContainer.style.zIndex = "1000";
  document.body.appendChild(drizzleContainer);

  for (let i = 0; i < 20; i++) {
    const drop = document.createElement("div");
    drop.style.position = "absolute";
    drop.style.width = "2px";
    drop.style.height = "10px";
    drop.style.background =
      "linear-gradient(to bottom, hsl(180 100% 50%), transparent)";
    drop.style.left = Math.random() * 100 + "%";
    drop.style.top = "-10px";
    drop.style.animation = `drizzleFall 1s linear forwards`;
    drop.style.animationDelay = Math.random() * 0.5 + "s";
    drizzleContainer.appendChild(drop);
  }

  setTimeout(() => {
    document.body.removeChild(drizzleContainer);
  }, 2000);
};

const HackPortal = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'initial' | 'final'>('home');

  const handleNavigate = (page: 'home' | 'initial' | 'final') => {
    createDrizzleEffect();
    setTimeout(() => setCurrentPage(page), 300);
  };

  if (currentPage === 'initial') {
    return <InitialSubmission onBack={() => handleNavigate('home')} />;
  }

  if (currentPage === 'final') {
    return <FinalSubmission onBack={() => handleNavigate('home')} />;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative">
      {/* Animated Title */}
      <motion.div
        className="relative mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="relative z-10 flex items-center justify-center font-space text-4xl md:text-6xl font-bold">
          <motion.span
            className="text-transparent bg-gradient-primary bg-clip-text glow-text"
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 1.5,
              delay: 0.5,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            HACK
          </motion.span>
          <motion.span
            className="text-transparent bg-gradient-secondary bg-clip-text glow-text mx-2"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 1.5,
              delay: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            ⚡
          </motion.span>
          <motion.span
            className="text-transparent bg-gradient-accent bg-clip-text glow-text"
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 1.5,
              delay: 1.1,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            PORTAL
          </motion.span>
        </div>
        <motion.p
          className="text-center text-muted-foreground font-space text-lg mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          Submit your hackathon projects here
        </motion.p>
      </motion.div>

      {/* Navigation Buttons */}
      <motion.div
        className="flex flex-col gap-6 mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.8 }}
      >
        <Button
          className="px-12 py-6 text-xl font-space tracking-wider bg-card/50 border-2 border-primary/30 rounded-xl text-primary hover:bg-primary/10 hover:border-primary hover:shadow-primary transition-all duration-300 backdrop-blur-sm min-w-[300px]"
          onClick={() => handleNavigate('initial')}
        >
          📋 INITIAL SUBMISSION
        </Button>
        
        <Button
          className="px-12 py-6 text-xl font-space tracking-wider bg-card/50 border-2 border-secondary/30 rounded-xl text-secondary hover:bg-secondary/10 hover:border-secondary hover:shadow-secondary transition-all duration-300 backdrop-blur-sm min-w-[300px]"
          onClick={() => handleNavigate('final')}
        >
          🚀 FINAL SUBMISSION
        </Button>
      </motion.div>

      {/* Floating Particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-primary rounded-full opacity-30"
          style={{
            left: `${10 + i * 12}%`,
            top: `${20 + Math.random() * 60}%`,
          }}
          animate={{
            y: [-20, 20, -20],
            opacity: [0.3, 0.8, 0.3],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Background Glow Effect */}
      <div className="absolute inset-0 bg-gradient-hero opacity-10 blur-3xl -z-10" />
    </div>
  );
};

export default HackPortal;