import React, { Component } from 'react';
import {NavbarMenuItems} from './navbar-menu-item.component';
import './navbar.styles.scss';

class Navbar extends Component {
    state = { clickedNav: false }

    handleClick = () => {
        this.setState({clickedNav: !this.state.clickedNav})
    }

    render(){
        return(
            <nav className="navbar-items">
                {/* <h1 className="navbar-logo"> */}
                    {/* <i className="fas fa-shipping-fast" /> */}
                        {/* Brock Central Station */}
                {/* </h1> */}
                <div className="nav-menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clickedNav ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clickedNav ? 'nav-menu-items active' : 'nav-menu-items'}>
                    {NavbarMenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>       
            </nav>
        )
    }
}
export default Navbar