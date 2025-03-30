import React from 'react'
import './mainCard.css'

const mainCard = ({cat, onClick, onBan}) => {
  return (
    <div className="cat-card">
        <h1>WonderMEOW!!!</h1>
        <h2>😺😸😹😻😼😽🙀😿😾</h2>
        <h2>{cat.id}</h2>
        <img className='img' src={cat.image} alt={cat.id} />
        <div className="buttons-container">
            <button onClick={() => onBan(cat.origin)}>{cat.origin}</button>
            <button onClick={() => onBan(cat.weight)}>{cat.weight}</button>
            <button onClick={() => onBan(cat.life_span)}>{cat.life_span}</button>
            <button onClick={() => onBan(cat.name)}>{cat.name}</button>
        </div>
        <button onClick={onClick}>Next Cat!</button>
    </div>
  )
}

export default mainCard