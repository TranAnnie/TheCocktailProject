import React from 'react'

const DrinkItem = (props) => { //Props är item + en key

      return (
        <li className="list-group-item">
          {props.value.strDrink}
            <img src={props.item.strDrinkThumb} alt="imageDrink" style={{"width": "50%"}} />
        </li>
      );
}

export default DrinkItem