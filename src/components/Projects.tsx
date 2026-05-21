"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Loader2, Monitor, Smartphone, Tablet } from "lucide-react";

interface Project {
  title: string;
  description: string;
  link: string;
}

const projects: Project[] = [
  {
    title: "Company Website - NSJ Group",
    description: "A comprehensive corporate presence for NSJ Group, showcasing their diverse service range.",
    link: "https://www.nsjgroup.com.au/",
  },
  {
    title: "Ecommerce Website - Potted Plant SL",
    description: "An elegant e-commerce experience for plant enthusiasts with a focus on minimalist design.",
    link: "https://potted-plant-sl.vercel.app/",
  },
  {
    title: "Wedding Photos Upload Website",
    description: "A beautiful, personalized digital invitation and story-telling platform for couples.",
    link: "https://adisha-deshani.vercel.app/",
  },
  {
    title: "ANtwix QR Generator",
    description: "A functional utility tool built by ANtwix for generating custom QR codes on the fly.",
    link: "https://antwix-qr-generator.vercel.app/",
  },
];

const ProjectPreview = ({ link, title }: { link: string; title: string }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-900 group rounded-t-3xl border-b border-white/5">
      <AnimatePresence>
        {isLoading && (
          <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-10 flex items-center justify-center bg-neutral-900"
          >
            <Loader2 className="w-8 h-8 text-blue-500 animate-spin" />
            <span className="sr-only">Loading preview of {title}</span>
          </motion.div>
        )}
      </AnimatePresence>
      
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="w-full h-full relative"
      >
        <iframe
          src={link}
          title={`Preview of ${title}`}
          className="absolute inset-0 w-[1280px] h-[800px] border-none pointer-events-none select-none"
          onLoad={() => setIsLoading(false)}
          loading="lazy"
          style={{
            transform: 'scale(0.35)',
            transformOrigin: '0 0',
            width: '286%',
            height: '286%',
          }}
        />
        <div className="absolute inset-0 bg-transparent z-20 cursor-pointer" aria-hidden="true" />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30 flex items-end p-8">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 bg-white text-black font-bold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 shadow-xl"
          aria-label={`Visit ${title} website in a new tab`}
        >
          Visit Website <ExternalLink size={18} aria-hidden="true" />
        </a>
      </div>
    </div>
  );
};

const ProjectCard = ({ project, index }: { project: Project; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="group relative bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-blue-500/50 transition-all duration-500"
  >
    <ProjectPreview link={project.link} title={project.title} />
    
    <div className="p-8">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>
        <div className="flex gap-2 text-neutral-500">
          <Monitor size={16} />
          <Tablet size={16} />
          <Smartphone size={16} />
        </div>
      </div>
      <p className="text-gray-400 leading-relaxed mb-6">
        {project.description}
      </p>
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex md:hidden items-center gap-2 text-blue-400 font-semibold"
      >
        View Project <ExternalLink size={16} />
      </a>
    </div>
  </motion.div>
);

export default function Projects() {
  return (
    <section id="projects" className="py-32 relative overflow-hidden bg-black">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black mb-6"
          >
            Digital <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Experiences.
            </span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "80px" }}
            viewport={{ once: true }}
            className="h-1.5 bg-blue-600 mx-auto rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
