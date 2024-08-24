import React from 'react'


import ProductList from '../../Components/Products/ProductList'
import { useProductContext } from '../../Context/ProductContext';

const Home = () => {
  const { state } = useProductContext();
  return (

    <>
    {/* <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</p> */}
      <div className=' flex justify-center flex-col'>

      <h1 className='text-lg font-bold ml-4 2xl:ml-10 md:text-2xl lg:text-3xl 2xl:text-4xl 2xl:mt-5'>Productos Destacados</h1>
      <div className='grid grid-cols-2 gap-4 m-4 2xl:m-10 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 2xl:gap-10'>
        <ProductList products={state.products.slice(0, 8)} /> 
      </div>

      </div>

    
    </>
    
    

    
  )
}

export default Home