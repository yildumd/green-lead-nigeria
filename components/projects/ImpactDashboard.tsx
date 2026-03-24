'use client'

import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'
import { TreePine, Cloud, Users, Globe } from 'lucide-react'

function AnimatedNumber({ end, suffix = '' }: { end: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 })

  useEffect(() => {
    if (inView) {
      let start = 0
      const duration = 2000
      const increment = end / (duration / 16)
      const timer = setInterval(() => {
        start += increment
        if (start >= end) {
          setCount(end)
          clearInterval(timer)
        } else {
          setCount(Math.floor(start))
        }
      }, 16)
      return () => clearInterval(timer)
    }
  }, [inView, end])

  return (
    <span ref={ref} className="text-3xl font-bold md:text-4xl">
      {count.toLocaleString()}{suffix}
    </span>
  )
}

const metrics = [
  {
    icon: Cloud,
    label: 'Total CO₂ Offset',
    value: 58000,
    suffix: ' tons',
    color: 'text-blue-500',
  },
  {
    icon: TreePine,
    label: 'Trees Planted',
    value: 250000,
    suffix: '+',
    color: 'text-green-500',
  },
  {
    icon: Users,
    label: 'Communities Impacted',
    value: 31,
    suffix: '',
    color: 'text-purple-500',
  },
  {
    icon: Globe,
    label: 'Hectares Restored',
    value: 7500,
    suffix: ' ha',
    color: 'text-primary',
  },
]

export default function ImpactDashboard() {
  return (
    <Section background="primary">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold">Our Global Impact</h2>
          <p className="mx-auto max-w-2xl text-gray-300">
            Real metrics showing the difference we're making together
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric, idx) => {
            const Icon = metric.icon
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="rounded-2xl bg-white/10 p-6 text-center backdrop-blur-sm"
              >
                <Icon className={`mx-auto mb-4 h-12 w-12 ${metric.color}`} />
                <div className="mb-2">
                  <AnimatedNumber end={metric.value} suffix={metric.suffix} />
                </div>
                <p className="text-gray-200">{metric.label}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Map Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 overflow-hidden rounded-2xl bg-white/5 p-8"
        >
          <h3 className="mb-4 text-center text-xl font-semibold">Project Locations Across Nigeria</h3>
          <div className="flex h-64 items-center justify-center rounded-lg bg-white/10">
            <div className="text-center">
              <Globe className="mx-auto mb-2 h-12 w-12 text-gray-400" />
              <p className="text-gray-300">Interactive Map Placeholder</p>
              <p className="text-sm text-gray-400">Showing project locations in 12 states across Nigeria</p>
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  )
}