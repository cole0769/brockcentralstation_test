import React from 'react';
import Navbar from '../navigation/navbar.component';
import './header.styles.scss';
import logoUrl from '../../assets/brock_logo.png';
const Header = () => (
  <div className="header">
    <a href='/'>
      <img src={logoUrl} alt="Brock" />
    </a>
    <Navbar/>
  </div>
)
export default Header;