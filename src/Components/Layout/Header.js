import React from 'react';
import './Header.css';
import NavBar from './NavBar';
import HeaderButton from './HeaderButton';
const Header = (props) =>{
    return(
        <div className='header-container'>
        <header className='header'>
        <div className='title'>
             <span className='foodie'>Foodie</span>
             <span className='fusion'>Fusion</span>
             <span className='finds' >Finds</span>
             </div>
             <div className='bar-section'>
                <NavBar/>
                <HeaderButton onClick={props.onShowCart} />
             </div>
            
        </header>
        <div className='image'>
           <img src='https://images8.alphacoders.com/131/1311046.jpg'
                alt="Vegetables"
            />
        </div>      
        </div>
    )
}
export default Header;