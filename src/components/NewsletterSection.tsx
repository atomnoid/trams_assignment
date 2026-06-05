'use client'

import { useState, type FormEvent } from 'react'

export default function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true)
      setEmail('')
      setIsLoading(false)
      setTimeout(() => setIsSubmitted(false), 4000)
    }, 800)
  }

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-green-50 via-teal-50 to-emerald-50 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10" />

      <div className="container-custom">
        <div className="max-w-2xl mx-auto text-center">
          {/* Headline */}
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Subscribe to our <br /> newsletter
          </h2>
          <p className="text-gray-600 mb-10 text-lg">
            Get the latest updates, insights, and success stories delivered to your inbox
          </p>

          {/* Newsletter Form */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 md:gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-6 py-4 rounded-full border-2 border-gray-200 focus:outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-100 transition-all duration-300 placeholder-gray-400"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={isLoading || !email}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
            >
              {isLoading ? 'Subscribing...' : 'Subscribe'}
            </button>
          </form>

          {/* Success Message */}
          {isSubmitted && (
            <div className="mt-6 p-4 bg-green-100 border border-green-300 rounded-lg text-green-800 font-medium animate-fade-in">
              ✓ Thanks for subscribing! Check your inbox for updates.
            </div>
          )}

          {/* Privacy Note */}
          <p className="text-gray-500 text-sm mt-6">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  )
}
