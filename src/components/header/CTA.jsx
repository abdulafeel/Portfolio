import React from 'react'
import CVLATEST from '../../assets/CVLATEST.pdf'

const CTA = () => {
  return (
    <div className='cta'>
      <a href={CVLATEST} download className='btn '>Download CV</a>
      <a href='#contact' className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA
