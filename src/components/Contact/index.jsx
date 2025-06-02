import Link from 'next/link'
import React from 'react'
import s from './styles.module.scss'
import Image from 'next/image'
import bgMountain from '/public/Media/Img/PNG/mountainContact.png'
import lnkin from '/public/Media/Img/SVG/networkIcons/lnkIn.svg'
import wsp from '/public/Media/Img/SVG/networkIcons/wsp.svg'
import github from '/public/Media/Img/SVG/networkIcons/github.svg'
import mail from '/public/Media/Img/SVG/networkIcons/mail.svg'

const Contact = () => {
  return (
    <div className={s["containerContact"]} id="contact">
      <Image src={bgMountain} alt="mountain background" fill className={s["backgroundContainer"]}/> 
      <div className={s["wrapperContact"]}>
        <h2 className={s["title"]}>contact me</h2>
        <div className={s["containerInfo"]}>
          <div className={s["infoContact"]}>
            <div className={s["left"]}>
              <h3>Location</h3>
              <p>Mendoza, Villa Urquiza, CABA<br/>Buenos Aires, Argentina</p>
            </div>
            <div className={s["center"]}>
              <p>odychance96@gmail.com<br/>+54 9 11 7107-4108</p>
            </div>
            <div className={s["right"]}>
              <Link href="https://www.linkedin.com/in/oddychance" target='_blank'>
                <Image src={lnkin} alt="linkedin image" className={s["networkIcon"]} />
              </Link>
              <Link href="https://github.com/odychance" target='_blank'>
                <Image src={github} alt="github image" className={s["networkIcon"]} />
              </Link>
              <Link href="https://wa.me/5491171074108" target='_blank'>
                <Image src={wsp} alt="whatsapp image" className={s["networkIcon"]} />
              </Link>
              <Link href="mailto:odychance96@gmail.com" target='_blank'>
                <Image src={mail} alt="gmail image" className={s["networkIcon"]} />
              </Link>
            </div>
          </div>
          <p className={s["ocfd"]}>Odlanier Chance @ FRONTEND DEVELOPER</p>
      </div>
    </div>
    </div>
  )
}

export default Contact