import {
  FaClipboardCheck,
  FaHardHat,
  FaIndustry,
  FaLightbulb,
  FaTools,
  FaVectorSquare,
} from 'react-icons/fa'
import {
  GiElectricalResistance,
  GiEnergyArrow,
  GiPowerLightning,
  GiPowerGenerator,
} from 'react-icons/gi'

export const company = {
  name: 'Apex Engineering & Project Co',
  shortName: 'Apex Engineering',
  location: 'Ranihati, Panchla, Howrah - 711322, West Bengal, India',
  phoneDisplay: '+91 9433056972',
  phoneLink: 'tel:+919433056972',
  whatsappLink: 'https://wa.me/919433056972',
  mapEmbed:
    'https://www.google.com/maps?q=Ranihati,Panchla,Howrah,West+Bengal+711322&output=embed',
}

export const navigationLinks = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Projects', path: '/projects' },
  { label: 'Contact', path: '/contact' },
]

export const referenceImages = {
  transmission:
    'https://www.techno.co.in/public/uploads/2/2020-06/transmissionbanner.jpg',
  substation:
    'https://www.techno.co.in/public/uploads/1/2023-11/chint_electrical_substation_featured_image_1.jpg',
  substationAerialOne:
    'https://www.techno.co.in/public/uploads/1/2023-11/pic_1.png',
  substationAerialTwo:
    'https://www.techno.co.in/public/uploads/1/2023-11/pic_2.png',
  substationAerialThree:
    'https://www.techno.co.in/public/uploads/1/2023-11/pic_3.png',
  utilityControl:
    'https://www.techno.co.in/public/uploads/1/2023-11/pic_4.png',
  utilityMetering:
    'https://www.techno.co.in/public/uploads/1/2023-11/pic_5.png',
  cabling:
    'https://www.techno.co.in/public/uploads/1/2023-11/data_center_cabling.jpg',
  dataCenter:
    'https://www.techno.co.in/public/uploads/1/2023-11/oip_1.jpeg',
  renewable:
    'https://www.techno.co.in/public/uploads/2/2020-02/windmill2.jpg',
}

export const services = [
  {
    title: 'Electrical Consultancy & Design',
    icon: FaVectorSquare,
    image: referenceImages.substationAerialOne,
    short:
      'Front-end engineering for utility and industrial power systems covering planning, single-line concepts, protection philosophy, and approval-ready documentation.',
    details: [
      'Load calculation, planning studies, and system design support',
      'HT/LT distribution systems, SLDs, layouts, and equipment planning',
      'Electrical drawings, BOQ support, and approval-oriented documentation',
    ],
  },
  {
    title: 'Transformer Installation',
    icon: GiPowerGenerator,
    image: referenceImages.substation,
    short:
      'Turnkey transformer installation support with site readiness, erection supervision, pre-commissioning checks, and energization coordination.',
    details: [
      'Site preparation, equipment placement, and installation workflows',
      'Testing, commissioning, oil checks, and energization support',
      'Safety compliance, documentation, and utility-facing coordination',
    ],
  },
  {
    title: 'Substation & Power House Works',
    icon: FaIndustry,
    image: referenceImages.substationAerialTwo,
    short:
      'Execution support for AIS/GIS substations, switchyard integration, control panels, protection interfaces, and power house electrical packages.',
    details: [
      'Substation setup support with yard, panel, and auxiliary systems',
      'Switchyard, relay, protection, and control installation works',
      'Power house coordination for cable routing, earthing, and readiness',
    ],
  },
  {
    title: 'Street Lighting & Distribution Line Works',
    icon: FaLightbulb,
    image: referenceImages.transmission,
    short:
      'Reliable distribution strengthening for public utility networks including street lighting, feeder corridors, overhead lines, and underground routing.',
    details: [
      'Installation of street lighting systems and poles',
      'Overhead line erection, augmentation, and maintenance support',
      'Underground cable routing and utility corridor execution works',
    ],
  },
  {
    title: 'Testing & Commissioning',
    icon: FaClipboardCheck,
    image: referenceImages.substationAerialThree,
    short:
      'Commissioning-focused validation for transformers, cables, panels, and allied equipment to ensure safe and dependable startup.',
    details: [
      'Transformer testing, ratio checks, and commissioning workflows',
      'Cable testing, continuity checks, and energization procedures',
      'Inspection-led validation and handover documentation',
    ],
  },
  {
    title: 'Maintenance & Repair Services',
    icon: FaTools,
    image: referenceImages.cabling,
    short:
      'Maintenance-led service support for transformers, substations, feeders, and utility assets requiring dependable uptime and quick restoration.',
    details: [
      'Transformer servicing, repair planning, and corrective action',
      'Scheduled maintenance for electrical systems and auxiliaries',
      'Operational support to reduce downtime and restore reliability',
    ],
  },
]

