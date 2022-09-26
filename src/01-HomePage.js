import React, { Component } from 'react';
import './01-HomePage.css';
import Footer from './03-Footer';
import IconMain from './Images/IconMain.png'
// import { Switch, Route } from 'react-router-dom';
import RecipeObject from './02-Recipes-Object.js'

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.renderRecipesPage = this.renderRecipesPage.bind(this);
    };
    renderRecipesPage(dish) {
        let recipesToBePassedAsProps = RecipeObject.filter(obj => { return obj.type === dish; })
        console.log(recipesToBePassedAsProps)
        // return recipesToBePassedAsProps
    }
    render() {
        return (
            <div className='HomePage'>
                {this.renderRecipesPage("main")}
                <div className='HomePage-Header'>
                    <img src={IconMain} alt="Logo" />
                    <h1><span className='HomePage-H1-Part1' >Favorite</span> <span className='HomePage-H1-Part2'>Recipes</span></h1>
                </div>

                <div className='HomePage-Content'>
                    <div className='HomePage-NavContainer'>
                        <h2>What would you like to cook?</h2>
                        <nav>
                            <button className='HomePage-NavLink'>Salad</button>
                            <button className='HomePage-NavLink'>Main</button>
                            <button className='HomePage-NavLink'>Dessert</button>
                        </nav>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        )
    }
}
export default HomePage;