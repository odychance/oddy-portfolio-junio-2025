import React, { useEffect, useState, useRef, Children } from 'react'
import s from './styles.module.scss'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import logo from '/public/logo.svg'
import Menu from './Menu'
import OpenCloseBtn from '../Button/OpenCloseBtn'
import { anim } from './navbar.anim'

const Navbar = ({ isLoading }) => {
  const [ openMenu, setOpenMenu ] = useState(false)
  const navbarContainerRef = useRef(null)

  useEffect(() => {
    if(isLoading === false) {
      anim({navbarContainer: navbarContainerRef.current})
    }
  }, [isLoading])

  const open = () => setOpenMenu(!openMenu) 

  return (
    <>
      <div className={s["containerNavbar"]} ref={navbarContainerRef}>
        <div className={s["containerLeft"]}>
          <Link href="/">
            <Image src={logo} alt="" className={s["logo"]}/>
            <span>Odlanier Chance</span>
          </Link>
        </div>
        <OpenCloseBtn onclick={open} openMenu={openMenu} />
      </div>
      <Menu className={clsx(s["menuNavbar"], { [s["menuBarOpened"]]: !openMenu})} open={open} openMenu={openMenu}/>
    </>
  )
}

export default Navbar