import React from 'react'
import ProductList from '../../Components/Products/ProductList'
import { useProductContext } from '../../Context/ProductContext';
import Category from '../../Components/Category/Category';
import img_banner from '../../../src/Assets/banner_stabilo.jpg'
import CallToAction from '../../Components/CallToAction/CallToAction';

const Home = () => {
  const { state } = useProductContext();
  return (

    <>
      {/* Banner Stabilo */}
      <div className='mr-4 ml-4 2xl:w-auto lg:mr-20 lg:ml-20 mt-2'>
        <img className='w-full' src={img_banner} alt="banner_stabilo" />
      </div>
      <div className=' flex justify-center flex-col lg:ml-10 lg:mr-10'>
        <h1 className='text-base mt-2 font-bold ml-4 2xl:ml-10 md:text-2xl lg:text-3xl 2xl:text-4xl 2xl:mt-5 '>Categorías</h1>
        <Category/>
        <h1 className='text-lg font-bold ml-4 2xl:ml-10 md:text-2xl lg:text-3xl 2xl:text-4xl 2xl:mt-5 lg:mt-2 lg:mr-10'>Productos Destacados</h1>
        <div className='grid grid-cols-2 gap-4 m-4 2xl:ml-10 2xl:mr-10 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 2xl:gap-10'>
           <ProductList products={state.products.slice(0, 10)} />
        </div>
        <div>
          <CallToAction/>
        </div>
      </div>

    
    </>
    
    

    
  )
}

export default Home