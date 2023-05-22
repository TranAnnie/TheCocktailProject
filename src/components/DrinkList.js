import DrinkItem from "./DrinkItem";
import { useState } from "react";

const DrinkList = () => {


  return (
    <div>
      <ul className="list-group">
        {props.drinks.map((drink) => (
          <DrinkItem key={drink.idDrink} item={drink} value={drink}  />
        ))}
      </ul>
    </div>
  );
};

export default DrinkList;
