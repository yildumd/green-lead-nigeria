'use client'

import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'
import ServiceCard from '@/components/services/ServiceCard'

const services = [
  {
    id: 'carbon-crediting',
    title: 'Carbon Crediting & Financing',
    icon: '🌿',
    shortDescription: 'End-to-end carbon credit project development, financing, and management services.',
    longDescription: 'We provide comprehensive carbon crediting solutions including project identification, feasibility studies, methodology selection, monitoring plans, verification coordination, and credit monetization. Our team ensures projects meet international standards like Verra, Gold Standard, and GCC while maximizing financial returns for stakeholders.',
    features: [
      'Project development and registration',
      'Carbon credit financing',
      'Verification and issuance support',
      'Market access and trading',
    ],
  },
  {
    id: 'auditing',
    title: 'Carbon Project Auditing',
    icon: '📊',
    shortDescription: 'Independent verification and audit support for carbon projects.',
    longDescription: 'Our expert auditors provide third-party verification services ensuring carbon projects meet rigorous international standards. We act as a bridge between project developers and global auditors, facilitating smooth verification processes and ensuring integrity in carbon accounting.',
    features: [
      'Independent verification',
      'Methodology compliance',
      'Data quality assurance',
      'Audit coordination',
    ],
  },
  {
    id: 'forest-conservation',
    title: 'Forest Conservation & Afforestation',
    icon: '🌳',
    shortDescription: 'Protecting and restoring Nigeria\'s vital forest ecosystems.',
    longDescription: 'We develop and manage forest conservation projects that generate carbon credits while preserving biodiversity. Our afforestation initiatives restore degraded lands, create green jobs, and provide sustainable livelihoods for local communities.',
    features: [
      'Reforestation programs',
      'Sustainable forest management',
      'Biodiversity protection',
      'Community engagement',
    ],
  },
  {
    id: 'biodiversity',
    title: 'Biodiversity Improvement',
    icon: '🦋',
    shortDescription: 'Ecosystem restoration and biodiversity conservation initiatives.',
    longDescription: 'Our biodiversity projects go beyond carbon to deliver holistic ecosystem benefits. We work to restore habitats, protect endangered species, and create nature-based solutions that enhance resilience to climate change while generating verified environmental credits.',
    features: [
      'Habitat restoration',
      'Species protection',
      'Ecosystem monitoring',
      'Biodiversity credits',
    ],
  },
  {
    id: 'contract-services',
    title: 'General Contract Services',
    icon: '📝',
    shortDescription: 'Comprehensive environmental consulting and project management.',
    longDescription: 'We offer a full suite of environmental services including environmental impact assessments, sustainability strategy development, ESG reporting, and project management. Our team supports businesses in achieving their sustainability goals and regulatory compliance.',
    features: [
      'Environmental assessments',
      'Sustainability consulting',
      'ESG strategy and reporting',
      'Project implementation',
    ],
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="pt-32">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">Our Services</h1>
            <p className="text-lg text-gray-600">
              Comprehensive carbon solutions and environmental services tailored to meet your sustainability goals
            </p>
          </motion.div>
        </Container>
      </Section>

      {/* Services List */}
      <Section background="gray">
        <Container>
          <div className="space-y-8">
            {services.map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <ServiceCard {...service} />
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section background="primary">
        <Container>
          <div className="text-center">
            <h2 className="mb-4 text-3xl font-bold">Ready to Start Your Carbon Journey?</h2>
            <p className="mx-auto mb-8 max-w-2xl text-gray-300">
              Let's discuss how our services can help you achieve your sustainability goals
            </p>
            <button className="rounded-lg bg-white px-8 py-3 font-semibold text-primary transition-all hover:bg-gray-100">
              Request a Consultation
            </button>
          </div>
        </Container>
      </Section>
    </>
  )
}