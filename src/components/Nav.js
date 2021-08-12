import { Link } from "react-router-dom";
function Nav() {
  return (
    <nav>
      <Link to="/">
        <h3 className="font-bold text-2xl">FakeStore.</h3>
      </Link>
      <ul className="flex">
        <Link to="/">
          <li className="p-4">Home</li>
        </Link>
        <Link to="/products">
          <li className="p-4">Products</li>
        </Link>
        <Link to="/contact">
          <li className="p-4">Contact</li>
        </Link>
        <Link to="/cart">
          <li className="p-4">Cart (1)</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
