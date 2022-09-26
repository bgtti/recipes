import React, { Component } from 'react';
import './02-Recipes-Recipe.css';
import Footer from './03-Footer';
import FoodImage1 from './Images/RecipeImage_S01.jpeg'
// import FoodImage2 from './Images/RecipeImage_S02.jpg'
// import FoodImage3 from './Images/RecipeImage_S03.jpg'

class Recipe extends Component {
    // constructor(props) {
    //     super(props);
    // };
    render() {
        return (
            <div className='Recipe'>
                <div className='Recipe-Header'>
                    <h2><span>Warm</span> French Goat's Cheese Salad</h2>
                    <h3>Nutritious and delicious</h3>
                    <p>Original recipe by <a href="https://www.femmeactuelle.fr/cuisine/recettes/entree/salade-de-chevre-chaud-au-miel-06113">Femme Actuelle</a> | Picture by <a href="https://www.femmeactuelle.fr/cuisine/recettes/entree/salade-de-chevre-chaud-au-miel-06113">Rigoni di Asiago</a></p>
                </div>
                <div className='Recipe-Content'>
                    <img src={FoodImage1} alt="" />
                    <div className='Recipe-ContentSummary'>
                        <p>Prep: 15 min | Cook: 5 min | Total: 20 min</p>
                        <p>Servings: 4</p>
                        <div className='Recipe-ContentSummaryRating'><p>Ratings: </p><div>*****</div><p className='Recipe-ContentSummaryRatingVotes'>3 votes</p> <button>Rate</button></div>
                    </div>
                    <div className='Recipe-ContentIngredients'>
                        <h4>Ingredients</h4>
                        <ul>
                            <li>1 goat log</li>
                            <li>12 baguette slices</li>
                            <li>20 cherry tomatoes</li>
                            <li>150g lamb's lettuce</li>
                            <li>4 tbsp. Orange blossom honey</li>
                            <li>60g flaked almonds</li>
                            <li>3 tbsp. extra virgin olive oil</li>
                            <li>1 tbsp. balsamic vinegar</li>
                            <li>Chives</li>
                            <li>Fleur de sel</li>
                            <li>5-berry blend pepper</li>
                        </ul>
                    </div>
                    <div>
                        <h4>Preparation</h4>
                        <p className='Recipe-PreparationP'>Preheat the oven on grill mode. Cut the goat log into 12 slices and place them on the baguette slices. Drizzle with honey. Season with salt and pepper. Place the slices in the oven until they start to toast.</p>
                        <p className='Recipe-PreparationP'>Dry-brown the almonds in a non-stick pan. Wash the lamb's lettuce and cherry tomatoes. Cut them in half. Put the lamb's lettuce, tomatoes and almonds together in a salad bowl. Make a vinaigrette with olive oil, balsamic, salt and pepper. Season the salad.</p>
                        <p className='Recipe-PreparationP'>Serve the goat cheese slices with the salad. Sprinkle with a little chopped chives and parsley sprigs.</p>
                    </div>
                </div>

                <Footer></Footer>
            </div>
        )
    }
}
export default Recipe;