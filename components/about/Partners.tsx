'use client'

import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'

const partners = [
  {
    name: 'Ampere (Jordan)',
    description: 'Strategic partner in carbon project development and verification',
  },
  {
    name: 'Spring Project',
    description: 'Collaborating on afforestation and ecosystem restoration initiatives',
  },
  {
    name: 'Global Carbon Council',
    description: 'Accredited partner for carbon credit verification',
  },
  {
    name: 'Nigerian Conservation Foundation',
    description: 'Partner in biodiversity preservation projects',
  },
]

export default function Partners() {
  return (
    <Section background="gray">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold">Our Partners</h2>
          <p className="mx-auto max-w-2xl text-gray-600">
            We collaborate with leading organizations to maximize our impact
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {partners.map((partner, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="rounded-2xl bg-white p-6 text-center shadow-lg transition-all hover:shadow-xl"
            >
              <div className="mx-auto mb-4 h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-3xl">{partner.name.charAt(0)}</span>
              </div>
              <h3 className="mb-2 text-xl font-bold">{partner.name}</h3>
              <p className="text-sm text-gray-600">{partner.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  )
}