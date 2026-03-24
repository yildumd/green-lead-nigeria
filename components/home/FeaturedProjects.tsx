'use client'

import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import Link from 'next/link'

const projects = [
  {
    title: 'Niger Delta Mangrove Restoration',
    description: 'Restoring critical mangrove ecosystems while generating carbon credits for local communities.',
    impact: '25,000 tons CO₂/year',
    status: 'Active',
    image: '/images/mangrove.jpg',
  },
  {
    title: 'Northern Nigeria Reforestation',
    description: 'Combating desertification through large-scale afforestation and sustainable agriculture.',
    impact: '100,000 trees planted',
    status: 'Ongoing',
    image: '/images/reforestation.jpg',
  },
  {
    title: 'Clean Energy Access Initiative',
    description: 'Providing solar energy solutions to rural communities, reducing dependence on fossil fuels.',
    impact: '5,000 households',
    status: 'Completed',
    image: '/images/solar.jpg',
  },
]

export default function FeaturedProjects() {
  return (
    <Container>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-12 text-center"
      >
        <h2 className="mb-4 text-3xl font-bold md:text-4xl">Featured Projects</h2>
        <p className="mx-auto max-w-2xl text-gray-600">
          Discover how we're transforming environmental challenges into sustainable solutions
        </p>
      </motion.div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="group overflow-hidden rounded-2xl bg-white shadow-lg transition-all hover:shadow-xl"
          >
            <div className="relative h-48 overflow-hidden bg-gray-300">
              {/* Placeholder for actual images */}
              <div className="flex h-full items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20">
                <span className="text-gray-400">Project Image</span>
              </div>
              <div className="absolute right-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white">
                {project.status}
              </div>
            </div>
            <div className="p-6">
              <h3 className="mb-2 text-xl font-bold">{project.title}</h3>
              <p className="mb-4 text-gray-600">{project.description}</p>
              <div className="mb-4 text-sm font-semibold text-secondary">
                {project.impact}
              </div>
              <Link href="/projects" className="text-primary hover:text-primary-light">
                Learn more →
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Button variant="outline" size="lg">
          View All Projects
        </Button>
      </div>
    </Container>
  )
}