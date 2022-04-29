import React, { useState } from "react";
import "./App.css";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {
  const [recipes, setRecipes] = useState(RecipeData);

  // TODO: Add the ability for the <RecipeList /> component to list and delete an existing recipe.
  // TODO: Add the ability for the <RecipeCreate /> component to create new recipes.

    const deleteRecipe = (recipeIndex) => {
      setRecipes((recipes) => recipes.filter((recipe, index) => index !== recipeIndex));
    }
  
  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <RecipeList recipes={recipes} setRecipes={setRecipes} deleteRecipe={deleteRecipe} />
    </div>
  );
}

export default App;
