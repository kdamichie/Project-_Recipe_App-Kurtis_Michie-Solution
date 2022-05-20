import React, { useState } from "react";

function RecipeCreate({ recipes, setRecipes }) {
  const initalFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };

  const [formData, setFormData] = useState({ ...initalFormState });

  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submittted:", formData);

    setRecipes([...recipes, formData]);
    setFormData({ ...initalFormState });
  };

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers

  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <input
                name="name"
                type="text"
                placeholder="Name"
                required
                onChange={handleChange}
                value={formData.name}
              />
            </td>
            <td>
              <input
                name="cuisine"
                type="text"
                placeholder="Cuisine"
                required
                onChange={handleChange}
                value={formData.cuisine}
              />
            </td>
            <td>
              <input
                name="photo"
                type="url"
                placeholder="URL"
                onChange={handleChange}
                value={formData.photo}
              />
            </td>
            <td>
              <textarea
                name="ingredients"
                placeholder="Ingredients"
                required
                onChange={handleChange}
                value={formData.ingredients}
              ></textarea>
            </td>
            <td>
              <textarea
                name="preparation"
                placeholder="Preparation"
                required
                onChange={handleChange}
                value={formData.preparation}
              ></textarea>
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
