import Link from "next/link";
import { ArrowRight, CheckCircle2, FileSearch, Gauge, ShieldCheck, Sparkles } from "lucide-react";
import { Brand } from "../components/brand";

const benefits = [
  [Gauge, "Explainable ATS score", "See where your resume wins and where it may be filtered out."],
  [Sparkles, "Role-aware feedback", "Turn broad feedback into practical changes for your target role."],
  [FileSearch, "Shareable reports", "Export a polished action plan for each version of your resume."],
];

export default function Home() {
  return <main className="overflow-hidden">
    <section className="relative isolate">
      <div className="hero-grid absolute inset-0 -z-10" />
      <div className="glow-orb absolute -right-32 top-10 -z-10 h-96 w-96 rounded-full bg-teal-200/45" />
      <div className="absolute -left-24 top-72 -z-10 h-72 w-72 rounded-full bg-cyan-100/70 blur-3xl" />
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <Brand />
        <nav className="flex items-center gap-2"><a className="hidden px-3 text-sm font-medium text-slate-600 hover:text-ink sm:block" href="#how">How it works</a><Link className="btn-secondary text-sm" href="/login">Sign in</Link></nav>
      </header>
      <section className="mx-auto grid max-w-6xl gap-12 px-6 pb-24 pt-14 md:grid-cols-[1.05fr_.95fr] md:pt-24">
        <div className="self-center">
          <p className="reveal mb-5 inline-flex items-center gap-2 rounded-full border border-teal-200 bg-teal-50/80 px-3 py-1.5 text-sm font-bold text-teal-800"><Sparkles size={15}/> AI-powered resume intelligence</p>
          <h1 className="reveal reveal-delay-1 max-w-2xl text-5xl font-bold leading-[1.02] tracking-[-.045em] text-ink md:text-6xl">Your next role starts with a <span className="text-teal-600">stronger resume.</span></h1>
          <p className="reveal reveal-delay-2 mt-6 max-w-xl text-lg leading-8 text-slate-600">Know exactly how recruiters and ATS software may read your resume—then improve it with clear, role-specific guidance.</p>
          <div className="reveal reveal-delay-3 mt-8 flex flex-wrap gap-3"><Link href="/register" className="btn-primary">Analyze my resume <ArrowRight size={18}/></Link><a href="#how" className="btn-secondary">Explore the process</a></div>
          <div className="reveal reveal-delay-3 mt-10 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-slate-600">{["Private by design", "PDF analysis", "Free to start"].map(t => <span className="flex items-center gap-1.5" key={t}><CheckCircle2 className="text-teal-600" size={16}/>{t}</span>)}</div>
        </div>
        <div className="float-card relative mx-auto w-full max-w-md pt-5 md:pt-0">
          <div className="soft-ring card shine p-6 md:p-7"><div className="flex justify-between border-b border-slate-100 pb-5"><div><p className="text-sm font-medium text-slate-500">ATS compatibility</p><p className="mt-1 text-5xl font-bold tracking-tight">82<span className="text-xl font-medium text-slate-400">/100</span></p></div><span className="h-fit rounded-full bg-teal-50 px-3 py-1.5 text-sm font-bold text-teal-700">Strong match</span></div><div className="mt-7 space-y-5">{[["Experience impact",88],["Skills alignment",76],["Keyword coverage",68],["Formatting",94]].map(([name, value], index) => <div key={String(name)} className="stagger-item" style={{ animationDelay: `${.2 + index * .1}s` }}><div className="mb-2 flex justify-between text-sm"><span className="font-medium">{name}</span><span className="font-bold">{value}%</span></div><div className="h-2.5 overflow-hidden rounded-full bg-slate-100"><div className="progress-fill h-full rounded-full bg-gradient-to-r from-teal-500 to-cyan-400" style={{ width: `${value}%`, animationDelay: `${.35 + index * .1}s` }}/></div></div>)}</div><div className="mt-7 rounded-xl border border-teal-100 bg-teal-50/70 p-4 text-sm"><p className="font-bold text-teal-900">Highest-impact next step</p><p className="mt-1 leading-6 text-teal-800">Add measurable outcomes to three experience bullets.</p></div></div>
          <div className="absolute -bottom-7 -left-5 rounded-xl border border-slate-100 bg-white px-4 py-3 shadow-lg"><p className="text-xs font-semibold text-slate-500">ROLE ALIGNMENT</p><p className="mt-1 text-xl font-bold">89% <span className="text-sm font-medium text-teal-600">+12%</span></p></div>
        </div>
      </section>
    </section>
    <section id="how" className="border-y border-slate-100 bg-white py-20"><div className="mx-auto max-w-6xl px-6"><div className="max-w-2xl"><p className="text-sm font-bold uppercase tracking-[.16em] text-teal-700">Designed for focused iteration</p><h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">From upload to a better application.</h2><p className="mt-3 leading-7 text-slate-600">A single, structured workflow for refining every version of your resume.</p></div><div className="mt-10 grid gap-5 md:grid-cols-3">{benefits.map(([Icon, title, text], index) => { const C = Icon as typeof Gauge; return <div className="card group p-6 transition duration-300 hover:-translate-y-1 hover:border-teal-200 hover:shadow-lg" key={String(title)}><span className="grid h-11 w-11 place-items-center rounded-xl bg-teal-50 text-teal-700 transition group-hover:scale-110 group-hover:bg-teal-600 group-hover:text-white"><C size={21}/></span><p className="mt-6 text-xs font-bold tracking-widest text-slate-400">0{index + 1}</p><h3 className="mt-2 text-lg font-bold">{String(title)}</h3><p className="mt-2 leading-6 text-slate-600">{String(text)}</p></div>})}</div><div className="mt-12 flex items-center gap-3 rounded-2xl bg-ink p-6 text-white"><ShieldCheck className="shrink-0 text-mint"/><p className="text-sm leading-6 text-slate-200"><b className="text-white">Designed with privacy in mind.</b> Resume text is processed to generate your feedback and analysis history is private to your account.</p></div></div></section>
  </main>;
}
