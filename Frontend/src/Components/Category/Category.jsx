import React from 'react'
import CustomButton from '../CustomButton/CustomButton'

const Category = () => {
  return (
    <div className="grid grid-cols-6 gap-2 lg:gap-4 mr-4 ml-4 mt-2 sm:grid-rows-4 2xl:grid-cols-8 2xl:mr-10 2xl:ml-10">
        <div className="col-span-3 h-36 sm:row-span-2 sm:h-auto l 2xl:col-span-4 bg-blue-200">
            <div className='flex justify-center items-center flex-col h-full'>
                <h2 className='text-primary-rosa bg-white pr-4 pl-4 pt-1 pb-1 font-bold text-base md:text-2xl md:pr-6 md:pl-6 2xl:text-3xl 2xl:pr-10 2xl:pl-10 2xl:p-2 rounded-lg'>Agendas</h2>
                <CustomButton text="Ver más"/>
            </div>    
        </div>

        <div className="col-span-3 h-36 sm:row-span-1 sm:h-auto 2xl:col-span-2 2xl:row-span-2 bg-red-200">
            <div className='flex justify-center items-center flex-col h-full'>
                <h2 className='text-primary-rosa bg-white pr-4 pl-4 pt-1 pb-1 font-bold text-base md:text-2xl md:pr-6 md:pl-6 2xl:text-3xl 2xl:pr-10 2xl:pl-10 2xl:p-2 rounded-lg'>Accesorios</h2>
                <CustomButton text="Ver más"/>
            </div>
        </div>

        <div className=" col-span-3 h-36 sm:row-span-1 sm:h-auto 2xl:col-span-2 2xl:row-span-2 bg-green-200">
            <div className='flex justify-center items-center flex-col h-full'>
                <h2 className='text-primary-rosa bg-white pr-4 pl-4 pt-1 pb-1 font-bold text-base md:text-2xl md:pr-6 md:pl-6 2xl:text-3xl 2xl:pr-10 2xl:pl-10 2xl:p-2 rounded-lg'>notas Adhesivas</h2>
                <CustomButton text="Ver más"/>
            </div>
        </div>

        <div className="col-span-3 h-36  sm:h-aut 2xl:col-span-2 2xl:row-span-2 2xl:min-h-[300px]   bg-pink-200">
            <div className='flex justify-center items-center flex-col h-full'>
                <h2 className='text-primary-rosa bg-white pr-4 pl-4 pt-1 pb-1 font-bold text-base md:text-2xl md:pr-6 md:pl-6 2xl:text-3xl 2xl:pr-10 2xl:pl-10 2xl:p-2 rounded-lg'>Stickers</h2>
                <CustomButton text="Ver más"/>
            </div>
        </div>

        <div className="col-span-3 h-36 sm:row-span-2 sm:h-auto 2xl:col-span-2  bg-yellow-200">
            <div className='flex justify-center items-center flex-col h-full'>
                <h2 className='text-primary-rosa bg-white pr-4 pl-4 pt-1 pb-1 font-bold text-base md:text-2xl md:pr-6 md:pl-6 2xl:text-3xl 2xl:pr-10 2xl:pl-10 2xl:p-2 rounded-lg'>Planificadores</h2>
                <CustomButton text="Ver más"/>
            </div>
        </div>

        <div className="col-span-3 h-36 sm:row-span-1 2xl:col-span-4 2xl:row-span-2 2xl:h-auto bg-gray-200">
            <div className='flex justify-center items-center flex-col h-full'>
                <h2 className='text-primary-rosa bg-white pr-4 pl-4 pt-1 pb-1 font-bold text-base md:text-2xl md:pr-6 md:pl-6 2xl:text-3xl 2xl:pr-10 2xl:pl-10 2xl:p-2 rounded-lg'>Washitapes</h2>
                <CustomButton text="Ver más"/>
            </div>
        </div>
    </div>
  )
}

export default Category