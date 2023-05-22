import React from "react";
import Card from "react-bootstrap/Card";

const DrinkItem = (props) => {

  function getIngredients(){
    let ingredients = [];
    for (let i = 1; i < 16; i++) {
      const ingredient = props.value[`strIngredient${i}`];
      const measure = props.value[`strMeasure${i}`];
      if (ingredient !== null && measure !== null) {
        const ingAndMea = {
          ing: ingredient,
          mea: measure,
        }
        ingredients.push(ingAndMea)
      }
    }
    return ingredients;
  }
  return (
    <Card>
      <Card.Img
        variant="top"
        src={props.value.strDrinkThumb}
        style={{ width: "15%", height: "15%", margin: "20px"}}
      />
      <Card.Body>
        <Card.Title>{props.value.strDrink}</Card.Title>
        <Card.Text>Instructions: {props.value.strInstructions}</Card.Text>
        {getIngredients().map((ingredient) => (
          <Card.Text>{ingredient.ing}   {ingredient.mea}</Card.Text>
        ))}
        <Card.Text>.........</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default DrinkItem;
