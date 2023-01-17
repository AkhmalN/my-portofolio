import Typical from "react-typical"
import '../home/profile.css'
import { motion } from "framer-motion"


function Profile() {
   return (
      <motion.div className="profile-container"
   
      >
         <div className="profile-parent">
            <div className="profile-details">
               <div className="profile-details-name ">
                  <span className="primary-text">
                     {" "}
                     Hello, I'am <span className="highlighted-text">Akhmal</span>
                  </span>
               </div>
               <div className="profile-details-role">
                  <span className="primary-text">
                     {" "}
                     <h1>
                        <Typical
                           loop={Infinity}
                           steps={[
                              "Web Enthusiast", 5000,
                              "IOT Enthusiast", 5000,
                              "University Nasional Student", 10000
                           ]}
                        />
                     </h1>

                  </span>
                  <p className="profile-role-tagline">
                     build web with front end technology javascript and design tools for IoT needs
                  </p>
               </div>
            </div>
            <div className="profile-picture">
               <div className="profile-picture-background"></div>
            </div>
         </div>
      </motion.div>
   )

}


export default Profile