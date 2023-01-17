import '../ContactMe/contact.css'
import locationDots from '../../assets/placeholder.png'
import telephone from '../../assets/telephone.png'
import instagram from '../../assets/instagram.png'
import linkedin from '../../assets/linkedin.png'
import Typical from 'react-typical'

export default function Contact() {
   return (
      <div className="form-container">
         
         <div style={{ color: 'white' }}>
            <h1>GET IN TOUCH</h1>

            <p>
               <Typical
                  loop={Infinity}
                  steps={[

                     "Hey! We are looking forward to start a project with you!", 10000
                  ]}
               />
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
               molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
               numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
               optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
               obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam</p>
         </div>
         <div className="about-card-item">
            <div className='content-item'>
               <div className='logos'>
                  <img src={locationDots} alt='' />
               </div>
               <h6>Our Main Address</h6>
               <p>Depok Jaya, Pancoran Mas, Depok</p>
            </div>
            <div className='content-item'>
               <div className='logos'>
                  <img src={telephone} alt='' />
               </div>
               <h6>Phone Number</h6>
               <p>08384570xxx</p>
            </div>
            <div className='content-item'>
               <div className='logos'>
                  <img src={instagram} alt='' />
               </div>
               <h6>Instagram</h6>
               <p>akhmal7_</p>
            </div>
            <div className='content-item'>
               <div className='logos'>
                  <img src={linkedin} alt='' />
               </div>
               <h6>LinkedIn</h6>
               <p>akhmalnovanda</p>
            </div>
         </div>
         <div className="form-box">
            <div className='form-box-child'>
               <h1>Contact Me</h1>
               <form>
                  <label>Enter Your Name</label>
                  <input type='text' />
                  <label>Enter a valid Email Address</label>
                  <input type='email' />
                  <label>Enter a something</label>
                  <textarea rows='6' cols='50'></textarea>
               </form>
               <button>Submit</button>
            </div>
         </div>
      </div>
   )

}