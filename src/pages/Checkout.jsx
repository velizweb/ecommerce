import React from "react";
import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";

const Checkout = ({ setOrder }) => {
  const [billingToggle, setBillingToggle] = useState(true);
  const [shippingToggle, setShippingToggle] = useState(false);
  const [payMethodToggle, setPayMethodToggle] = useState(false);
  const [shippingInfo, setshippingInfo] = useState({
    address: "",
    city: "",
    zip: "",
  });
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate();

  const handleOrder = () => {
    const newOrder = {
      products: cart.products,
      orderNumber: "123456",
      shippingInformation: shippingInfo,
      totalPrice: cart.totalPrice,
    };
    setOrder(newOrder);

    navigate("/order-confirmation");
  };

  return (
    <div className="container mx-auto py-8 min-h-96 px-4 md:px-6 lg:px-24">
      <h3 className="text-2xl font-semibold mb-4">PAGAR</h3>
      <div className="flex flex-col md:flex-row justify-between space-x-10 mt-8">
        <div className="md:w-2/3">
          <div className="border p-2 mb-6">
            <div
              className="flex items-center justify-between"
              onClick={() => setBillingToggle(!billingToggle)}
            >
              <h3 className="text-lg font-semibold mb-2">
              Información de facturación
              </h3>
              {billingToggle ? <FaAngleDown /> : <FaAngleUp />}
            </div>

            <div className={`space-y-4 ${billingToggle ? "" : "hidden"}`}>
              <div>
                <label className="block text-gray-700" htmlFor="">
                  Nombre
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Ingrese Nombre"
                  className="w-full px-3 py-2 border"
                />
              </div>

              <div>
                <label className="block text-gray-700" htmlFor="">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Ingrese Email"
                  className="w-full px-3 py-2 border"
                />
              </div>

              <div>
                <label className="block text-gray-700" htmlFor="">
                  Teléfono
                </label>
                <input
                  type="text"
                  name="phone"
                  placeholder="Ingrese Teléfono"
                  className="w-full px-3 py-2 border"
                />
              </div>
            </div>
          </div>
          {/* shipping */}
          <div className="border p-2 mb-6">
            <div
              className="flex items-center justify-between"
              onClick={() => setShippingToggle(!shippingToggle)}
            >
              <h3 className="text-lg font-semibold mb-2">
                Información de envío
              </h3>
              {shippingToggle ? <FaAngleDown /> : <FaAngleUp />}
            </div>

            <div className={`space-y-4 ${shippingToggle ? "" : "hidden"}`}>
              <div>
                <label className="block text-gray-700" htmlFor="">
                  Dirección
                </label>
                <input
                  type="text"
                  name="address"
                  placeholder="Ingrese dirección"
                  className="w-full px-3 py-2 border"
                  onChange={(e) =>
                    setshippingInfo({
                      ...shippingInfo,
                      address: e.target.value,
                    })
                  }
                />
              </div>

              <div>
                <label className="block text-gray-700" htmlFor="">
                  Ciudad
                </label>
                <input
                  type="text"
                  name="city"
                  placeholder="Ingrese ciudad"
                  className="w-full px-3 py-2 border"
                  onChange={(e) =>
                    setshippingInfo({ ...shippingInfo, city: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="block text-gray-700" htmlFor="">
                  Código Postal
                </label>
                <input
                  type="text"
                  name="zipcode"
                  placeholder="Ingrese código postal"
                  className="w-full px-3 py-2 border"
                  onChange={(e) =>
                    setshippingInfo({ ...shippingInfo, zip: e.target.value })
                  }
                />
              </div>
            </div>
          </div>
          {/* Paymet */}
          <div className="border p-2 mb-6">
            <div
              className="flex items-center justify-between"
              onClick={() => setPayMethodToggle(!payMethodToggle)}
            >
              <h3 className="text-lg font-semibold mb-2">Metodo de pago</h3>
              {payMethodToggle ? <FaAngleDown /> : <FaAngleUp />}
            </div>

            <div className={`space-y-4 ${payMethodToggle ? "" : "hidden"}`}>
              <div>
                <input
                  type="radio"
                  name="payment"
                  checked={paymentMethod === "cod"}
                  onChange={() => setPaymentMethod("cod")}
                />
                <label className="text-gray-700 ml-2" htmlFor="">
                  Pagar en Envío
                </label>
              </div>

              <div>
                <input
                  type="radio"
                  name="payment"
                  checked={paymentMethod === "dc"}
                  onChange={() => setPaymentMethod("dc")}
                />
                <label className="text-gray-700 ml-2" htmlFor="">
                  Tarjeta de Debito
                </label>
              </div>

              {paymentMethod === "dc" && (
                <div className="bg-gray-100 p-4 rounded-lg mb-4">
                  <h3 className="text-xl font-semibold mb-4">
                    Información Tarjeta de Debito
                  </h3>
                  <div className="mb-4">
                    <label
                      htmlFor=""
                      className="block text-gray-700 font-semibold mb-2"
                    >
                      Número de Tarjeta
                    </label>
                    <input
                      type="text"
                      placeholder="Ingrese Número de Tarjeta"
                      className="border p-2 w-full rounded"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor=""
                      className="block text-gray-700 font-semibold mb-2"
                    >
                      Nombre del Titular
                    </label>
                    <input
                      type="text"
                      placeholder="Ingrese Nombre del Titular"
                      className="border p-2 w-full rounded"
                    />
                  </div>
                  <div className="flex justify-between mb-4">
                    <div className="w-1/2 mr-2">
                      <label
                        htmlFor=""
                        className="block text-gray-700 font-semibold mb-2"
                      >
                        Fecha de Vencimiento
                      </label>
                      <input
                        type="text"
                        placeholder="MM/YY"
                        className="border p-2 w-full rounded"
                        required
                      />
                    </div>
                    <div className="w-1/2 ml-2">
                      <label
                        htmlFor=""
                        className="block text-gray-700 font-semibold mb-2"
                      >
                        CVV
                      </label>
                      <input
                        type="text"
                        placeholder="CVV"
                        className="border p-2 w-full rounded"
                        required
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="md:w-1/3 bg-white p-6 rounded-lg shadow-md border">
          <h3 className="text-lg font-semibold mb-4">Resumen de Orden</h3>
          <div className="space-y-4">
            {cart.products.map((product) => (
              <div key={product.id} className="flex justify-between">
                <div className="flex items-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-16 h-16 object-contain rounded"
                  />
                  <div className="ml-4">
                    <h4 className="text-md font-semibold">{product.name}</h4>
                    <p className="text-gray-600">
                      ${product.price} x {product.quantity}
                    </p>
                  </div>
                </div>
                <div className="text-gray-800">
                  ${product.price * product.quantity}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 border-t pt-4">
            <div className="flex justify-between">
              <span>Precio Total:</span>
              <span className="font-semibold">
                ${cart.totalPrice.toFixed(2)}
              </span>
            </div>
          </div>

          <button
            onClick={handleOrder}
            className="w-full bg-red-600 text-white py-2 mt-6 hover:bg-red-800"
          >
            Realizar Pedido
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
