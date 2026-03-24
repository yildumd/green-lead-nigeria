'use client'

import { useState } from 'react'
import { MapPin, Calendar, TreePine, Cloud, Users } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface ProjectCardProps {
  title: string
  description: string
  category: string
  status: 'active' | 'ongoing' | 'completed'
  impact: {
    co2Offset: number
    treesPlanted: number
    communitiesImpacted: number
  }
  location: string
  startDate: string
  endDate?: string
  image: string
}

const statusColors = {
  active: 'bg-green-500',
  ongoing: 'bg-blue-500',
  completed: 'bg-gray-500',
}

export default function ProjectCard({
  title,
  description,
  category,
  status,
  impact,
  location,
  startDate,
  endDate,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group overflow-hidden rounded-2xl bg-white shadow-lg transition-all hover:shadow-xl"
    >
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20">
        <div className="flex h-full items-center justify-center">
          <span className="text-gray-400">Project Image</span>
        </div>
        <div className={`absolute right-4 top-4 rounded-full px-3 py-1 text-xs font-semibold text-white ${statusColors[status]}`}>
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </div>
      </div>

      <div className="p-6">
        <div className="mb-2 text-sm font-semibold text-secondary">{category}</div>
        <h3 className="mb-2 text-xl font-bold">{title}</h3>
        <p className="mb-4 text-gray-600">{description}</p>

        <div className="mb-4 flex items-center gap-4 text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <MapPin size={14} />
            <span>{location}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar size={14} />
            <span>{startDate}{endDate && ` - ${endDate}`}</span>
          </div>
        </div>

        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="border-t pt-4"
            >
              <h4 className="mb-2 text-sm font-semibold">Impact Metrics:</h4>
              <div className="grid grid-cols-3 gap-2 text-center">
                <div>
                  <div className="flex justify-center text-primary">
                    <Cloud size={16} />
                  </div>
                  <div className="text-xs font-semibold">{impact.co2Offset.toLocaleString()} t</div>
                  <div className="text-xs text-gray-500">CO₂ Offset</div>
                </div>
                <div>
                  <div className="flex justify-center text-primary">
                    <TreePine size={16} />
                  </div>
                  <div className="text-xs font-semibold">{impact.treesPlanted.toLocaleString()}</div>
                  <div className="text-xs text-gray-500">Trees</div>
                </div>
                <div>
                  <div className="flex justify-center text-primary">
                    <Users size={16} />
                  </div>
                  <div className="text-xs font-semibold">{impact.communitiesImpacted}</div>
                  <div className="text-xs text-gray-500">Communities</div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}