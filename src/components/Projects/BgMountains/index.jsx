import React, { useRef } from 'react'
import s from './styles.module.scss'
import Image from 'next/image'
import clsx from 'clsx'
import Mountain6 from '/public/Media/Img/SVG/MountainsProject/Mountain6.svg'
import Mountain5 from '/public/Media/Img/SVG/MountainsProject/Mountain5.svg'
import Mountain4 from '/public/Media/Img/SVG/MountainsProject/Mountain4.svg'
import Mountain3 from '/public/Media/Img/SVG/MountainsProject/Mountain3.svg'
import Mountain2 from '/public/Media/Img/SVG/MountainsProject/Mountain2.svg'
import Mountain1 from '/public/Media/Img/SVG/MountainsProject/Mountain1.svg'
import { useMouseFollow } from '/src/utils/useMouseFollow'

const BgMountains = () => {
  const mountain1Ref = useRef(null)
  const mountain2Ref = useRef(null)
  const mountain3Ref = useRef(null)
  const mountain4Ref = useRef(null)
  const mountain5Ref = useRef(null)
  const mountain6Ref = useRef(null)
  
  useMouseFollow(mountain1Ref, {speed: 0.15, distance: 100})
  useMouseFollow(mountain2Ref, {speed: 0.15, distance: 60})
  useMouseFollow(mountain3Ref, {speed: 0.15, distance: 50})
  useMouseFollow(mountain4Ref, {speed: 0.15, distance: 40})
  useMouseFollow(mountain5Ref, {speed: 0.15, distance: 30})
  useMouseFollow(mountain6Ref, {speed: 0.15, distance: 15})

  return (
    <div className={s["bgContainer"]}>
      <Image src={Mountain1} alt="" className={clsx(s["mountain1"], s["mountains"])} ref={mountain1Ref} />
      <Image src={Mountain2} alt="" className={clsx(s["mountain2"], s["mountains"])} ref={mountain2Ref} />
      <Image src={Mountain3} alt="" className={clsx(s["mountain3"], s["mountains"])} ref={mountain3Ref} />
      <Image src={Mountain4} alt="" className={clsx(s["mountain4"], s["mountains"])} ref={mountain4Ref} />
      <Image src={Mountain5} alt="" className={clsx(s["mountain5"], s["mountains"])} ref={mountain5Ref} />
      <Image src={Mountain6} alt="" className={clsx(s["mountain6"], s["mountains"])} ref={mountain6Ref} />
    </div>
  )
}

export default BgMountains