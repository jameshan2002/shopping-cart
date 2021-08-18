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
  const [cardItems, setCardItems] = useState([]);
  const getCartItems = () => {
    return cardItems.map((item) => item.quantity).reduce((a, b) => a + b, 0);
  };
  const addItem = (id, number = 1) => {
    let list = Object.assign([], cardItems);
    list.push({
      id: id,
      number: number,
    });
    setCardItems(list);
  };

  const clearCart = () => {
    setCardItems([]);
  };

  const removeItem = (index) => {
    let list = Object.assign([], cardItems);
    list.splice(index, 1);
    setCardItems(list);
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
            component={Cart}
            render={() => (
              <Cart
                cardItems={cardItems}
                clearCart={clearCart}
                removeItem={removeItem}
              />
            )}
          />
          <Route
            path="/products/:id"
            component={ItemDetail}
            render={(props) => <ItemDetail {...props} addItem={addItem} />}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
