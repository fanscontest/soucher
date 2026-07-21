import Link from 'next/link'

export default function Logo() {
  return (
    <Link className="inline-flex" href="/" aria-label="Qaragon">
      <span className="text-3xl font-extrabold uppercase tracking-[0.2em] text-white">
        Qaragon
      </span>
    </Link>
  )
}
