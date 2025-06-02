import React, { useEffect, useRef } from 'react'
import s from './styles.module.scss'
import Image from 'next/image'
import bgAbstractForm from '/public/Media/Img/SVG/bgAbstractForm.png'
import { techs } from './techs.constants'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import { scalingTechs, revealTechs } from './techSkills.anim'

gsap.registerPlugin(ScrollTrigger)

const TechSkills = () => {
  const containerRef = useRef(null)
  const techsRef = useRef(null)
  const titleRef = useRef(null)
  const bgImgRef = useRef(null)
  
  useEffect(async () => {
    const container = containerRef?.current
    const techs = techsRef?.current
    const title = titleRef?.current
    const bgImg = bgImgRef?.current
    
    const intervalId = setInterval(() => {
      const techsLength = techsRef?.current?.children?.length
      const randomNum = Math.floor(Math.random() * techsLength)
      const element = techsRef?.current?.children[randomNum]
      scalingTechs({element})
    }, 3000)

    revealTechs({ title, techs, bgImg, container })

    return () => clearInterval(intervalId)
  }, [])

  return (
    <div className={s["containerTechSkills"]} ref={containerRef} id="techs">
      <h3 className={s["title"]} ref={titleRef}>Tech Skills</h3>
      <div className={s["wrapperTechs"]}>
        <Image src={bgAbstractForm} className={s["abstractForm"]} fill alt="abstract form background" ref={bgImgRef}/>
        <div className={s["techs"]} ref={techsRef}>
          {techs.map((el, idx) => (
            <div className={s["tech"]} key={idx}>
              <Image src={el.image} className={s["techImg"]} alt={`${el.name} image`} fill />
              <p className={s["techText"]}>{el.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TechSkills