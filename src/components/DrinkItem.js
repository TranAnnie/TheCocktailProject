import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const DrinkItem = (props) => {
  return (
    <Card style={{ width: "20rem" }}>
      <Card.Img
        variant="top"
        src={props.value.strDrinkThumb}
        style={{ width: "45%", height: "45%" }}
      />
      <Card.Body>
        <Card.Title>{props.value.strDrink}</Card.Title>
        <Card.Text>{props.value.strInstructions}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default DrinkItem;
