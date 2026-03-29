import { Link } from 'react-router-dom'
import { FiMapPin, FiPhoneCall } from 'react-icons/fi'
import { company, navigationLinks } from '../data/siteContent'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/35">
      <div className="container-shell grid gap-10 py-12 lg:grid-cols-[1.4fr_0.8fr_1fr]">
        <div className="max-w-md">
          <div className="mb-4 flex items-center gap-3">
            <img src="/apex_logo.png" alt="Apex Engineering logo" className="h-12 w-12 bg-white" />
            <div>
              <p className="font-display text-xl font-semibold text-white">{company.name}</p>
              <p className="text-sm text-slate-400">
                Electrical Engineering Consultancy &amp; Utility Projects
              </p>
            </div>
          </div>
          <p className="text-sm leading-7 text-slate-400">
            Industrial-strength electrical consultancy and execution support for transformer,
            substation, distribution, and government utility infrastructure works.
          </p>
        </div>

        <div>
          <h3 className="mb-4 font-display text-xl font-semibold text-white">Quick Links</h3>
          <div className="space-y-3 text-sm text-slate-300">
            {navigationLinks.map((link) => (
              <Link key={link.path} to={link.path} className="block transition hover:text-glow">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 font-display text-xl font-semibold text-white">Contact Info</h3>
          <div className="space-y-4 text-sm text-slate-300">
            <div className="flex items-start gap-3">
              <FiMapPin className="mt-1 text-electric" />
              <span>{company.location}</span>
            </div>
            <a href={company.phoneLink} className="flex items-center gap-3 transition hover:text-glow">
              <FiPhoneCall className="text-electric" />
              <span>{company.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-sm text-slate-500">
        <span>@2026 All rights reserved. </span>
        <span>{company.name}. </span>
        <span>
          Design by{' '}
          <a
            href="https://www.saypinfotech.com"
            target="_blank"
            rel="noreferrer"
            className="text-slate-300 transition hover:text-white"
          >
            SAYP INFOTECH
          </a>
        </span>
      </div>
    </footer>
  )
}
