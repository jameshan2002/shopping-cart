import Fade from "react-reveal/Fade";

function Cart({ cartItems, removeItem, addItem, resetCart }) {
  let cartTotal = cartItems
    .map((itemData) => itemData.price * itemData.quantity)
    .reduce((a, b) => a + b, 0);
  const handleLoad = (e) => {
    alert("Thanks For Shopping!");
    resetCart();
  };

  return (
    <Fade cascade>
      <div>
        <h1 className="text-4xl sm:text-5xl font-semibold mt-10 sm:mt-20">
          Your Cart.
        </h1>
        {/* <hr className="max-w-xl mx-auto mt-7" /> */}
        <div className="mt-10">
          {cartItems.map((cartItem) => {
            let { title, quantity, price, image } = cartItem;
            return (
              <>
                {/* <hr className="max-w-4xl mx-auto" /> */}
                <div className="flex flex-wrap justify-start items-start mx-auto p-2 w-4/6 border-2 rounded-lg mb-10">
                  <div>
                    <img
                      className="p-4 w-6/6 sm:w-64 h-56 mb-4 object-scale-down"
                      alt=""
                      src={image}
                    />
                  </div>
                  <div className="text-left mt-7 ml-1 sm:ml-10 ">
                    <h1 className="mb-2 font-bold text-lg sm:text-xl max-w-3xl">
                      {title}
                    </h1>
                    <p className="mb-2 font-semibold text-md sm:text-lg mb-5">
                      ${price}
                    </p>
                    <h3 className="text-md sm:text-lg ">Quantity</h3>
                    <div className="flex justify-between sm:justify-around items-center w-14 sm:w-20 -ml-0 sm:-ml-2.5">
                      <button onClick={() => removeItem(cartItem)}>-</button>
                      <p>{quantity}</p>
                      <button onClick={() => addItem(cartItem)}>+</button>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        {cartItems.length > 0 ? (
          <div className="text-right mx-auto p-4 w-4/6 ">
            <h3 className="text-2xl font-semibold mb-3">
              Total: ${Math.round(cartTotal * 100) / 100} USD
            </h3>
            <button
              className="bg-gray-800 text-white text-xl px-10 py-2 rounded-lg mt-2 mb-10"
              onClick={handleLoad}
            >
              Checkout
            </button>
          </div>
        ) : (
          <h1 className="p-4 mt-14 text-xl font-semibold">Cart Is Empty!</h1>
        )}
      </div>
    </Fade>
  );
}

export default Cart;
