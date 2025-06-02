import gsap from 'gsap'

export const scalingTechs = ({ element }) => {
  const tl = gsap.timeline()
  tl.set( element?.children[0], {
    scale: .4,
    filter: "grayscale(100%)"
  })
  
  tl.to(element?.children[0], {
    scale: .6,
    duration: 1,
    filter: "grayscale(0%)"
  })
  
  tl.to(element?.children[0], {
    scale: .4,
    duration: 1,
    filter: "grayscale(100%)",
    onComplete: () => gsap.set(element?.children[0], { clearProps: "scale" })
  })
}

export const revealTechs = async ({ title, techs, bgImg, container }) => {
      
  const gsapModule = await import("gsap");
  const CustomEaseModule = await import("gsap/CustomEase");

  const gsap = gsapModule.default;
  const CustomEase = CustomEaseModule.CustomEase;

  gsap.registerPlugin(CustomEase);
  CustomEase.create("myBezier", ".64,.26,.67,1.3");

  gsap.set([title, techs.children, bgImg], {
    opacity: 0,
    y: 100
  })

  gsap.to(title, {
    opacity: 1,
    y: 0,
    duration: 1,
    scrollTrigger: {
      trigger: container,
      start: "top 50%",
      end: "top 50%",
      toggleActions: "play none reverse none"
    }
  })

  gsap.to(bgImg, {
    opacity: .2,
    duration: 1,
    scrollTrigger: {
      trigger: container,
      start: "top 30%",
      end: "top 30%",
      toggleActions: "play none reverse none"
    }
  })


  gsap.to(techs?.children, {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "myBezier",
    stagger: {
      amount: 2,
      grid: [4, 4],
      from: "start"
    },
    scrollTrigger: {
      trigger: container,
      start: "top 30%",
      end: "top 30%",
      toggleActions: "play none reverse none",
    }
  })
}