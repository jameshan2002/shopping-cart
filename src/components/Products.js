import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Products() {
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
    <div className="flex flex-wrap justify-between items-center mx-auto p-4 w-4/5">
      {items.map((key) => (
        <div key={key.id} className="p-10 mx-auto w-80">
          <img
            src={key.image}
            alt=""
            className="p-4 w-80 h-80 object-contain"
          />
          <h1 className="font-semibold">
            <Link to={`/products/${key.id}`}>{key.title}</Link>
          </h1>
          <h3>${key.price}</h3>
        </div>
      ))}
    </div>
  );
}

export default Products;
