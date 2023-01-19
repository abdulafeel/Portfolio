import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/gaming.png'
import AVTR2 from '../../assets/reading.png'
import AVTR4 from '../../assets/travel.png'
import AVTR3 from '../../assets/coding.png'

// import Swiper core and required modules
import { Navigation, Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
  return (
  <section id='testimonials'>
    <h5>In My Free Time</h5>
    <h2>My Hobbies</h2>
    <Swiper className="container testimonials__container"
      modules={[Pagination,Navigation]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}>
      <SwiperSlide className='testimonial'>
        <div className="client__avatar">
          <img src={AVTR1} alt="Avatar One" />
        </div>
        <h5 className='client__name'>Gaming</h5>
          {/* <small className='client__review'>
         I love spending my free time by playing pc games, console games etc.
          </small> */}
      </SwiperSlide>
      <SwiperSlide className='testimonial'>
        <div className="client__avatar">
          <img src={AVTR2} alt="Avatar Two" />
        </div>
        <h5 className='client__name'>Reading Novels</h5>
          {/* <small className='client__review'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut repellat facilis consequuntur commodi cumque beatae, tempora laborum illo non animi obcaecati hic, eum iste! Illum deserunt cum dolor nemo inventore?
          </small> */}
      </SwiperSlide>
      <SwiperSlide className='testimonial'>
        <div className="client__avatar">
          <img src={AVTR3} alt="Avatar Three" />
        </div>
        <h5 className='client__name'>Coding</h5>
          {/* <small className='client__review'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut repellat facilis consequuntur commodi cumque beatae, tempora laborum illo non animi obcaecati hic, eum iste! Illum deserunt cum dolor nemo inventore?
          </small> */}
      </SwiperSlide>
      <SwiperSlide className='testimonial'>
        <div className="client__avatar">
          <img src={AVTR4} alt="Avatar Four" className='travelImage' />
        </div>
        <h5 className='client__name'>Travelling</h5>
          {/* <small className='client__review'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut repellat facilis consequuntur commodi cumque beatae, tempora laborum illo non animi obcaecati hic, eum iste! Illum deserunt cum dolor nemo inventore?
          </small> */}
      </SwiperSlide> 
      
    </Swiper>
  </section>
  )
}

export default Testimonials
