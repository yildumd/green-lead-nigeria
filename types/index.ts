export interface Service {
  id: string
  title: string
  icon: string
  shortDescription: string
  longDescription: string
  features: string[]
}

export interface Project {
  id: string
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

export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  category: string
  date: string
  readTime: string
  author: string
  image: string
  slug: string
}

export interface Partner {
  id: string
  name: string
  logo: string
  description: string
  type: string
  website: string
  partnershipYear: number
}