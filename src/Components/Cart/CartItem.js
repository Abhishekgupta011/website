import React from "react";
import './CartItem.css'
const CartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className="cartItem">
      <div>
        <h3 className="name">{props.name}</h3>
        <div className="itemCount">
          <span className="price">{price}</span>
          <span className="amount">x {props.amount}</span>
        </div>
      </div>
      <div>
        <button onClick={props.onAdd} className="adds">+</button>
        <button onClick={props.onRemove} className="remove">-</button>
      </div>
      
    </li>
  );
};

export default CartItem;
