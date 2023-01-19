import React from 'react'
import './experience.css'
import {ImHtmlFive} from 'react-icons/im'
import {SiCss3} from 'react-icons/si'
import {SiJavascript} from 'react-icons/si'
import {BsBootstrapFill} from 'react-icons/bs'
import {FaReact} from 'react-icons/fa'
import {FaNodeJs} from 'react-icons/fa'
import {SiExpress} from 'react-icons/si'
import {FaJava} from 'react-icons/fa'
import {SiPython} from 'react-icons/si'
import {SiMysql} from 'react-icons/si'
import {FaSourcetree} from 'react-icons/fa'
import {DiGit} from 'react-icons/di'
import {BsGithub} from 'react-icons/bs'
import {SiPostman} from 'react-icons/si'
import {SiVisualstudiocode} from 'react-icons/si'
import {GrMysql} from 'react-icons/gr'


const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
      <div className="experience__frontend">
        <h3>Frontend Development</h3>
        <div className="experience__content">
          <article className='experience__details'>
            <ImHtmlFive className='experience__details-icon'/>
            <div><h4>HTML</h4>
            <small className='text-light'>Intermediate</small></div>
          </article>
          <article className='experience__details'>
            <SiCss3 className='experience__details-icon'/>
            <div><h4>CSS</h4>
            <small className='text-light'>Intermediate</small></div>
          </article>
          <article className='experience__details'>
            <SiJavascript className='experience__details-icon'/>
            <div><h4>JavaScript</h4>
            <small className='text-light'>Proficient</small></div>
          </article>
          <article className='experience__details'>
            <BsBootstrapFill className='experience__details-icon'/>
            <div><h4>Bootstrap</h4>
            <small className='text-light'>Intermediate</small></div>
          </article>
          <article className='experience__details'>
            <FaReact className='experience__details-icon'/>
            <div><h4>React</h4>
            <small className='text-light'>Intermediate</small></div>
          </article>
          <article className='experience__details'>
            <FaReact className='experience__details-icon'/>
            <div><h4>React Native</h4>
            <small className='text-light'>Proficient</small></div>
          </article>
        </div>
      </div>
      <div className="experience__backend">
      <h3>Backend Development</h3>
        <div className="experience__content">
          <article className='experience__details'>
            <FaNodeJs className='experience__details-icon'/>
            <div><h4>Node JS</h4>
            <small className='text-light'>Intermediate</small></div>
          </article>
          <article className='experience__details'>
            <SiExpress className='experience__details-icon'/>
           <div> <h4>Express JS</h4>
            <small className='text-light'>Intermediate</small></div>
          </article>
          <article className='experience__details'>
            <FaJava className='experience__details-icon'/>
        <div>    <h4>Java</h4>
            <small className='text-light'>Intermediate</small></div>
          </article>
          <article className='experience__details'>
            <SiMysql className='experience__details-icon'/>
            <div><h4>MySQL</h4>
            <small className='text-light'>Proficient</small></div>
          </article>
          <article className='experience__details'>
            <SiPython className='experience__details-icon'/>
          <div>  <h4>Python</h4>
            <small className='text-light'>Intermediate</small></div>
          </article>
      </div>
      </div>
      <div className="experience__backend">
      <h3>Tools</h3>
        <div className="experience__content">
          <article className='experience__details'>
            <DiGit className='experience__details-icon'/>
            <div><h4>Git</h4>
            <small className='text-light'>Intermediate</small></div>
          </article>
          <article className='experience__details'>
            <BsGithub className='experience__details-icon'/>
           <div> <h4>Github</h4>
            <small className='text-light'>Proficient</small></div>
          </article>
          <article className='experience__details'>
            <FaSourcetree className='experience__details-icon'/>
        <div>    <h4>Sourcetree</h4>
            <small className='text-light'>Proficient</small></div>
          </article>
          <article className='experience__details'>
            <SiPostman className='experience__details-icon'/>
            <div><h4>Postman</h4>
            <small className='text-light'>Proficient</small></div>
          </article>
          <article className='experience__details'>
            <SiVisualstudiocode className='experience__details-icon'/>
          <div>  <h4>VS Code</h4>
            <small className='text-light'>Expert</small></div>
          </article>
          <article className='experience__details'>
            <GrMysql className='experience__details-icon'/>
          <div>  <h4>MySQL Workbench</h4>
            <small className='text-light'>Proficient</small></div>
          </article>
      </div>
      </div>
      </div>
    </section>
  )
}

export default Experience
