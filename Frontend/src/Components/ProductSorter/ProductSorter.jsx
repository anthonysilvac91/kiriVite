import React, { useEffect, useState } from 'react'

const ProductSorter = ({products, onSortedProducts}) => {

    const [sortOption, setSortOption] = useState('destacados');

    const ordenarProductos = (products) =>{
        switch(sortOption){
            case 'mayor-precio':
                return[...products].sort((a, b) => b.price - a.price);
            case 'menor-precio':
                return[...products].sort((a, b) => a.price - b.price);
            case 'destacados':
            default:

            return [...products]
        }
    };

    useEffect(() =>{
        const productosOrdenados = ordenarProductos(products);

        if(productosOrdenados !== products){

            onSortedProducts(productosOrdenados);
        }
    }, [sortOption, products, onSortedProducts]);

  return (
    <div>
        <label htmlFor="sort">Ordenar por:</label>
        <select value={sortOption} id="sort" 
            onChange={(e) =>setSortOption(e.target.value)}>
                <option value='destacados'>Destacados</option>
                <option value='mayor-precio'>Mayor Precio</option>
                <option value='menor-precio'>Menor Precio</option>
            </select>
    </div>
  )
}

export default ProductSorter