import Cart from './components/Cart.jsx';
import Checkout from './components/Checkout.jsx';
import Header from './components/Header.jsx';
import Meals from './components/Meals.jsx';
import Donate from './components/Donate.jsx';
import { CartContextProvider } from './store/CartContext.jsx';
import { UserProgressContextProvider } from './store/UserProgressContext.jsx';

function App() {
  return (
    
    <UserProgressContextProvider>
      <CartContextProvider>
        <Header />
        <Donate/>
        <Meals />
        <Cart />
        <Checkout />
      </CartContextProvider>
      
    </UserProgressContextProvider>
    
  );
  const myElement = <h1>I Love JSX!</h1>;

}

export default App;
