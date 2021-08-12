function Cart() {
  return (
    <div>
      <h1 className="text-5xl font-semibold mt-20">Your Cart.</h1>
      <hr className="max-w-xl mx-auto mt-5" />
      <div>
        <h3>Cloth title here</h3>
        <p>Price here</p>
      </div>
      <div className="p-4">
        <h3 className="text-xl">Total: 4000.00 USD</h3>
        <button className="bg-gray-800 text-white px-4 py-2 rounded-lg mt-2">
          Checkout
        </button>
      </div>
    </div>
  );
}

export default Cart;
