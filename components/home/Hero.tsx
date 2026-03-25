'use client'

import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'
import Container from '@/components/ui/Container'

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-white via-gray-50 to-white pt-24 md:pt-32">
      {/* Background Pattern - hidden on mobile for better performance */}
      <div className="absolute inset-0 opacity-5 md:opacity-10">
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-repeat" />
      </div>

      <Container className="relative">
        <div className="flex flex-col items-center text-center px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 md:mb-6"
          >
            <span className="inline-block rounded-full bg-primary/10 px-3 py-1.5 text-xs md:text-sm font-semibold text-primary">
              Nigeria's Premier Climate-Tech Platform
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-4 md:mb-6 max-w-4xl text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight"
          >
            Driving Carbon Solutions for a{' '}
            <span className="gradient-text">Sustainable Future</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-6 md:mb-8 max-w-2xl text-base sm:text-lg md:text-xl text-gray-600"
          >
            Green Lead Nigeria leads the charge in carbon crediting, environmental auditing, 
            and sustainable innovation across Africa. Partner with us to build a greener tomorrow.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto"
          >
            <Button variant="primary" size="lg" className="w-full sm:w-auto">
              Request a Consultation
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              Explore Our Projects
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 w-full"
          >
            {[
              { value: '50K+', label: 'Tons CO₂ Offset' },
              { value: '100K+', label: 'Trees Planted' },
              { value: '25+', label: 'Active Projects' },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">{stat.value}</div>
                <div className="mt-1 md:mt-2 text-xs sm:text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  )
}