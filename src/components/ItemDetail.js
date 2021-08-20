import React, { useState, useEffect } from "react";

const ItemDetail = ({ itemId, addItem }) => {
  const [item, setItem] = useState(null);

  useEffect(() => {
    async function fetchItem() {
      const data = await fetch(`https://fakestoreapi.com/products/${itemId}`);
      const scopes = await data.json();
      setItem(scopes);
    }
    fetchItem();
  }, []);

  function handleClick() {
    addItem({ ...item, quantity: 1 });
  }

  return (
    <div className="flex content-center justify-center items-start w-3/5 mx-auto mt-16 flex-wrap lg:flex-nowrap">
      {item && (
        <img
          src={item.image}
          alt=""
          className="w-5/5 sm:w-4/6 md:w-2/5 p-0 sm:p-4 mr-auto sm:mr-10 text-center"
        />
      )}
      <div className="text-left p-0 sm:p-4 mt-10 sm:mt-0">
        {item && (
          <h1 className="mb-2 font-bold text-2xl sm:text-3xl">{item.title}</h1>
        )}
        {item && (
          <h3 className="mb-2 font-semibold text-xl sm:text-2xl mb-10">
            ${item.price}
          </h3>
        )}
        {item && (
          <p className="mb-4 text-md sm:text-lg mb-10">{item.description}</p>
        )}

        {/* <form>
          <select id="quantity" name="quantity" className="mr-5">
            <option value="1">Qty: 1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select> */}

        <button
          className="bg-gray-800 text-white px-4 py-2 rounded-lg mb-14 sm:mb-auto"
          onClick={handleClick}
        >
          Add to Cart
        </button>
        {/* </form> */}
      </div>
    </div>
  );
};

export default ItemDetail;
