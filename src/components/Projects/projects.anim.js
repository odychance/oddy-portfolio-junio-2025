import gsap from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export const animationProjects = ({ containerProjects, containerTitle, title, targetProjects, bgMountains }) => {
  
  gsap.set([containerProjects, containerTitle, title, targetProjects], { opacity: 0 })
  gsap.set(title, { y: -100 })
  gsap.set(targetProjects, { y: 100 })

  gsap.to([containerProjects, bgMountains], {
    opacity: 1,
    duration: 2,
    stagger: 1,
    scrollTrigger: {
      trigger: containerProjects,
      start: "top 30%",
      end: "top 30%",
      toggleActions: "play none reverse none",
    }
  })

  gsap.to(containerTitle, {
    opacity: 1,
    duration: 1,
    scrollTrigger: {
      trigger: containerProjects,
      start: "top 20%",
      end: "top 20%",
      toggleActions: "play none reverse none",
    }
  })

  gsap.to(title, {
    opacity: 1,
    y: 0,
    duration: 1,
    scrollTrigger: {
      trigger: containerProjects,
      start: "top 20%",
      end: "top 20%",
      toggleActions: "play none reverse none",
    }
  })

  targetProjects.forEach((el) => {
    gsap.to(el, {
      opacity: 1,
      y: 0,
      duration: 1,
      scrollTrigger: {
        trigger: el,
        start: "top 65%",
        end: "top 65%",
        toggleActions: "play none reverse none"
      }
    })
  })

}