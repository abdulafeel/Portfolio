import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {SiLinkedin} from 'react-icons/si'
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import ME from '../../../src//assets/contact.png'


const Contact = () => {
  const form =useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_y7sepdx', 'template_p5rbxll', form.current, 'twIKF4XH5VmTWLvhB')
      
    e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>abdulafeel2@gmail.com</h5>
            <a href="mailto:abdulafeel2@gmail.com" target='_blank'>Send a message</a>
          </article>
          <article className='contact__option'>
            <SiLinkedin  className='contact__option-icon'/>
            <h4>Linkedin</h4>
            <h5>abdulafeel</h5>
            <a href="https://linkedin.com/in/abdulafeel" target='_blank'>Connect</a>
          </article>
         
        
        </div>
       
    

        <form   ref={form} onSubmit={sendEmail} action="">
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" placeholder='Your Message' rows="7" required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
 <div className='contact__image'>
        <article>
            <img src={ME} alt="Contact" />
            </article>
            </div>
            </div>
  
   
    </section>
  )
}

export default Contact
