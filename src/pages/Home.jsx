import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiArrowRight, FiPhoneCall } from 'react-icons/fi'
import AnimatedSection from '../components/AnimatedSection'
import ElectricBackground from '../components/ElectricBackground'
import ProjectCard from '../components/ProjectCard'
import SectionHeading from '../components/SectionHeading'
import ServiceCard from '../components/ServiceCard'
import StatsStrip from '../components/StatsStrip'
import { company, projects, services, whyChooseUs } from '../data/siteContent'

export default function Home() {
  return (
    <div className="page-shell">
      <section className="relative isolate overflow-hidden border-b border-white/10">
        <ElectricBackground />
        <div className="container-shell relative flex min-h-[calc(100vh-5rem)] items-center py-20">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="eyebrow">WBSEDCL, Substation & Grid Works Specialists</span>
              <h1 className="max-w-4xl font-display text-5xl font-semibold leading-[0.95] text-white sm:text-6xl lg:text-7xl">
                Powering Infrastructure with{' '}
                <span className="text-gradient">Precision &amp; Expertise</span>
              </h1>
              <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                Specialized in WBSEDCL electrical projects, transformer installation, substation
                integration, distribution strengthening, testing, and commissioning support
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link to="/projects" className="primary-btn gap-2">
                  View Projects
                  <FiArrowRight />
                </Link>
                <Link to="/contact" className="secondary-btn gap-2">
                  Contact Us
                  <FiPhoneCall />
                </Link>
              </div>
            </motion.div>

            <motion.div
              className="grid-panel rounded-[32px] p-6 sm:p-8"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="rounded-[26px] border border-white/10 bg-black/20 p-5">
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-[0.26em] text-glow">Live Scope</p>
                    <h2 className="mt-2 font-display text-3xl font-semibold text-white">
                      Utility-Grade Delivery
                    </h2>
                  </div>
                  <div className="h-3 w-3 rounded-full bg-[#4ade80] shadow-[0_0_20px_rgba(74,222,128,0.8)]" />
                </div>
                <div className="space-y-4">
                  {[
                    'Design support, documentation, and execution planning',
                    'Transformer, AIS/GIS substation, and control-panel coordination',
                    'Distribution line work, testing, commissioning, and handover support',
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-4"
                    >
                      <span className="mt-1 h-2.5 w-2.5 rounded-full bg-electric" />
                      <p className="text-sm leading-7 text-slate-300">{item}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 rounded-[24px] border border-spark/20 bg-spark/10 px-5 py-4">
                  <p className="text-sm uppercase tracking-[0.22em] text-[#ffbb75]">Head Office</p>
                  <p className="mt-2 text-base text-white">{company.location}</p>
                  <a href={company.phoneLink} className="mt-3 inline-flex text-sm text-glow hover:text-white">
                    {company.phoneDisplay}
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="container-shell -mt-10 pb-8">
        <StatsStrip />
      </section>

      <AnimatedSection className="section-space">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SectionHeading
            eyebrow="About Apex"
            title="A trusted consultancy partner for electrical infrastructure and grid-strengthening work."
            description="Apex Engineering & Project Co supports dependable government utility and electrical development works with a practical, safety-driven, execution-first approach shaped around design, installation, testing, and commissioning discipline."
          />
          <div className="section-surface rounded-[30px] p-7 sm:p-10">
            <p className="text-base leading-8 text-slate-300">
              Based in Howrah, West Bengal, we focus on electrical consultancy, WBSEDCL project
              execution, transformer installation, substations, power house interfaces, and
              distribution network works. Our team combines site discipline, technical planning,
              testing awareness, and compliance-minded delivery to help build resilient power
              systems.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                'Utility-oriented consultancy and execution support',
                'Infrastructure planning with field coordination strength',
                'HT/LT systems, substations, and feeder works coverage',
                'Quality, safety, testing, and timely project completion',
              ].map((item) => (
                <div key={item} className="rounded-[22px] border border-white/10 bg-white/5 px-4 py-4">
                  <p className="text-sm leading-7 text-white">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-space">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Core Services"
            title="End-to-end electrical services built for critical infrastructure."
            description="From design support and documentation to erection planning, testing, and commissioning, our services are designed for dependable power delivery across public and industrial environments."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-space">
        <div className="container-shell">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Project Gallery"
              title="Selected transformer, line, and substation work snapshots."
              description="The gallery is now refit around transmission-style themes such as AIS/GIS substations, transformer packages, feeder strengthening, and utility commissioning workflows."
            />
            <Link to="/projects" className="secondary-btn gap-2 self-start">
              Explore All Projects
              <FiArrowRight />
            </Link>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projects.slice(0, 6).map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-space">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="The execution discipline behind every reliable power system."
            description="We combine consultancy insight with site-focused delivery for projects that demand technical accuracy, utility compliance, testing discipline, and schedule confidence."
            align="center"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {whyChooseUs.map((item) => {
              const Icon = item.icon

              return (
                <div key={item.title} className="section-surface rounded-[28px] p-6 text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-spark/25 bg-spark/10 text-3xl text-spark">
                    <Icon />
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-slate-300">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-space pt-4">
        <div className="container-shell">
          <div className="overflow-hidden rounded-[34px] border border-electric/20 bg-gradient-to-r from-[#0d1627] via-[#10203f] to-[#16110d] px-6 py-10 shadow-electric sm:px-10 lg:px-14">
            <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
              <div>
                <span className="eyebrow border-spark/35 bg-spark/10 text-[#ffbb75]">
                  Contact CTA
                </span>
                <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
                  Let&apos;s Build Reliable Power Systems Together
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
                  Share your consultancy, installation, or utility project requirement and we will
                  help shape a focused, execution-ready approach.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row lg:flex-col lg:items-end">
                <Link to="/contact" className="primary-btn">
                  Contact Apex Engineering
                </Link>
                <a href={company.phoneLink} className="secondary-btn">
                  {company.phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  )
}
