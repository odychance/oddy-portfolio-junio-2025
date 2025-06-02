import React, { useEffect, useRef, useState } from 'react'
import { loaderGsap } from './loader.anim'
import s from './styles.module.scss'
import clsx from 'clsx'

const Loader = ({ setIsLoading}) => {
  const [ counter, setCounter ] = useState(0)

  const loaderContainerRef = useRef(null)
  const loaderWrapperRef = useRef(null)
  const loaderBarRef = useRef(null)
  const bodyRef = useRef(null)
  const logoRef = useRef(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter( (prev) => {
        if(prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 1
      })
    }, 30)
    
    loaderGsap({
      loaderContainer: loaderContainerRef.current,
      loaderWrapper: loaderWrapperRef.current,
      loaderBar: loaderBarRef.current,
      body: bodyRef.current,
      logo: logoRef.current,
      setIsLoading
    })

    return () => 
      clearInterval(interval)
  }, [])

  return (
    <div className={s["loaderContainer"]} ref={loaderContainerRef}>
      <div className={s["loaderWrapper"]} ref={loaderWrapperRef}>
        <div className={s["loaderBarContainer"]}>
          <span className={s["counterLoading"]}>{counter}%</span>
          <div className={s["loaderBar"]} ref={loaderBarRef}>
            <span className={clsx(s["counterLoading"], s["loaderFront"])}>{counter}%</span>
          </div>
        </div>
      </div>
      <div className={s["pageContainer"]} ref={bodyRef}>
        <p ref={logoRef}>機會 改變</p>
      </div>
    </div>
  )
}

export default Loader