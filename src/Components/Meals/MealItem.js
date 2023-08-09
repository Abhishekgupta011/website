import React, { useContext } from "react";
import './MealItem.css'
import Form from "./Form";
import CartContext from "../Store/CartContext";
const MealItem = (props) =>{
    const cartCtx = useContext(CartContext)
    const formattedPrice = typeof props.price === 'number' ? `$${props.price.toFixed(2)}` : 'Invalid Price';

    const onAddToCartHandler = amount =>{
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price,
        }
        )

    }
    
    return(
        <div className="form">
        <li key={props.id}>
        <div className="list-items">
        <div className="meal-info">
            <span className="meal-name">{props.name}</span>
            <br />
            <span className="meal-description">{props.description}</span><br/>
            <span className='meal-price'>{formattedPrice}</span>
        </div>
        <Form onAddToCart={onAddToCartHandler}/>
        </div>
    </li>
    </div>
    )
}

export default MealItem;