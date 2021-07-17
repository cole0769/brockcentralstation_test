import React from 'react';
import Navbar from '../navigation/navbar.component';
import './header.styles.scss';
import logoUrl from '../../assets/brock_logo.png';
import CurrentDateTime from '../dates/current.datetime.component';
const Header = () => (
  <div className="header">
    <a href='/'><img src={logoUrl} alt="Brock" /></a>
    <CurrentDateTime/>
    <Navbar/>
  </div>
)
export default Header;