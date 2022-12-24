import React from 'react';
import './UserCard.css';

function UserCard(props) {
    return (
        <div className="card">
          <img src={props.avatar} className="card__img" alt='' />
          <div className="card__body">
            <h2 className="card__name">{props.name}</h2>
            <p className="card__email">{props.email}</p>
          </div>
        </div>
      );
}

export default UserCard