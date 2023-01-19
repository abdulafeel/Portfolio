import React from 'react'
import './footer.css'
import {SiLinkedin} from 'react-icons/si'
import {MdOutlineEmail} from 'react-icons/md'
import {BsGithub} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>ABDUL AFEEL</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Projects</a></li>
        <li><a href="#testimonials">Hobbies</a></li>
        <li><a href="#contact">Contact</a></li> 

      </ul>

      <div className="footer__socials">
      <a href="https://linkedin.com/in/abdulafeel" target="_blank" className='icons'><SiLinkedin/></a>
      <a href="https://github.com/abdulafeel" target="_blank"><BsGithub/></a>
      <a href="mailto:abdulafeel2@gmail.com" target='_blank'><MdOutlineEmail/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; ABDUL AFEEL. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
