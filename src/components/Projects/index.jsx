import React, { useEffect, useRef } from 'react'
import s from './styles.module.scss'
import Image from 'next/image'
import BgMountains from './BgMountains'
import PreviewVideo from './previewVideo'
import Link from 'next/link'
import clsx from 'clsx'

import RadioSunsetImg from '/public/Media/Img/PNG/Projects/radioSunset.png'
import DronedImg from '/public/Media/Img/PNG/Projects/Droned.png'
import BoredApeImg from '/public/Media/Img/PNG/Projects/ApeBored.png'
import SNKImg from '/public/Media/Img/PNG/Projects/SNK.png'
import GutsyImg from '/public/Media/Img/PNG/Projects/Gutsy.png'

import { animationProjects } from './projects.anim'

const Projects = () => {
  const projects = [
    {
      name: "SNK",
      description: "SNK is a full stack project, created to practice the use of apollo GQL in the backend and Nextjs in the frontend.",
      url: "https://snk-oddy.vercel.app/",
      img: SNKImg,
      video: "/Media/Video/SNKVideo.mp4"
    },
    {
      name: "Droned",
      description: "Droned is a beautiful store, created by using and practicing animations and loaders.",
      url: "https://droned.vercel.app/",
      img: DronedImg,
      video: "/Media/Video/DronedVideo.mp4"
    },
    {
      name: "Radio Sunset Fm.",
      description: "RadioSunset is a fully functional project created with the purpose of listening to country music-oriented radio stations, built with gsap, nextjs, and scss.",
      url: "https://oddy-radiosunset.vercel.app/",
      img: RadioSunsetImg,
      video: "/Media/Video/SunsetRadioVideo.mp4"
    },
    {
      name: "BoredApe - ApeCoin.",
      description: "Ape coin is a project focused mainly focused on frontend, created with different hooks like parallax and a carousel made only with javaScript.",
      url: "https://oddy-bored-ape.vercel.app/",
      img: BoredApeImg,
      video: "/Media/Video/ApeVideo.mp4"
    },
    {
      name: "Fizzi",
      description: "Created to learn about Prismic and React Three Fiber, it's a good way to drink knowledge.",
      url: "https://fizzi-oddy.vercel.app/",
      img: GutsyImg,
      video: "/Media/Video/FizziVideo.mp4"
    },
  ]

  const videoRefs = useRef([])
  const containerProjectsRef = useRef(null)
  const containerTitleRef = useRef(null)
  const titleRef = useRef(null)
  const bgMountainsRef = useRef(null)
  const targetProjectRefs = useRef([])

  const handleMouseEnter = (idx) => {
    const video = videoRefs.current[idx]
    if (video) {
      video.play()
    }
  }
  
  const handleMouseLeave = (idx) => {
    const video = videoRefs.current[idx]
    if (video) {
      video.pause()
      video.currentTime = 0
    }
  }

  useEffect(() => {
    const containerProjects = containerProjectsRef.current
    const containerTitle = containerTitleRef.current
    const title = titleRef.current
    const targetProjects = targetProjectRefs.current
    const bgMountains = bgMountainsRef.current

    animationProjects({ containerProjects, containerTitle, title, targetProjects, bgMountains })
  }, [])

  return (
    <div className={s["containerProjects"]} ref={containerProjectsRef} id="projects">
      <div className={s["projectsTitle"]} ref={containerTitleRef}>
        <p ref={titleRef}>Projects</p>
      </div>
      <div className={s["projects"]}>
        {projects.map((el, idx) => (
          <div className={clsx(s["projectTarget"], idx % 2 === 0 && s["reverse"])} key={idx} ref={(elRef) => (targetProjectRefs.current[idx] = elRef)}>
            <div 
              className={s["wrapperProjectImg"]}
              onMouseEnter={() => handleMouseEnter(idx)}
              onMouseLeave={() => handleMouseLeave(idx)}
            >
              <Link href={el.url} target='__blank'>
                <Image src={el.img} alt="" className={s["projectImg"]} />
              </Link>
              <PreviewVideo src={el.video} ref={(elRef) => (videoRefs.current[idx] = elRef)} className={s["previewVideo"]}/>
            </div>
            <div className={s["wrapperText"]}>
              <p>{el.name}</p>
              <p>{el.description}</p>
            </div>
          </div>
        ))}
      </div>
      <section className={s["containerBgImages"]} ref={bgMountainsRef}>
        <div className={s["wrapperImages"]}>
          <BgMountains />
        </div>
      </section>
    </div>
  )
}

export default Projects