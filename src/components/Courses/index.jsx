import React, { useRef, useEffect } from 'react'
import s from './styles.module.scss'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import { animationCourses } from './courses.anim'

gsap.registerPlugin(ScrollTrigger)

const Courses = () => {
  const courses = [
    {
      "name" : "JavaScript Moderno Guía Definitiva Construye +20 Proyectos",
      "status" : "Finished",
      "imageCourse" : "https://i.pinimg.com/originals/71/ee/32/71ee32577432648f9e45fbd63b2cf261.jpg",
      "urlCourse" : "https://www.udemy.com/course/javascript-moderno-guia-definitiva-construye-10-proyectos/",
      "platform" : "Udemy"
    },
    {
        "name" : "React - La Guía Completa: Hooks Context Redux MERN +15 Apps",
        "status" : "Finished",
        "imageCourse" : "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhY3QlMjBqc3xlbnwwfHwwfHw%3D&w=1000&q=80",
        "urlCourse" : "https://www.udemy.com/certificate/UC-153c45b1-91a2-4a70-ae8a-0fed413c999a/",
        "platform" : "Udemy"

    },
    {
        "name" : "React Avanzado: Fullstack Next.js, Apollo, MongoDB y GraphQL",
        "status" : "Finished",
        "imageCourse" : "https://res.cloudinary.com/practicaldev/image/fetch/s--BMWspgKL--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ds4yi6va1jyjhyfroddl.png",
        "urlCourse" : "https://www.udemy.com/certificate/UC-d937e44f-666f-4c35-b4f7-e8e60f6a2e9e/",
        "platform" : "Udemy"
    },
    {
        "name" : "Next JS: Crea tu tienda online completa",
        "status" : "Finished",
        "imageCourse" : "https://blog.logrocket.com/wp-content/uploads/2023/03/biggest-next-js-boilerplates-2023.png",
        "urlCourse" : "https://www.udemy.com/certificate/UC-7cf610f4-2ab5-4644-b9c4-725a382e13c2/",
        "platform" : "Udemy"
    } ,   
    {
        "name" : "React Native - Crea aplicaciones para Android y iOS c/ React",
        "status" : "Soon",
        "imageCourse" : "https://www.imarkinfotech.com/wp-content/uploads/2019/07/react-blog-img.png",
        "urlCourse" : "https://www.udemy.com/course/react-native-crea-aplicaciones-para-android-y-ios-con-react/",
        "platform" : "Udemy"
    }    
  ]

  const containerCoursesRef = useRef()
  const titleRef = useRef()
  const wrapperRef = useRef()
  const wrapperCourseRef = useRef()
  const bgLetterRef = useRef()

  useEffect(() => {
    const containerCourses = containerCoursesRef.current
    const title = titleRef.current
    const wrapper = wrapperRef.current
    const wrapperCourse = wrapperCourseRef.current
    const bgLetter = bgLetterRef.current

    animationCourses({ title, wrapper, bgLetter, wrapperCourse, containerCourses})
  }, [])

  return (
    <div className={s["containerCourses"]} ref={containerCoursesRef} id="courses">
      <h2 className={s["title"]} ref={titleRef}>Courses</h2>
      <div className={s["wrapperCoursesList"]} ref={wrapperRef}>
        <span className={s["bgText"]} ref={bgLetterRef}>機會改變</span>
        <div className={s["wrapperCourse"]} ref={wrapperCourseRef}>
          {courses.map((el, idx) => (
            <div className={s["courseTarget"]} key={idx}>
              <h3>{el.platform}</h3>
              <h3>{el.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Courses