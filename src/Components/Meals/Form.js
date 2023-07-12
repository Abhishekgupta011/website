import React from "react";
import './Form.css'
const Form=()=>{
    const addMeals = ()=>{
        console.log('hjjb')
    }
   return(
    <div className="amount-container">
    <div className="label">
            <label>Amount</label>
            <input type="number" min={1} max={5} step={1} defaultValue={1}/><br/>
            </div>
            <button className="add" onClick={addMeals}>+ Add</button>
        </div>
   )
}
export default Form;