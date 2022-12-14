import React from 'react'
import '../styles/footer.scss'
import { FaBehance,FaLinkedinIn,FaEnvelope,FaPhoneAlt,FaGithub } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className='Footer'>
      <div>
        <h1 className="FooterTitle">Conversemos</h1>
      </div>
      <div className="Contactbox">
              <div className="contactbox2">
              <div className="logos">
                <a href='https://linkedin.com/in/agustin-billar-102860214' target="_blank">
                <FaLinkedinIn />
                </a>
              </div>     
              <div className="logos">
              <a href='https://github.com/Caskito1' target="_blank">
                <FaGithub />
              </a>
              </div>
              <div className="logos">
              <a href='https://www.behance.net/AgustinBillar' target="_blank">
                <FaBehance />
                </a>
              </div>
          </div>
          <div className="Linea"></div>
          <div className="contactbox3">
                <div className="logos mail">
                <a href='mailto:caskito90@gmail.com' target="_blank">
                <div className="phlogo" >
                    <FaEnvelope />
                </div>
                    <p >caskito90@gmail.com</p>
                </a>
                </div>
                <div className="logos phone">
                <a href='tel:+59898403778' target="_blank">
                    <div className="phlogo">
                    <FaPhoneAlt />
                    </div>
                    <p> +598 98 403 778</p>
                    </a>
                </div>
          </div>
      </div>
    </div>
  )
}

export default Footer;
