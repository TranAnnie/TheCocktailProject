import React from "react";

const DrinkItem = (props) => {
  return (
    <li className="list-group-item">
      {props.value.strDrink}
      <img
        src={props.item.strDrinkThumb}
        alt="imageDrink"
        style={{ width: "10%" }}
      />
    </li>
  );
};

export default DrinkItem;
