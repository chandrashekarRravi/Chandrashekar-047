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
    company:'Freelance Full Stack Developer',
    role:'Self-Employed / Independent',
    period:'Jan 2024 - Present',
    achievements:[
      'Delivered end-to-end web solutions for startups, universities, and government clients using React.js, Node.js, MongoDB, and Tailwind CSS.',
      'Built and deployed production-ready applications with REST APIs, authentication, responsive UI, and SEO optimization.',
'Worked directly with clients to gather requirements and deliver scalable, high-performance solutions on time'
    ]
  },
  {
    company: 'Logisoft IT Services Pvt. Ltd. (Logisoft Technologies Inc.)',
    role: 'React Developer Intern',
    period: 'May 2025 – Present',
    location: 'Remote',
    achievements: [
      'Contributing to React.js projects focusing on front-end development and UI optimization using Tailwind CSS and Bootstrap.',
      'Collaborating in an Agile environment with Git and GitFlow for version control, improving team workflow and deployment efficiency.',
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
    ]
  }
];

const projects = [
  // Preserve existing cards (unchanged)
  {
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
  {
    title: 'Krishik Agri Business Hub',
    description: 'University E-Commerce Platform for Agricultural Sciences',
    tech: 'React.js, TypeScript, Node.js, MongoDB, Tailwind CSS',
    link: 'https://krishik-agri-business-hub.onrender.com/',
    repo: 'https://github.com/chandrashekarRravi/Krishik-Agri-Business-Incubator',
    period: 'Mar 2025 – Present'
  },

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
      </div>
    </div>
  );
};

export default Index;
