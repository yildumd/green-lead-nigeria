'use client'

import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'
import PartnerCard from '@/components/partnerships/PartnerCard'

const partners = [
  {
    name: 'Global Carbon Council',
    logo: '/images/partners/gcc-logo.png',
    description: 'Leading international carbon credit program ensuring highest standards of environmental integrity.',
    type: 'verification',
    website: 'https://globalcarboncouncil.com',
    partnershipYear: 2022,
  },
  {
    name: 'Ampere (Jordan)',
    logo: '/images/partners/ampere-logo.png',
    description: 'Strategic partner in carbon project development and technology solutions across the Middle East and Africa.',
    type: 'development',
    website: 'https://ampere.jo',
    partnershipYear: 2021,
  },
  {
    name: 'Spring Project',
    logo: '/images/partners/spring-logo.png',
    description: 'Collaborative partner in afforestation and ecosystem restoration initiatives across Nigeria.',
    type: 'implementation',
    website: 'https://springproject.org',
    partnershipYear: 2020,
  },
  {
    name: 'Nigerian Conservation Foundation',
    logo: '/images/partners/ncf-logo.png',
    description: 'Partnering on biodiversity conservation and environmental education programs.',
    type: 'nonprofit',
    website: 'https://ncfnigeria.org',
    partnershipYear: 2021,
  },
  {
    name: 'Verra',
    logo: '/images/partners/verra-logo.png',
    description: 'Accredited verification body for carbon credit standards and methodologies.',
    type: 'verification',
    website: 'https://verra.org',
    partnershipYear: 2022,
  },
  {
    name: 'UNDP Nigeria',
    logo: '/images/partners/undp-logo.png',
    description: 'Partnering on sustainable development goals and climate action initiatives.',
    type: 'development',
    website: 'https://undp.org/nigeria',
    partnershipYear: 2023,
  },
]

export default function PartnershipsPage() {
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
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">Our Partnerships</h1>
            <p className="text-lg text-gray-600">
              Collaborating with leading organizations to amplify our impact and drive sustainable change
            </p>
          </motion.div>
        </Container>
      </Section>

      {/* Partners Grid */}
      <Section background="gray">
        <Container>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {partners.map((partner, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <PartnerCard {...partner} />
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Become a Partner CTA */}
      <Section background="primary">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-4 text-3xl font-bold">Become a Partner</h2>
              <p className="mb-6 text-gray-300">
                Join us in our mission to accelerate climate action across Nigeria and Africa. 
                Whether you're a corporation, NGO, or government agency, there are many ways to collaborate.
              </p>
              <ul className="mb-8 space-y-3">
                {[
                  'Carbon project development and financing',
                  'Technical expertise and methodology support',
                  'Research and innovation partnerships',
                  'Community engagement initiatives',
                  'Corporate sustainability programs',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-gray-300">
                    <span className="text-secondary">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <button className="rounded-lg bg-white px-8 py-3 font-semibold text-primary transition-all hover:bg-gray-100">
                Inquire About Partnership
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="rounded-2xl bg-white/10 p-8 backdrop-blur-sm"
            >
              <h3 className="mb-4 text-2xl font-bold">Why Partner With Us?</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="mb-2 font-semibold">Proven Track Record</h4>
                  <p className="text-sm text-gray-300">
                    5+ years of successful project implementation across Nigeria
                  </p>
                </div>
                <div>
                  <h4 className="mb-2 font-semibold">Global Standards</h4>
                  <p className="text-sm text-gray-300">
                    Accredited by leading international carbon credit programs
                  </p>
                </div>
                <div>
                  <h4 className="mb-2 font-semibold">Local Expertise</h4>
                  <p className="text-sm text-gray-300">
                    Deep understanding of Nigerian environmental and regulatory landscape
                  </p>
                </div>
                <div>
                  <h4 className="mb-2 font-semibold">Measurable Impact</h4>
                  <p className="text-sm text-gray-300">
                    Data-driven approach with transparent reporting
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </Section>
    </>
  )
}