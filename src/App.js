// import React, { Component } from 'react';
// import {Switch, Route} from 'react-router-dom';
//import { Routes, Route } from 'react-router-dom';
import './App.css';
// import HomePage from './01-HomePage.js'
// import Recipes from './02-Recipes.js'
// import Recipe from './02-Recipes-Recipe.js'
import ShoppingCart from './shoppingCart'

function App() {
  return (
    <div className="App">
      <ShoppingCart></ShoppingCart>
      {/* <Routes>
        <Route path='/' element={<HomePage></HomePage>}></Route>
        <Route path='/salad' element={<Recipes type='Salad'></Recipes>}></Route>
        <Route path='/hotdish' element={<Recipes type='Hot Dish'></Recipes>}></Route>
        <Route path='/dessert' element={<Recipes type='Dessert'></Recipes>}></Route>
        <Route path='/:recipeId' element={<Recipe></Recipe>}></Route>
        <Route path='*' element={<HomePage></HomePage>}></Route>
      </Routes> */}
      {/* <HomePage></HomePage> */}
      {/* <Recipes></Recipes> */}
      {/* <Recipe></Recipe> */}
    </div>
  );
}

// class App extends Component {
//   // constructor(props) {
//   //     super(props);
//   // };
//   render() {
//     return (
//       <div className="App">
//         {/* <HomePage></HomePage> */}
//         <Recipes></Recipes>
//         {/* <Recipe></Recipe> */}
//       </div>
//     )
//   }
// }
export default App;
