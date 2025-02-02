import React from 'react'
import './titles.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

function titles(props) {
  return (
    <div data-aos="fade-up"  className='title-container'>
        <h2 data-aos="fade-up"  className='text'>{props.title}</h2>
    </div>
  )
}

export default titles