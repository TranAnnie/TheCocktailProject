import "./App.css";

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
      <label>Sök här:</label>
      <input
        className="User-input"
        placeholder="Sök här efter drinkar här.."
      ></input>
    </div>
  );
}

export default App;
