'use client'

import { useState } from 'react'
import {
  ArrowRight,
  Check,
  Clock3,
  Compass,
  Filter,
  Layers3,
  Play,
  Search,
  Sparkles,
  Target,
  TrendingUp,
} from 'lucide-react'

const steps = [
  { title: 'Understand n8n', description: 'The visual language of workflows', duration: '12 min', accent: 'from-[#0b315a] via-[#156b83] to-[#20c3b2]' },
  { title: 'Build your first workflow', description: 'From trigger to action', duration: '18 min', accent: 'from-[#10213d] via-[#225481] to-[#4ad9c8]' },
  { title: 'Connect external services', description: 'Make your tools work together', duration: '24 min', accent: 'from-[#083a52] via-[#117b88] to-[#7de9dc]' },
  { title: 'Add AI to your workflow', description: 'Bring intelligence into the loop', duration: '31 min', accent: 'from-[#13234d] via-[#43558b] to-[#4ad9c8]' },
  { title: 'Build a real-world project', description: 'Apply everything you have learned', duration: '45 min', accent: 'from-[#09204b] via-[#176c77] to-[#22c6b5]' },
]

const featuredVideos = [
  { title: 'n8n Automation for Beginners', channel: 'Futuristic Learning', views: '128K views', likes: '4.8K', duration: '18:42', relevance: '92% relevant', accent: 'from-[#08294f] via-[#14748a] to-[#31d2bf]' },
  { title: 'Build Your First AI Workflow', channel: 'Workflow Weekly', views: '84K views', likes: '3.2K', duration: '24:16', relevance: '89% relevant', accent: 'from-[#10213d] via-[#314a86] to-[#58dacc]' },
  { title: 'Connect APIs Without Code', channel: 'No-Code Lab', views: '61K views', likes: '2.1K', duration: '12:08', relevance: '86% relevant', accent: 'from-[#07394c] via-[#178c8b] to-[#87eee0]' },
]

function VideoThumbnail({ accent, duration, large = false }: { accent: string; duration: string; large?: boolean }) {
  return <div className={`group relative aspect-video overflow-hidden rounded-xl bg-gradient-to-br ${accent} ${large ? 'rounded-2xl' : ''}`}>
    <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(135deg,transparent_35%,rgba(255,255,255,.35)_36%,transparent_37%),linear-gradient(45deg,transparent_55%,rgba(0,0,0,.22)_56%,transparent_57%)] [background-size:34px_34px]" />
    <div className="absolute left-3 top-3 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[.12em] text-white"><span className="grid h-4 w-4 place-items-center rounded bg-[#ff3157] text-[8px]">▶</span>YouTube</div>
    <div className="absolute inset-0 grid place-items-center"><span className="grid h-10 w-10 place-items-center rounded-full bg-white/95 text-[#09204b] shadow-lg transition duration-300 group-hover:scale-110"><Play size={16} fill="currentColor" /></span></div>
    <span className="absolute bottom-2 right-2 rounded bg-[#061a38]/85 px-1.5 py-0.5 text-[10px] font-bold text-white">{duration}</span>
  </div>
}

