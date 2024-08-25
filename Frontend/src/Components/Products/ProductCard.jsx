import React, { useState } from 'react'
import '../../Styles/style.css'
import StarRating from '../StarRating/StarRating';
import CustomButton from '../CustomButton/CustomButton';


const ProductCard = ( {product} ) => {

    const [isFavorite, setIsFavorite] = useState(false);

    const toggleFavorite = () => {
        setIsFavorite(!isFavorite);
    };

  return (
      
    <div className='max-w-xs border-solid border-2 rounded-xl 2xl:min-w-full'>
        <div className='flex justify-center h-28 sm:h-32 md:h-36 lg:h-40 2xl:h-44'>
            <img src={product.image} className='max-w-40 p-2 2xl:max-w-52' alt= {product.title} />
        </div>
       
        <div className='p-4'>
            <div className=' h-14 md:h-16 lg:h-10 2xl:h-14'>
            <h3 className='text-sm sm:text-base md:text-lg lg:text-2xl 2xl:text-3xl font-extrabold overflow-hidden line-clamp-1'> {product.title} </h3>
            </div>
            <StarRating rating={4.5} /> {/* Hardcodeado */}
            
            <div className='flex justify-between items-center text-md sm:text-lg md:text-xl lg:text-3xl 2xl:text-3xl font-semibold mt-2 2xl:mt-4'>
                <span className='font-extrabold'>${product.price}</span>
                <button onClick={toggleFavorite} className='text-red-500' >
                    {isFavorite ? '❤️' : '🤍'}
                </button>
            </div>
            <CustomButton text="Agregar"/>
            
        </div>
    </div>
    
    
  )
}

export default ProductCard