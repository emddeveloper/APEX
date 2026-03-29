import { useState } from 'react'
import { FiMapPin, FiMessageSquare, FiPhoneCall } from 'react-icons/fi'
import AnimatedSection from '../components/AnimatedSection'
import PageBanner from '../components/PageBanner'
import SectionHeading from '../components/SectionHeading'
import { company } from '../data/siteContent'

const initialForm = { name: '', phone: '', message: '' }

export default function Contact() {
  const [formData, setFormData] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
    setFormData(initialForm)
  }

  return (
    <div className="page-shell">
      <PageBanner
        eyebrow="Contact"
        title="Start your next electrical infrastructure conversation with Apex Engineering."
        description="Reach out for consultancy, transformer installation, substation execution, line work, or project support requirements."
      />

      <AnimatedSection className="section-space">
        <div className="container-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-6">
            <SectionHeading
              eyebrow="Get In Touch"
              title="How to reach us."
              description="Use the contact form, call directly, or connect through WhatsApp for project discussions."
            />
            <div className="section-surface rounded-[28px] p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-electric/25 bg-electric/10 text-xl text-electric">
                  <FiMapPin />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-semibold text-white">Address</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-300">
                    Ranihati, Panchla, Howrah - 711322
                  </p>
                </div>
              </div>
            </div>
            <div className="section-surface rounded-[28px] p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-spark/25 bg-spark/10 text-xl text-spark">
                  <FiPhoneCall />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-semibold text-white">Phone</h3>
                  <a href={company.phoneLink} className="mt-2 inline-flex text-sm leading-7 text-slate-300 hover:text-white">
                    {company.phoneDisplay}
                  </a>
                </div>
              </div>
            </div>
            <div className="section-surface rounded-[28px] p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-electric/25 bg-electric/10 text-xl text-electric">
                  <FiMessageSquare />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-semibold text-white">WhatsApp</h3>
                  <a
                    href={company.whatsappLink}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 inline-flex text-sm leading-7 text-slate-300 hover:text-white"
                  >
                    Chat instantly for quicker coordination
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <form onSubmit={handleSubmit} className="section-surface rounded-[30px] p-6 sm:p-8">
              <h2 className="font-display text-3xl font-semibold text-white">Contact Form</h2>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                Share your requirement and we&apos;ll have the details ready for your follow-up.
              </p>
              <div className="mt-8 grid gap-5">
                <label className="grid gap-2 text-sm text-slate-300">
                  <span>Name</span>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition focus:border-electric"
                    placeholder="Your name"
                  />
                </label>
                <label className="grid gap-2 text-sm text-slate-300">
                  <span>Phone</span>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition focus:border-electric"
                    placeholder="+91"
                  />
                </label>
                <label className="grid gap-2 text-sm text-slate-300">
                  <span>Message</span>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    required
                    className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition focus:border-electric"
                    placeholder="Tell us about your project requirement"
                  />
                </label>
              </div>
              <button type="submit" className="primary-btn mt-7">
                Send Enquiry
              </button>
              {submitted ? (
                <p className="mt-4 text-sm text-[#7fffb1]">
                  Thanks, your enquiry has been captured in the UI. Connect the form to your
                  preferred backend or email workflow for live submissions.
                </p>
              ) : null}
            </form>

            <div className="overflow-hidden rounded-[30px] border border-white/10 bg-white/5">
              <iframe
                title="Apex Engineering Map"
                src={company.mapEmbed}
                className="map-frame h-[360px] w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  )
}
