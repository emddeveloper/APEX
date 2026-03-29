import { motion } from 'framer-motion'

export default function ServiceCard({ service }) {
  const Icon = service.icon

  return (
    <motion.article
      className="card-glow section-surface h-full rounded-[28px] p-6 sm:p-7"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.28 }}
    >
      <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-electric/25 bg-electric/10 text-2xl text-electric">
        <Icon />
      </div>
      <h3 className="font-display text-2xl font-semibold text-white">{service.title}</h3>
      <p className="mt-4 text-sm leading-7 text-slate-300">{service.short}</p>
    </motion.article>
  )
}
