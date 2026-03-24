'use client'

import Link from 'next/link'
import { Calendar, Clock, User } from 'lucide-react'

interface BlogCardProps {
  title: string
  excerpt: string
  category: string
  date: string
  readTime: string
  author: string
  image: string
  slug: string
}

export default function BlogCard({
  title,
  excerpt,
  category,
  date,
  readTime,
  author,
  image,
  slug,
}: BlogCardProps) {
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })

  return (
    <Link href={`/blog/${slug}`} className="group block">
      <div className="overflow-hidden rounded-2xl bg-white shadow-lg transition-all hover:shadow-xl">
        <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20">
          <div className="flex h-full items-center justify-center">
            <span className="text-gray-400">Blog Image</span>
          </div>
          <div className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white">
            {category}
          </div>
        </div>

        <div className="p-6">
          <div className="mb-3 flex flex-wrap items-center gap-4 text-xs text-gray-500">
            <div className="flex items-center gap-1">
              <Calendar size={12} />
              <span>{formattedDate}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock size={12} />
              <span>{readTime}</span>
            </div>
            <div className="flex items-center gap-1">
              <User size={12} />
              <span>{author}</span>
            </div>
          </div>

          <h3 className="mb-2 text-xl font-bold group-hover:text-primary">
            {title}
          </h3>
          <p className="text-gray-600">{excerpt}</p>

          <div className="mt-4 text-sm font-semibold text-primary group-hover:text-primary-light">
            Read more →
          </div>
        </div>
      </div>
    </Link>
  )
}