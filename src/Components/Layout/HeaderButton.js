import React from 'react';
import './HeaderButton.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const HeaderButton = () =>{
    return(
       <button>
        <span><ShoppingCartIcon/></span>
        <span>Add Cart</span>
        <span className='badge'>3</span>
       </button>
    )
}
export default HeaderButton;