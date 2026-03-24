'use client'

import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'
import ContactForm from '@/components/contact/ContactForm'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

export default function ContactPage() {
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
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">Contact Us</h1>
            <p className="text-lg text-gray-600">
              Ready to start your carbon journey? Get in touch with our team of experts
            </p>
          </motion.div>
        </Container>
      </Section>

      {/* Contact Information & Form */}
      <Section background="gray">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-6 text-2xl font-bold">Get in Touch</h2>
              <p className="mb-8 text-gray-600">
                Have questions about our services or want to discuss a potential project?
                Our team is here to help you navigate the world of carbon solutions.
              </p>

              <div className="mb-8 space-y-4">
                <div className="flex items-start gap-4">
                  <Mail className="mt-1 text-primary" size={20} />
                  <div>
                    <h3 className="font-semibold">Email Us</h3>
                    <p className="text-gray-600">info@greenleadnigeria.com</p>
                    <p className="text-gray-600">partnerships@greenleadnigeria.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="mt-1 text-primary" size={20} />
                  <div>
                    <h3 className="font-semibold">Call Us</h3>
                    <p className="text-gray-600">+234 (0) 123 456 7890</p>
                    <p className="text-gray-600">+234 (0) 123 456 7891</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="mt-1 text-primary" size={20} />
                  <div>
                    <h3 className="font-semibold">Visit Us</h3>
                    <p className="text-gray-600">
                      3rd Floor, Green Building<br />
                      Victoria Island, Lagos<br />
                      Nigeria
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="mt-1 text-primary" size={20} />
                  <div>
                    <h3 className="font-semibold">Office Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Saturday: 10:00 AM - 2:00 PM</p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="overflow-hidden rounded-2xl bg-gray-200">
                <div className="h-64 bg-gradient-to-br from-primary/10 to-secondary/10 p-8 text-center">
                  <MapPin className="mx-auto mb-2 h-12 w-12 text-gray-400" />
                  <p className="text-gray-500">Google Maps Integration Placeholder</p>
                  <p className="text-sm text-gray-400">Victoria Island, Lagos, Nigeria</p>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section background="primary">
        <Container>
          <div className="text-center">
            <h2 className="mb-4 text-3xl font-bold">Start Your Carbon Project Today</h2>
            <p className="mx-auto mb-8 max-w-2xl text-gray-300">
              Let's work together to create a sustainable future. Contact us to discuss your carbon reduction goals.
            </p>
            <button className="rounded-lg bg-white px-8 py-3 font-semibold text-primary transition-all hover:bg-gray-100">
              Schedule a Consultation
            </button>
          </div>
        </Container>
      </Section>
    </>
  )
}