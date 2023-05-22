import "./App.css";
import "./components/DrinkList.js"
import { useState } from "react";
import DrinkList from "./components/DrinkList.js";

function App() {
  const [drinks, setDrinks] = useState([]);

  async function onChange(e){
    const searchValue = e.target.value;
    console.log(searchValue);
    if (searchValue.length > 2) {
      const respons = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchValue}`)
      const data = await respons.json();
      console.log(data);
      };
    }

  return (
    <div className="App">
      <div className="App-header">
        <h1>Välkommen till The Cocktail!</h1>
      </div>
      <div className="App-body">
        <div className="Border">
          <h3>Här kan du söka på drinkar.. blabla info om appen</h3>
        </div>
      </div>
      <label>Sök här:</label>
      <input
        className="User-input"
        placeholder="Sök här efter drinkar här.."
        type="text"
        onChange={onChange}
      ></input>
      <DrinkList drinks={drinks} />
    </div>
  );
}

export default App;
