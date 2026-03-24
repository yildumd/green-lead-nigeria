'use client'

import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'
import Partners from '@/components/about/Partners'

export default function AboutPage() {
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
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">About Green Lead Nigeria</h1>
            <p className="text-lg text-gray-600">
              We're on a mission to accelerate Africa's transition to a sustainable, 
              low-carbon economy through innovative carbon solutions and environmental stewardship.
            </p>
          </motion.div>
        </Container>
      </Section>

      {/* Company Overview */}
      <Section background="gray">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-4 text-3xl font-bold">Our Story</h2>
              <p className="mb-4 text-gray-600">
                Founded in 2020, Green Lead Nigeria emerged from a vision to bridge the gap between 
                global carbon markets and local environmental initiatives in Nigeria. We recognized 
                that Nigeria, with its rich biodiversity and growing economy, has immense potential 
                to lead Africa's climate action efforts.
              </p>
              <p className="mb-4 text-gray-600">
                Today, we work as a trusted intermediary between international auditors, local 
                businesses, and communities, ensuring that carbon credits are generated, verified, 
                and traded with the highest standards of integrity and impact.
              </p>
              <p className="text-gray-600">
                Our team combines deep expertise in environmental science, finance, and sustainable 
                development to create solutions that benefit both the planet and people.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 p-8"
            >
              <h3 className="mb-4 text-2xl font-bold">Our Impact by the Numbers</h3>
              <div className="space-y-4">
                {[
                  { label: 'Active Carbon Projects', value: '15+' },
                  { label: 'Partner Organizations', value: '30+' },
                  { label: 'Tons CO₂ Managed', value: '200K+' },
                  { label: 'Local Communities Supported', value: '25+' },
                ].map((stat, idx) => (
                  <div key={idx} className="flex justify-between border-b border-gray-200 pb-2">
                    <span className="font-medium">{stat.label}</span>
                    <span className="font-bold text-primary">{stat.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Mission & Vision */}
      <Section>
        <Container>
          <div className="grid gap-8 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="rounded-2xl bg-white p-8 shadow-lg"
            >
              <div className="mb-4 text-4xl">🎯</div>
              <h3 className="mb-3 text-2xl font-bold">Our Mission</h3>
              <p className="text-gray-600">
                To accelerate Nigeria's transition to a sustainable future by developing and 
                managing high-integrity carbon projects, connecting local initiatives with 
                global markets, and creating lasting environmental and social value.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="rounded-2xl bg-white p-8 shadow-lg"
            >
              <div className="mb-4 text-4xl">👁️</div>
              <h3 className="mb-3 text-2xl font-bold">Our Vision</h3>
              <p className="text-gray-600">
                To be Africa's most trusted partner in carbon solutions, driving measurable 
                environmental impact while empowering communities and setting new standards 
                for sustainability across the continent.
              </p>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Partners Section */}
      <Partners />
    </>
  )
}