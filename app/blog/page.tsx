'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'
import BlogCard from '@/components/blog/BlogCard'

const categories = ['All', 'Carbon Markets', 'ESG', 'Forestry', 'Climate Finance', 'Policy']

const blogPosts = [
  {
    title: 'The Future of Carbon Markets in Africa: Opportunities and Challenges',
    excerpt: 'Exploring the potential for carbon credit development across the continent and the key factors driving growth.',
    category: 'Carbon Markets',
    date: '2024-01-15',
    readTime: '8 min read',
    author: 'Dr. Adebayo Ogunlesi',
    image: '/images/blog/carbon-markets.jpg',
    slug: 'future-carbon-markets-africa',
  },
  {
    title: 'ESG Reporting: A Guide for Nigerian Companies',
    excerpt: 'How businesses can navigate the evolving landscape of environmental, social, and governance reporting requirements.',
    category: 'ESG',
    date: '2024-01-10',
    readTime: '6 min read',
    author: 'Chioma Nwosu',
    image: '/images/blog/esg-reporting.jpg',
    slug: 'esg-reporting-guide-nigerian-companies',
  },
  {
    title: 'Mangrove Restoration: A Natural Climate Solution',
    excerpt: 'The critical role of mangrove ecosystems in carbon sequestration and coastal protection.',
    category: 'Forestry',
    date: '2024-01-05',
    readTime: '5 min read',
    author: 'Prof. Olumide Adeyemi',
    image: '/images/blog/mangroves.jpg',
    slug: 'mangrove-restoration-climate-solution',
  },
  {
    title: 'Understanding Article 6 of the Paris Agreement',
    excerpt: 'What the new carbon market mechanisms mean for project developers and investors.',
    category: 'Carbon Markets',
    date: '2023-12-20',
    readTime: '10 min read',
    author: 'Dr. Adebayo Ogunlesi',
    image: '/images/blog/paris-agreement.jpg',
    slug: 'understanding-article-6-paris-agreement',
  },
  {
    title: 'Financing Climate Action: Opportunities in Green Bonds',
    excerpt: 'How green bonds and climate finance instruments are funding sustainability projects.',
    category: 'Climate Finance',
    date: '2023-12-15',
    readTime: '7 min read',
    author: 'Chioma Nwosu',
    image: '/images/blog/green-bonds.jpg',
    slug: 'financing-climate-action-green-bonds',
  },
  {
    title: 'New EU Deforestation Regulation: What It Means for African Exporters',
    excerpt: 'Understanding the implications of new EU regulations on deforestation-free products.',
    category: 'Policy',
    date: '2023-12-10',
    readTime: '6 min read',
    author: 'Prof. Olumide Adeyemi',
    image: '/images/blog/eu-regulation.jpg',
    slug: 'eu-deforestation-regulation-african-exporters',
  },
]

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  
  const filteredPosts = selectedCategory === 'All'
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory)

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
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">Insights & Resources</h1>
            <p className="text-lg text-gray-600">
              Stay informed with the latest developments in carbon markets, sustainability, and climate action
            </p>
          </motion.div>
        </Container>
      </Section>

      {/* Categories Filter */}
      <Section background="gray">
        <Container>
          <div className="mb-8 flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full px-6 py-2 transition-all ${
                  selectedCategory === category
                    ? 'bg-primary text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map((post, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <BlogCard {...post} />
              </motion.div>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="py-12 text-center">
              <p className="text-gray-500">No posts found in this category.</p>
            </div>
          )}
        </Container>
      </Section>

      {/* Newsletter Signup */}
      <Section background="primary">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold">Subscribe to Our Newsletter</h2>
            <p className="mb-8 text-gray-300">
              Get the latest insights on carbon markets, sustainability trends, and project updates delivered to your inbox.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-secondary"
              />
              <button className="rounded-lg bg-white px-6 py-3 font-semibold text-primary transition-all hover:bg-gray-100">
                Subscribe
              </button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}