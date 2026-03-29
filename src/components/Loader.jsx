import { AnimatePresence, motion } from 'framer-motion'
import { FaBolt } from 'react-icons/fa'

export default function Loader({ isVisible }) {
  return (
    <AnimatePresence>
      {isVisible ? (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#040811]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.45, ease: 'easeOut' } }}
        >
          <div className="relative flex h-36 w-36 items-center justify-center">
            <motion.div
              className="absolute inset-0 rounded-full border border-electric/30"
              animate={{ scale: [0.85, 1.18, 0.92], opacity: [0.2, 0.9, 0.2] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className="absolute inset-3 rounded-full border border-spark/40"
              animate={{ scale: [1, 0.82, 1], rotate: [0, 180, 360] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className="absolute h-[2px] w-32 bg-gradient-to-r from-transparent via-electric to-transparent"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }}
            />
            <motion.div
              className="relative flex h-16 w-16 items-center justify-center rounded-full bg-electric text-2xl text-white shadow-electric"
              animate={{ boxShadow: ['0 0 0 rgba(30,144,255,0.1)', '0 0 30px rgba(30,144,255,0.6)', '0 0 0 rgba(30,144,255,0.1)'] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <FaBolt />
            </motion.div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
