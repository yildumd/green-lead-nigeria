'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react'

// This would normally come from a CMS or database
const getBlogPost = (slug: string) => {
  // Mock data for demonstration
  return {
    title: 'The Future of Carbon Markets in Africa: Opportunities and Challenges',
    content: `
      <p>Africa stands at a critical juncture in the global fight against climate change. With its vast natural resources, growing economies, and vulnerable populations, the continent has both immense potential and significant challenges in the carbon market space.</p>
      
      <h2>The Current Landscape</h2>
      <p>Carbon markets in Africa have seen remarkable growth over the past decade. Countries like Kenya, South Africa, and Nigeria are emerging as leaders in carbon project development, with initiatives ranging from reforestation to clean energy access.</p>
      
      <h2>Opportunities for Growth</h2>
      <p>Several factors make Africa particularly attractive for carbon market development:</p>
      <ul>
        <li>Abundant natural carbon sinks (forests, mangroves, savannas)</li>
        <li>Growing demand for carbon credits from international buyers</li>
        <li>Supportive policy frameworks in many countries</li>
        <li>Innovative project developers and local expertise</li>
      </ul>
      
      <h2>Challenges to Address</h2>
      <p>Despite the potential, several challenges remain:</p>
      <ul>
        <li>Limited access to upfront financing</li>
        <li>Complex regulatory environments</li>
        <li>Technical capacity constraints</li>
        <li>Market transparency and integrity concerns</li>
      </ul>
      
      <h2>The Path Forward</h2>
      <p>To unlock Africa's carbon market potential, stakeholders must work together to build capacity, streamline processes, and ensure that benefits flow to local communities. With the right approach, carbon markets can become a powerful tool for sustainable development across the continent.</p>
    `,
    category: 'Carbon Markets',
    date: '2024-01-15',
    readTime: '8 min read',
    author: 'Dr. Adebayo Ogunlesi',
    authorBio: 'Dr. Adebayo Ogunlesi is a leading expert in carbon markets and sustainable finance, with over 15 years of experience in climate policy and project development across Africa.',
    image: '/images/blog/carbon-markets.jpg',
  }
}

export default function BlogPostPage() {
  const params = useParams()
  const post = getBlogPost(params.slug as string)
  
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })

  return (
    <>
      {/* Hero Section */}
      <Section className="pt-32">
        <Container>
          <Link href="/blog" className="mb-8 inline-flex items-center gap-2 text-primary hover:text-primary-light">
            <ArrowLeft size={20} />
            Back to Insights
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl"
          >
            <div className="mb-4">
              <span className="rounded-full bg-primary px-3 py-1 text-sm font-semibold text-white">
                {post.category}
              </span>
            </div>
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">{post.title}</h1>
            <div className="mb-8 flex flex-wrap items-center gap-6 text-gray-600">
              <div className="flex items-center gap-2">
                <Calendar size={18} />
                <span>{formattedDate}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={18} />
                <span>{post.readTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <User size={18} />
                <span>{post.author}</span>
              </div>
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* Featured Image */}
      <div className="mb-12 h-96 w-full bg-gradient-to-br from-primary/20 to-secondary/20">
        <div className="flex h-full items-center justify-center">
          <span className="text-gray-400">Featured Image</span>
        </div>
      </div>

      {/* Content */}
      <Section>
        <Container>
          <div className="mx-auto max-w-3xl">
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="prose prose-lg prose-primary max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            
            {/* Author Bio */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 rounded-2xl bg-gray-50 p-6"
            >
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-full bg-primary/20"></div>
                <div>
                  <h3 className="font-semibold">{post.author}</h3>
                  <p className="text-sm text-gray-600">{post.authorBio}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Related Posts */}
      <Section background="gray">
        <Container>
          <h2 className="mb-8 text-center text-3xl font-bold">Related Articles</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* This would be dynamically populated */}
            <div className="rounded-2xl bg-white p-6 shadow-lg">
              <h3 className="mb-2 text-xl font-bold">ESG Reporting: A Guide for Nigerian Companies</h3>
              <Link href="/blog/esg-reporting-guide" className="text-primary hover:text-primary-light">
                Read more →
              </Link>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow-lg">
              <h3 className="mb-2 text-xl font-bold">Understanding Article 6 of the Paris Agreement</h3>
              <Link href="/blog/understanding-article-6" className="text-primary hover:text-primary-light">
                Read more →
              </Link>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow-lg">
              <h3 className="mb-2 text-xl font-bold">Financing Climate Action: Opportunities in Green Bonds</h3>
              <Link href="/blog/financing-climate-action" className="text-primary hover:text-primary-light">
                Read more →
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}