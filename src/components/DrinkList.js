import DrinkItem from "./DrinkItem";

const DrinkList = (props) => {
  return (
    <div>
        {props.drinks.map((drink) => (
            <DrinkItem key={drink.idDrink} value={drink} />
        ))}
    </div>
  );
};

export default DrinkList;
