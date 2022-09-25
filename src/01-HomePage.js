import React, { Component } from 'react';
import './01-HomePage.css';
import Footer from './03-Footer';
import IconMain from './Images/IconMain.png'

class HomePage extends Component {
    // constructor(props) {
    //     super(props);
    // };
    render() {
        return (
            <div className='HomePage'>
                <div className='HomePage-Header'>
                    <img src={IconMain} alt="Logo" />
                    <h1><span className='HomePage-H1-Part1' >Favorite</span> <span className='HomePage-H1-Part2'>Recipes</span></h1>
                </div>

                <div className='HomePage-Content'>
                    <div className='HomePage-NavContainer'>
                        <h2>What would you like to cook?</h2>
                        <nav>
                            <p className='HomePage-NavLink'>Salad</p>
                            <p className='HomePage-NavLink'>Meal</p>
                            <p className='HomePage-NavLink'>Dessert</p>
                        </nav>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        )
    }
}
export default HomePage;