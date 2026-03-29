import { motion } from 'framer-motion'

export default function ProjectCard({ project }) {
  return (
    <motion.article
      className="group relative overflow-hidden rounded-[26px] border border-white/10 bg-panel"
      whileHover={{ y: -6 }}
      transition={{ duration: 0.28 }}
    >
      <img
        src={project.image}
        alt={project.title}
        className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#05070c] via-[#05070c]/40 to-transparent opacity-90" />
      <div className="absolute inset-x-0 bottom-0 p-5">
        <span className="mb-2 inline-flex rounded-full border border-electric/25 bg-electric/10 px-3 py-1 text-xs uppercase tracking-[0.25em] text-glow">
          {project.category}
        </span>
        <h3 className="font-display text-2xl font-semibold text-white">{project.title}</h3>
        <p className="mt-2 max-w-md text-sm leading-6 text-slate-300">{project.summary}</p>
      </div>
    </motion.article>
  )
}
