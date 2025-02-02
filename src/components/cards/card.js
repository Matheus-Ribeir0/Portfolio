import React from 'react'
import './card.css'

function Card(props) {
  return (
    <div className='card_container'>
      <img className='image' src={props.image} alt='imagem'/>
      <div className='above_image'>
        <h3 className='card_title'>{props.title}</h3>
        <p className='card_description'>{props.description}</p>
        <div className='technologies'>
          {props.technologies.map((tech ) =>(
            <i style={{fontSize: "30px", margin:" 10px 30px" }} className={tech} key={tech} />

          ))}
        </div>
      </div>
      
    </div>
  )
}

export default Card