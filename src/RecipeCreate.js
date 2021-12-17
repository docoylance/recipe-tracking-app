import React, { useState } from "react";

function RecipeCreate({createRecipe}) {
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  const initialFormData = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: ""
  }

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value 
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    createRecipe(formData);
    setFormData(initialFormData);
  }

  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
                <input placeholder="Name" name="name" required={true} onChange={handleChange} value={formData.name} />
            </td>
            <td>
                <input placeholder="Cuisine" name="cuisine" required={true} onChange={handleChange} value={formData.cuisine} />
            </td>
            <td>
                <input placeholder="URL" name="photo" required={true} onChange={handleChange} value={formData.photo} />
            </td>
            <td>
                <textarea placeholder="Ingredients" name="ingredients" required={true} rows={2} onChange={handleChange} value={formData.ingredients} />
            </td>
            <td>
                <textarea placeholder="Preparation" name="preparation" required={true} rows={2} onChange={handleChange} value={formData.preparation} />
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
