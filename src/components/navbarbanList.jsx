import React from 'react'
import './navbarbanList.css'

const navbarbanList = ({ban, onUnban}) => {
  return (
    <div className="ban-list">
    <h3>Ban List</h3>
    {ban.map((item, index) => (
      <li key={index}>
        <button className='buttonstyle' key={index} onClick={() => onUnban(item)}>
          {item}
        </button>
      </li>
    ))}
  </div>
  )
}

export default navbarbanList