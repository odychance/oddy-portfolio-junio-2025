import React, { useRef, useState } from 'react'
import s from './styles.module.scss'
import Hero from './Hero'
import BgMountains from './BgMountains'
import About from './About'

const Header = ({ isLoading, setStateHeaderDone, stateHeaderDone }) => {
  const [ stateMountains, setStateMountains ] = useState(true)
  const [ stateHero, setStateHero ] = useState(true)

  const containerHeaderRef = useRef(null)
  
  return (
    <div className={s["HeaderContainer"]} ref={containerHeaderRef}  id="about">
      <BgMountains isLoading={isLoading} containerHeaderRef={containerHeaderRef} setStateMountains={setStateMountains} stateHero={stateHero} stateHeaderDone={stateHeaderDone}/>
      <Hero className={s["indexing"]} stateMountains={stateMountains} containerHeaderRef={containerHeaderRef} setStateHero={setStateHero} />
      <About className={s["indexing"]} containerHeaderRef={containerHeaderRef} stateHero={stateHero} setStateHeaderDone={setStateHeaderDone}/>
    </div>
  )
}

export default Header