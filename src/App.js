import React, { Component } from "react";
import { recipes } from "./tempList";
import RecipeDetails from "./components/RecipeDetails";
import RecipeList from "./components/RecipeList";

export default class App extends Component {
  state = {
    recipes: recipes,
    url:
      "https://www.food2fork.com/api/search?key=a669162333d454da2d89f974cdaf5a75",
    base_url:
      "https://www.food2fork.com/api/search?key=a669162333d454da2d89f974cdaf5a75",
    details_id: 35381,
    pageIndex: 1,
    search: "",
    query: "&q="
  };

  async getRecipes() {
    try {
      const res = await fetch(this.state.url);
      console.log("url for query: " + this.state.url);
      const jsonData = await res.json();
      this.setState({
        recipes: jsonData.recipes
      });
    } catch (err) {
      console.log(err);
    }
  }

  componentDidMount() {
    this.getRecipes();
  }

  displayPage = index => {
    switch (index) {
      default:
      case 1:
        return (
          <RecipeList
            recipes={this.state.recipes}
            handleDetails={this.handleDetails}
            value={this.state.search}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        );
      case 2:
        return (
          <RecipeDetails
            id={this.state.details_id}
            handleIndex={this.handleIndex}
          />
        );
    }
  };

  handleIndex = index => {
    this.setState({
      pageIndex: index
    });
  };

  handleDetails = (index, id) => {
    this.setState({
      pageIndex: index,
      details_id: id
    });
  };

  handleChange = e => {
    this.setState({
      search: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { base_url, query, search } = this.state;
    this.setState(
      () => {
        return {
          url: `${base_url}${query}${search}`,
          search: ""
        };
      },
      () => {
        this.getRecipes();
      }
    );
  };

  render() {
    return (
      <React.Fragment>{this.displayPage(this.state.pageIndex)}</React.Fragment>
    );
  }
}
