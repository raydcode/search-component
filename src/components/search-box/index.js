import React from 'react';

import './search.css';

const SearchBox = ({ handleChange }) => {
  return (
    <input
      className="search"
      type="search"
      placeholder={'Enter User Name'}
      onChange={handleChange}
    />
  );
};

export default SearchBox;
