import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles/app.css";
import Nav from "./components/Nav.js";
import Products from "./components/Products.js";
import Home from "./components/Home.js";
import Contact from "./components/Contact.js";
import ItemDetail from "./components/ItemDetail";
import Cart from "./components/Cart";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const getCartItems = () => {
    return cartItems.map((item) => item.quantity).reduce((a, b) => a + b, 0);
  };

  const addItem = (item) => {
    let itemExist = cartItems.find((cartItem) => cartItem.id === item.id);
    if (itemExist) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...itemExist, quantity: itemExist.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const resetCart = () => {
    setCartItems([]);
  };

  const removeItem = (item) => {
    let itemToRemove = cartItems.find((cartItem) => cartItem.id === item.id);
    if (itemToRemove.quantity === 1) {
      setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
    } else {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...itemToRemove, quantity: itemToRemove.quantity - 1 }
            : cartItem
        )
      );
    }
  };

  return (
    <Router>
      <div className="App">
        <Nav getCartItems={getCartItems} />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/products" exact component={Products} />
          <Route path="/contact" component={Contact} />
          <Route
            path="/cart"
            //component={Cart}
            render={() => (
              <Cart
                cartItems={cartItems}
                removeItem={removeItem}
                addItem={addItem}
                resetCart={resetCart}
              />
            )}
          />
          <Route
            path="/products/:id"
            //component={ItemDetail}
            render={(routeProps) => (
              <ItemDetail
                itemId={routeProps.match.params.id}
                addItem={addItem}
              />
            )}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
