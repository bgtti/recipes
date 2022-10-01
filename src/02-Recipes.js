import React, { Component } from 'react';
import './02-Recipes.css';
import Footer from './03-Footer';
import Navigation from './04-Navigation.js'
// import FoodImage1 from './Images/RecipeImage_S01.jpeg'
// import FoodImage2 from './Images/RecipeImage_S02.jpg'
// import FoodImage3 from './Images/RecipeImage_S03.jpg'
import RecipeObject from './02-Recipes-Object.js'
import { Link } from 'react-router-dom';

class Recipes extends Component {
    constructor(props) {
        super(props);
        this.renderRecipes = this.renderRecipes.bind(this);
    };
    // renderRecipePage(dish) {
    //     let recipeToBePassedAsProp = RecipeObject.filter(obj => { return obj.name === dish; })
    //     console.log(recipeToBePassedAsProp)
    //     // return recipesToBePassedAsProps
    // }
    renderRecipes(dish) {
        let recipesToBeDisplayed = RecipeObject.filter(obj => { return obj.type === dish; })
        return recipesToBeDisplayed;
        // console.log(recipesToBePassedAsProps)

    }
    // render() {
    //     // let {recipe} = this.props;
    //     return (
    //         <div className='Recipes'>
    //             <Navigation></Navigation>
    //             <div className='Recipes-Header'>
    //                 <h2><span>Delicious</span> Salads</h2>
    //             </div>
    //             <div className='Recipes-Content'>
    //                 <div className='Recipes-RecipeContainer'>
    //                     <img src={FoodImage1} alt="" />
    //                     <div className='Recipes-RecipeContainerTextDiv'>
    //                         <h3>{RecipeObject[0].title}</h3>
    //                         <div>Time: 20 min</div>
    //                         <div>Rating: *****</div>
    //                         <p className='Recipes-RecipeDescription'>In France goat's cheese is known as 'chèvre' after the French word for goat. This 'Salade de chèvre chaud' is healthy, easy to prepare, and the absolute perfect meal in a warm summer day. </p>
    //                         <button className='Recipes-RecipeBtn'>Let's cook it!</button>
    //                     </div>
    //                 </div>
    //                 <div className='Recipes-RecipeContainer'>
    //                     <img src={FoodImage2} alt="" />
    //                     <div className='Recipes-RecipeContainerTextDiv'>
    //                         <h3>Greek Salad</h3>
    //                         <div>Time: 15 min</div>
    //                         <div>Rating: *****</div>
    //                         <p className='Recipes-RecipeDescription'>This traditional greek salad is a celebration of Greek flavors and ingredients - a great choice for those who want variation from the typical lettuce-based salads. Feta is made of sheep's milk and is a perfect combination to the olives! </p>
    //                         <button className='Recipes-RecipeBtn'>Let's cook it!</button>
    //                     </div>
    //                 </div>
    //                 <div className='Recipes-RecipeContainer'>
    //                     <img src={FoodImage3} alt="" />
    //                     <div className='Recipes-RecipeContainerTextDiv'>
    //                         <h3>Traditional Bruschetta</h3>
    //                         <div>Time: 25 min</div>
    //                         <div>Rating: *****</div>
    //                         <p className='Recipes-RecipeDescription'>Serio Arno is a renown Latin American chef who shared how to reproduce the Bruschetta in its most traditional form. This is possibly the easiest recipe you can make - but just a few extra steps and you (and your guests!) will certainly notice the difference! </p>
    //                         <button className='Recipes-RecipeBtn'>Let's cook it!</button>
    //                     </div>
    //                 </div>
    //             </div>
    //             <Footer></Footer>
    //         </div>
    //     )
    // }
    render() {
        let recipes;
        if (this.props.type === "Salad") {
            recipes = "Salads";
        } else if (this.props.type === "Hot Dish") {
            recipes = "Hot Dishes";
        } else {
            recipes = "Desserts";
        };
        let dishes = this.renderRecipes(this.props.type);

        return (
            <div className='Recipes'>
                <Navigation></Navigation>
                <div className='Recipes-Header'>
                    <h2><span>Delicious</span> {recipes} </h2>
                </div>
                <div className='Recipes-Content'>
                    {
                        dishes.map(item => (
                            <div className='Recipes-RecipeContainer' key={item.id}>
                                <img src={require(`../src/${item.picture}`)} alt={"visualization of dish"} />
                                <div className='Recipes-RecipeContainerTextDiv'>
                                    <h3>{item.title}</h3>
                                    <div>Time: {item.timePrepCookTotal[2]}</div>
                                    <div>Rating: {item.ratings}</div>
                                    <p className='Recipes-RecipeDescription'>{item.summaryText} </p>
                                    {/* <button className='Recipes-RecipeBtn'>Let's cook it!</button> */}
                                    <Link to=':recipe' className='Recipes-RecipeBtn' recipeId={"Here"}>Let's cook it!</Link>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <Footer></Footer>
            </div>
        )
    }
}
export default Recipes;

// class Recipes extends Component {
//     // constructor(props) {
//     //     super(props);
//     // };
//     render() {
//         return (
//             <div className='Recipes'>
//                 <div className='Recipes-Header'>
//                     <h2><span>Delicious</span> Salads</h2>
//                 </div>
//                 <div className='Recipes-Content'>
//                     <div className='Recipes-RecipeContainer'>
//                         <img src={FoodImage1} alt="" />
//                         <div className='Recipes-RecipeContainerTextDiv'>
//                             <h3>Warm French Goat's Cheese Salad</h3>
//                             <div>Time: 20 min</div>
//                             <div>Rating: *****</div>
//                             <p className='Recipes-RecipeDescription'>In France goat's cheese is known as 'chèvre' after the French word for goat. This 'Salade de chèvre chaud' is healthy, easy to prepare, and the absolute perfect meal in a warm summer day. </p>
//                             <button className='Recipes-RecipeBtn'>Let's cook it!</button>
//                         </div>
//                     </div>
//                     <div className='Recipes-RecipeContainer'>
//                         <img src={FoodImage2} alt="" />
//                         <div className='Recipes-RecipeContainerTextDiv'>
//                             <h3>Greek Salad</h3>
//                             <div>Time: 15 min</div>
//                             <div>Rating: *****</div>
//                             <p className='Recipes-RecipeDescription'>This traditional greek salad is a celebration of Greek flavors and ingredients - a great choice for those who want variation from the typical lettuce-based salads. Feta is made of sheep's milk and is a perfect combination to the olives! </p>
//                             <button className='Recipes-RecipeBtn'>Let's cook it!</button>
//                         </div>
//                     </div>
//                     <div className='Recipes-RecipeContainer'>
//                         <img src={FoodImage3} alt="" />
//                         <div className='Recipes-RecipeContainerTextDiv'>
//                             <h3>Traditional Bruschetta</h3>
//                             <div>Time: 25 min</div>
//                             <div>Rating: *****</div>
//                             <p className='Recipes-RecipeDescription'>Serio Arno is a renown Latin American chef who shared how to reproduce the Bruschetta in its most traditional form. This is possibly the easiest recipe you can make - but just a few extra steps and you (and your guests!) will certainly notice the difference! </p>
//                             <button className='Recipes-RecipeBtn'>Let's cook it!</button>
//                         </div>
//                     </div>
//                 </div>
//                 <Footer></Footer>
//             </div>
//         )
//     }
// }
// export default Recipes;