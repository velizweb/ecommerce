import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../components/Modal";
import ChangeAdrres from "../components/ChangeAdrres";
import { decreaseQuantity, increaseQuantity, removeFromCart } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";



const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [address, setAddress] = useState("main street, 001");

  const [isModalOpen, setIsModalOpen] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  

  return (
    <div className="container mx-auto py-8 min-h-96 px-4 md:px-6 lg:px-24">
      {cart.products.length > 0 ? (
        <div>
          <h3 className="text-2xl font-semibold mb-4">CARRITO DE COMPRA</h3>
          <div className="flex flex-col md:flex-row justify-between space-x-10 mt-8">
            <div className="md:w-2/3">
              <div className="flex justify-between border-b items-center mb-4 text-xs font-bold">
                <p>PRODUCTO</p>
                <div className="flex space-x-8">
                  <p>PRECIO</p>
                  <p>CANTIDAD</p>
                  <p>SUBTOTAL</p>
                  <p>ELIMINAR</p>
                </div>
              </div>

              <div>
                {cart.products.map((product, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-3 border-b"
                  >
                    <div className="md:flex items-center space-x-4">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-16 h-16 object-contain rounded"
                      />
                      <div className="flex-1 ml-4">
                        <h3 className="text-lg font-semibold">
                          {product.name}
                        </h3>
                      </div>
                    </div>

                    <div className="flex space-x-12 items-center">
                      <p>${product.price}</p>
                      <div className="flex items-center justify-center border">
                        <button className="text-xl font-bold px-1 border-r" onClick={() => dispatch(decreaseQuantity(product.id))}>
                          -
                        </button>
                        <p className="text-xl px-2">{product.quantity}</p>
                        <button className="text-xl font-bold px-1 border-l" onClick={() => dispatch(increaseQuantity(product.id))}>
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
              </div>
            </div>

            <div className="md:w-1/3 bg-white p-6 rounded-lg whadow-md border">
              <h3 className="text-sm font-semibold mb-5 border-b pb-1">
                TOTAL CARRITO
              </h3>
              <div className="flex justify-between mb-5 border-b pb-1">
                <span className="text-sm">Total Items:</span>
                <span>{cart.totalQuantity}</span>
              </div>
              <div className="mb-4 border-b pb-2">
                <p>Envío: </p>
                <p className="ml-2">
                  Envío a :{" "}
                  <span className="text-xs font-bold">{address}</span>
                </p>
                <button
                  className="text-blue-500 hover:underline mt-1 ml-1"
                  onClick={() => setIsModalOpen(!isModalOpen)}
                >
                  Cambiar dirección
                </button>
              </div>
              <div className="flex justify-between mb-4">
                <span>Precio Total:</span>
                <span>{cart.totalPrice}</span>
              </div>
              <button className="w-full bg-red-600 text-white py-2 hover:bg-red-800" onClick={() => navigate("/checkout")}>
                Procede a pagar
              </button>
            </div>
          </div>
          <Modal isOpen={isModalOpen} setOpen={setIsModalOpen}>
            <ChangeAdrres
              setAddress={setAddress}
              setIsModalOpen={setIsModalOpen}
            />
          </Modal>
        </div>
      ) : (
        <div className="flex justify-center">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/016/462/240/small_2x/empty-shopping-cart-illustration-concept-on-white-background-vector.jpg"
            alt=""
          />
        </div>
      )}
    </div>
  );
};

export default Cart;
