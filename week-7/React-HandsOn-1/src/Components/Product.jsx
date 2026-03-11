import React from 'react'

function Product({ productObj }) {
    const { productId, name, price, brand, description, image } = productObj;

    return (
        <div className="bg-yellow-100 shadow-md rounded-lg overflow-hidden flex flex-col items-center p-4">
            <img src={image} alt={name} className="w-full h-40 object-cover mb-4 rounded" />
            <h2 className="text-xl font-semibold text-gray-800 mb-1">{name}</h2>
            <h3 className="text-sm text-gray-500 mb-2">{brand}</h3>
            <p className="text-gray-600 text-sm mb-3 text-center">{description}</p>
            <h4 className="text-lg font-bold text-gray-900">${price}</h4>
        </div>
    );
}

export default Product;