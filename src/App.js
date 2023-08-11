import { useState } from "react";
import Cart from "./Components/Cart/Cart";
import Header from "./Components/Layout/Header";
import MealsSummary from "./Components/Layout/MealsSummary";
import AvailableItems from "./Components/Meals/Items";
import CartProvider from "./Components/Store/cartProvider";
import Footer from "./Components/Layout/Footer";


function App() {
   
  const  [cartVisible, setCartVisible] = useState(false)

  const showCart = () =>{
    setCartVisible(true)
  }

  const HideCart = () => {
    setCartVisible(false)
  }

  return (
    <CartProvider>
   <Header onShowCart={showCart}/>
   <MealsSummary/>
   <AvailableItems/>
   {cartVisible && <Cart onClose = {HideCart}/>}
   <Footer/>
   </CartProvider>
  );
}

export default App;
