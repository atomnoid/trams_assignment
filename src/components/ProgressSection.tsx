'use client'

export default function ProgressSection() {
  const services = [
    {
      id: 1,
      title: 'Collaborative & partnership',
      description: 'We believe in building strong partnerships that create mutual value and drive innovation forward together.',
      icon: '👥',
    },
    {
      id: 2,
      title: 'We talk about our weight',
      description: 'Transparency and honest communication are the foundation of our relationships with clients and team members.',
      icon: '💬',
    },
    {
      id: 3,
      title: 'Piloting digital confidence',
      description: 'We guide you through digital transformation with expertise, ensuring sustainable and impactful results.',
      icon: '🚀',
    },
  ]

  return (
    <section id="services" className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What we can <br /> offer you!
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Discover how our comprehensive services can help your business grow and succeed
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-6">
          {services.map((service, idx) => (
            <div
              key={service.id}
              className="group relative bg-white p-8 md:p-6 rounded-2xl border border-gray-100 hover:border-purple-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer"
            >
              {/* Gradient background on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />

              {/* Icon */}
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl md:text-lg font-bold text-gray-900 mb-3 group-hover:text-gradient transition-all duration-300">
                {service.title}
              </h3>
              <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300 leading-relaxed">
                {service.description}
              </p>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-purple-600 to-pink-500 rounded-b-2xl w-0 group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
