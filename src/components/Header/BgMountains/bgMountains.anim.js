import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const animateLoading = ({ bgMountains, wrapperContainer, mountainsDisplayed }) => {
  const tl = gsap.timeline()

  tl.set([bgMountains, wrapperContainer.children], { opacity: 0, y: -100})
  tl.to(bgMountains, { opacity: 1, y: 0, duration: 1})
  tl.to(wrapperContainer.children, { opacity: 1, y: 0, duration: 1, stagger: 0.5, onComplete: () => mountainsDisplayed() })
}

export const animateMountainsDesplacement = ({ wrapperContainer, bgMountains, containerHeader }) => {
  gsap.to(wrapperContainer, {
    left: "-60%",
    bottom: "30%",
    scale: 1.4,
    duration: 2,
    scrollTrigger: {
      trigger: containerHeader,
      start: "60% center",
      end: "60% center",
      toggleActions: "play none reverse none"
  }})

  gsap.to(bgMountains, {
    scale: 10,
    opacity: 0,
    duration: 3,
    scrollTrigger: {
      trigger: containerHeader,
      start: "95% center",
      end: "95% center",
      toggleActions: "play none reverse none"
    }
  })
}