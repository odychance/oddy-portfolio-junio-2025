import gsap from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export const animationCourses = ({ title, wrapper, bgLetter, wrapperCourse, containerCourses}) => {
  gsap.set([title, wrapper, bgLetter], {
    opacity: 0,
    y: 100
  })

  gsap.set(wrapperCourse.children, { opacity: 0, x: -100 })

  gsap.to(title, {
    opacity: 1,
    y: 0,
    duration: 1,
    scrollTrigger: {
      trigger: containerCourses,
      start: "top center",
      end: "top center",
      toggleActions: "play none reverse none"
    }
  })
  
  gsap.to([bgLetter, wrapper], {
    opacity: 1,
    y: 0,
    duration: 1,
    scrollTrigger: {
      trigger: containerCourses,
      start: "center 40%",
      end: "center 40%",
      toggleActions: "play none reverse none",
    }
  })

  gsap.to(wrapperCourse.children, {
    opacity: 1,
    x: 0,
    duration: .5,
    stagger: 0.25,
    scrollTrigger: {
      trigger: containerCourses,
      start: "center 40%",
      end: "center 40%",
      toggleActions: "play none reverse none",
    }
  })

}