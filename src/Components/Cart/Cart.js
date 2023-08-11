import React, { useContext } from "react";
import "./Cart.css";
import Modal from "../UI/Modal";
import CartContext from "../Store/CartContext";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const addItemsHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const removeItemsHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemsList = cartCtx.items.map((item) => (
    <CartItem
      key={item.id}
      name={item.name}
      amount={item.amount}
      price={item.price}
      onAdd={addItemsHandler.bind(null , item)} // Use bind to pass the item
      onRemove={removeItemsHandler.bind(null, item.id)} // Use arrow function to pass the id
    />
  ));

  return (
    <Modal onClose={props.onClose}>
      <ul className="cartItems">{cartItemsList}</ul>
      <div className="actions">
        <button className="close" onClick={props.onClose}>
          Close
        </button>
        {hasItems && <button className="order">Add To My Order <span>{totalAmount}</span></button>}
      </div>
    </Modal>
  );
};

export default Cart;
