import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className='bg-black'>
        <div className='container'>
        <div className='row py-4'>
            <div className='col-6 text-white'>
                <p>&copy; 2025 All Rights Reserved</p>
            </div>
            <div className=' col-6 d-flex justify-content-end gap-3 pb-3'>
                <a href="#" className="footer-link">
                  <span className="icon-box">
                  <FontAwesomeIcon icon={faGithub}/>
                  </span>
                  <span className='d-none d-sm-block'>
                  GitHub
                  </span>
                  </a>

                <a href="#" className="footer-link">
                  <span className="icon-box">
                  <FontAwesomeIcon icon={faLinkedin}/>
                  </span>
                   <span className='d-none d-sm-block'>
                  Linked-In
                  </span>
                  </a>

               <a href="#" className="footer-link">
                <span className="icon-box">
                <FontAwesomeIcon icon={faEnvelope} />
               </span>
                <span className='d-none d-sm-block'>
               Gmail
               </span>
              </a>
            </div>
        </div>
        </div>
    </footer>
  )
}

export default Footer;