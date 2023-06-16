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
           
            <p>Passionate about leveraging technology to drive innovation and create impactful solutions, I am a skilled Full Stack Developer having 1+ years of experience in web and mobile application development. With a strong foundation in JavaScript, React.js, Node.js, and React Native, I thrive on building seamless user experiences and solving complex challenges.</p>
         <a href="#contact" className='btn btn-primary'>Let's Talk</a>
          </div>

        </div>
    </section>
  )
}

export default About
