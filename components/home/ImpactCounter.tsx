'use client'

import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'

interface CounterProps {
  end: number
  suffix?: string
  duration?: number
}

function Counter({ end, suffix = '', duration = 2000 }: CounterProps) {
  const [count, setCount] = useState(0)
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 })

  useEffect(() => {
    if (inView) {
      let start = 0
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
  }, [inView, end, duration])

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl font-bold text-primary md:text-5xl">
        {count.toLocaleString()}{suffix}
      </div>
    </div>
  )
}

export default function ImpactCounter() {
  const impacts = [
    { value: 50000, label: 'Tons CO₂ Reduced', suffix: '+' },
    { value: 100000, label: 'Trees Planted', suffix: '+' },
    { value: 5000, label: 'Hectares Restored', suffix: '+' },
    { value: 25, label: 'Communities Impacted', suffix: '+' },
  ]

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
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Our Impact So Far</h2>
          <p className="mx-auto max-w-2xl text-gray-300">
            Together with our partners, we're making a measurable difference in the fight against climate change
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {impacts.map((impact, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="rounded-lg bg-white/10 p-6 backdrop-blur-sm"
            >
              <Counter end={impact.value} suffix={impact.suffix} />
              <p className="mt-3 text-center text-gray-200">{impact.label}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  )
}