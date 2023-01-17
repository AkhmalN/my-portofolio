import { useState } from 'react'
import '../layouts/navbar.css'
import logo from '../assets/MALL.png'

function NavigationBar() {
   const [isOpen, setIsOpen] = useState(false);
   return (
      <header>
         <div className="Navbar">
            <div>
               <img src={logo} alt='' />
            </div>
            <div className={`nav-items ${isOpen && "open"}`}>
               <a href="/" >
                  <i class="fa fa-home" aria-hidden="true"></i>
                  Home</a>
               <a href="/about">
                  <i class="fa fa-user" aria-hidden="true"></i>
                  About</a>
               <a href="/contact">
                  <i class="fa fa-address-book" aria-hidden="true"></i>
                  Contact</a>
               <a href="/project">
                  <i class="fa fa-code" aria-hidden="true"></i>
                  Project</a>
               <a href="/resume">
                  <i class="fa fa-file" aria-hidden="true"></i>
                  Resume</a>
            </div>
            <div
               className={`nav-toggle ${isOpen && "open"}`}
               onClick={() => setIsOpen(!isOpen)}
            >
               <div className="bar"></div>
            </div>
         </div>
      </header>
   );

}


export default NavigationBar