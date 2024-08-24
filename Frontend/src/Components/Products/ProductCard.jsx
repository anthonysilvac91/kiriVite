import React, { useState } from 'react'
import '../../Styles/style.css'
import StarRating from '../StarRating/StarRating';


const ProductCard = ( {product} ) => {

    const [isFavorite, setIsFavorite] = useState(false);

    const toggleFavorite = () => {
        setIsFavorite(!isFavorite);
    };

  return (
      
    <div className='max-w-xs border-solid border-2 rounded-xl '>
        <div className='flex justify-center h-48'>
            <img src={product.image} className='max-w-40 p-2' alt= {product.title} />
        </div>
       
        <div className='p-4'>
            <div className='h-20'>
            <h3 className='text-xl font-extrabold overflow-hidden line-clamp-2'> {product.title} </h3>
            </div>
            <StarRating rating={4.5} /> {/* Hardcodea la calificación deseada */}
            
            {/* <p className='text-gray-600 mt-3 mb-3 text-justify line-clamp-2 max-h-20 overflow-hidden' >{product.description}</p> */}
            <div className='flex justify-between items-center text-2xl font-semibold mt-2'>
                <span className='font-extrabold'>${product.price}</span>
                <button onClick={toggleFavorite} className='text-red-500' >
                    {isFavorite ? '❤️' : '🤍'}
                </button>
            </div>
            <div className='flex justify-center items-center mt-2'>
                <button className='bg-primary-rosa p-2 pr-8 pl-8 rounded-lg text-white font-bold'  >Agregar</button>
            </div>
            
        </div>
    </div>
    
    
  )
}

export default ProductCard