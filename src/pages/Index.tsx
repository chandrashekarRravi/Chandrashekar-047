<<<<<<< HEAD
import { useState } from 'react';
import { Download, Instagram, MessageCircle, Mail, ExternalLink, Github, Linkedin, MapPin, Clock, Users, Star, Code, Zap, Briefcase, Calendar, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const techStacks = [
  'React.js', 'Node.js', 'Express.js', 'MongoDB',
  'Tailwind CSS', 'Next.js', 'JWT', 'Cloudinary',
  'REST APIs', 'Git/GitHub', 'Vite', 'Docker (Basics)', 'Postman', 'Vercel'
];

const services = [
  'Web App Development', 'REST API Development', 'Responsive UI/UX',
  'Authentication & Authorization', 'Cloud Deployment', 'No-Code Solutions', 'Database Design'
];

=======
import { useState, useRef, useEffect } from 'react';
import { Download, Instagram, MessageCircle, Mail, ExternalLink, Github, Linkedin, MapPin, Clock, Users, Star, Code, Zap, Briefcase, Calendar, X, Mouse, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, useScroll, useTransform, AnimatePresence, useMotionValue, useSpring, useMotionValueEvent } from 'framer-motion';

const techStacks = [
  'HTML5', 'CSS3', 'JavaScript (ES6+)', 'React.js', 'Next.js (Basics)', 'TypeScript', 'Tailwind CSS', 'Bootstrap', 'Vite', 'Material UI',
  'Node.js', 'Express.js', 'RESTful APIs', 'JWT Authentication', 'MongoDB', 'Mongoose',
  'Git', 'GitHub', 'Postman', 'Vercel', 'Netlify', 'CI/CD (GitHub Actions)',
  'SEO & Optimization', 'AI Tools & Productivity', 'Clean Architecture', 'Swagger'
];

const services = [
  'Web App Development', 'REST API Development', 'Responsive UI/UX', 'SEO optimization',
  'Authentication & Authorization', 'Cloud Deployment', 'No-Code Solutions', 'Database Design'
];

const allServices = [...services, ...services, ...services, ...services];

>>>>>>> 37aa8bb ( latest changes)
const workflowSteps = [
  'Goals & Objectives',
  'Research',
  'Wireframe',
  'Development',
  'Testing',
  'Deployment'
];

const testimonials = [
  {
    name: 'Sai Abhishek Mishra',
    company: 'Bluestock Fintech',
    text: 'Exceptional teamwork skills and deep understanding of API security and performance optimization. Delivered outstanding results.'
  },
  {
    name: 'TechForge Club Team',
    company: 'JNNCE',
    text: 'Outstanding leadership and mentoring abilities. Successfully launched multiple projects with great impact.'
  }
];

const experiences = [
  {
<<<<<<< HEAD
    company:'Freelance Full Stack Developer',
    role:'Self-Employed / Independent',
    period:'Jan 2024 - Present',
    achievements:[
      'Delivered end-to-end web solutions for startups, universities, and government clients using React.js, Node.js, MongoDB, and Tailwind CSS.',
      'Built and deployed production-ready applications with REST APIs, authentication, responsive UI, and SEO optimization.',
'Worked directly with clients to gather requirements and deliver scalable, high-performance solutions on time'
=======
    company: 'Freelance Full Stack Developer',
    role: 'Self-Employed / Independent',
    period: 'Jan 2024 - Present',
    achievements: [
      'Delivered end-to-end web solutions for startups, universities, and government clients using React.js, Node.js, MongoDB, and Tailwind CSS.',
      'Built and deployed production-ready applications with REST APIs, authentication, responsive UI, and SEO optimization.',
      'Worked directly with clients to gather requirements and deliver scalable, high-performance solutions on time.'
    ]
  },
  {
    company: 'TechForge Club, JNNCE',
    role: 'Core Member & Development Team Lead',
    period: 'Mar 2024 – Present',
    location: 'Shimoga, India',
    achievements: [
      'Contributed to project acquisition and task distribution across 8+ initiatives, ensuring smooth execution.',
      'Coordinated with faculty and student teams to bring real-world projects, expanding collaboration opportunities.',
      'Led development of the Krishik Agri Business Hub, launching 12+ features used by over 500 members.',
      'Mentored 6 developers in Git workflows, database design, and API integration, reducing onboarding time by 40%.'
    ]
  },
  {
    company: 'YUGMA Techfest 1.0 (IEEE JNNCE)',
    role: 'Event Organizer',
    period: 'Aug 2025',
    location: 'JNNCE,Shimoga',
    achievements: [
      'Organized and hosted a 3-day state-level technical symposium including a 24-hour hackathon.',
      'Coordinated event logistics, sponsorships, and team participation for 100+ attendees.'
>>>>>>> 37aa8bb ( latest changes)
    ]
  },
  {
    company: 'Logisoft IT Services Pvt. Ltd. (Logisoft Technologies Inc.)',
    role: 'React Developer Intern',
<<<<<<< HEAD
    period: 'May 2025 – Present',
=======
    period: 'Sep 2025 – Feb 2026',
>>>>>>> 37aa8bb ( latest changes)
    location: 'Remote',
    achievements: [
      'Contributing to React.js projects focusing on front-end development and UI optimization using Tailwind CSS and Bootstrap.',
      'Collaborating in an Agile environment with Git and GitFlow for version control, improving team workflow and deployment efficiency.',
<<<<<<< HEAD
      'Implemented reusable components and modular architecture, enhancing code maintainability and reducing feature rollout time by20%.'
    ]
  },
  {
    company: 'TechForge Club, JNNCE',
    role: 'Development Team Lead',
    period: 'Mar 2025 – Present',
    location: 'Shimoga, India',
    achievements: [
      'Led development of website and e-commerce platform',
      'Launched 12+ features used by 500+ active members',
      'Mentored 6 developers, reducing onboarding time by 40%'
    ]
  },
  {
    company:'YUGMA Techfest 1.0 (IEEE JNNCE)',
    role:'Event Organizer',
    period:'Aug 2025',
    location:'JNNCE,Shimoga',
    achievements:[
      'Organized and hosted a 3-day state-level technical symposium including a 24-hour hackathon.',
      'Coordinated event logistics, sponsorships, and team participation for 100+ attendees.'
=======
      'Implemented reusable components and modular architecture, enhancing code maintainability and reducing feature rollout time by 20%.'
>>>>>>> 37aa8bb ( latest changes)
    ]
  }
];

const projects = [
  // Preserve existing cards (unchanged)
  {
<<<<<<< HEAD
=======
    title: 'Creative Calendar & Project Management Tool',
    description: 'Calendar-based app for team project tracking and feedback management.',
    tech: 'React.js (Vite), TypeScript, Tailwind CSS, Node.js, Express.js, MongoDB, Socket.io',
    link: 'https://smm.weandyoumarketing.com/login',
    repo: 'https://github.com/chandrashekarRravi/smm.weandyoumarketing.git',
    period: 'Feb 2026 – Present'
  },
  {
    title: 'Krishik Agri Business Hub',
    description: 'Developed full-stack marketplace handling 90+ products with integrated payments and order tracking.',
    tech: 'React.js, TypeScript, Node.js, MongoDB, Tailwind CSS',
    link: 'https://krishik-agri-business-hub.onrender.com/',
    repo: 'https://github.com/chandrashekarRravi/Krishik-Agri-Business-Incubator',
    period: 'Mar 2025 – Apr 2026'
  },

  {
>>>>>>> 37aa8bb ( latest changes)
    title: 'Shimoga District Tourism Website',
    description: 'Government project with admin CMS and secure APIs',
    tech: 'React.js, Tailwind CSS, Node.js, Express, MongoDB',
    link: 'https://shivamogga.github.io/#events',
    repo: 'https://github.com/ExploreShivamogga/ExploreShivamogga.github.io',
    period: 'Aug 2025 – Present'
  },
  {
    title: 'IPO Web App & REST API',
    description: 'Modular dashboard with IPO listings and broker comparison',
    tech: 'React.js, Tailwind CSS, Vite, Node.js, Express, MongoDB',
    link: '',
    repo: 'https://github.com/chandrashekarRravi/IPO-Web-App-REST-API',
    period: 'May 2025 – Jul 2025'
  },
<<<<<<< HEAD
  {
    title: 'Krishik Agri Business Hub',
    description: 'University E-Commerce Platform for Agricultural Sciences',
    tech: 'React.js, TypeScript, Node.js, MongoDB, Tailwind CSS',
    link: 'https://krishik-agri-business-hub.onrender.com/',
    repo: 'https://github.com/chandrashekarRravi/Krishik-Agri-Business-Incubator',
    period: 'Mar 2025 – Present'
  },
=======

>>>>>>> 37aa8bb ( latest changes)

  {
    title: 'CS E-Commerce',
    description: 'E‑commerce application with modern UI and workflows.',
    tech: 'React.js, TypeScript, Tailwind CSS, Node.js',
    link: 'https://chandrashekarrravi.github.io/CS-E-Commerce/',
    repo: 'https://github.com/chandrashekarRravi/CS-E-Commerce',
    period: '—'
  },
  {
    title: 'ISE IEEE Student Branch',
    description: 'Website for ISE IEEE SB.',
    tech: 'React.js, Tailwind CSS',
    link: 'https://jnnce-ise-ieee-sb.vercel.app/',
    repo: 'https://github.com/chandrashekarRravi/ISE-IEEE-SB',
    period: '—'
  },
  {
    title: 'React ToDo List',
    description: 'Simple and responsive ToDo application.',
    tech: 'React.js, Vite, Tailwind CSS',
    link: '',
    repo: 'https://github.com/chandrashekarRravi/react-ToDoList',
    period: '—'
  },
  {
    title: 'IMS (Inventory Management System)',
    description: 'Inventory management with CRUD and reporting.',
    tech: 'React.js, Node.js, MongoDB',
    link: '',
    repo: 'https://github.com/chandrashekarRravi/IMS',
    period: '—'
  },
];

const Index = () => {
<<<<<<< HEAD
  const [showAllProjects, setShowAllProjects] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1
    }
  };

  return (
    <div className="min-h-screen bg-background p-4 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Bento Grid Layout */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-6 auto-rows-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >

          {/* Main Profile Card - Centerpiece */}
          <motion.div
            className="lg:col-span-4 xl:col-span-6 lg:row-span-2 bento-card"
            variants={cardVariants}
            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
          >
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary/30 shadow-glow">
                <img
                  src="/chandra.png"
                  alt="Chandrashekar R"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-2">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-sm">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                  Available to Work
                </div>
                <h1 className="text-2xl font-bold glow-text">CHANDRASHEKAR R</h1>
                <p className="text-lg text-secondary">Full-Stack MERN Developer</p>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground w-full">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>Shimoga, Karnataka, India</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary" />
                  <span>IST Timezone</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-primary" />
                  <span>Telugu, Tamil, English, Hindi, Kannada</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-primary" />

                  <span>Final Year@JNNCE</span>
                  <span>JNNCE,Shimoga </span>

                </div>
              </div>
              <div className="flex flex-wrap gap-3 justify-center">
                <Button asChild className="profile-button-primary">

                  <a href="/driveChandrashekarR.pdf" download>
                    <Download className="w-4 h-4 mr-2" />
                    Resume Download
                  
                  </a>
                </Button>
                <Button asChild className="profile-button-secondary">
                  <a href="https://www.instagram.com/chan.drashekar23/" target="_blank" rel="noopener noreferrer">
                    <Instagram className="w-4 h-4 mr-2" />
                    DM Me
                  </a>
                </Button>
                <Button asChild className="profile-button-secondary">
                  <a href="https://wa.me/916366189346" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp Me
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Stat Cards - Enlarged and Centered */}
          <div className="lg:col-span-4 xl:col-span-6 grid grid-cols-3 gap-6 justify-center">
            <motion.div
              className="stat-card text-center"
              variants={cardVariants}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            >
              <div className="text-3xl font-bold glow-text">6+</div>
              <div className="text-base text-muted-foreground">Projects</div>
            </motion.div>
            <motion.div
              className="stat-card text-center"
              variants={cardVariants}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            >
              <div className="text-3xl font-bold glow-text">3+</div>
              <div className="text-base text-muted-foreground">Happy Clients</div>
            </motion.div>
            <motion.div
              className="stat-card text-center"
              variants={cardVariants}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            >
              <div className="text-3xl font-bold glow-text">2+</div>
              <div className="text-base text-muted-foreground">Years Experience</div>
            </motion.div>
          </div>

          {/* Tech Arsenal Card */}
          <motion.div
            className="lg:col-span-2 xl:col-span-3 bento-card"
            variants={cardVariants}
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
          >
            <h3 className="text-xl font-bold mb-4 glow-text">My Tech Arsenal</h3>
            <div className="flex flex-wrap gap-2">
              {techStacks.map((tech, index) => (
                <span key={index} className="tech-pill">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Services Card */}
          <motion.div
            className="lg:col-span-2 xl:col-span-3 bento-card"
            variants={cardVariants}
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
          >
            <h3 className="text-xl font-bold mb-4 glow-text">Services Offered</h3>
            <div className="flex flex-wrap gap-2">
              {services.map((service, index) => (
                <span key={index} className="tech-pill text-xs">
                  {service}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Testimonials Card */}
          <motion.div
            className="lg:col-span-4 xl:col-span-6 bento-card"
            variants={cardVariants}
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
          >
            <h3 className="text-xl font-bold mb-4 glow-text">Reviews Showcase</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="p-4 rounded-lg bg-muted/50 border border-primary/20">
                  <p className="text-sm text-muted-foreground mb-2">"{testimonial.text}"</p>
                  <div className="text-xs">
                    <span className="font-semibold text-primary">{testimonial.name}</span>
                    <span className="text-muted-foreground"> - {testimonial.company}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Clients Card */}
          <motion.div
            className="lg:col-span-4 xl:col-span-6 bento-card"
            variants={cardVariants}
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
          >
            <h3 className="text-xl font-bold mb-4 glow-text">Trusted By</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="p-3 rounded-lg bg-muted/50 border border-primary/20">
                <div className="text-xs font-semibold">University of Agricultural Sciences</div>
              </div>
              
              <div className="p-3 rounded-lg bg-muted/50 border border-primary/20">
                <div className="text-xs font-semibold">TechForge Club</div>
              </div>
              <div className="p-3 rounded-lg bg-muted/50 border border-primary/20">
                <div className="text-xs font-semibold">Government of Karnataka</div>
              </div>
            </div>
          </motion.div>

          {/* Workflow Highlights */}
          <motion.div
            className="lg:col-span-2 xl:col-span-3 bento-card"
            variants={cardVariants}
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
          >
            <h3 className="text-xl font-bold mb-4 glow-text">Workflow Process</h3>
            <div className="space-y-10">
              {workflowSteps.map((step, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                  <span className="text-sm" >{step}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Experience Card */}
          <motion.div
            className="lg:col-span-2 xl:col-span-3 bento-card"
            variants={cardVariants}
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
          >
            <h3 className="text-xl font-bold mb-4 glow-text">Professional Experience</h3>
            <div className="space-y-4">
              {experiences.map((experience, index) => (
                <div key={index} className="p-4 rounded-lg bg-muted/50 border border-primary/20">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="font-semibold text-sm">{experience.role}</h4>
                      <p className="text-xs text-primary">{experience.company}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-muted-foreground">{experience.period}</p>
                      <p className="text-xs text-muted-foreground">{experience.location}</p>
                    </div>
                  </div>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    {(experience.achievements || []).slice(0, 20).map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Works Gallery */}
          <motion.div
            className="lg:col-span-2 xl:col-span-3 bento-card"
            variants={cardVariants}
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
          >
            <h3 className="text-xl font-bold mb-4 glow-text">Featured Works</h3>
            <div className="space-y-4">
              {projects.slice(0, 2).map((project, index) => (
                <div key={index} className="p-4 rounded-lg bg-muted/50 border border-primary/20 hover:border-primary/40 transition-colors">
                  <h4 className="font-semibold text-sm mb-1">{project.title}</h4>
                  <p className="text-xs text-muted-foreground mb-2">{project.description}</p>
                  <p className="text-xs text-secondary">{project.tech}</p>
                </div>
              ))}
              <Button
                className="w-full profile-button-secondary"
                onClick={() => setShowAllProjects(true)}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                View All Works
              </Button>
            </div>
          </motion.div>

          {/* Online Presence */}
          <motion.div
            className="lg:col-span-2 xl:col-span-3 bento-card"
            variants={cardVariants}
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
          >
            <h3 className="text-xl font-bold mb-4 glow-text">Connect With Me</h3>
            <div className="space-y-3">
              <a href="https://www.linkedin.com/in/chandra-shekar6366189346" className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 border border-primary/20 hover:border-primary/40 transition-colors">
                <Linkedin className="w-5 h-5 text-primary" />
                <span className="text-sm">LinkedIn Profile</span>
              </a>
              <a href="https://github.com/chandrashekarRravi" className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 border border-primary/20 hover:border-primary/40 transition-colors" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 text-primary" />
                <span className="text-sm">GitHub Profile</span>
              </a>
              <a href="mailto:chandrashaker5412@gmail.com" className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 border border-primary/20 hover:border-primary/40 transition-colors">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-sm">Email Contact</span>
              </a>
            </div>
          </motion.div>

          {/* Contact Card */}
          <motion.div
            className="lg:col-span-4 xl:col-span-6 bento-card text-center"
            variants={cardVariants}
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
          >
            <h3 className="text-xl font-bold mb-4 glow-text">Let's Make Magic Happen Together!</h3>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
           <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
        <Button asChild className="profile-button-primary w-full sm:w-auto">
                <a href="mailto:chandrashaker5412@gmail.com">
                  <Mail className="w-4 h-4 mr-2" />
                  Email Me
                </a>
              </Button>
              <Button asChild className="profile-button-secondary w-full sm:w-auto">
                <a href="tel:+916366189346">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Schedule a Call
                </a>
              </Button>
              <Button asChild className="profile-button-secondary w-full sm:w-auto">
                <a href="sms:+916366189346">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Send SMS
                </a>
              </Button>
            </div>
            <div className="text-sm text-muted-foreground">
              <div className="flex items-center justify-center gap-2">
                <MessageCircle className="w-4 h-4" />
                <span>+91 6366189346</span>
              </div>
            </div>
            </div>
          </motion.div>
        </motion.div>

        {/* All Projects Modal */}
        {showAllProjects && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-card/90 backdrop-blur-xl rounded-2xl border border-border/50 max-w-4xl w-full max-h-[80vh] overflow-y-auto">
              <div className="p-6 border-b border-border/50 flex items-center justify-between">
                <h2 className="text-2xl font-bold glow-text">All Projects</h2>
                <Button
                  onClick={() => setShowAllProjects(false)}
                  className="p-2 hover:bg-muted/50 rounded-lg"
                  variant="ghost"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>
              <div className="p-6 grid gap-6 md:grid-cols-2">
                {projects.map((project, index) => (
                  <motion.div
                    key={index}
                    className="p-6 rounded-xl bg-muted/50 border border-primary/20 hover:border-primary/40 transition-colors"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-semibold text-lg">{project.title}</h3>
                      <span className="text-xs text-muted-foreground bg-muted/50 px-2 py-1 rounded">
                        {project.period}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{project.description}</p>
                    <p className="text-xs text-secondary mb-4">{project.tech}</p>
                    <div className="flex gap-2">
                      {project.link && (
                        <Button asChild size="sm" className="profile-button-primary">
                          <a href={project.link} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-3 h-3 mr-1" />
                            Preview
                          </a>
                        </Button>
                      )}
                      {project.repo && (
                        <Button asChild size="sm" variant="outline" className="profile-button-secondary">
                          <a href={project.repo} target="_blank" rel="noopener noreferrer">
                            <Github className="w-3 h-3 mr-1" />
                            Source Code
                          </a>
                        </Button>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        )}
=======
  const containerRef = useRef<HTMLDivElement>(null);
  const gridContainerRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef<HTMLDivElement>(null);

  // Custom Cursor Logic
  const [cursorVariant, setCursorVariant] = useState<"default" | "project" | "github" | "linkedin" | "home">("default");
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const cursorXSpring = useSpring(cursorX, { damping: 25, stiffness: 700, mass: 0.5 });
  const cursorYSpring = useSpring(cursorY, { damping: 25, stiffness: 700, mass: 0.5 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [cursorX, cursorY]);
  const [origin, setOrigin] = useState("50% 50%");

  const [projectIndex, setProjectIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProjectIndex((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const updateOrigin = () => {
      if (targetRef.current && gridContainerRef.current) {
        const targetRect = targetRef.current.getBoundingClientRect();
        const containerRect = gridContainerRef.current.getBoundingClientRect();
        const x = ((targetRect.left - containerRect.left) + targetRect.width / 2) / containerRect.width * 100;
        const y = ((targetRect.top - containerRect.top) + targetRect.height / 2) / containerRect.height * 100;
        setOrigin(`${x}% ${y}%`);
      }
    };

    updateOrigin();
    window.addEventListener('resize', updateOrigin);
    return () => window.removeEventListener('resize', updateOrigin);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.8], [1, 30]);
  const othersOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const centerOpacity = useTransform(scrollYProgress, [0.5, 0.8], [1, 0]);

  // Track entire page scroll for the "home" cursor at the bottom
  const { scrollYProgress: pageScroll } = useScroll();
  useMotionValueEvent(pageScroll, "change", (latest) => {
    if (latest > 0.99) {
      if (cursorVariant !== "home") setCursorVariant("home");
    } else {
      if (cursorVariant === "home") setCursorVariant("default");
    }
  });

  // Handle Home Click
  useEffect(() => {
    const handleClick = () => {
      if (cursorVariant === "home") {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, [cursorVariant]);

  return (
    <div className="bg-[#000000] min-h-screen overflow-hidden [&_*]:cursor-none cursor-none relative">
      {/* 3D Floating Background Services (Global) */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 flex items-center justify-center" style={{ perspective: "1000px" }}>
        {allServices.map((service, i) => {
          const numCols = 4;
          const numRows = Math.ceil(allServices.length / numCols);
          const row = Math.floor(i / numCols);
          const col = i % numCols;

          // Spread evenly across 140% of the screen (-70% to +70%) to ensure it covers edges
          const baseY = (row / (numRows - 1)) * 140 - 70;
          const baseX = (col / (numCols - 1)) * 140 - 70;

          const jitterX = ((i * 13) % 40) - 20;
          const jitterY = ((i * 17) % 40) - 20;
          const scale = 0.5 + ((i * 7) % 15) / 10;
          const duration = 20 + (i % 10) * 4;
          const blur = ((i * 3) % 6) + 1; // 1px to 6px blur for depth
          const isFront = i % 4 === 0;
          const opacity = isFront ? 0.08 : 0.04; // Increased visibility

          return (
            <div
              key={i}
              className="absolute"
              style={{
                left: `calc(50% + ${baseX + jitterX}%)`,
                top: `calc(50% + ${baseY + jitterY}%)`,
                transform: "translate(-50%, -50%)",
                zIndex: isFront ? 5 : 0,
              }}
            >
              <motion.div
                className="whitespace-nowrap text-white font-black tracking-tighter uppercase font-heading"
                style={{
                  fontSize: `clamp(1rem, ${scale * 1.5}vw, 3.5rem)`, // Smaller text to prevent clutter
                  opacity: opacity,
                  filter: `blur(${blur}px)`,
                }}
                animate={{
                  z: [0, (i * 47) % 400 - 200, (i * 73) % 400 - 200, 0],
                  x: [0, (i * 31) % 600 - 300, (i * 89) % 600 - 300, 0],
                  y: [0, (i * 59) % 600 - 300, (i * 97) % 600 - 300, 0],
                  rotate: [0, (i * 11) % 20 - 10, (i * 13) % 20 - 10, 0]
                }}
                transition={{
                  duration: duration * 2, // Slower, wider continuous movement
                  repeat: Infinity,
                  ease: "linear" // Linear keeps them constantly moving without stopping
                }}
              >
                {service}
              </motion.div>
            </div>
          );
        })}
      </div>

      {/* Custom Cursor Overlay */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 flex items-center justify-center"
        style={{
          x: cursorX,
          y: cursorY,
        }}
      >
        <motion.div
          className="flex items-center justify-center rounded-full backdrop-blur-sm relative"
          style={{ x: "-50%", y: "-50%" }}
          animate={{
            width: cursorVariant === "home" ? 80 : 48,
            height: cursorVariant === "home" ? 80 : 48,
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            border: "1px solid rgba(255, 255, 255, 0.5)",
          }}
        >
          <AnimatePresence>
            {cursorVariant === "default" && (
              <motion.div key="default" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                <Mouse className="w-5 h-5 text-white animate-bounce" />
              </motion.div>
            )}
            {cursorVariant === "project" && (
              <motion.div key="project" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                <ExternalLink className="w-5 h-5 text-white" />
              </motion.div>
            )}
            {cursorVariant === "github" && (
              <motion.div key="github" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                <Github className="w-5 h-5 text-white" />
              </motion.div>
            )}
            {cursorVariant === "linkedin" && (
              <motion.div key="linkedin" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                <Linkedin className="w-5 h-5 text-white" />
              </motion.div>
            )}
            {cursorVariant === "home" && (
              <motion.div key="home" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} className="flex flex-col items-center justify-center absolute inset-0">
                <ArrowUp className="w-6 h-6 text-white animate-bounce" />
                <span className="text-[10px] font-bold text-white uppercase whitespace-nowrap mt-1 leading-none">Home</span>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>

      <div ref={containerRef} className="h-[200vh] relative cursor-none">
        <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center bg-transparent">

          <div className="absolute top-8 left-0 right-0 text-center z-10">
            <motion.p style={{ opacity: othersOpacity }} className="text-[#9ca3af] tracking-widest text-sm font-semibold uppercase">
              Scroll to zoom & explore
            </motion.p>
          </div>

          <motion.div
            ref={gridContainerRef}
            className="w-full max-w-6xl mx-auto p-4 md:p-8 grid grid-cols-2 md:grid-cols-5 md:grid-rows-4 gap-4 md:gap-6 aspect-square md:aspect-[4/3] md:max-h-[85vh] relative z-10"
            style={{
              scale,
              transformOrigin: origin
            }}
          >
            {/* Top Left - 1x2 */}
            <motion.div style={{ opacity: othersOpacity }} className="hidden md:flex col-span-1 row-span-2 rounded-[2rem] bg-zinc-900 overflow-hidden relative border border-[#9ca3af]/20 p-6 flex-col justify-between group hover:border-[#3b82f6]/50 transition-colors duration-500">
              <h3 className="text-[#9ca3af] text-xs font-bold tracking-widest group-hover:text-[#3b82f6] transition-colors duration-300">TECH ARSENAL</h3>
              <div className="flex flex-wrap gap-1.5 mt-4">
                {techStacks.slice(0, 12).map(t => <span key={t} className="text-[10px] bg-[#ffffff]/10 text-[#ffffff] px-2 py-1 rounded-full group-hover:bg-[#3b82f6]/20 transition-colors duration-300">{t}</span>)}
              </div>
            </motion.div>

            {/* Top Middle - 2x2 (The Zoom Target) */}
            <motion.div ref={targetRef} className="col-span-2 md:col-span-2 md:row-span-2 rounded-[2rem] bg-zinc-900 overflow-hidden relative flex flex-col items-center justify-center p-6 border border-[#9ca3af]/20 group cursor-pointer hover:border-[#3b82f6]/50 transition-all duration-500">
              <motion.div style={{ opacity: centerOpacity }} className="flex flex-col items-center w-full">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden mb-4 border-4 border-[#3b82f6]/20 shadow-xl group-hover:border-[#3b82f6] transition-colors duration-500">
                  <img src="/chandra.png" alt="Profile" className="w-full h-full object-cover" />
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-[#ffffff] text-center group-hover:text-[#3b82f6] transition-colors duration-300">CHANDRASHEKAR R</h2>
                <div className="mt-4 inline-flex items-center px-3 py-1 rounded-full bg-[#3b82f6]/20 text-[#3b82f6] text-xs font-medium border border-[#3b82f6]/30">
                  <div className="w-2 h-2 bg-[#3b82f6] rounded-full mr-2 animate-pulse"></div>
                  Available to Work
                </div>
              </motion.div>
            </motion.div>

            {/* Top Right - 2x1 */}
            <motion.div style={{ opacity: othersOpacity }} className="col-span-2 md:col-span-2 row-span-1 rounded-[2rem] bg-zinc-900 overflow-hidden relative flex items-center justify-center p-6 md:p-8 border border-[#9ca3af]/20 group hover:border-[#3b82f6]/50 transition-colors duration-500">
              <h2 className="text-lg md:text-2xl font-black tracking-widest text-center uppercase text-[#ffffff] leading-tight group-hover:text-[#3b82f6] transition-colors duration-500">
                It's Your Vision,<br />Let's Build It
              </h2>
            </motion.div>

            {/* Middle Right 1 - 1x1 */}
            <motion.div
              onMouseEnter={() => setCursorVariant("github")}
              onMouseLeave={() => setCursorVariant("default")}
              style={{ opacity: othersOpacity }}
              className="hidden md:flex col-span-1 row-span-1 rounded-[2rem] bg-zinc-900 overflow-hidden relative items-center justify-center border border-[#9ca3af]/20 group hover:border-[#3b82f6]/50 transition-colors"
            >
              <a href="https://github.com/chandrashekarRravi" target="_blank" rel="noreferrer" className="absolute inset-0 flex items-center justify-center cursor-none">
                <Github className="w-10 h-10 text-[#ffffff] group-hover:text-[#3b82f6] group-hover:scale-110 transition-all duration-300" />
              </a>
            </motion.div>

            {/* Middle Right 2 - 1x1 */}
            <motion.div
              onMouseEnter={() => setCursorVariant("linkedin")}
              onMouseLeave={() => setCursorVariant("default")}
              style={{ opacity: othersOpacity }}
              className="hidden md:flex col-span-1 row-span-1 rounded-[2rem] bg-gradient-to-br from-[#000000] to-[#3b82f6]/20 overflow-hidden relative items-center justify-center border border-[#9ca3af]/20 group hover:border-[#3b82f6]/50 transition-colors"
            >
              <a href="https://www.linkedin.com/in/chandra-shekar6366189346" target="_blank" rel="noreferrer" className="absolute inset-0 flex items-center justify-center cursor-none">
                <Linkedin className="w-10 h-10 text-[#ffffff] group-hover:text-[#3b82f6] group-hover:scale-110 transition-all duration-300" />
              </a>
            </motion.div>

            {/* Bottom Left - 1x2 */}
            <motion.div style={{ opacity: othersOpacity }} className="hidden md:flex col-span-1 row-span-2 rounded-[2rem] overflow-hidden relative p-6 flex-col justify-end group bg-zinc-900 border border-[#9ca3af]/20 hover:border-[#3b82f6]/50 transition-colors duration-500">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#3b82f6] via-[#000000] to-[#000000] opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-[#ffffff]/10 to-transparent skew-x-12"
                animate={{ x: ['-200%', '200%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
              <div className="absolute inset-0 bg-zinc-900/80 backdrop-blur-md rounded-[2rem]"></div>

              <div className="relative z-10">
                <h3 className="text-[#9ca3af] text-xs font-bold tracking-widest mb-2 flex items-center gap-2 group-hover:text-[#3b82f6] transition-colors duration-300">
                  PROFESSIONAL
                </h3>
                <p className="text-[#ffffff] text-sm font-medium">2+ Years building scalable MERN web applications.</p>
              </div>
            </motion.div>

            {/* Bottom Middle - 2x2 */}
            <motion.div
              onMouseEnter={() => setCursorVariant("project")}
              onMouseLeave={() => setCursorVariant("default")}
              style={{ opacity: othersOpacity }}
              className="col-span-2 row-span-2 rounded-[2rem] bg-zinc-900 overflow-hidden relative flex flex-col border border-[#9ca3af]/20 p-6 md:p-8 hover:border-[#3b82f6]/50 transition-colors duration-500 cursor-none"
            >
              <div className="flex justify-between items-center mb-4 relative z-10 shrink-0 cursor-none">
                <h2 className="text-[#9ca3af] text-xs font-bold tracking-widest uppercase flex items-center gap-2">
                  <Code className="w-4 h-4 text-[#3b82f6]" /> FEATURED PROJECTS
                </h2>
              </div>

              <div className="flex-grow relative z-10 flex flex-col justify-center">
                <AnimatePresence mode="wait">
                  {(() => {
                    const proj = projects[projectIndex];
                    const href = proj.link || proj.repo || "#";
                    return (
                      <motion.a
                        key={projectIndex}
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        initial={{ opacity: 0, scale: 0.8, rotate: -3, y: 20 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0, y: 0 }}
                        exit={{ opacity: 0, scale: 1.05, rotate: 3, y: -20 }}
                        transition={{ type: "spring", stiffness: 300, damping: 25, mass: 1 }}
                        className="group/proj relative rounded-[1.5rem] p-6 bg-[#ffffff]/5 hover:bg-[#3b82f6]/10 border border-[#ffffff]/10 hover:border-[#3b82f6]/50 transition-all flex flex-col justify-center h-full w-full absolute inset-0 cursor-none"
                      >
                        <h3 className="text-[#ffffff] font-bold text-xl md:text-2xl mb-2 group-hover/proj:text-[#3b82f6] transition-colors line-clamp-2">{proj.title}</h3>
                        <p className="text-[#9ca3af] text-sm mb-4 line-clamp-3">{proj.description}</p>
                        <div className="mt-auto flex justify-between items-center">
                          <p className="text-[#9ca3af] text-xs line-clamp-1 flex-grow pr-4 group-hover/proj:text-[#ffffff] transition-colors">{proj.tech}</p>
                          <ExternalLink className="w-5 h-5 text-[#9ca3af] group-hover/proj:text-[#3b82f6] transition-colors shrink-0" />
                        </div>
                      </motion.a>
                    );
                  })()}
                </AnimatePresence>
              </div>

              {/* Progress indicators */}
              <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-10">
                {[0, 1, 2].map(idx => (
                  <div key={idx} className={`h-1.5 rounded-full transition-all duration-500 ${idx === projectIndex ? 'w-6 bg-[#3b82f6]' : 'w-2 bg-[#ffffff]/20'}`} />
                ))}
              </div>
            </motion.div>

            {/* Bottom Right - 2x2 */}
            <motion.div style={{ opacity: othersOpacity }} className="hidden md:block col-span-2 row-span-2 rounded-[2rem] bg-zinc-900 overflow-hidden relative border border-[#9ca3af]/20 p-8 group hover:border-[#3b82f6]/50 transition-colors duration-500">
              <h3 className="text-[#9ca3af] text-xs font-bold tracking-widest mb-6 group-hover:text-[#3b82f6] transition-colors duration-300">REVIEWS</h3>
              <div className="space-y-6">
                {testimonials.map((t, i) => (
                  <div key={i} className="text-sm border-l-2 border-[#3b82f6]/30 pl-4 group-hover:border-[#3b82f6] transition-colors duration-300">
                    <p className="font-medium text-[#ffffff] italic">"{t.text}"</p>
                    <p className="text-[#9ca3af] mt-2 font-semibold group-hover:text-[#3b82f6] transition-colors duration-300">- {t.name}, {t.company}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Details Section - Natural Document Flow */}
      <div className="relative z-20 bg-transparent text-[#ffffff] cursor-none min-h-screen">
        <div className="max-w-4xl mx-auto p-4 md:p-8 pt-24 pb-32">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >

            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-16 border-b border-[#9ca3af]/20 pb-12">
              <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-primary/20 shrink-0">
                <img src="/chandra.png" alt="Profile" className="w-full h-full object-cover" />
              </div>
              <div className="text-center md:text-left">
                <h2 className="text-4xl md:text-5xl font-black mb-4">Chandrashekar R</h2>
                <p className="text-xl text-muted-foreground mb-6">Full-Stack MERN Developer</p>
                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  <Button asChild className="rounded-full">
                    <a href="mailto:chandrashaker5412@gmail.com"><Mail className="w-4 h-4 mr-2" /> Contact Me</a>
                  </Button>
                  <Button variant="outline" asChild className="rounded-full">
                    <a href="/driveChandrashekarR.pdf" download><Download className="w-4 h-4 mr-2" /> Resume</a>
                  </Button>
                </div>
              </div>
            </div>

            <div className="space-y-20 pb-20">
              {/* Experience Section */}
              <section>
                <div className="flex items-center gap-3 mb-8">
                  <Briefcase className="w-6 h-6 text-primary" />
                  <h3 className="text-3xl font-bold">Experience</h3>
                </div>
                <div className="space-y-8">
                  {experiences.map((exp, i) => (
                    <div key={i} className="relative pl-8 md:pl-0">
                      <div className="md:grid md:grid-cols-4 gap-6 items-start">
                        <div className="md:col-span-1 text-sm text-muted-foreground font-medium mb-2 md:mb-0 pt-1">
                          {exp.period}
                        </div>
                        <div className="md:col-span-3 bg-card p-6 rounded-2xl border hover:border-primary/50 transition-colors">
                          <h4 className="text-xl font-bold text-foreground mb-1">{exp.role}</h4>
                          <p className="text-primary font-medium mb-4">{exp.company}</p>
                          <ul className="space-y-3">
                            {exp.achievements.map((ach, j) => (
                              <li key={j} className="text-muted-foreground flex items-start text-sm md:text-base">
                                <span className="text-primary mr-3 mt-1.5 leading-none">•</span>
                                <span>{ach}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Projects Section */}
              <section>
                <div className="flex items-center gap-3 mb-8">
                  <Code className="w-6 h-6 text-primary" />
                  <h3 className="text-3xl font-bold">Featured Projects</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {projects.map((proj, i) => (
                    <div key={i} className="bg-card p-6 rounded-2xl border flex flex-col hover:shadow-lg hover:border-primary/50 transition-all">
                      <h4 className="text-xl font-bold mb-3">{proj.title}</h4>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {proj.tech.split(',').map(t => (
                          <span key={t} className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-md">{t.trim()}</span>
                        ))}
                      </div>
                      <p className="text-muted-foreground flex-grow mb-6 text-sm md:text-base">{proj.description}</p>
                      <div className="flex gap-3 mt-auto">
                        {proj.link && (
                          <Button size="sm" asChild className="w-full">
                            <a href={proj.link} target="_blank" rel="noreferrer" onMouseEnter={() => setCursorVariant("project")} onMouseLeave={() => setCursorVariant("default")}><ExternalLink className="w-4 h-4 mr-2" /> Live App</a>
                          </Button>
                        )}
                        {proj.repo && (
                          <Button size="sm" variant="outline" asChild className="w-full">
                            <a href={proj.repo} target="_blank" rel="noreferrer" onMouseEnter={() => setCursorVariant("github")} onMouseLeave={() => setCursorVariant("default")}><Github className="w-4 h-4 mr-2" /> Source Code</a>
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </motion.div>
        </div>
>>>>>>> 37aa8bb ( latest changes)
      </div>
    </div>
  );
};

export default Index;
