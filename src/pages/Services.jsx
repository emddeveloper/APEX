import AnimatedSection from '../components/AnimatedSection'
import PageBanner from '../components/PageBanner'
import SectionHeading from '../components/SectionHeading'
import { services } from '../data/siteContent'

export default function Services() {
  return (
    <div className="page-shell">
      <PageBanner
        eyebrow="Services"
        title="Specialized electrical services for utility, industrial, and public infrastructure projects."
        description="Apex Engineering & Project Co supports the electrical project cycle through consultancy, engineering coordination, installation support, testing, commissioning, and maintenance-led services."
      />

      <AnimatedSection className="section-space">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Service Portfolio"
            title="Structured around design clarity, installation quality, and reliable commissioning."
            description="The service portfolio is presented with a stronger transmission and utility-project vocabulary while remaining aligned with Apex Engineering’s consultancy and execution support role."
          />
          <div className="mt-12 space-y-6">
            {services.map((service, index) => {
              const Icon = service.icon

              return (
                <div
                  key={service.title}
                  className="section-surface grid gap-6 rounded-[30px] p-6 sm:p-8 lg:grid-cols-[0.34fr_0.66fr]"
                >
                  <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-6">
                    <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl border border-electric/30 bg-electric/10 text-3xl text-electric">
                      <Icon />
                    </div>
                    <p className="mt-6 text-sm uppercase tracking-[0.24em] text-slate-400">
                      Service 0{index + 1}
                    </p>
                    <h2 className="mt-2 font-display text-3xl font-semibold text-white">
                      {service.title}
                    </h2>
                    <p className="mt-5 text-sm leading-7 text-slate-300">{service.short}</p>
                  </div>
                  <div className="rounded-[24px] border border-white/10 bg-black/15 p-6 sm:p-7">
                    <p className="text-sm uppercase tracking-[0.24em] text-[#ffbb75]">
                      Scope Details
                    </p>
                    <div className="mt-6 grid gap-4">
                      {service.details.map((item) => (
                        <div
                          key={item}
                          className="rounded-[20px] border border-white/10 bg-white/[0.03] px-5 py-4"
                        >
                          <div className="flex items-start gap-3">
                            <div className="mt-2 h-2.5 w-2.5 rounded-full bg-spark" />
                            <p className="text-sm leading-7 text-slate-300">{item}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </AnimatedSection>
    </div>
  )
}
