import React from 'react';

import './search-box.styles.scss';

export const SearchBox = props => (
  <input
    className='search-box'
    type='search'
    placeholder='search employees'
    onChange={props.onSearchChange}
  />
);