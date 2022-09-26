import React, { Component } from 'react';
// import {Switch, Route} from 'react-router-dom';
import './App.css';
// import HomePage from './01-HomePage.js'
import Recipes from './02-Recipes.js'
// import Recipe from './02-Recipes-Recipe.js'

// function App() {
//   return (
//     <div className="App">
//       <HomePage></HomePage>
//       {/* <Recipes></Recipes> */}
//       {/* <Recipe></Recipe> */}
//     </div>
//   );
// }

class App extends Component {
  // constructor(props) {
  //     super(props);
  // };
  render() {
    return (
      <div className="App">
        {/* <HomePage></HomePage> */}
        <Recipes></Recipes>
        {/* <Recipe></Recipe> */}
      </div>
    )
  }
}
export default App;
