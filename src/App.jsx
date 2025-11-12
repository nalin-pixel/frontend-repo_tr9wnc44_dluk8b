import React, { useRef } from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import {
  Bot,
  Cog,
  GitBranch,
  MessageSquare,
  BarChart3,
  Flowchart,
  Sparkles,
  Mail
} from 'lucide-react'

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.08 * i, duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  })
}

export default function App() {
  const contactRef = useRef(null)

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="scroll-smooth text-gray-800 bg-gradient-to-b from-orange-50 via-white to-gray-50">
      {/* Hero Section */}
      <section className="relative min-h-[92vh] flex items-center">
        {/* Spline background */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <Spline scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode" />
          {/* Soft gradient overlay to match brand */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/85" />
        </div>

        <div className="container mx-auto px-6 sm:px-8 lg:px-12 py-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="max-w-3xl"
          >
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-orange-600 via-amber-500 to-gray-700 bg-clip-text text-transparent"
              variants={fadeInUp}
            >
              WorkYaan – Your Automation Vehicle
            </motion.h1>
            <motion.p
              className="mt-5 text-lg sm:text-xl text-gray-700/90 max-w-2xl"
              custom={2}
              variants={fadeInUp}
            >
              Smart AI and n8n workflows that save you time and boost productivity.
            </motion.p>
            <motion.div className="mt-8" custom={3} variants={fadeInUp}>
              <button
                onClick={scrollToContact}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white px-6 py-3 text-base sm:text-lg font-semibold shadow-lg shadow-orange-500/20 hover:shadow-orange-500/30 hover:translate-y-[-1px] transition-all"
              >
                Get Your Workflow
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Subtle flowing accent at bottom of hero */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* About Section */}
      <section className="relative py-20">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={fadeInUp}>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                About WorkYaan
              </h2>
              <p className="mt-4 text-gray-700 leading-relaxed">
                WorkYaan helps Indian entrepreneurs and businesses automate daily tasks using AI and n8n workflows. From WhatsApp responders to data-sync bots, we build automation that works 24/7 — so you don’t have to.
              </p>
            </motion.div>

            <motion.ul
            className="grid grid-cols-3 gap-4"
            variants={fadeInUp}
            custom={2}
            >
              <li className="group rounded-2xl p-6 bg-white/80 backdrop-blur border border-gray-200 hover:border-orange-300 hover:shadow-lg transition-all">
                <div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-600 grid place-content-center group-hover:bg-orange-100 transition-colors">
                  <Cog className="w-6 h-6" />
                </div>
                <p className="mt-3 font-semibold">Automation</p>
              </li>
              <li className="group rounded-2xl p-6 bg-white/80 backdrop-blur border border-gray-200 hover:border-orange-300 hover:shadow-lg transition-all">
                <div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-600 grid place-content-center group-hover:bg-orange-100 transition-colors">
                  <Bot className="w-6 h-6" />
                </div>
                <p className="mt-3 font-semibold">AI</p>
              </li>
              <li className="group rounded-2xl p-6 bg-white/80 backdrop-blur border border-gray-200 hover:border-orange-300 hover:shadow-lg transition-all">
                <div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-600 grid place-content-center group-hover:bg-orange-100 transition-colors">
                  <GitBranch className="w-6 h-6" />
                </div>
                <p className="mt-3 font-semibold">Workflows</p>
              </li>
            </motion.ul>
          </motion.div>
        </div>
      </section>

      {/* Video Section */}
      <section className="relative py-20">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <motion.h3
            className="text-3xl sm:text-4xl font-bold text-gray-900"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            How AI Automation Works
          </motion.h3>
          <motion.div
            className="mt-8 rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
          >
            <div className="aspect-video">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/JMUxmLyrhSk"
                title="How AI Automation Works"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
            <div className="px-6 sm:px-8 py-4 bg-gradient-to-r from-orange-50 to-white text-gray-700">
              Watch how WorkYaan brings your ideas to life with intelligent workflows.
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-20">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <motion.h3
            className="text-3xl sm:text-4xl font-bold text-gray-900"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            What We Build
          </motion.h3>

          <motion.div
            className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {[
              {
                icon: MessageSquare,
                title: 'WhatsApp Auto-Reply Systems',
                desc: 'Smart responders and flows for fast customer support.'
              },
              {
                icon: BarChart3,
                title: 'CRM & Lead Automation',
                desc: 'Capture, score, and sync leads across your tools.'
              },
              {
                icon: Flowchart,
                title: 'Business Process Flows',
                desc: 'Data → Report → Alert: end-to-end automated pipelines.'
              },
              {
                icon: Sparkles,
                title: 'AI Chat Integrations',
                desc: 'ChatGPT, Gemini and more — embedded where you work.'
              }
            ].map((item, idx) => (
              <motion.div
                key={item.title}
                className="group rounded-2xl p-6 bg-white/80 backdrop-blur border border-gray-200 hover:border-orange-300 hover:shadow-lg transition-all"
                custom={idx + 1}
                variants={fadeInUp}
              >
                <div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-600 grid place-content-center group-hover:bg-orange-100 transition-colors">
                  <item.icon className="w-6 h-6" />
                </div>
                <h4 className="mt-4 font-semibold text-lg">{item.title}</h4>
                <p className="mt-2 text-gray-700 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} className="relative py-20">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            className="rounded-3xl border border-gray-200 bg-white/90 backdrop-blur p-8 sm:p-12 shadow-sm"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Let’s Automate Your Work
            </h3>
            <p className="mt-4 text-gray-700 max-w-2xl">
              Ready to bring automation to your business? Email us your idea and we’ll get back within 24 hours.
            </p>

            <div className="mt-6 flex items-center gap-3 text-gray-800">
              <Mail className="w-5 h-5 text-orange-600" />
              <a href="mailto:mandharemeghraj@gmail.com" className="underline hover:text-orange-600 transition-colors">mandharemeghraj@gmail.com</a>
            </div>

            <div className="mt-8">
              <a
                href="mailto:mandharemeghraj@gmail.com?subject=WorkYaan%20Automation%20Inquiry"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white px-6 py-3 text-base sm:text-lg font-semibold shadow-lg shadow-orange-500/20 hover:shadow-orange-500/30 hover:translate-y-[-1px] transition-all"
              >
                Send Email
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center text-sm text-gray-600">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <p>
            © {new Date().getFullYear()} WorkYaan. Built with AI and n8n automation.
          </p>
        </div>
      </footer>
    </div>
  )
}
