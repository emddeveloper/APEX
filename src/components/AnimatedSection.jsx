import { motion } from 'framer-motion'

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function AnimatedSection({
  children,
  className = '',
  delay = 0,
  ...props
}) {
  return (
    <motion.section
      className={className}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay }}
      {...props}
    >
      {children}
    </motion.section>
  )
}
