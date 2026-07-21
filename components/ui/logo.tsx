import Link from 'next/link'

export default function Logo() {
  return (
    <Link className="inline-flex" href="/" aria-label="Qaragon">
      <span className="text-3xl font-extrabold uppercase tracking-[0.2em] bg-clip-text text-transparent bg-linear-to-r from-purple-400 via-purple-300 to-purple-500 drop-shadow-[0_0_18px_rgba(168,85,247,0.35)]">
        Qaragon
      </span>
    </Link>
  )
}
