import React from 'react'
import './navbarHistoryList.css'

const navbarHistoryList = ({history}) => {
    return (
        <div className="history-list">
          <h3>Who have we seen so far?</h3>
          {history.map((cat, index) => (
            <li key={index}>
                <img className="img" src={cat.image} alt={cat.name} />
                <p key={index}>{cat.name} from {cat.origin}</p>
            </li>
          ))}
        </div>
      );
}

export default navbarHistoryList