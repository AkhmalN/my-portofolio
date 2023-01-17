import { useState } from "react"
import '../resume/resume.css'

export default function Resume() {

   const [headerContent] = useState([
      {
         name: 'Akhmal Novanda',
         address: 'Depok, Jawa Barat 16431',
         linkedin: 'linkedin.com/in/akhmal-novanda-451467328',
         number: '+6283845708457',
         email: 'akhmalkliah01@gmail.com'
      }
   ])


   return (
      <div className="resume-container">
         <div className="resume" style={{ backgroundColor: 'white' }}>
            <h1
               style={{ textAlign: 'center' }}
            >Akhmal Novanda
            </h1>
            {headerContent.map((el, key) => {
               return (
                  <div key={key} style={{ color: 'black' }}>
                     <div className="header-description">
                        <div>{el.name}</div>
                        <div>{el.address}</div>
                        <div>{el.linkedin}</div>
                        <div>{el.number}</div>
                        <div>{el.email}</div>
                     </div>
                     <hr style={{fontWeight : 'bold'}}/>
                     <h4>About Me</h4>
                     <div className="about-description">
                        <p>
                           Mahasiswa informatika yang antusias dan bermotivasi tinggi dengan kemampuan belajar cepat, berinisiatif, dan
                           mencari tantangan baru. Berpengalaman di organisasi internal kampus.
                           mahasiswa yang sedang menempuh studi S1 Informatika. berpengalaman dalam bidang pengembangan
                           website, bahasa pemrograman dan IOT.
                        </p>
                     </div>
                     <hr/>
                     <h4>Experience</h4>
                  </div>
               )
            })}
         </div>
      </div>
   )
}