import React, { useContext } from 'react';
import './HeaderButton.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CartContext from '../Store/CartContext';
const HeaderButton = (props) =>{
   const cartctx = useContext(CartContext)

   const numberOfItemsInCart = cartctx.items.reduce((cur , items) => {
    return cur + items.amount;
   } , 0)
    return(
        <div className='button-container'>
       <button className='button' onClick={props.onClick}>
        <span className='icon'><ShoppingCartIcon/></span>
        <span className='text'>Add Cart</span>
        <span className='badge'>{numberOfItemsInCart}</span>
       </button>
       </div>
    )
}
export default HeaderButton;