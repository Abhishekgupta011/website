import React from "react";
import './MealItem.css'
import Form from "./Form";
const MealItem = (props) =>{
    
    return(
        <div className="form">
        <li key={props.id}>
        <div className="meal-info">
            <span className="meal-name">{props.name}</span>
            <br />
            <span className="meal-description">{props.description}</span><br/>
            <span className='meal-price'>{props.price}</span>
        </div>
        <Form/>
    </li>
    </div>
    )
}

export default MealItem;