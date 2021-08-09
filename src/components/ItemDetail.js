import React, { useState, useEffect } from "react";

function ItemDetail({ match }) {
  const [item, setItem] = useState(null);

  useEffect(() => {
    async function fetchItem() {
      const data = await fetch(
        `https://fakestoreapi.com/products/${match.params.id}`
      );
      const scopes = await data.json();
      setItem(scopes);
    }
    fetchItem();
  }, []);

  return (
    <div className="flex content-center items-start w-3/5 mx-auto mt-16">
      {item && <img src={item.image} alt="" className="w-2/5 p-4 mr-10" />}
      <div className="text-left p-4">
        {item && <h1 className="mb-2 font-bold text-2xl">{item.title}</h1>}
        {item && <h3 className="mb-2 font-semibold text-xl">${item.price}</h3>}
        {item && <p className="mb-4 text-md">{item.description}</p>}
        <button className="bg-gray-800 text-white px-4 py-2 rounded-lg">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ItemDetail;