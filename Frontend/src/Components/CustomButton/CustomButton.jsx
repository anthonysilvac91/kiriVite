import React from 'react'

const CustomButton = ({ text, onClick }) => {
    return (
        <div className='flex justify-center items-center mt-2'>
          <button 
            className='bg-primary-rosa pr-5 pl-5 pt-1 pb-1 sm:p-2 sm:pr-8 sm:pl-8 rounded-lg text-white font-bold text-[12px] md:text-lg lg:text-xl 2xl:text-2xl' 
            onClick={onClick}
          >
            {text}
          </button>
        </div>
      );
    };


export default CustomButton