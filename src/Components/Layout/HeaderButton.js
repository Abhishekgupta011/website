import React from 'react';
import './HeaderButton.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const HeaderButton = () =>{
    return(
        <div className='button-container'>
       <button className='button'>
        <span className='icon'><ShoppingCartIcon/></span>
        <span className='text'>Add Cart</span>
        <span className='badge'>3</span>
       </button>
       </div>
    )
}
export default HeaderButton;