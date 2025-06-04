import React, { useEffect, useRef } from 'react'
import { animateAbout } from './about.anim'
import s from './styles.module.scss'
import clsx from 'clsx'
import Image from 'next/image'

const About = ({ className, containerHeaderRef, stateHero, setStateHeaderDone }) => {
  const containerAboutRef = useRef(null)
  const wImageRef = useRef(null)
  const text1Ref = useRef(null)
  const text2Ref = useRef(null)
  const text3Ref = useRef(null)

  const containerHeader = containerHeaderRef.current
  const containerAbout = containerAboutRef.current

  const allDone = () => { setStateHeaderDone(false)}
  const allReverse = () => {setStateHeaderDone(true)}
  
  useEffect(() => {
    const wImage = wImageRef.current
    const text1 = text1Ref.current
    const text2 = text2Ref.current
    const text3 = text3Ref.current
    const texts = [text1, text2, text3]

    if(stateHero === false) {
      animateAbout({ texts, wImage, containerHeader, containerAbout, allDone, allReverse })
    }
  }, [stateHero])

  return (
    <div className={clsx(s["containerAbout"], { [s["show"]] : !stateHero}, className)} ref={containerAboutRef} >
      <div className={s["imageWrapper"]} ref={wImageRef}>
        <Image src="/Media/Img/Me-photo.png" className={s["mePhoto"]} alt="" fill />
      </div>
      <div className={s["wrapperText"]}>
        <p ref={text1Ref}>I&apos;m a <span>front-end developer</span> focused on building modern<br/>interfaces with Next.js, SCSS, and GSAP.</p>
        <p ref={text2Ref}>I&apos;m interested in <span>creating dynamic web experiences</span> that<br/> combine design and performance. I also have <span>experience<br/> with backends</span> (Node.js, GraphQL, MongoDB) and CMSs such<br/> as Prismic and Strapi.</p>
        <p ref={text3Ref}>I&apos;m passionate about continuing to learn and work with<br/>technologies within the JavaScript ecosystem. I&apos;m a native<br/> Spanish speaker with <span>intermediate (B2) English.</span></p>
      </div>
    </div>
  )
}

export default About