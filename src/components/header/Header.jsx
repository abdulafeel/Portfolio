import React from 'react'
import CTA from './CTA'
import './header.css'
import ME from '../../assets/hi.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
   <header>
    <div className="container header__container">
      <h2>Hello I'm</h2>
      <h1>Abdul Afeel</h1>
      <h4 className="text-light">Software Developer</h4>
      <CTA/>
      <HeaderSocials/>
      <div className="me">
        <img src={ME} alt="me" className='me__image'/>
      </div>
      <a href='#contact' className='scroll__down'>Scroll Down</a>
    </div>
   </header>
  )
}

export default Header
