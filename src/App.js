import "./App.css";
import "./components/DrinkList.js";
import { useState } from "react";
import DrinkList from "./components/DrinkList.js";

function App() {
  const [drinks, setDrinks] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [latestSearches, setLatestSearches] = useState(
    JSON.parse(localStorage.getItem("searchValues") || "[]")
  );

  async function onChange(e) {
    setSearchValue(e.target.value);
    if (searchValue.length > 2) {
      const respons = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchValue}`
      );
      const data = await respons.json();
      const dataArray = Array.isArray(data.drinks) ? data.drinks : [];
      setDrinks(dataArray);
    }
  }

  function saveDrink() {
    let currentStorage = [];
    currentStorage = JSON.parse(localStorage.getItem("searchValues") || "[]");
    if (currentStorage.find((e) => e === searchValue) === undefined) {
      currentStorage.push(searchValue);
      localStorage.setItem("searchValues", JSON.stringify(currentStorage));
      setLatestSearches(currentStorage);
    }
  }

  return (
    <div className="App">
      <div className="App-content">
        <div className="App-header">
          <h1>Welcome to The Cocktail!</h1>
        </div>
        <div className="App-body"></div>
        <label>Search here: </label>
        <input
          className="User-input"
          placeholder="Search for drinks here.."
          type="text"
          onChange={onChange}
        ></input>
        <button className="save-button" onClick={saveDrink}>
          Save searches
        </button>
        <p>Latest saved searches:</p>
        <ul>
          {latestSearches.map((search) => (
            <li>{search}</li>
          ))}
        </ul>
        <DrinkList drinks={drinks} />
      </div>
    </div>
  );
}

export default App;
