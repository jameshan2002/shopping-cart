import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles/app.css";
import Nav from "./components/Nav.js";
import Products from "./components/Products.js";
import Home from "./components/Home.js";
import Contact from "./components/Contact.js";
import ItemDetail from "./components/ItemDetail";
import Cart from "./components/Cart";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/products" exact component={Products} />
          <Route path="/contact" component={Contact} />
          <Route path="/cart" component={Cart} />
          <Route path="/products/:id" component={ItemDetail} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
