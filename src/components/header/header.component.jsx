import React from 'react';
import './header.styles.scss';
import logoUrl from '../../assets/brock_logo.png';
const Header = () => (
  <div className="header">
    <a href='/'>
      <img src={logoUrl} alt="Brock" />
    </a>
  </div>
)
export default Header;