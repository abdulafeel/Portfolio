import React from 'react'
import './about.css'
import ME from '../../assets/hi.png'
import ME2 from '../../assets/studying.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

        <div className="container about__container">
          <div className="about__me">
            <div className="about__me-image">
            <img src={ME2} alt="About Image" />
            </div>
          </div>
          <div className="about__content">
            <div className="about__cards">
              <article className='about__card'>
                <FaAward className='about__icon'/>
                <h5>Experience</h5>
                <small>1+ Years Working</small>
              </article>
              <article className='about__card'>
                <FiUsers className='about__icon'/>
                <h5>Company</h5>
                <small>Harman Connected Services  </small>
              </article>
              <article className='about__card'>
                <VscFolderLibrary className='about__icon'/>
                <h5>Position</h5>
                <small>Associate Engineer - Product Development</small>
              </article>
            </div>
           
            <p>Software Developer with 1 plus years of experience in the Retail and E-commerce domain. Extensive 
mobile (iOS, Android & Hybrid) application development experience with strong knowledge of
various programming languages including React Native, Node.JS, JavaScript. Specialized in 
delivering mobile apps and enterprise-class software solutions for big systems.</p>
         <a href="#contact" className='btn btn-primary'>Let's Talk</a>
          </div>

        </div>
    </section>
  )
}

export default About
