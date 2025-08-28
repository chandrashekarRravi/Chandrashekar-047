"use client";
import { cn } from "@/lib/utils";
import { CheckCircle, TrendingUp, Video, Globe } from "lucide-react";
import { motion } from "framer-motion";

export interface BentoItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  status?: string;
  tags?: string[];
  meta?: string;
  cta?: string;
  colSpan?: number;
  hasPersistentHover?: boolean;
}

interface BentoGridProps { items: BentoItem[] }

function BentoGrid({ items }: BentoGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 p-4 max-w-7xl mx-auto">
      {items.map((item, index) => (
        <motion.div 
          key={index}
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          whileInView={{ 
            opacity: 1, 
            y: 0, 
            scale: 1
          }}
          transition={{
            duration: 0.6,
            delay: index * 0.1
          }}
          viewport={{ once: false, margin: "-50px" }}
          whileHover={{ 
            y: -8, 
            scale: 1.03,
            rotateX: 5,
            transition: { duration: 0.3 }
          }}
          className={cn(
            "group relative p-4 rounded-xl overflow-hidden transition-all duration-300",
            "border border-gray-100/80 dark:border-white/10 bg-white dark:bg-black",
            "hover:shadow-lg hover:shadow-primary/10",
            item.colSpan === 2 ? "md:col-span-2" : "col-span-1"
          )}
          style={{ 
            transformStyle: "preserve-3d",
            perspective: "1000px"
          }}
        >
          <motion.div 
            className="relative flex flex-col space-y-3"
            whileInView={{ 
              rotateY: [0, 5, 0]
            }}
            transition={{ duration: 1, delay: index * 0.1 }}
            viewport={{ once: false }}
          >
            <motion.div 
              className="flex items-center justify-between"
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ 
                x: 0, 
                opacity: 1
              }}
              transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
              viewport={{ once: false }}
            >
              <motion.div 
                className="w-8 h-8 flex items-center justify-center bg-black/5 dark:bg-white/10 rounded-lg"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                {item.icon}
              </motion.div>
              <motion.span 
                className="text-xs px-2 py-1 rounded-lg bg-black/5 dark:bg-white/10"
                initial={{ scale: 0 }}
                whileInView={{ 
                  scale: 1
                }}
                transition={{ delay: index * 0.1 + 0.3, duration: 0.3 }}
                viewport={{ once: false }}
              >
                {item.status || "Active"}
              </motion.span>
            </motion.div>
            
            <motion.div 
              className="space-y-2"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ 
                y: 0, 
                opacity: 1
              }}
              transition={{ delay: index * 0.1 + 0.4, duration: 0.5 }}
              viewport={{ once: false }}
            >
              <h3 className="font-medium text-gray-900 dark:text-gray-100">
                {item.title}
                <span className="ml-2 text-xs text-gray-500">{item.meta}</span>
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {item.description}
              </p>
            </motion.div>
            
            <motion.div 
              className="flex items-center justify-between mt-2"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ 
                y: 0, 
                opacity: 1
              }}
              transition={{ delay: index * 0.1 + 0.5, duration: 0.5 }}
              viewport={{ once: false }}
            >
              <div className="flex gap-2 text-xs text-gray-500">
                {item.tags?.map((tag, i) => (
                  <motion.span 
                    key={i} 
                    className="px-2 py-1 rounded-md bg-black/5 dark:bg-white/10"
                    initial={{ scale: 0, rotate: -10 }}
                    whileInView={{ 
                      scale: 1, 
                      rotate: 0
                    }}
                    transition={{ 
                      delay: index * 0.1 + 0.6 + i * 0.1, 
                      duration: 0.3,
                      type: "spring",
                      stiffness: 200
                    }}
                    viewport={{ once: false }}
                    whileHover={{ scale: 1.1, rotate: 2 }}
                  >
                    #{tag}
                  </motion.span>
                ))}
              </div>
              <motion.span 
                className="text-xs opacity-0 group-hover:opacity-100 transition"
                whileInView={{ 
                  x: [10, 0]
                }}
                transition={{ delay: index * 0.1 + 0.7, duration: 0.5 }}
                viewport={{ once: false }}
              >
                {item.cta || "Explore →"}
              </motion.span>
            </motion.div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}

export { BentoGrid };

const itemsSample: BentoItem[] = [
  { title: "Analytics Dashboard", meta: "v2.4.1", description: "Real-time metrics", icon: <TrendingUp className="w-4 h-4 text-blue-500" />, status: "Live", tags: ["Statistics","Reports"], colSpan: 2 },
  { title: "Task Manager", meta: "84 completed", description: "Workflow automation", icon: <CheckCircle className="w-4 h-4 text-emerald-500" />, status: "Updated", tags: ["Productivity"] },
  { title: "Media Library", meta: "12GB used", description: "Cloud storage", icon: <Video className="w-4 h-4 text-purple-500" />, tags: ["Storage"], colSpan: 2 },
  { title: "Global Network", meta: "6 regions", description: "Edge computing", icon: <Globe className="w-4 h-4 text-sky-500" />, status: "Beta", tags: ["Infrastructure"] }
];

function BentoGridDemo() { 
  return <BentoGrid items={itemsSample} /> 
}

export { BentoGridDemo };