import React from "react";

const DrinkItem = (props) => {
  function getIngredients() {
    let ingredients = [];
    for (let i = 1; i < 16; i++) {
      const ingredient = props.value[`strIngredient${i}`];
      const measure = props.value[`strMeasure${i}`];
      if (ingredient !== null && measure !== null) {
        const ingAndMea = {
          ing: ingredient,
          mea: measure,
        };
        ingredients.push(ingAndMea);
      }
    }
    return ingredients;
  }
  return (
    <div>
      <img
        src={props.value.strDrinkThumb}
        style={{ width: "15%", height: "15%", margin: "20px" }}
        alt="drink"
      />
      <div>
        <h2><u>{props.value.strDrink}</u></h2>
        <p>Instructions: {props.value.strInstructions}</p>
        {getIngredients().map((ingredient) => (
          <p>
            {ingredient.ing} {ingredient.mea}
          </p>
        ))}
        <p>-------------------</p>
      </div>
    </div>
  );
};

export default DrinkItem;
