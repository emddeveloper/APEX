import { FaWhatsapp } from 'react-icons/fa'
import { company } from '../data/siteContent'

export default function WhatsAppButton() {
  return (
    <a
      href={company.whatsappLink}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-3xl text-white shadow-[0_18px_40px_rgba(37,211,102,0.35)] transition hover:-translate-y-1"
    >
      <FaWhatsapp />
    </a>
  )
}
