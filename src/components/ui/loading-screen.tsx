import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsComplete(true);
          setTimeout(() => onLoadingComplete(), 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 150);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  const containerVariants = {
    initial: { opacity: 1 },
    exit: {
      opacity: 0,
      scale: 0.8
    }
  };

  const logoVariants = {
    initial: { scale: 0.5, opacity: 0 },
    animate: {
      scale: 1,
      opacity: 1
    }
  };

  const dotVariants = {
    initial: { scale: 0 },
    animate: {
      scale: [0, 1.2, 1]
    }
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-background via-background to-muted"
      variants={containerVariants}
      initial="initial"
      animate={isComplete ? "exit" : "initial"}
    >
      <div className="flex flex-col items-center space-y-8">
        {/* Logo Animation */}
        <motion.div
          variants={logoVariants}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center shadow-2xl">
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 2,
                repeat: Infinity
              }}
              className="w-8 h-8 border-2 border-white border-t-transparent rounded-full"
            />
          </div>
        </motion.div>

        {/* Loading Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center space-y-2"
        >
          <h2 className="text-2xl font-semibold text-foreground">Loading</h2>
          <p className="text-sm text-muted-foreground">Preparing your experience...</p>
        </motion.div>

        {/* Animated Dots */}
        <div className="flex space-x-2">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              variants={dotVariants}
              initial="initial"
              animate="animate"
              transition={{ 
                delay: i * 0.2,
                duration: 0.6,
                repeat: Infinity,
                repeatType: "loop" as const
              }}
              className="w-2 h-2 bg-primary rounded-full"
            />
          ))}
        </div>

        {/* Progress Bar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="w-64 h-1 bg-muted rounded-full overflow-hidden"
        >
          <motion.div
            className="h-full bg-gradient-to-r from-primary to-primary/60 rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        {/* Progress Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-xs text-muted-foreground font-mono"
        >
          {Math.round(progress)}%
        </motion.p>
      </div>

      {/* Background Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, -100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default LoadingScreen;