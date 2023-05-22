import { Card } from "react-bootstrap";
import DrinkItem from "./DrinkItem";

const DrinkList = (props) => {
  return (
    <div className="container">
      <div className="row justify-content-md-center">
        <div className="col col-md-auto">
          {props.drinks.map((drink) => (
            <DrinkItem key={drink.idDrink} value={drink} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DrinkList;
