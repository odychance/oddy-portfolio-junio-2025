"use client"

import { useEffect, useRef } from "react"
import Lenis from "lenis"

const SmoothScroll = ({children}) => {
  const scrollContainer = useRef(null)

  useEffect(() => {
    if(typeof window !== "undefined") {
      const lenis = new Lenis({
        duration: 3,
        easing: (t) => Math.min(1, 1.001 - Math.pow(3, -10 * t)),
        smoothWheel: true,
        smoothTouch: false,
        lerp: 0.1
      })

      function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
      }
      requestAnimationFrame(raf)

      return () => lenis.destroy()
    }
  }, [])

  return (
    <div ref={scrollContainer}>
      {children}
    </div>
  )
}

export default SmoothScroll