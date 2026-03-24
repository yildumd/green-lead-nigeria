'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface ServiceCardProps {
  title: string
  icon: string
  shortDescription: string
  longDescription: string
  features: string[]
}

export default function ServiceCard({
  title,
  icon,
  shortDescription,
  longDescription,
  features,
}: ServiceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="rounded-2xl bg-white shadow-lg transition-all hover:shadow-xl">
      <div className="p-6">
        <div className="flex items-start justify-between">
          <div className="flex items-start gap-4">
            <div className="text-4xl">{icon}</div>
            <div>
              <h3 className="mb-2 text-2xl font-bold">{title}</h3>
              <p className="text-gray-600">{shortDescription}</p>
            </div>
          </div>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="rounded-full p-2 text-gray-500 transition-colors hover:bg-gray-100"
          >
            {isExpanded ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
          </button>
        </div>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-4 overflow-hidden border-t pt-4"
            >
              <p className="mb-4 text-gray-700">{longDescription}</p>
              <div>
                <h4 className="mb-2 font-semibold text-primary">Key Features:</h4>
                <ul className="grid grid-cols-1 gap-2 md:grid-cols-2">
                  {features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-600">
                      <span className="text-secondary">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}