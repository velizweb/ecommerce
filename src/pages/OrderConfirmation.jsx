import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { cleanCart } from "../redux/cartSlice";

const OrderConfirmation = ({ order }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleClean = () => {
        dispatch(cleanCart());
        navigate("/");
    }

    return <div className="container mx-auto py-8 px-4 md:px-16 lg:px-24">
    <h2 className="text-2xl font-semibold mb-4">Gracias por su pedido</h2>
    <p>Su pedido se ha realizado correctamente. Recibirá un correo electrónico. </p>
    <div  className="mt-6 p-4 border rounded-lg bg-gray-100">
        <h3  className="text-lg font-semibold mb-2">Resumen de Pedido</h3>
        <p>Número de pedido: {order.orderNumber}</p>
        <div  className="mt-4">
            <h2  className="text-md font-semibold mb-2">Información de envío</h2>
            <p>{order.shippingInformation.address}</p>
            <p>{order.shippingInformation.city}</p>
            <p>{order.shippingInformation.zip}</p>
        </div>
        <div  className="mt-4">
            <h3  className="text-md font-semibold mb-2">Productos Pedidos</h3>
            {order.products.map(product => (
                <div className="flex mb-2 justify-between">
                    <p>{product.name} x {product.quantity}</p>
                    <p>${product.price * product.quantity}</p>
                </div>
            ))}
        </div>
        <div  className="mt-4 flex justify-between">
            <span>Total Price</span>
            <span  className="font-semibold">${order.totalPrice.toFixed(2)}</span>
        </div>

        <div  className="mt-6">
            <button  className="bg-green-500 text-white py-2 px-4 hover:bg-green-600" onClick={handleClean}>Rastrear Pedido</button>
            <button className="ml-4 bg-red-500 text-white py-2 px-4 hover:bg-red-600" onClick={handleClean}>Continuar Comprando</button>
        </div>
    </div>
  </div>;
};

export default OrderConfirmation;
