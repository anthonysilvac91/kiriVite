// ProductContext.jsx

import React, { createContext, useReducer, useContext, useEffect } from 'react';

// Estado inicial del contexto
const initialState = {
  products: [],
  categories: []
};

// Reducer para manejar el estado de productos
const ProductReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_PRODUCTS':
      return { ...state, products: action.payload };
    case 'FETCH_CATEGORIES':
      return { ...state, categories: action.payload };
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

    const fetchCategories = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products/categories');
        const data = await response.json();
        dispatch({ type: 'FETCH_CATEGORIES', payload: data });
      } catch (error) {
        console.error('Error fetching categories:', error);
        // Aquí puedes despachar una acción para manejar el error si es necesario
      }
    };

    fetchProducts();
    fetchCategories();
  }, [dispatch]);

  return (
    <ProductContext.Provider value={{ state }}>
      {children}
    </ProductContext.Provider>
  );
};
