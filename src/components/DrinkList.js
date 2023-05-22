import DrinkItem from "./DrinkItem";

const DrinkList = () => {
  return (
    <div>
      <ul className="list-group">
        {drink.map((drink) => (
          <DrinkItem key={drink.id} item={drink} />
        ))}
      </ul>
    </div>
  );
};

export default DrinkList;
