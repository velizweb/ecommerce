import React, { useState } from "react";
import { FaArrowCircleRight, FaTrashAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { decreaseQuantity, increaseQuantity, removeFromCart } from "../redux/cartSlice";

const Sidebar = ({ showSidebar, setShowSidebar }) => {
  const cart = useSelector((state) => state.cart);

  const handleChekout = () => {
    navigate("checkout");
    setShowSidebar(!setShowSidebar)
  }


  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <>
      <div
        className={`shadow top-0 right-0 w-[35vw] bg-red-100  p-5 fixed h-full z-40  ease-in-out duration-300 overflow-y-auto ${
          showSidebar ? "translate-x-0 " : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center py-2 px-4 bg-red-800">
          <span className="text-white">Carrito de compras</span>

          <button
            className="flex text-2xl text-white items-center cursor-pointer"
            onClick={() => setShowSidebar(!showSidebar)}
          >
            <FaArrowCircleRight />
          </button>
        </div>

        {cart.products.length > 0 ? (
          <>
            <div className="flex flex-col md:flex-row justify-between space-x-10 mt-8">
              <div className="md:w-full">
                <div className="bg-white p-6 rounded-lg shadow-md border">
                  <div className="flex space-x-4 border-b items-center mb-4 text-xs font-bold">
                    <p>PRODUCTO</p>
                    <div className="flex space-x-5">
                      <p>PRECIO</p>
                      <p>CANTIDAD</p>
                      <p>SUBTOTAL</p>
                      <p>ELIMINAR</p>
                    </div>
                  </div>

                  {cart.products.map((product, idx) => (
                    <div
                      key={idx}
                      className="flex items-center space-x-2 border-b pb-2 mb-2"
                    >
                      <div className="md:flex flex-col items-center">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-16 h-16 object-contain rounded"
                        />

                        <h3 className="text-xs font-semibold">
                          {product.name}
                        </h3>
                      </div>

                      <div className="flex space-x-8 items-center">
                        <p>${product.price}</p>
                        <div className="flex items-center justify-center border">
                          <button
                            className="text-xl font-bold px-1 border-r"
                            onClick={() =>
                              dispatch(decreaseQuantity(product.id))
                            }
                          >
                            -
                          </button>
                          <p className="text-xl px-2">{product.quantity}</p>
                          <button
                            className="text-xl font-bold px-1 border-l"
                            onClick={() =>
                              dispatch(increaseQuantity(product.id))
                            }
                          >
                            +
                          </button>
                        </div>
                        <p>${(product.quantity * product.price).toFixed(2)}</p>
                        <button
                          className="text-red-500 hover:text-red-700"
                          onClick={() => dispatch(removeFromCart(product.id))}
                        >
                          <FaTrashAlt />
                        </button>
                      </div>
                    </div>
                  ))}

                  <div className="flex justify-between mb-5 border-b pb-1 mt-2">
                    <span className="text-sm">Total Items:</span>
                    <span>{cart.totalQuantity}</span>
                  </div>
                  <div className="flex justify-between mb-4">
                    <span>Precio Total:</span>
                    <span>{cart.totalPrice}</span>
                  </div>
                  <button
                    className="w-full bg-red-600 text-white py-2 hover:bg-red-800"
                    onClick={handleChekout}
                  >
                    Procede a pagar
                  </button>
                </div>

                <div></div>
              </div>
            </div>
          </>
        ) : null}
      </div>
    </>
  );
};

export default Sidebar;
