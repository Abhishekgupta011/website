import React from "react";
import './Cart.css'
import Modal from "../UI/Modal";

const Cart = () => {
    const CartItems = (
        <ul className="cartItems">
           {[{id: 1, name:'shushi', amount: 2, price: 12.99}].map((item) =>(
             <li>{item.name}</li>
           ))}
        </ul>
    )
   return(
    <Modal>
        {CartItems}
        <div className="total">
            <span>Total Amount</span>
            <span>35.62</span>
        </div>
        <div className="actions">
            <button className="close">Close</button>
            <button className="order">Order</button>
        </div>
    </Modal>
   )
};

export default Cart;
