import React, { useContext } from "react";
import './Cart.css'
import Modal from "../UI/Modal";
import CartContext from "../Store/CartContext";
import CartItem from "./CartItem";
const Cart = (props) => {

    const cartCtx = useContext(CartContext)
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`

    const hasItems = cartCtx.items.length>0

    const addItemsHandler = ()=>{}

    const removeItemsHandler =(id)=>{
        cartCtx.removeItem(id)
    }

    const CartItems = (
        <ul className="cartItems">
           {cartCtx.items.map((item) =>(
             <CartItem 
             key={item.id} 
             name = {item.name} 
             amount={item.amount} 
             price={item.price}
             onAdd = {addItemsHandler.bind(null , item.item)}
             onRemove = {removeItemsHandler.bind(null , item.id)}
             />
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
            {hasItems && <button className="order">Order</button>}
        </div>
    </Modal>
   )
};

export default Cart;
