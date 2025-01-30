import React from "react";
import {
  FaHeadset,
  FaLock,
  FaMoneyBillWave,
  FaShippingFast,
  FaTag,
} from "react-icons/fa";

const InfoSection = () => {
  const infoItems = [
    {
      icon: <FaShippingFast className="text-3xl text-red-600" />,
      title: "Envíos Gratuitos",
      description: "Recibe tus pedidos sin costo adicional",
    },
    {
      icon: <FaHeadset className="text-3xl text-red-600" />,
      title: "Soporte 24/7",
      description: "Estamos aquí para ayudarte en cualquier momento",
    },
    {
      icon: <FaMoneyBillWave className="text-3xl text-red-600" />,
      title: "100% Banco de dinero",
      description: "Reembolso completo si no está satisfecha",
    },
    {
      icon: <FaLock className="text-3xl text-red-600" />,
      title: "Pague Seguro",
      description: "Su información de pago está segura con nosotros",
    },
    {
      icon: <FaTag className="text-3xl text-red-600" />,
      title: "Descuentos",
      description: "Disfruta de los mejores precios en nuestros productos",
    },
  ];
  return (
    <div className="bg-white pb-8 pt-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-12 lg:grid-cols-5 gap-4">
        {infoItems.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center text-center p-4 border rounded-lg shawdow-md 
          transform transition-transform duration-300 hover:scale-105 cursor-pointer"
          >
            {item.icon}
            <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
            <p className="mt-2 text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoSection;
