import React from 'react';

import Card from '../card';

import './card-list.css';

const CardList = ({ users }) => {
  return (
    <div className="card-list">
      {users.map(user => (
        <Card key={user.id} id={user.id} name={user.name} email={user.email} />
      ))}
    </div>
  );
};

export default CardList;
