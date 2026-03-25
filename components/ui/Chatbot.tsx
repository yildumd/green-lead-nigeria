'use client'

import { useState, useRef, useEffect } from 'react'
import { MessageCircle, X, Send, Minimize2, Maximize2, Bot, User, Sparkles } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface Message {
  text: string
  isUser: boolean
  timestamp: Date
  suggestions?: string[]
}

// Comprehensive knowledge base
const knowledgeBase: Record<string, { response: string, suggestions?: string[] }> = {
  // Greetings
  'hello': {
    response: "Hello! I'm your Green Lead AI assistant. How can I help you with carbon solutions today?",
    suggestions: ["Tell me about carbon credits", "What services do you offer?", "How do I get started?"]
  },
  'hi': {
    response: "Hi there! Welcome to Green Lead Nigeria. I'm here to help with all your carbon solution questions!",
    suggestions: ["Tell me about carbon credits", "What services do you offer?", "How do I get started?"]
  },
  
  // Carbon Credits
  'carbon credits': {
    response: "Carbon credits are tradable certificates representing one metric ton of CO₂ emissions reduced or removed from the atmosphere. At Green Lead Nigeria, we develop, verify, and trade high-quality carbon credits from projects like reforestation, clean energy, and mangrove restoration.",
    suggestions: ["How are credits verified?", "What projects do you have?", "How do I buy credits?"]
  },
  'how do carbon credits work': {
    response: "Carbon credits work by financing emission reduction projects. When a project reduces emissions (like planting trees or installing solar panels), it earns credits. Companies or individuals buy these credits to offset their own emissions, creating a financial incentive for climate action.",
    suggestions: ["Tell me about verification", "Your current projects", "Pricing information"]
  },
  'verification': {
    response: "We work with internationally recognized verification bodies like Verra, Gold Standard, and Global Carbon Council. All our projects undergo rigorous third-party auditing to ensure real, measurable, and permanent carbon reductions.",
    suggestions: ["What standards do you use?", "How long does verification take?", "Tell me about auditing"]
  },
  
  // Services
  'services': {
    response: "We offer comprehensive carbon solutions: 🌿 Carbon Crediting & Financing | 📊 Carbon Project Auditing | 🌳 Forest Conservation & Afforestation | 🦋 Biodiversity Improvement | 📝 General Contract Services",
    suggestions: ["Tell me about carbon crediting", "More about auditing", "Forest conservation projects"]
  },
  'carbon crediting': {
    response: "Our carbon crediting service covers end-to-end project development: identifying opportunities, feasibility studies, methodology selection, monitoring plans, verification coordination, and credit monetization. We ensure projects meet international standards.",
    suggestions: ["What are the requirements?", "How long does it take?", "What's the ROI?"]
  },
  'auditing': {
    response: "We provide independent verification and audit support for carbon projects. Our expert team ensures your project meets international standards and facilitates smooth verification processes with global auditors.",
    suggestions: ["What standards do you use?", "How much does auditing cost?", "Timeline for verification"]
  },
  'forest conservation': {
    response: "Our forest conservation projects protect and restore Nigeria's vital ecosystems. We develop afforestation and reforestation projects that generate carbon credits while preserving biodiversity and supporting local communities.",
    suggestions: ["Where are your projects?", "How many trees planted?", "Community benefits"]
  },
  'biodiversity': {
    response: "We go beyond carbon to deliver holistic ecosystem benefits. Our biodiversity projects restore habitats, protect endangered species, and create nature-based solutions that enhance climate resilience.",
    suggestions: ["Tell me about current projects", "How do you measure impact?", "Partnership opportunities"]
  },
  
  // Projects
  'projects': {
    response: "We have several active projects across Nigeria: 🌊 Niger Delta Mangrove Restoration | 🌳 Katsina Reforestation Initiative | ☀️ Solar Rural Electrification | 🌲 Ogun State Forest Reserve",
    suggestions: ["Tell me about mangrove project", "Impact metrics", "How to get involved"]
  },
  'mangrove': {
    response: "Our Niger Delta Mangrove Restoration project restores critical coastal ecosystems, protects communities from erosion, and generates high-quality carbon credits. It supports local livelihoods and preserves biodiversity.",
    suggestions: ["CO₂ offset numbers", "Community impact", "How to support"]
  },
  'impact': {
    response: "Our total impact so far: 🌍 58,000+ tons CO₂ offset | 🌳 250,000+ trees planted | 👥 31 communities impacted | 🌾 7,500+ hectares restored. Every project creates measurable environmental and social benefits!",
    suggestions: ["How do you measure impact?", "Can I see reports?", "Latest achievements"]
  },
  
  // Partnerships
  'partnership': {
    response: "We welcome partnerships with corporations, NGOs, government agencies, and investors. Partnership opportunities include: project development, technical expertise, research collaboration, community engagement, and corporate sustainability programs.",
    suggestions: ["How to become a partner", "Current partners", "Benefits of partnering"]
  },
  'become a partner': {
    response: "To become a partner, please fill out our contact form or email partnerships@greenleadnigeria.com. Our team will reach out within 48 hours to discuss collaboration opportunities tailored to your goals.",
    suggestions: ["Tell me about current partners", "What's the process?", "Send me a contact form"]
  },
  
  // Contact
  'contact': {
    response: "You can reach us at: 📧 info@greenleadnigeria.com | 📞 +234 (0) 123 456 7890 | 📍 Victoria Island, Lagos, Nigeria. Office hours: Monday-Friday, 9am-6pm.",
    suggestions: ["Schedule a consultation", "Send an email", "Visit our office"]
  },
  'consultation': {
    response: "Great! To schedule a free consultation, please fill out our contact form or call us directly. Our carbon experts will discuss your needs and help you find the right solution.",
    suggestions: ["Contact form", "Call now", "Learn about services"]
  },
  
  // Pricing
  'pricing': {
    response: "Pricing varies based on project type, scale, and specific requirements. We offer competitive rates and flexible packages. Contact us for a customized quote tailored to your needs.",
    suggestions: ["Get a quote", "What factors affect price?", "Payment options"]
  },
  
  // Help
  'help': {
    response: "I can help you with: 🌿 Carbon credits explained | 💼 Our services | 🌳 Active projects | 🤝 Partnerships | 📞 Contact information | 📊 Impact metrics. What would you like to know?",
    suggestions: ["Tell me about carbon credits", "List services", "Show me projects"]
  },
  'what can you do': {
    response: "I'm your AI assistant! I can answer questions about carbon credits, our services, active projects, partnerships, impact metrics, and how to get started with your carbon journey. Just ask!",
    suggestions: ["Tell me about carbon credits", "What services?", "How to get started?"]
  }
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    { 
      text: "Hello! I'm your Green Lead AI assistant. I can help you with carbon credits, our services, projects, partnerships, and more. What would you like to know?", 
      isUser: false, 
      timestamp: new Date(),
      suggestions: ["What are carbon credits?", "Tell me about your services", "How do I get started?"]
    },
  ])
  const [inputText, setInputText] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (isOpen && !isMinimized) {
      inputRef.current?.focus()
    }
  }, [isOpen, isMinimized])

  const getResponse = (userInput: string): { response: string, suggestions?: string[] } => {
    const input = userInput.toLowerCase().trim()
    
    // Check for exact matches first
    for (const [key, value] of Object.entries(knowledgeBase)) {
      if (input === key || input.includes(key)) {
        return value
      }
    }
    
    // Check for keywords
    if (input.includes('credit') || input.includes('carbon')) {
      return knowledgeBase['carbon credits']
    }
    if (input.includes('service')) {
      return knowledgeBase['services']
    }
    if (input.includes('project')) {
      return knowledgeBase['projects']
    }
    if (input.includes('partner')) {
      return knowledgeBase['partnership']
    }
    if (input.includes('contact') || input.includes('email') || input.includes('phone')) {
      return knowledgeBase['contact']
    }
    if (input.includes('help') || input.includes('what can you')) {
      return knowledgeBase['help']
    }
    if (input.includes('price') || input.includes('cost')) {
      return knowledgeBase['pricing']
    }
    if (input.includes('impact') || input.includes('metric')) {
      return knowledgeBase['impact']
    }
    
    // Default response
    return {
      response: "Thank you for your question! I'm still learning. For specific inquiries, please contact our team at info@greenleadnigeria.com or schedule a consultation. Would you like to know about our services or carbon credits?",
      suggestions: ["Tell me about services", "What are carbon credits?", "Contact information"]
    }
  }

  const handleSend = async () => {
    if (!inputText.trim()) return
    
    const userMessage: Message = {
      text: inputText,
      isUser: true,
      timestamp: new Date()
    }
    
    setMessages(prev => [...prev, userMessage])
    setInputText('')
    setIsTyping(true)
    
    // Simulate thinking delay
    setTimeout(() => {
      const { response, suggestions } = getResponse(inputText)
      const botMessage: Message = {
        text: response,
        isUser: false,
        timestamp: new Date(),
        suggestions: suggestions
      }
      setMessages(prev => [...prev, botMessage])
      setIsTyping(false)
    }, 500 + Math.random() * 500)
  }

  const handleSuggestionClick = (suggestion: string) => {
    setInputText(suggestion)
    setTimeout(() => handleSend(), 100)
  }

  return (
    <>
      {/* Chat Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 rounded-full bg-primary p-3 sm:p-4 shadow-xl transition-all hover:bg-primary-light hover:shadow-2xl"
      >
        <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.9 }}
            transition={{ type: 'spring', damping: 25 }}
            className={`fixed bottom-16 right-4 sm:bottom-24 sm:right-6 z-50 bg-white shadow-2xl rounded-2xl transition-all duration-300 ${
              isMinimized ? 'w-72 sm:w-80' : 'w-[calc(100vw-2rem)] sm:w-96'
            } max-w-full`}
          >
            {/* Header */}
            <div className="flex items-center justify-between rounded-t-2xl bg-gradient-to-r from-primary to-primary-light p-3 sm:p-4">
              <div className="flex items-center gap-2">
                <Bot className="h-5 w-5 text-white" />
                <div>
                  <h3 className="font-semibold text-white text-sm sm:text-base">Green Lead AI Assistant</h3>
                  <p className="text-xs text-white/80">Online • Ready to help</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="text-white hover:text-gray-200 transition-colors"
                >
                  {isMinimized ? <Maximize2 size={18} /> : <Minimize2 size={18} />}
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:text-gray-200 transition-colors"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {!isMinimized && (
              <>
                {/* Messages */}
                <div className="h-80 sm:h-96 overflow-y-auto p-3 sm:p-4 bg-gray-50">
                  {messages.map((msg, idx) => (
                    <div key={idx} className={`mb-4 flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}>
                      <div className={`flex items-start gap-2 max-w-[85%] ${msg.isUser ? 'flex-row-reverse' : ''}`}>
                        <div className={`flex-shrink-0 rounded-full p-1.5 ${
                          msg.isUser ? 'bg-primary' : 'bg-gray-300'
                        }`}>
                          {msg.isUser ? <User size={12} /> : <Sparkles size={12} className="text-primary" />}
                        </div>
                        <div>
                          <div
                            className={`rounded-lg p-2.5 sm:p-3 ${
                              msg.isUser
                                ? 'bg-primary text-white'
                                : 'bg-white text-gray-800 shadow-sm'
                            }`}
                          >
                            <p className="text-xs sm:text-sm">{msg.text}</p>
                          </div>
                          {!msg.isUser && msg.suggestions && msg.suggestions.length > 0 && (
                            <div className="mt-2 flex flex-wrap gap-2">
                              {msg.suggestions.map((suggestion, i) => (
                                <button
                                  key={i}
                                  onClick={() => handleSuggestionClick(suggestion)}
                                  className="text-xs bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-full px-2.5 py-1 transition-colors"
                                >
                                  {suggestion}
                                </button>
                              ))}
                            </div>
                          )}
                          <p className="text-xs text-gray-400 mt-1">
                            {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                  {isTyping && (
                    <div className="flex justify-start mb-4">
                      <div className="flex items-center gap-2">
                        <div className="rounded-full p-1.5 bg-gray-300">
                          <Sparkles size={12} className="text-primary" />
                        </div>
                        <div className="bg-white rounded-lg p-3 shadow-sm">
                          <div className="flex gap-1">
                            <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                            <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                            <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Input */}
                <div className="border-t p-3 sm:p-4 bg-white rounded-b-2xl">
                  <div className="flex gap-2">
                    <input
                      ref={inputRef}
                      type="text"
                      value={inputText}
                      onChange={(e) => setInputText(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                      placeholder="Type your message..."
                      className="flex-1 rounded-lg border border-gray-300 p-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                    <button
                      onClick={handleSend}
                      disabled={!inputText.trim()}
                      className="rounded-lg bg-primary p-2 text-white transition-colors hover:bg-primary-light disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <Send size={18} />
                    </button>
                  </div>
                  <p className="text-xs text-gray-400 text-center mt-2">
                    Powered by Green Lead AI • Learn about carbon solutions
                  </p>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}