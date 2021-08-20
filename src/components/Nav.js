import { Link } from "react-router-dom";
function Nav({ getCartItems }) {
  let itemsInCart = getCartItems();
  return (
    <nav className="flex flex-wrap mt-5 sm:mt-0">
      <Link to="/shopping-cart/">
        <h3 className="font-bold text-2xl">FakeStore.</h3>
      </Link>
      <ul className="flex flex-wrap mt-3 sm:mt-auto">
        <Link to="/shopping-cart/">
          <li className="p-2 sm:p-4">Home</li>
        </Link>
        <Link to="/shopping-cart/products">
          <li className="p-2 sm:p-4">Products</li>
        </Link>
        <Link to="/shopping-cart/contact">
          <li className="p-2 sm:p-4">Contact</li>
        </Link>
        <Link to="/shopping-cart/cart">
          <li className="p-2 sm:p-4">
            Cart ({itemsInCart ? `${itemsInCart}` : 0})
          </li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
