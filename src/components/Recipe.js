import React, { Component } from "react";

export default class Recipe extends Component {
  render() {
    console.log("recipes :", this.props.recipe);
    const {
      image_url,
      title,
      source_url,
      publisher,
      recipe_id
    } = this.props.recipe;
    return (
      <React.Fragment>
        <div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
          <div className="card">
            <img
              src={image_url}
              className="img-card-top"
              style={{ height: "14rem" }}
              alt="recipe photo"
            />
            <div className="card-body text-capitalize">
              <h6>{title}</h6>
              <h6 className="text-warning text-slanted">
                provide by {publisher}
              </h6>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
