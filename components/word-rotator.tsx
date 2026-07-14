'use client'

import { useEffect, useState } from 'react'

type Props = {
  /** Words to cycle through, in order. */
  words: string[]
  /** How long each word is shown, in ms. */
  intervalMs?: number
  /** Classes applied to each word (e.g. the accent gradient). */
  className?: string
}

// Slide transition duration; the wrap-around reset waits exactly this long.
const SLIDE_MS = 550
// One line box, sized in `em` so it tracks the headline's font size. A touch
// over 1 to leave room for descenders (p, y) inside the clipped window.
const LINE = 1.18

// WordRotator vertically cycles `words` with a smooth upward slide.
//
// A clone of the first word is appended so the last→first wrap keeps moving up
// (no snap-back); when the slide lands on the clone we reset to index 0 without
// a transition. The box width follows the widest word (the stacked column sizes
// it), so the surrounding headline never reflows as the word changes.
export default function WordRotator({ words, intervalMs = 2200, className = '' }: Props) {
  const [index, setIndex] = useState(0)
  const [animate, setAnimate] = useState(true)
  const [reduced, setReduced] = useState(false)

  // Respect the OS "reduce motion" setting — render a single static word.
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduced(mq.matches)
    const onChange = () => setReduced(mq.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  // Advance one word per interval.
  useEffect(() => {
    if (reduced || words.length <= 1) return
    const id = setInterval(() => setIndex(i => i + 1), intervalMs)
    return () => clearInterval(id)
  }, [reduced, words.length, intervalMs])

  // On reaching the appended clone, let the slide finish, then jump back to the
  // real first word with the transition off (invisible reset).
  useEffect(() => {
    if (index !== words.length) return
    const t = setTimeout(() => {
      setAnimate(false)
      setIndex(0)
    }, SLIDE_MS)
    return () => clearTimeout(t)
  }, [index, words.length])

  // Re-enable the transition on the next frame after a no-animation reset.
  useEffect(() => {
    if (animate) return
    const r = requestAnimationFrame(() => setAnimate(true))
    return () => cancelAnimationFrame(r)
  }, [animate])

  const items = reduced ? [words[0]] : [...words, words[0]]
  // Never translate past the rendered words — guards reduced-motion (items
  // shrinks to 1) and any interval that outruns the wrap-around reset.
  const clampedIndex = Math.min(index, items.length - 1)

  return (
    <>
      <span
        className="inline-flex overflow-hidden align-bottom"
        style={{ height: `${LINE}em` }}
        aria-hidden="true"
      >
        <span
          className="flex flex-col"
          style={{
            transform: `translateY(-${clampedIndex * LINE}em)`,
            transition: animate ? `transform ${SLIDE_MS}ms cubic-bezier(0.22, 1, 0.36, 1)` : 'none',
          }}
        >
          {items.map((word, i) => (
            <span
              key={i}
              className={className}
              style={{ height: `${LINE}em`, lineHeight: `${LINE}em` }}
            >
              {word}
            </span>
          ))}
        </span>
      </span>
      {/* Screen readers get the plain list, not the animated stack. */}
      <span className="sr-only">{words.join(', ')}</span>
    </>
  )
}
