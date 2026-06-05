'use client'

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'CEO, TechCorp',
      content:
        'Working with this team was transformative. Their innovative approach and dedication truly set them apart. We delivered our project 3 months ahead of schedule.',
      avatar: 'SJ',
      rating: 5,
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Product Lead, Innovation Inc',
      content:
        'Their attention to detail and user-centric approach resulted in a product that exceeded our expectations. Highly recommended!',
      avatar: 'MC',
      rating: 5,
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Founder, CreativeStudio',
      content:
        'From concept to launch, the collaboration was seamless. They truly understand what it takes to build something exceptional.',
      avatar: 'ER',
      rating: 5,
    },
    {
      id: 4,
      name: 'David Thompson',
      role: 'CTO, Future Systems',
      content:
        'Their technical expertise combined with creative thinking made all the difference. A remarkable team to work with.',
      avatar: 'DT',
      rating: 5,
    },
  ]

  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What our customer <br /> says about us
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, idx) => (
            <div
              key={testimonial.id}
              className="group relative bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-100 hover:border-purple-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 mb-6 leading-relaxed italic group-hover:text-gray-900 transition-colors">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-white font-bold text-sm">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{testimonial.name}</p>
                  <p className="text-gray-600 text-xs">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
