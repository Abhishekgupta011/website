import React from 'react';
import './Header.css';
import HeaderButton from './HeaderButton';

const Header = () =>{
    return(
        <div>
        <header className='header'>
             <h2>ReactMeals</h2>
             <HeaderButton/>
        </header>
        <div className='image'>
           <img src='https://img.freepik.com/free-vector/cartoon-indian-restaurant-background_52683-69329.jpg?w=900&t=st=1688795994~exp=1688796594~hmac=2c7fc82878927de5a50bdf0aa2c2d707c6b41697c9484d5d9809af004ff7e9ce'
                alt="Vegetables"
            />
        </div>      
        </div>
    )
}
export default Header;