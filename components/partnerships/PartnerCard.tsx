'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Calendar } from 'lucide-react'

interface PartnerCardProps {
  name: string
  logo: string
  description: string
  type: string
  website: string
  partnershipYear: number
}

export default function PartnerCard({
  name,
  logo,
  description,
  type,
  website,
  partnershipYear,
}: PartnerCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  const typeColors: Record<string, string> = {
    verification: 'bg-blue-100 text-blue-800',
    development: 'bg-green-100 text-green-800',
    implementation: 'bg-purple-100 text-purple-800',
    nonprofit: 'bg-orange-100 text-orange-800',
  }

  const typeColor = typeColors[type] || 'bg-gray-100 text-gray-800'

  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg transition-all hover:shadow-xl"
    >
      <div className="relative z-10">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <span className="text-2xl font-bold text-primary">{name.charAt(0)}</span>
          </div>
          <span className={`rounded-full px-3 py-1 text-xs font-semibold ${typeColor}`}>
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </span>
        </div>

        <h3 className="mb-2 text-xl font-bold">{name}</h3>
        <p className="mb-4 text-sm text-gray-600">{description}</p>

        <div className="mb-4 flex items-center gap-4 text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <Calendar size={14} />
            <span>Since {partnershipYear}</span>
          </div>
        </div>

        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="mt-4"
            >
              <a
                href={website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary-light"
              >
                Visit Website
                <ExternalLink size={14} />
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Decorative element */}
      <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br from-primary/5 to-secondary/5 transition-all group-hover:scale-150" />
    </motion.div>
  )
}