export const projects = [
  {
    id: 1,
    title: '765 kV Yard & Bay Integration',
    category: 'Transformer',
    summary: 'High-capacity transformer bay coordination with auxiliary system readiness.',
    image: referenceImages.substationAerialOne,
  },
  {
    id: 2,
    title: 'Distribution Feeder Strengthening',
    category: 'Line Work',
    summary: 'Augmentation of overhead corridor elements for steadier utility delivery.',
    image: referenceImages.transmission,
  },
  {
    id: 3,
    title: 'GIS Substation Control Package',
    category: 'Substation',
    summary: 'Panel, control, and equipment integration aligned to grid-ready workflows.',
    image: referenceImages.substationAerialTwo,
  },
  {
    id: 4,
    title: 'Transformer Installation Package',
    category: 'Transformer',
    summary: 'Foundation readiness, placement support, and pre-commissioning checks.',
    image: referenceImages.substation,
  },
  {
    id: 5,
    title: 'Rural Electrification Line Work',
    category: 'Line Work',
    summary: 'Distribution line augmentation for public power access and field reliability.',
    image: referenceImages.utilityMetering,
  },
  {
    id: 6,
    title: 'Switchyard & Power House Interface',
    category: 'Substation',
    summary: 'Cable, panel, and switchyard coordination for integrated power house execution.',
    image: referenceImages.substationAerialThree,
  },
  {
    id: 7,
    title: 'Street Lighting Corridor Upgrade',
    category: 'Line Work',
    summary: 'Lighting pole installation and feeder-side urban utility enhancement.',
    image: referenceImages.utilityControl,
  },
  {
    id: 8,
    title: 'HT Transformer Commissioning',
    category: 'Transformer',
    summary: 'Testing, oil checks, and energization support for installation handover.',
    image: referenceImages.substation,
  },
  {
    id: 9,
    title: 'Relay & Protection Panel Setup',
    category: 'Substation',
    summary: 'Control panel installation with protection and interface readiness.',
    image: referenceImages.dataCenter,
  },
  {
    id: 10,
    title: 'Underground Utility Cable Network',
    category: 'Line Work',
    summary: 'Underground routing and termination support for utility-grade distribution.',
    image: referenceImages.cabling,
  },
]

export const whyChooseUs = [
  {
    title: 'Experienced Engineers',
    description:
      'A focused team delivering field-ready electrical execution with engineering discipline and site awareness.',
    icon: GiElectricalResistance,
  },
  {
    title: 'Government Project Expertise',
    description:
      'Hands-on experience supporting WBSEDCL-oriented utility infrastructure and execution-led electrical delivery.',
    icon: GiPowerLightning,
  },
  {
    title: 'Quality & Safety Compliance',
    description:
      'Methodical workmanship, compliance-conscious processes, and a safety-led approach from design review to commissioning.',
    icon: FaHardHat,
  },
  {
    title: 'On-time Project Execution',
    description:
      'Structured execution planning that helps maintain schedules, utility coordination, and dependable handovers.',
    icon: GiEnergyArrow,
  },
]

export const stats = [
  { value: 'WBSEDCL', label: 'Utility-Focused Execution' },
  { value: 'GIS / AIS', label: 'Substation Readiness' },
  { value: 'HT / LT', label: 'System Expertise' },
  { value: 'Testing', label: 'Commissioning Discipline' },
]
