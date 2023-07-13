import React, { useContext } from "react";
import './Cart.css'
import Modal from "../UI/Modal";
import CartContext from "../Store/CartContext";

const Cart = (props) => {
    const cartCtx = useContext(CartContext)
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`
    const CartItems = (
        <ul className="cartItems">
           {cartCtx.items.map((item) =>(
             <li>{item.name}</li>
           ))}
        </ul>
    )

   return(
    <Modal onClose={props.onClose}>
        {CartItems}
        <div className="total">
            <span>Total Amount</span>
            <span>{totalAmount}</span>
        </div>
        <div className="actions">
            <button className="close" onClick={props.onClose}>Close</button>
            <button className="order">Order</button>
        </div>
    </Modal>
   )
};

export default Cart;
