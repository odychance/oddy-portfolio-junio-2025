import React, { useEffect, useRef } from 'react'
import OpenCloseBtn from '../../Button/OpenCloseBtn'
import bgHoverBtn from '/public/Media/Img/SVG/bgHoverBtn.svg'
import s from './styles.module.scss'
import Image from 'next/image'
import clsx from 'clsx'
import { Link } from 'react-scroll'
import { anim } from './Menu.anim'
import { optionsMenu } from './menu.constants'


const Menu = ({ className, open, openMenu }) => {
  const containerButtonsRef = useRef(null)

  useEffect(() => {
    if(openMenu) {
      anim({ containerButtons: containerButtonsRef })
    }
  }, [openMenu])

  return (
    <div className={clsx(s["containerMenu"], className)}>
      <div className={s["containerOpenCloseBtn"]}>
        <OpenCloseBtn onclick={open} openMenu={openMenu} />
      </div>
      <div className={s["containerButtons"]} ref={containerButtonsRef}>
        {optionsMenu.map((el, idx) => (
          <div className={s["optionBtn"]} key={idx} >
            <Link to={el.id} spy={true} smooth={true} offset={el.name === "Courses" ? -80 : 0} duration={1000} className={s["linkOption"]} onClick={open}>
              <Image src={bgHoverBtn} alt="" className={s["bgHover"]} />
              <span className={s["nameBtn"]}>{el.name}</span>
            </Link>
          </div>
        ))}
        <div className={s["cvButton"]}>
          <div />
          <a href="/Media/docs/CvOddyMayo2025Comp.pdf" download className={s["cv"]}>Download CV</a>
        </div>
      </div>
    </div>
  )
}

export default Menu