import { useState } from 'react'
import AnimatedSection from '../components/AnimatedSection'
import PageBanner from '../components/PageBanner'
import ProjectCard from '../components/ProjectCard'
import SectionHeading from '../components/SectionHeading'
import { projects, referenceImages } from '../data/siteContent'

const filters = ['All', 'Transformer', 'Line Work', 'Substation']

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((project) => project.category === activeFilter)

  return (
    <div className="page-shell">
      <PageBanner
        eyebrow="Projects"
        title="Gallery-driven project highlights across transformer, line, and substation work."
        description="The gallery is refit around transmission-style scopes such as AIS/GIS substations, transformer packages, feeder strengthening, and commissioning workflows."
      />

      <AnimatedSection className="section-space">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Project Filters"
            title="Browse by electrical project category."
            description="Filter the gallery to quickly focus on transformer installations, line work, or substation-related execution without showing location details."
          />

          <div className="mt-10 overflow-hidden rounded-[28px] border border-white/10 bg-black/20">
            <img
              src={referenceImages.transmission}
              alt="Transmission corridor reference"
              className="h-44 w-full object-cover sm:h-56"
            />
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full px-5 py-3 text-sm font-semibold transition ${
                  activeFilter === filter
                    ? 'bg-electric text-white shadow-electric'
                    : 'border border-white/10 bg-white/5 text-slate-300 hover:border-electric/40'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </AnimatedSection>
    </div>
  )
}
