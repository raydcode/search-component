import React from 'react';

import './card.css';

const Card = ({ id, name, email }) => {
  return (
    <div className="card-container">
      <img src={`https://i.pravatar.cc/300?u=${id}`} alt="user" />
      <h2>{name}</h2>
      <h2>{email}</h2>
    </div>
  );
};

export default Card;
