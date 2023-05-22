import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DrinkItem from "./DrinkItem";

const DrinkList = (props) => {
  return (
    <Container>
      <Row xs={1} md={2} className="g-4">
        {props.drinks.map((drink) => (
          <Col>
            <DrinkItem key={drink.idDrink} value={drink} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default DrinkList;
