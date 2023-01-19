import React from 'react'
import {SiLinkedin} from 'react-icons/si'
import {MdOutlineEmail} from 'react-icons/md'
import {BsGithub} from 'react-icons/bs'
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://linkedin.com/in/abdulafeel" target="_blank" className='icons'><SiLinkedin/></a>
      <a href="https://github.com/abdulafeel" target="_blank"><BsGithub/></a>
      <a href="mailto:abdulafeel2@gmail.com" target='_blank'><MdOutlineEmail/></a>
    </div>
  )
}

export default HeaderSocials
