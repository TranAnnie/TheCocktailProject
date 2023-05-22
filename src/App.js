import "./App.css";
import "./components/DrinkList.js"
import { useState } from "react";
import DrinkList from "./components/DrinkList.js";

function App() {
 
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

      <DrinkList />
    </div>
  );
}

export default App;
