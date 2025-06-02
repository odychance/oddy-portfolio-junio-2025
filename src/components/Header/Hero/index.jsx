import React, { useEffect, useRef } from 'react'
import { animateHero } from './hero.anim'
import s from './styles.module.scss'
import clsx from 'clsx'
import Image from 'next/image'

const Hero = ({ className, stateMountains, containerHeaderRef, setStateHero }) => {
  const containerHeroRef = useRef(null)
  const titleTextRef = useRef(null)
  const targetTextRef = useRef(null)
  const cartoonImageRef = useRef(null)

  const heroDisplayed = () => setStateHero(false)
  const backHero = () => setStateHero(true)

  useEffect(() => {
    const containerHeader = containerHeaderRef.current
    const titleText = titleTextRef.current
    const targetText = targetTextRef.current
    const cartoonImage = cartoonImageRef.current
    const containerHero = containerHeroRef.current
    
    if(stateMountains === false) {
      animateHero({titleText, targetText, cartoonImage, containerHero, containerHeader, heroDisplayed, backHero})
    }
  }, [stateMountains])
  
  return (
    <div className={clsx(s["containerHero"], className)} ref={containerHeroRef}>
      <div className={s["textHeader"]}>
        <h2 className={s["titleText"]} ref={titleTextRef}>Frontend<br/><span>Developer</span></h2>
        <p className={s["targetText"]} ref={targetTextRef}>Focused on learning and creating<br/><span className={s["fontBold"]}>interactive web experiences.</span></p>
      </div>
      <div className={s["imageWrapper"]} ref={cartoonImageRef}>
        <Image src={'/Media/Img/Me-cartoon.png'} className={s["meCartoon"]} alt="" fill/>
      </div>
    </div>
  )
}

export default Hero