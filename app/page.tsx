import Hero from '@/components/home/Hero'
import ImpactCounter from '@/components/home/ImpactCounter'
import FeaturedProjects from '@/components/home/FeaturedProjects'
import Section from '@/components/ui/Section'

export default function Home() {
  return (
    <>
      <Hero />
      <ImpactCounter />
      <Section background="gray">
        <FeaturedProjects />
      </Section>
    </>
  )
}