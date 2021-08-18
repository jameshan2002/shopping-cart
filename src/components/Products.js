import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ItemDetail from "./ItemDetail";

function Products(props) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setItems(json));
  }, []);

  // const fetchItems = async () => {
  //   const data = await fetch("https://fakestoreapi.com/products");

  //   const scopes = await data.json();
  //   console.log(scopes);
  //   setItems(scopes);
  // };

  return (
    <div className="flex flex-wrap justify-between items-center mx-auto p-4 w-4/5 h-screen mt-14">
      {items.map((key) => (
        <div key={key.id} className="p-8 mx-auto w-96 h-3/6">
          <img
            src={key.image}
            alt=""
            className="p-4 w-72 h-60 mb-4 object-scale-down"
          />
          <h1 className="font-semibold text-left mb-1 text-lg">
            <Link
              to={`/products/${key.id}`}
              render={() => <ItemDetail addItem={props.addItem} />}
            >
              {key.title}
            </Link>
          </h1>
          <h3 className="font-bold text-left text-lg">${key.price}</h3>
        </div>
      ))}
    </div>
  );
}

export default Products;
