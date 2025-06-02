export const loaderGsap = async ({ loaderContainer, loaderWrapper, loaderBar, body, logo, setIsLoading }) => {
  const gsapModule = await import("gsap");
  const CustomEaseModule = await import("gsap/CustomEase");

  const gsap = gsapModule.default;
  const CustomEase = CustomEaseModule.CustomEase;

  gsap.registerPlugin(CustomEase);
  CustomEase.create("myBezier", ".18,.91,.78,-0.07");



  const tl = gsap.timeline()

    tl.set(loaderContainer, { opacity: 1, pointerEvents: "auto" })

    tl.set(body, {
      y: "98vh",
      x: "50vw",
      xPercent: -50,
      width: "70vw"
    })

    tl.to(loaderBar, {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
      duration: 0,  
    })
    tl.to(loaderBar, {
      scale: 5,
      opacity: 1,
      duration: 0.1,
      delay: 3.5
    })

    tl.to(loaderWrapper, {
      opacity: 0,
      duration: .5
    }, "<")

    tl.to(body, {
      y: "0vh",
      ease: "myBezier",
      duration: 2,
    })

    tl.to(body, {
      width: "100vw",
      duration: 1,
    })

    tl.to(logo, {
      opacity: 0,
      fontSize: "12vw",
      pointerEvents: "none",
      duration: 1,
    }, "+=1")
    
    tl.to(loaderContainer, {
      display: "none",
      duration: 1,
      onComplete: () => setIsLoading(false)
    })
}