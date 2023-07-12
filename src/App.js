import Cart from "./Components/Cart/Cart";
import Header from "./Components/Layout/Header";
import MealsSummary from "./Components/Layout/MealsSummary";
import AvailableItems from "./Components/Meals/Items";


function App() {
  return (
    <>
   <Header/>
   <MealsSummary/>
   <AvailableItems/>
   <Cart/>
   </>
  );
}

export default App;
