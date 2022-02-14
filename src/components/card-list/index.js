import React from 'react';

import Card from '../card';

import './card-list.css';

const CardList = ({ users }) => {
  return (
    <div className="card-list">
      {users.length > 0 ? (
        users.map((user) => (
          <Card
            key={user.id}
            id={user.id}
            name={user.name}
            email={user.email}
          />
        ))
      ) : (
        <h1 style={{ textAlign: 'center' }}>No Users Found !!!</h1>
      )}
    </div>
  );
};

export default CardList;
