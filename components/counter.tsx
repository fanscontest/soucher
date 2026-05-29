'use client'

import { useRef, useState, useEffect } from 'react'

interface CounterProps {
  number: number
  duration?: number
}

// Animated count-up from 0 → target, eased, triggered when scrolled into view.
// Adapted from gray-next/components/counter.tsx; formats with thousand separators.
export default function Counter({ number = 0, duration = 2000 }: CounterProps) {
  const counterElement = useRef<HTMLSpanElement | null>(null)
  const startTimestamp = useRef<number | null>(null)
  const [counterValue, setCounterValue] = useState<number>(0)
  const [animationCompleted, setAnimationCompleted] = useState<boolean>(false)

  const precision: number = (number % 1 === 0)
    ? 0
    : (number.toString().split('.')[1] || []).length

  const easeOut = (t: number): number => 1 - Math.pow(1 - t, 5)

  useEffect(() => {
    let animationRequestId: number | null = null

    const step = (timestamp: number) => {
      if (!startTimestamp.current) startTimestamp.current = timestamp
      const progress: number = Math.min((timestamp - (startTimestamp.current || 0)) / duration, 1)
      const easedProgress: number = easeOut(progress)
      const newRawValue: number = parseFloat((easedProgress * number).toFixed(precision))
      setCounterValue(newRawValue)

      if (progress < 1) {
        animationRequestId = window.requestAnimationFrame(step)
      } else {
        setAnimationCompleted(true)
      }
    }

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !animationCompleted) {
          animationRequestId = window.requestAnimationFrame(step)
        }
      })
    })

    if (counterElement.current) observer.observe(counterElement.current)

    return () => {
      if (animationRequestId) window.cancelAnimationFrame(animationRequestId)
      observer.disconnect()
    }
  }, [number, duration, animationCompleted, precision])

  return (
    <span ref={counterElement}>
      {counterValue.toLocaleString(undefined, {
        minimumFractionDigits: precision,
        maximumFractionDigits: precision,
      })}
    </span>
  )
}
