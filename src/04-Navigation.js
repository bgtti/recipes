import React, { Component } from 'react';
import './04-Navigation.css';
import Burger from './Images/menu.png'

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.toggleMobileNav = this.toggleMobileNav.bind(this);
    };
    toggleMobileNav() {
        let theBurger = document.querySelector('.Navigation-Burger');
        let theLinks = document.querySelector('.Navigation-Links');
        if (theBurger.classList.contains('Navigation-BurgerSelected')) {
            theBurger.classList.remove('Navigation-BurgerSelected');
            theLinks.classList.add('Navigation-MobileNavClosed');
        } else {
            theBurger.classList.add('Navigation-BurgerSelected');
            theLinks.classList.remove('Navigation-MobileNavClosed');
        }

    }
    render() {
        return (
            <nav className='Navigation'>
                {/* <input type="button" value={Burger} /> */}
                <div className='Navigation-Burger' onClick={this.toggleMobileNav}><img src={Burger} alt="Navigation menu" /></div>
                <ul className='Navigation-Links'>
                    <li className='Navigation-Link'>Home</li>
                    <li className='Navigation-Link Navigation-Selected'>Salads</li>
                    <li className='Navigation-Link'>Hot dishes</li>
                    <li className='Navigation-Link'>Dessert</li>
                </ul>
            </nav>

        )
    }
}
export default Navigation;