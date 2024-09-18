import React from 'react';
import { useParams } from 'react-router-dom';
import { useProductContext } from '../../Context/ProductContext';
import ProductList from '../../Components/Products/ProductList';

const Categories = () => {
  const { categoryName } = useParams();
  const { state } = useProductContext();

  // Verifica que state.products esté definido y sea un arreglo
  const products = Array.isArray(state.products) ? state.products : [];

  const filtrarProductos = products.filter(
    (product) => product.category.toLowerCase() === categoryName.toLowerCase()
  );

  console.log('Número de productos filtrados:', filtrarProductos.length);

  return (
    <div>
      <h1>Productos en la categoría: {categoryName}</h1>
      <div className='grid grid-cols-2 gap-4 m-4 2xl:ml-10 2xl:mr-10 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 2xl:gap-10'>

      <ProductList products={filtrarProductos.slice(0, 10)} />
      </div>
    </div>
  );
};

export default Categories;
