import React, { useContext } from "react";
import { Cartcontext } from "../App";

const Cart = () => {
  const { cart, removeFromCart, decQuantity, incQuantity, total } =
    useContext(Cartcontext);
  return (
    <>
      {cart.map((item) => {
        return (
          <>
            <div className="my-20  mx-64 flex  gap-5 shadow-lg border-2 p-5 rounded-lg">
              <div>
                <img
                  className="w-[10vw] h-[20vh] border-2 p-2 rounded-lg "
                  src={item.image}
                  alt=""
                />
              </div>
              <div className="flex gap-10  items-center">
                <div className="w-[30vw]">
                  <p className="text-lg font-bold">{item.title}</p>
                  <p className="text-red-800 font-bold text-lg">
                    ${item.price}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <div>
                    <button
                      onClick={() => decQuantity(item)}
                      className="bg-red-800 hover:text-red-800 transition  duration-300 ease-in-out hover:bg-white border-2 border-red-800 hover:border-red-800 text-white rounded px-2 py-1 flex  items-center"
                    >
                      -
                    </button>
                  </div>
                  <div className=" font-bold">{item.quantity}</div>

                  <div>
                    <button
                      onClick={() => incQuantity(item)}
                      className="bg-red-800 hover:text-red-800 transition  duration-300 ease-in-out hover:bg-white border-2 border-red-800 hover:border-red-800 text-white rounded px-2 py-1 flex  items-center"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="flex items-center gap-10">
                  <div>
                    <p className="font-bold"> ${Math.floor(item.total)}</p>
                  </div>

                  <div>
                    <button
                      className="bg-red-800 hover:text-red-800 transition  duration-300 ease-in-out hover:bg-white border-2 border-red-800 hover:border-red-800 text-white rounded px-2 py-1 flex  items-center"
                      onClick={() => removeFromCart(item)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })}
      <hr className="w-[80vw] rounded-3xl bg-black mx-auto h-1 " />
      <div className="flex justify-center py-5">
        <p className="text-3xl text-red-800 font-black">
          Total Price: ${Math.floor(total)}
        </p>
      </div>

      <div className="flex justify-center pt-5">
        <button className="text-white bg-green-600 hover:bg-green-500 px-4 py-2 rounded-lg ">Check out</button>
      </div>
    </>
  );
};

export default Cart;
