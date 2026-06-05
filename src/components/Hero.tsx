'use client'

import HeroScene from './HeroScene'

export default function Hero() {
  return (
    <section id="home" className="relative w-full min-h-screen pt-28 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-purple-50 -z-10" />
      <HeroScene />
      <div className="absolute top-10 left-10 w-80 h-80 rounded-full bg-purple-200/40 blur-3xl opacity-40 animate-float -z-10" />
      <div className="absolute bottom-10 right-10 w-72 h-72 rounded-full bg-pink-200/40 blur-3xl opacity-40 animate-float -z-10" />
      <div className="absolute inset-y-0 right-0 w-2/3 bg-gradient-to-l from-white/80 to-transparent opacity-60 -z-10" />

      <div className="container-custom">
        <div className="grid gap-12 items-center lg:grid-cols-[1.15fr_0.85fr]">
          <div className="max-w-2xl">
            <span className="inline-flex items-center rounded-full bg-gradient-to-r from-purple-100 to-pink-100 px-4 py-2 text-sm font-semibold text-purple-700 mb-6">
              Launch smarter products, faster.
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-950 leading-tight">
              Building bold digital experiences that transform tomorrow.
            </h1>
            <p className="mt-6 text-lg sm:text-xl leading-8 text-slate-600 max-w-xl">
              We partner with visionary companies to design, build, and scale products that make a measurable impact.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
              <a
                href="#services"
                className="btn-primary inline-flex items-center justify-center px-8 py-4"
              >
                Explore services
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 px-8 py-4 text-sm font-semibold text-slate-700 hover:border-slate-300 transition-colors"
              >
                Book a call
              </a>
            </div>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <div className="rounded-3xl border border-slate-200 bg-white/90 p-5 shadow-sm">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Saved</p>
                <p className="mt-3 text-3xl font-bold text-slate-950">25%</p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white/90 p-5 shadow-sm">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Launch</p>
                <p className="mt-3 text-3xl font-bold text-slate-950">4 weeks</p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white/90 p-5 shadow-sm">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Growth</p>
                <p className="mt-3 text-3xl font-bold text-slate-950">120%</p>
              </div>
            </div>
          </div>

          <div className="relative rounded-[2rem] border border-white/80 bg-white/80 p-8 shadow-2xl backdrop-blur-xl">
            <div className="absolute -top-8 left-8 rounded-full bg-pink-500/10 px-4 py-2 text-sm font-semibold text-pink-700">
              Trusted by modern teams
            </div>
            <div className="space-y-6">
              <div className="rounded-3xl bg-gradient-to-br from-purple-600 to-pink-500 p-6 text-white shadow-xl">
                <p className="text-sm uppercase tracking-[0.3em] text-purple-100/80">Design systems</p>
                <h2 className="mt-4 text-3xl font-bold">Design that converts</h2>
                <p className="mt-4 text-sm leading-6 text-purple-100/90">
                  Polished visuals, intuitive interfaces, and memorable brand moments that inspire action.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                  <p className="text-sm text-slate-500">Product strategy</p>
                  <p className="mt-3 text-xl font-semibold text-slate-900">Roadmaps built for results.</p>
                </div>
                <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                  <p className="text-sm text-slate-500">Digital transformation</p>
                  <p className="mt-3 text-xl font-semibold text-slate-900">Modern workflows, simplified.</p>
                </div>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                <p className="text-sm text-slate-400">Our clients see</p>
                <p className="mt-3 text-3xl font-bold text-slate-950">+35%</p>
                <p className="mt-2 text-sm text-slate-500">increase in engagement within the first 90 days.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
