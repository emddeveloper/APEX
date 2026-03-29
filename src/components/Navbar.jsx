import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Link, NavLink } from 'react-router-dom'
import { HiOutlineMenuAlt3, HiOutlineX } from 'react-icons/hi'
import { company, navigationLinks } from '../data/siteContent'

const linkClasses =
  'relative text-sm font-medium text-slate-300 transition hover:text-white after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-electric after:transition-transform after:duration-300 hover:after:scale-x-100'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#060a13]/85 backdrop-blur-xl">
      <div className="container-shell flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src="/apex_logo.png" alt="Apex Engineering logo" className="h-11 w-11 bg-white" />
          <div>
            <p className="font-display text-lg font-semibold leading-none text-white sm:text-xl">
              {company.shortName}
            </p>
            <p className="mt-1 hidden text-[11px] uppercase tracking-[0.26em] text-slate-400 sm:block">
              Electrical Consultancy
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navigationLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `${linkClasses} ${isActive ? 'text-white after:scale-x-100' : ''}`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Link to="/contact" className="primary-btn py-2.5">
            Start a Conversation
          </Link>
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xl text-white lg:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="border-t border-white/10 bg-[#0b111d] lg:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
          >
            <div className="container-shell flex flex-col gap-4 py-5">
              {navigationLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `rounded-2xl px-4 py-3 text-sm font-medium transition ${
                      isActive ? 'bg-electric/15 text-white' : 'bg-white/5 text-slate-300'
                    }`
                  }
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </NavLink>
              ))}
              <Link to="/contact" className="primary-btn" onClick={() => setOpen(false)}>
                Contact Us
              </Link>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
