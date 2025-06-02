import React from 'react'
import s from './styles.module.scss'
import clsx from 'clsx'

const OpenCloseBtn = ({onclick, openMenu}) => {
  return (
      <div className={s["menuBtn"]} onClick={() => onclick()}>
        <div className={clsx(s["line1Menu"], s["btnLine"], { [s["openBar1"]]: openMenu })} />
        <div className={clsx(s["line2Menu"], s["btnLine"], { [s["openBar2"]]: openMenu })} />
      </div> 
    )
}

export default OpenCloseBtn