import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const animateHero = ({titleText, targetText, cartoonImage, containerHero, containerHeader, heroDisplayed, backHero}) => {
    const tl = gsap.timeline()

    tl.set([titleText, targetText, cartoonImage], { opacity: 0, })
    tl.set(cartoonImage, { x: 100})
    tl.set([titleText, targetText], { y: 100 })
    
    tl.to([titleText, targetText], {
      opacity: 1,
      y: 0,
      duration: 0.5,
      stagger: 0.5,
    })

    tl.to(cartoonImage, {
      opacity: 1,
      x: 0,
      duration: 0.5,
      delay: 0.5,
    })

    gsap.to(containerHero, {
      opacity: 0,
      y: -100,
      duration: 1,
      stagger: 0.3,
      scrollTrigger: {
        trigger: containerHeader,
        start: "55% center",
        end: "55% center",
        toggleActions: "play none reverse none"
      },
      onComplete: () => heroDisplayed(),
      onReverseComplete: () => backHero()
    })


}