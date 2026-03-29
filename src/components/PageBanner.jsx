import { motion } from 'framer-motion'
import ElectricBackground from './ElectricBackground'

export default function PageBanner({ eyebrow, title, description }) {
  return (
    <section className="page-shell relative overflow-hidden border-b border-white/10">
      <div className="absolute inset-0 opacity-70">
        <ElectricBackground />
      </div>
      <div className="container-shell relative py-24 sm:py-28">
        <motion.div
          className="grid-panel max-w-3xl rounded-[32px] px-6 py-10 sm:px-10"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="eyebrow">{eyebrow}</span>
          <h1 className="font-display text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            {description}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
