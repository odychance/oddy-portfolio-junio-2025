import React from 'react'
import s from './styles.module.scss'
import clsx from 'clsx'

const PreviewVideo = React.forwardRef(({ src, className }, ref) => {
  return (
    <div className={s["videoContainer"]}>
      <video src={src} ref={ref} className={clsx(s["previewVideo"], className)} muted loop preload='auto' playsInline />
    </div>
  )
})

export default PreviewVideo