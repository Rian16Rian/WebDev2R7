import React from 'react';

const RecipeModal = ({ isOpen, onClose, recipe }) => {
  if (!isOpen) return null;

  const { title, description, ingredients, procedure } = recipe;

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>{title}</h2>
        <h3>Benefits</h3>
        <p>{description}</p>
        <h3>Ingredients</h3>
        <table id="ingredientsTable">
          <thead>
            <tr>
              <th>Name</th>
              <th>Quantity</th>
              <th>Servings</th>
            </tr>
          </thead>
          <tbody id="ingredientsBody">
            {ingredients.map((ingredient, index) => (
              <tr key={index}>
                <td>{ingredient.name}</td>
                <td>{ingredient.quantity}</td>
                <td>{ingredient.servings}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <h3>Procedure</h3>
        <ol>
          {procedure.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default RecipeModal;
