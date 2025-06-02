import gsap from "gsap";

export const anim = ({navbarContainer}) => {
  const tl = gsap.timeline()

  tl.set(navbarContainer, {
    y: "-5vh",
  })

  tl.to(navbarContainer, {
    y: "0vh",
    opacity: 1,
    duration: 2,
    delay: 1,
  })
}