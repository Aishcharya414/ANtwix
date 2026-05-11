"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
}

const projects: Project[] = [
  {
    title: "NSJ Group",
    description: "A comprehensive corporate presence for NSJ Group, showcasing their diverse service range.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
    link: "https://www.nsjgroup.com.au/",
  },
  {
    title: "Potted Plant SL",
    description: "An elegant e-commerce experience for plant enthusiasts with a focus on minimalist design.",
    image: "https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&q=80&w=800",
    link: "https://potted-plant-sl.vercel.app/",
  },
  {
    title: "Wedding Website",
    description: "A beautiful, personalized digital invitation and story-telling platform for couples.",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800",
    link: "https://adisha-deshani.vercel.app/",
  },
  {
    title: "ANtwix QR Generator",
    description: "A functional utility tool built by ANtwix for generating custom QR codes on the fly.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800",
    link: "https://antwix-qr-generator.vercel.app/",
  },
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="group relative bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-blue-500/50 transition-all duration-500"
  >
    <div className="aspect-[16/10] overflow-hidden relative">
      <img
        src={project.image}
        alt={project.title}
        className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 bg-white text-black font-bold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500"
        >
          Live Website <ExternalLink size={18} />
        </a>
      </div>
    </div>
    <div className="p-8">
      <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">
        {project.title}
      </h3>
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
      {/* Decorative background element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black mb-6"
          >
            Our Featured <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Work Showcase.
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
