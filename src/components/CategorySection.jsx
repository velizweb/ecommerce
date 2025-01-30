import React from 'react'

const CategorySection = () => {
    const categories = [
        {
            title: "Hombre",
            imageUrl: "https://img.freepik.com/foto-gratis/sonriente-joven-vestido-gorro-fiesta-azul-extendiendo-manos-aisladas-pared-rosa_141793-128372.jpg"
        },
        {
            title: "Mujer",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlqvOh_Ul_AXMp6ooNZZY7UHgdQjClmvRdsQ&s"
        },
        {
            title: "Niños",
            imageUrl: "https://previews.123rf.com/images/serezniy/serezniy2303/serezniy230330132/205709611-lindo-ni%C3%B1o-sobre-fondo-de-color.jpg"
        },
    ];
  return (
    <div className='container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 cursor-pointer'>
            {
                categories.map((item, idx) => (
                    <div key={idx} className='relative h-64 transform transition-transform duration-300 hover:scale-105'>
                        <img src={item.imageUrl} className='w-full h-full object-cover rounded-lg shadow-md' />
                        <div className='absolute top-20 left-12'>
                            <p className='text-xl font-bold'>{item.title}</p>
                            <p className='text-gray-600'>Ver Todo</p>
                        </div>
                    </div>
                ))
            }
    </div>
  )
}

export default CategorySection