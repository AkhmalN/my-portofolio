import '../AboutMe/about.css'
import jspict1 from '../../assets/js1.png'
import jspict2 from '../../assets/js2.png'
import jspict3 from '../../assets/js3.png'
import { useState } from 'react'
import { motion } from 'framer-motion'

function About() {
   const [breakPointImgjs] = useState([
      { image: jspict1 },
      { image: jspict2 },
      { image: jspict3 }
   ])
   const [certificate] = useState([
      { target_url: 'Javascript', url: 'sertifikat_course_256_2184483_231022100929.pdf' },
      { target_url: 'Website', url: 'sertifikat_course_256_2184483_231022100929.pdf' },
      { target_url: 'IOT', url: 'sertifikat_course_256_2184483_231022100929.pdf' }

   ])
   

   return (
      <motion.div className='about-container'
      
      >
         <div className='about-parent'>
            <div className='about-details-container'>
               <div className='about-details'>
                  <div className="profile-picture">
                     <div className="profile-picture-background"></div>
                  </div>
                  <div className='about-content'>
                     <h1 className='highlighted-text'>About Me</h1>
                     <div className='about-details-text'>
                        <p><span className='indented-text'>My name is Akhmal Novanda Aziz</span>. or used to be called "akhmal". I am 21 years old. I am currently studying at a national university majoring in informatics. I am currently studying in semester 5. for 2 years of college, I am very interested in the IT field, especially in the website development section.
                           I once took a website coding course for 6 months on a platform that provides coding scholarships. I have also attended IOT training for 3 months.
                        </p>
                        <div className="profile-options">
                           {certificate.map((el, key) => {
                              return (
                                 <a href={el.url}><button className="btn highlighted-btn" key={key} style={{ fontWeight: 'bold' }}>{el.target_url}</button></a>
                              )
                           })}
                        </div>
                     </div>
                  </div>

               </div>
               <div className='about-details'>
                  <h3 className='highlighted-text'>About My Skills</h3>
                  <div className='about-details-skills'>
                     <a href='#javascript'>
                        <button className='hero-skills'>
                           javascript
                        </button>
                     </a>
                     <a href='#javascript'>
                        <button className='hero-skills'>
                           Php
                        </button>
                     </a>
                     <a href='#javascript'>
                        <button className='hero-skills'>
                           Microsoft
                        </button>
                     </a>
                     <a href='#javascript'>
                        <button className='hero-skills'>
                           IOT
                        </button>
                     </a>
                  </div>
                  <div className='about-details-evidence'>
                     <div className='about-details-pict'>
                        {breakPointImgjs?.map((idx, key) => {
                           return (
                              <>
                                 <div id='javascript' key={key}>
                                    <img src={idx.image} alt='' />
                                 </div>
                              </>
                           )
                        })}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </motion.div>
   )
}


export default About