import gsap from "gsap";

export const anim = ({ containerButtons }) => {
  const tl = gsap.timeline()

  tl.set(containerButtons.current.children, {
    x: "5vw",
    opacity: 0
  })

  tl.to(containerButtons.current.children, {
    x: "0vw",
    opacity: 1,
    duration: 1,
    stagger: 0.2
  })
}