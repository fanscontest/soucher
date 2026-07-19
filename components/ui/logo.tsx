import Link from 'next/link'

export default function Logo() {
  return (
    <Link className="inline-flex" href="/" aria-label="Qaragon">
      <span className="text-2xl font-bold uppercase tracking-wider bg-clip-text text-transparent bg-linear-to-r from-slate-200/60 via-slate-200 to-slate-200/60">
        Qaragon
      </span>
    </Link>
  )
}
