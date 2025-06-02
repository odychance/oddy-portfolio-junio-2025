import React, { useEffect, useRef } from 'react'
import { animateLoading, animateMountainsDesplacement } from './bgMountains.anim'
import { useMouseFollow } from '../../../utils/useMouseFollow'
import s from './styles.module.scss'
import Mountain1 from '/public/Media/Img/SVG/Mountains/Mountain1.svg'
import Mountain2 from '/public/Media/Img/SVG/Mountains/Mountain2.svg'
import Mountain3 from '/public/Media/Img/SVG/Mountains/Mountain3.svg'
import Mountain4 from '/public/Media/Img/SVG/Mountains/Mountain4.svg'
import Mountain5 from '/public/Media/Img/SVG/Mountains/Mountain5.svg'
import Mountain6 from '/public/Media/Img/SVG/Mountains/Mountain6.svg'
import Image from 'next/image'
import clsx from 'clsx'

const BgMountains = ({ className, isLoading, setStateMountains, stateHero, containerHeaderRef, stateHeaderDone }) => {
  const wrapperContainerRef = useRef(null)
  const bgMountainsRef = useRef(null)
  const mountain6Ref = useRef(null)
  const mountain5Ref = useRef(null)
  const mountain4Ref = useRef(null)
  const mountain3Ref = useRef(null)
  const mountain2Ref = useRef(null)
  const mountain1Ref = useRef(null)
  const wrapperContainer = wrapperContainerRef.current
  const bgMountains = bgMountainsRef.current
  const containerHeader = containerHeaderRef.current

  const mountainsArr = [ 
    { ref: mountain1Ref, speed: 0.15, distance: 100 },
    { ref: mountain2Ref, speed: 0.15, distance: 60 },
    { ref: mountain3Ref, speed: 0.15, distance: 50 },
    { ref: mountain4Ref, speed: 0.15, distance: 40 },
    { ref: mountain5Ref, speed: 0.15, distance: 30 },
    { ref: mountain6Ref, speed: 0.15, distance: 15 },
  ]

  const mountainsDisplayed = () => setStateMountains(false)
  
  useEffect(() => {
    if(isLoading === false ){
      animateLoading({bgMountains, wrapperContainer, mountainsDisplayed})
      mountainsArr.forEach(( el, idx) => useMouseFollow(el.ref, {speed: el.speed, distance: el.distance}))
    }
  }, [isLoading])
  
  useEffect(() => {
    if(stateHero === false) {
      animateMountainsDesplacement({ wrapperContainer, bgMountains, containerHeader })
    }
  }, [stateHero])

  return (
    <div className={clsx(s["containerBgMountains"], className)} ref={bgMountainsRef}>
      <div className={s["wrapperContainer"]} ref={wrapperContainerRef}>
        <Image src={Mountain6} alt="" className={clsx(s["mountain6"], s["mountain"])} ref={mountain6Ref}/>
        <Image src={Mountain5} alt="" className={clsx(s["mountain5"], s["mountain"])} ref={mountain5Ref}/>
        <Image src={Mountain4} alt="" className={clsx(s["mountain4"], s["mountain"])} ref={mountain4Ref}/>
        <Image src={Mountain3} alt="" className={clsx(s["mountain3"], s["mountain"])} ref={mountain3Ref}/>
        <Image src={Mountain2} alt="" className={clsx(s["mountain2"], s["mountain"])} ref={mountain2Ref}/>
        <Image src={Mountain1} alt="" className={clsx(s["mountain1"], s["mountain"])} ref={mountain1Ref}/>
      </div>
    </div>
  )
}

export default BgMountains