export function LearniaLanding() {
  const [topic, setTopic] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#f8fafc] text-[#10213d]">
      <section className="relative bg-[#09204b] text-white">
        <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.06)_1px,transparent_1px)] [background-size:72px_72px]" />
        <div className="absolute -right-24 top-12 h-80 w-80 rounded-full bg-[#28c4b6]/20 blur-3xl" />
        <header className="relative mx-auto flex max-w-6xl items-center justify-between px-6 py-6 lg:px-8">
          <a href="#top" className="flex items-center gap-2 text-lg font-bold tracking-tight" aria-label="LearnIA home">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-[#20c3b2] text-[#09204b]"><Sparkles size={17} strokeWidth={2.5} /></span>
            Learn<span className="text-[#4ad9c8]">IA</span>
          </a>
          <nav className="hidden items-center gap-8 text-sm text-blue-100 md:flex" aria-label="Main navigation">
            <a className="transition hover:text-white" href="#how-it-works">How it works</a>
            <a className="transition hover:text-white" href="#path">Example path</a>
            <a className="transition hover:text-white" href="#why-learnia">Why LearnIA</a>
          </nav>
          <a href="#start" className="rounded-full border border-white/25 px-4 py-2 text-sm font-semibold transition hover:bg-white/10">Get started</a>
        </header>

        <div id="top" className="relative mx-auto grid max-w-6xl items-center gap-14 px-6 pb-24 pt-16 lg:grid-cols-[1.04fr_.96fr] lg:px-8 lg:pb-32 lg:pt-24">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#4ad9c8]/30 bg-[#1b4a65]/50 px-3 py-1.5 text-xs font-semibold uppercase tracking-[.16em] text-[#7de9dc]"><Sparkles size={13} /> Learn smarter, not longer</div>
            <h1 className="max-w-2xl text-5xl font-semibold leading-[1.05] tracking-[-.04em] sm:text-6xl lg:text-[74px]">Your next skill, <span className="text-[#4ad9c8]">mapped out.</span></h1>
            <p className="mt-4 text-sm font-semibold uppercase tracking-[.16em] text-[#7de9dc]">Now on GitHub</p>
            <p className="mt-5 max-w-xl text-lg leading-8 text-blue-100">LearnIA turns the best educational videos on YouTube into one clear, focused learning path—so you can spend less time searching and more time growing.</p>
            <form onSubmit={handleSubmit} className="mt-9 flex max-w-xl flex-col gap-3 sm:flex-row">
              <label className="flex min-h-14 flex-1 items-center gap-3 rounded-xl border border-white/15 bg-white px-4 text-[#10213d] shadow-xl shadow-black/10">
                <Search size={19} className="text-slate-400" aria-hidden="true" />
                <span className="sr-only">What do you want to learn?</span>
                <input value={topic} onChange={(event) => setTopic(event.target.value)} className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400" placeholder="What do you want to learn?" />
              </label>
              <button className="inline-flex min-h-14 items-center justify-center gap-2 rounded-xl bg-[#22c6b5] px-6 text-sm font-bold text-[#062445] transition hover:bg-[#55dfd0]" type="submit">Build my path <ArrowRight size={17} /></button>
            </form>
            {submitted && <p className="mt-3 text-sm text-[#91eee3]" role="status">Great choice. Your learning path is ready to explore below.</p>}
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-blue-200"><span className="flex items-center gap-2"><Check size={15} className="text-[#4ad9c8]" /> Curated by AI</span><span className="flex items-center gap-2"><Check size={15} className="text-[#4ad9c8]" /> Built around your time</span><span className="flex items-center gap-2"><Check size={15} className="text-[#4ad9c8]" /> Always free to start</span></div>
          </div>
          <div className="relative mx-auto w-full max-w-md lg:ml-auto">
            <div className="absolute -inset-5 rounded-[2rem] border border-[#4ad9c8]/20" />
            <div className="relative rounded-3xl border border-white/15 bg-[#102d5b] p-5 shadow-2xl shadow-black/30">
              <div className="mb-5 flex items-center justify-between"><div><p className="text-xs font-semibold uppercase tracking-[.16em] text-[#7de9dc]">Your learning path</p><h2 className="mt-1 text-xl font-semibold">Learn n8n Automation</h2></div><div className="grid h-10 w-10 place-items-center rounded-full bg-[#1b4a65] text-[#70e3d6]"><Target size={20} /></div></div>
              <div className="mb-4"><VideoThumbnail accent={steps[0].accent} duration="12:04" /><div className="mt-2 flex items-center gap-2 text-[11px] text-blue-300"><span className="h-1.5 w-1.5 rounded-full bg-[#ff3157]" /> YouTube lesson preview</div></div>
              <div className="mb-5 rounded-xl bg-[#0a234e] p-4"><div className="flex items-center justify-between text-xs text-blue-200"><span>Progress</span><span>0 of 5 complete</span></div><div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10"><div className="h-full w-[8%] rounded-full bg-[#4ad9c8]" /></div></div>
              <div className="space-y-2">{steps.slice(0, 4).map((step, index) => <div key={step.title} className="flex items-center gap-3 rounded-xl border border-white/8 bg-white/[.04] p-3"><div className={`grid h-8 w-8 shrink-0 place-items-center rounded-lg text-sm font-bold ${index === 0 ? 'bg-[#22c6b5] text-[#09204b]' : 'bg-[#1b4a65] text-blue-200'}`}>{index + 1}</div><div className="min-w-0 flex-1"><p className="truncate text-sm font-semibold">{step.title}</p><p className="mt-0.5 text-xs text-blue-300">{step.description}</p></div><Clock3 size={14} className="text-blue-300" /></div>)}</div>
              <div className="mt-4 flex items-center justify-center gap-2 text-xs text-blue-300"><Sparkles size={13} className="text-[#4ad9c8]" /> AI-curated for your level and schedule</div>
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="mx-auto max-w-6xl px-6 py-24 lg:px-8"><div className="max-w-2xl"><p className="text-sm font-bold uppercase tracking-[.18em] text-[#119e92]">How it works</p><h2 className="mt-3 text-4xl font-semibold tracking-[-.03em] text-[#10213d] sm:text-5xl">From curious to capable, in five steps.</h2></div><div className="mt-14 grid gap-5 md:grid-cols-3"><Feature icon={<Compass />} number="01" title="Choose your topic" text="Tell us what you want to learn. No perfectly-worded prompt required." /><Feature icon={<Filter />} number="02" title="Set your pace" text="Pick your skill level and the time you can make space for each week." /><Feature icon={<Layers3 />} number="03" title="Start learning" text="Get a focused path made from the most relevant videos available." /></div></section>

      <section id="path" className="border-y border-slate-200 bg-white"><div className="mx-auto grid max-w-6xl gap-14 px-6 py-24 lg:grid-cols-[.8fr_1.2fr] lg:px-8"><div><p className="text-sm font-bold uppercase tracking-[.18em] text-[#119e92]">A path, not a playlist</p><h2 className="mt-3 text-4xl font-semibold tracking-[-.03em] text-[#10213d] sm:text-5xl">The right video at the right time.</h2><p className="mt-6 max-w-md leading-7 text-slate-500">Every path is progressive by design. Start with the mental model, practice the fundamentals, then put your new skill to work.</p><button className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#0d827a] hover:text-[#09204b]">Explore the demo path <ArrowRight size={16} /></button></div><div className="rounded-3xl bg-[#f2f7fa] p-4 sm:p-6"><div className="mb-4 flex items-center justify-between px-2"><div><p className="text-xs font-bold uppercase tracking-[.16em] text-slate-400">Demo learning path</p><h3 className="mt-1 text-xl font-semibold text-[#10213d]">Learn n8n Automation</h3></div><span className="rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-slate-500">5 steps · 2h 10m</span></div><div className="space-y-3">{steps.map((step, index) => <div key={step.title} className="group flex items-center gap-3 rounded-2xl border border-slate-200/80 bg-white p-3 transition hover:-translate-y-0.5 hover:shadow-md"><div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#e4f8f5] text-sm font-bold text-[#0d827a]">{String(index + 1).padStart(2, '0')}</div><div className="w-24 shrink-0 sm:w-32"><VideoThumbnail accent={step.accent} duration={step.duration.replace(' min', ':00')} /></div><div className="min-w-0 flex-1"><h4 className="truncate font-semibold text-[#10213d]">{step.title}</h4><p className="mt-1 hidden text-sm text-slate-500 sm:block">{step.description}</p></div><button aria-label={`Play demo: ${step.title}`} className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#09204b] text-white transition group-hover:bg-[#22c6b5] group-hover:text-[#09204b]"><Play size={13} fill="currentColor" /></button></div>)}</div></div></div></section>

      <section className="mx-auto max-w-6xl px-6 py-24 lg:px-8"><div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><p className="text-sm font-bold uppercase tracking-[.18em] text-[#119e92]">AI-curated picks</p><h2 className="mt-3 text-4xl font-semibold tracking-[-.03em] text-[#10213d] sm:text-5xl">Recommended by LearnIA</h2><p className="mt-4 text-slate-500">Discover the videos selected for your learning path.</p></div><span className="text-xs text-slate-400">Demo recommendations · Not live statistics</span></div><div className="mt-10 grid gap-5 md:grid-cols-3">{featuredVideos.map((video) => <article key={video.title} className="group rounded-2xl border border-slate-200 bg-white p-3 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"><div className="relative"><VideoThumbnail accent={video.accent} duration={video.duration} large /><span className="absolute right-2 top-2 rounded-full bg-white/95 px-2 py-1 text-[10px] font-bold text-[#0d827a] shadow-sm">AI selected</span></div><div className="px-1 pt-4"><div className="flex items-start justify-between gap-3"><h3 className="font-semibold leading-5 text-[#10213d]">{video.title}</h3><span className="shrink-0 rounded-full bg-[#e4f8f5] px-2 py-1 text-[10px] font-bold text-[#0d827a]">{video.relevance}</span></div><p className="mt-2 text-sm text-slate-500">{video.channel}</p><div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3 text-xs text-slate-400"><span>{video.views}</span><span className="flex items-center gap-1"><span className="text-[#119e92]">♥</span>{video.likes} likes</span></div></div></article>)}</div></section>

      <section id="why-learnia" className="mx-auto grid max-w-6xl gap-14 px-6 py-24 lg:grid-cols-2 lg:items-center lg:px-8"><div className="relative overflow-hidden rounded-3xl bg-[#09204b] p-8 text-white sm:p-12"><div className="absolute -right-12 -top-12 h-40 w-40 rounded-full border border-[#4ad9c8]/30" /><div className="absolute -right-2 -top-2 h-20 w-20 rounded-full border border-[#4ad9c8]/20" /><div className="relative"><div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#1b4a65] text-[#4ad9c8]"><TrendingUp /></div><h2 className="mt-7 text-3xl font-semibold tracking-[-.03em] sm:text-4xl">Not all videos are created equal.</h2><p className="mt-5 leading-7 text-blue-100">LearnIA looks beyond a title and thumbnail. Our recommendation engine weighs signals that help surface content worth your time.</p><div className="mt-8 grid grid-cols-2 gap-3 text-sm">{['Relevance', 'Clarity', 'Recency', 'Engagement'].map((item) => <div key={item} className="rounded-xl border border-white/10 bg-white/[.06] p-3 text-blue-100"><span className="mb-2 block h-1.5 w-7 rounded-full bg-[#4ad9c8]" />{item}</div>)}</div></div></div><div><p className="text-sm font-bold uppercase tracking-[.18em] text-[#119e92]">Why LearnIA</p><h2 className="mt-3 text-4xl font-semibold tracking-[-.03em] text-[#10213d] sm:text-5xl">Make progress feel inevitable.</h2><div className="mt-8 space-y-6"><Benefit title="Less noise, more signal" text="Skip the endless tabs. We narrow the internet down to what helps you move forward." /><Benefit title="A path that adapts" text="Your level, your schedule, your next best step. Learning should fit into real life." /><Benefit title="Momentum that sticks" text="Small, structured wins turn watching a video into actually building a skill." /></div></div></section>

      <section id="start" className="bg-[#e5f8f5]"><div className="mx-auto max-w-6xl px-6 py-20 text-center lg:px-8"><p className="text-sm font-bold uppercase tracking-[.18em] text-[#119e92]">Start learning differently</p><h2 className="mx-auto mt-3 max-w-2xl text-4xl font-semibold tracking-[-.04em] text-[#10213d] sm:text-5xl">One clear path can change everything.</h2><p className="mx-auto mt-5 max-w-lg text-slate-600">Tell us what you want to learn and let LearnIA do the sorting.</p><a href="#top" className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#09204b] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#163d78]">Build your first path <ArrowRight size={17} /></a></div></section>
      <footer className="bg-[#09204b] px-6 py-8 text-sm text-blue-200"><div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row"><div className="flex items-center gap-2 font-bold text-white"><span className="grid h-7 w-7 place-items-center rounded-md bg-[#20c3b2] text-[#09204b]"><Sparkles size={14} /></span>Learn<span className="text-[#4ad9c8]">IA</span></div><p>Demo concept · Curated learning, made simple.</p></div></footer>
    </main>
  )
}

function Feature({ icon, number, title, text }: { icon: React.ReactNode; number: string; title: string; text: string }) { return <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"><div className="flex items-center justify-between"><div className="grid h-11 w-11 place-items-center rounded-xl bg-[#e4f8f5] text-[#0d827a]">{icon}</div><span className="text-sm font-bold text-slate-300">{number}</span></div><h3 className="mt-7 text-lg font-semibold text-[#10213d]">{title}</h3><p className="mt-2 leading-6 text-slate-500">{text}</p></article> }
function Benefit({ title, text }: { title: string; text: string }) { return <div className="flex gap-4"><div className="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#e4f8f5] text-[#0d827a]"><Check size={14} strokeWidth={3} /></div><div><h3 className="font-semibold text-[#10213d]">{title}</h3><p className="mt-1 leading-6 text-slate-500">{text}</p></div></div> }

