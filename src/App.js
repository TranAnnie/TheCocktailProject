import "./App.css";
import "./components/DrinkList.js";
import { useEffect, useState } from "react";
import DrinkList from "./components/DrinkList.js";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [drinks, setDrinks] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [latestSearches, setLatestSearches] = useState(
    JSON.parse(localStorage.getItem("searchValues") || "[]")
  );

useEffect(() => {
  async function fetchData() {
    if (searchValue.length > 2) {
      const respons = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchValue}`
      );
      const data = await respons.json();
      const dataArray = Array.isArray(data.drinks) ? data.drinks : [];
      setDrinks(dataArray);
    }
  }
  fetchData().catch(console.error);;
}, [searchValue])

  function onChange(e) {
    setSearchValue(e.target.value);
    console.log(searchValue);
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

  function quickSearch(search) {
    let search_input = document.getElementsByName("search_input");
    search_input[0].value = search;
    onChange({ target: { value: search } });
  }

  return (
    <div className="App">
      <div className="App-content">
        <div className="App-header">
          <h1>Welcome to The Cocktail!</h1>
        </div>
        <div className="App-body"></div>
        <label>Search here: </label>
        <div className="form">
          <input
            className="User-input"
            placeholder="Search for drinks here.."
            type="text"
            name="search_input"
            onChange={() => onChange}
          ></input>
        </div>
        <div className="form">
          <button className="save-button" onClick={saveDrink}>
            Save searches
          </button>
        </div>
        <p>Latest saved searches:</p>
        <ul>
          {latestSearches.map((search) => (
            <li key={uuidv4()} onClick={() => quickSearch(search)}>{search}</li>
          ))}
        </ul>
        <DrinkList drinks={drinks} />
      </div>
    </div>
  );
}

export default App;
