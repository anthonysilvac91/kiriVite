// ProductContext.jsx

import React, { createContext, useReducer, useContext, useEffect } from 'react';

// Estado inicial del contexto
const initialState = {
  products: []
};

// Reducer para manejar el estado de productos
const ProductReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_PRODUCTS':
      return { ...state, products: action.payload };
    default:
      return state;
  }
};

// Crear el contexto
const ProductContext = createContext();

// Hook para usar el contexto en otros componentes
export const useProductContext = () => useContext(ProductContext);

// Componente proveedor del contexto
export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ProductReducer, initialState);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        dispatch({ type: 'FETCH_PRODUCTS', payload: data });
      } catch (error) {
        console.error('Error fetching products:', error);
        // Aquí puedes despachar una acción para manejar el error si es necesario
      }
    };

    fetchProducts();
  }, [dispatch]);

  return (
    <ProductContext.Provider value={{ state }}>
      {children}
    </ProductContext.Provider>
  );
};
