import DrinkItem from "./DrinkItem";

const DrinkList = (props) => {
  return (
    <div>
      <ul className="list-group">
        {props.drinks.map((drink) => (
          <DrinkItem key={drink.idDrink} item={drink} />
        ))}
      </ul>
    </div>
  );
};

export default DrinkList;
