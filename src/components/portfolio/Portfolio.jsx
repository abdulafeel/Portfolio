import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/pdf1.jpg'
import IMG2 from '../../assets/todo1.jpg'
import IMG3 from '../../assets/todof1.jpg'
import IMG4 from '../../assets/rest1.png'
import IMG5 from '../../assets/weather1.jpg'
import IMG6 from '../../assets/goal1.png'
import IMG7 from '../../assets/guess1.png'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>PDF Extractor</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/abdulafeel/PDF-text-extractor" className='btn' target='_blank'>Github</a>
            {/* <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a> */}
          </div>        
        </article>     
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" className='dj' />
          </div>
          <h3>Todo Website Using Djnago</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/abdulafeel/ToDo-web-app" className='btn' target='_blank'>Github</a>
            {/* <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a> */}
          </div>        
        </article> 
        {/* <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>Todo Website Using Flask</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/abdulafeel/ToDo-web-app2" className='btn' target='_blank'>Github</a>
            <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>        
        </article>  */}
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>Restaurant Search App</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/abdulafeel/Restaurant-search-mobile-app" className='btn' target='_blank'>Github</a>
            {/* <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a> */}
          </div>        
        </article> 
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG5} alt="" />
          </div>
          <h3>Weather App</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/abdulafeel/Weather-App/tree/master" className='btn' target='_blank'>Github</a>
            {/* <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a> */}
          </div>        
        </article> 
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG6} alt="" />
          </div>
          <h3>Goals App</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/abdulafeel/Goals-App/tree/master" className='btn' target='_blank'>Github</a>
            {/* <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a> */}
          </div>        
        </article>  
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG7} alt="" />
          </div>
          <h3>Guess My Number Game</h3>
          <div className="portfolio__item-cta">
          <a href=" https://github.com/abdulafeel/Guess_My_Number-Game" className='btn' target='_blank'>Github</a>
            {/* <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a> */}
          </div>        
        </article> 

       
      </div>
      </section>
  )
}

export default Portfolio
