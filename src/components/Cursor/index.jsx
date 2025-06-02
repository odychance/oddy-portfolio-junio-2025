import React, { useEffect, useRef } from 'react'
import s from './styles.module.scss'
import gsap from 'gsap'

const Cursor = () => {
  const cursorRef = useRef(null)
  const followerRef = useRef(null)
  const posX = useRef(0)
  const posY = useRef(0)
  const mouseX = useRef(0)
  const mouseY = useRef(0)

  useEffect(() => {
    const animate = () => {
      posX.current += ( mouseX.current - posX.current ) / 20
      posY.current += ( mouseY.current - posY.current ) / 20

      gsap.set(followerRef.current, {
        left: posX.current + 10,
        top: posY.current + 10,
        duration: 1,
        ease: "power2.out"
      })

      gsap.set(cursorRef.current, {
        left: mouseX.current,
        top: mouseY.current
      })
      
      requestAnimationFrame(animate)
    }

    animate()

    const move = (e) => {
      mouseX.current = e.clientX
      mouseY.current = e.clientY
    }
    document.addEventListener("mousemove", move)

    return () => document.removeEventListener("mousemove", move)
  }, [])

  return (
    <>
      <div className={s["cursor"]} ref={cursorRef}/>
      <div className={s["cursorFollower"]} ref={followerRef}/>
    </>
  )
}

export default Cursor