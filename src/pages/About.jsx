import { company, referenceImages } from '../data/siteContent'
import AnimatedSection from '../components/AnimatedSection'
import PageBanner from '../components/PageBanner'
import SectionHeading from '../components/SectionHeading'

export default function About() {
  return (
    <div className="page-shell">
      <PageBanner
        eyebrow="About Us"
        title="Built on dependable engineering, utility insight, and disciplined execution."
        description="Apex Engineering & Project Co delivers electrical consultancy and project execution support for transformer, substation, switchyard, and distribution infrastructure across West Bengal."
      />

      <AnimatedSection className="section-space">
        <div className="container-shell grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <SectionHeading
            eyebrow="Company Profile"
            title="Trusted electrical engineering consultancy based in Howrah."
            description={`${company.name} is a trusted electrical engineering consultancy based in Howrah, West Bengal. We specialize in execution and consultancy of WBSEDCL projects including transformer installations, power house works, substations, and electrical distribution systems.`}
          />
          <div className="section-surface rounded-[30px] p-7 sm:p-10">
            <div className="mb-8 grid gap-4 sm:grid-cols-[1.15fr_0.85fr]">
              <img
                src={referenceImages.substation}
                alt="Transmission substation reference"
                className="h-60 w-full rounded-[24px] object-cover"
              />
              <div className="overflow-hidden rounded-[24px] border border-white/10 bg-black/20">
                <img
                  src={referenceImages.transmission}
                  alt="Transmission line reference"
                  className="h-full min-h-60 w-full object-cover"
                />
              </div>
            </div>
            <p className="text-base leading-8 text-slate-300">
              With a team of skilled engineers and technicians, we deliver reliable, safe, and
              efficient electrical infrastructure solutions. Our expertise includes HT/LT systems,
              substation development, transformer works, utility feeder packages, and turnkey
              electrical project support from design coordination through commissioning.
            </p>
            <p className="mt-6 text-base leading-8 text-slate-300">
              We are committed to quality workmanship, compliance with electrical standards,
              testing-led readiness, and timely project completion.
            </p>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-space pt-0">
        <div className="container-shell grid gap-6 md:grid-cols-3">
          {[
            {
              title: 'Execution Excellence',
              text: 'Practical field coordination and consultancy support for utility, transformer, substation, and feeder-strengthening requirements.',
            },
            {
              title: 'Technical Capability',
              text: 'Coverage across HT/LT systems, transformer packages, substation setup, switchyard interfaces, and electrical distribution projects.',
            },
            {
              title: 'Compliance Commitment',
              text: 'A delivery mindset grounded in workmanship quality, electrical standards, safe on-site practices, and commissioning readiness.',
            },
          ].map((item) => (
            <div key={item.title} className="section-surface rounded-[28px] p-6">
              <h3 className="font-display text-2xl font-semibold text-white">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">{item.text}</p>
            </div>
          ))}
        </div>
      </AnimatedSection>
    </div>
  )
}
