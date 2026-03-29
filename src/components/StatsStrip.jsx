import { stats } from '../data/siteContent'

export default function StatsStrip() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((item) => (
        <div
          key={item.label}
          className="section-surface rounded-[24px] px-6 py-5 text-center sm:text-left"
        >
          <p className="font-display text-2xl font-semibold text-white">{item.value}</p>
          <p className="mt-2 text-sm uppercase tracking-[0.24em] text-slate-400">{item.label}</p>
        </div>
      ))}
    </div>
  )
}
