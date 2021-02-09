import React from 'react'
import './Card.css'

function Card({ title, text, image }) {
  return (
    <div className="Card">
      <img src={image} />
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  )
}

export default Card
