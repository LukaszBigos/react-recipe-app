import React, { Component } from "react";
import { recipes } from "./tempList";
import RecipeDetails from "./components/RecipeDetails";
import RecipeList from "./components/RecipeList";

export default class App extends Component {
  
  state = {
    recipes: recipes,
    url: 'https://www.food2fork.com/api/search?key=a669162333d454da2d89f974cdaf5a75'
  };

  // async getRecipes() {
  //   try {
  //     const res = await fetch(this.state.url);
  //     const jsonData = await res.json();
  //     this.setState({
  //       recipes: jsonData.recipes
  //     });
  //   }
  //   catch (err) {
  //     console.log(err);
  //   }
  // }

  // componentDidMount() {
  //   this.getRecipes();
  // }
  
  render() {
    return (
      <React.Fragment>
        App component
        <RecipeList recipes={this.state.recipes}/>
        <RecipeDetails />
      </React.Fragment>
    );
  }
}
