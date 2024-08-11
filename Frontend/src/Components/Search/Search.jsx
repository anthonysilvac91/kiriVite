import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Search = () => {
  return (
        <form action="" className='flex w-full items-center'>
            <input 
            type="text"
            placeholder='¿Qué estás buscando?'
            className='bg-gray-200 rounded-lg pl-4 w-full p-2 2xl:p-3 2xl:pl-6' 
            />
            <button>
            <FontAwesomeIcon icon={faMagnifyingGlass} className=' bg-primary-rosa rounded-full p-3 hidden md:flex text-white md:h-5 md:w-5 ml-2 text-xs' />
            </button>
        </form>
  )
}

export default Search