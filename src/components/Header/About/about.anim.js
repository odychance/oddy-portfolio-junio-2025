import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const animateAbout = ({ texts, wImage, containerHeader, containerAbout, allDone, allReverse }) => {

  gsap.set([...texts, wImage ], { opacity: 0, y: 100})

  gsap.to([...texts, wImage ], {
    opacity: 1,
    y: 0,
    duration: 0.5,
    stagger: 0.2,
    scrollTrigger: {
      trigger: containerHeader,
      start: "70% center",
      end: "70% center",
      toggleActions: "play none reverse none",
    },
  })
  
  gsap.to(containerAbout, {
    y: -100,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: containerHeader,
      start: "100% center",
      end: "100% center",
      toggleActions: "play none reverse none",
    },
    onComplete: () => allDone(),
    onReverseComplete: () => allReverse()
  })
}