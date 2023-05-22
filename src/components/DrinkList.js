import DrinkItem from "./DrinkItem";
import { useState } from "react";

const DrinkList = () => {
  const [drinks, setDrinks] = useState([]);

  async function onChange(e) {
    const searchValue = e.target.value;
    console.log(searchValue);
    if (searchValue.length > 2) {
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchValue}`
      );
      const data = await response.json();
      console.log(data);
      console.log(data.drinks[0]["strDrink"]);
      setDrinks([...data.drinks[0]["strDrink"]]);
    }
  }

  return (
    <>
      <label>Sök här:</label>
      <input
        className="User-input"
        placeholder="Sök här efter drinkar här.."
        type="text"
        onChange={onChange}
      ></input>
      <div>
        <ul className="list-group">
          <li className="list-group-item">{drinks}</li>
        </ul>
      </div>
    </>
  );
};

export default DrinkList;
