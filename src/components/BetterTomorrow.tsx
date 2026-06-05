'use client'

const stats = [
  {
    label: 'Strategy partners',
    value: '42+',
  },
  {
    label: 'Product launches',
    value: '18',
  },
  {
    label: 'Average ROI',
    value: '7.4x',
  },
]

export default function BetterTomorrow() {
  return (
    <section className="section-padding bg-slate-950 text-white overflow-hidden">
      <div className="container-custom relative">
        <div className="absolute -left-20 top-8 w-72 h-72 rounded-full bg-purple-500/20 blur-3xl" />
        <div className="absolute right-0 bottom-0 w-96 h-96 rounded-full bg-pink-500/10 blur-3xl" />

        <div className="grid gap-12 lg:grid-cols-[1.4fr_0.9fr] items-center">
          <div className="space-y-8">
            <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-sm font-semibold tracking-wide text-white/90">
              Impact-led digital experiences
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
              Tomorrow should be <span className="text-gradient">better than today</span>.
            </h2>
            <p className="max-w-xl text-lg leading-8 text-slate-200">
              We combine strategy, design, and engineering to help ambitious brands become more relevant, more efficient, and more growth-ready.
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_25px_50px_rgba(15,23,42,0.12)]">
                  <p className="text-3xl font-bold text-white">{stat.value}</p>
                  <p className="mt-3 text-sm uppercase tracking-[0.25em] text-slate-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/10 p-8 shadow-2xl backdrop-blur-xl">
            <div className="rounded-3xl bg-gradient-to-br from-purple-600 to-pink-500 p-8 text-white shadow-xl">
              <p className="text-sm uppercase tracking-[0.3em] text-purple-100/80">Featured outcome</p>
              <h3 className="mt-4 text-3xl font-bold">Digital confidence, delivered.</h3>
              <p className="mt-4 text-sm leading-6 text-purple-100/90">
                We help modern teams build products that engage customers, accelerate growth, and unlock new revenue streams.
              </p>
            </div>
            <div className="mt-8 grid gap-4">
              <div className="rounded-3xl bg-slate-950/90 p-6 border border-white/10">
                <p className="text-sm text-slate-400">Design systems</p>
                <p className="mt-3 text-lg font-semibold text-white">Human-first interfaces that feel effortless.</p>
              </div>
              <div className="rounded-3xl bg-slate-950/90 p-6 border border-white/10">
                <p className="text-sm text-slate-400">Transformation</p>
                <p className="mt-3 text-lg font-semibold text-white">Processes and products built to scale.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
