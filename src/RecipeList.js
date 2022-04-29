import React from "react";
import RecipeCreate from "./RecipeCreate";
import RecipeView from "./RecipeView";

function RecipeList({ recipes, setRecipes, deleteRecipe }) {
  
  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked

  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className="tbody">
          {recipes.map((recipe, index) => (
            <RecipeView
              recipe={recipe}
              deleteRecipe={() => deleteRecipe(index)}
              key={index} 
            />
          ))}
        </tbody>
      </table>
      <RecipeCreate recipes={recipes} setRecipes={setRecipes} />
    </div>
  );
}

export default RecipeList;
