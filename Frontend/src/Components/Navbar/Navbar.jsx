import React, { useState } from 'react';
// import { menuItems } from '../../Utils/menuItems';
// import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUser, faMagnifyingGlass, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import logoKiri from '../../Assets/logo_kiri.png';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    // const location = useLocation();

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    return (
        <>
        <div className='grid grid-cols-12 justify-center items-center gap-2' >
{/* --------> Barras de Menú Categorías */}
            <div className='ml-11 flex flex-col items-center col-span-1'>
                <FontAwesomeIcon
                    className='bg-primary-rosa rounded-full p-2 text-white h-6 w-6'
                    icon={faBars}
                    onClick={toggleMenu}
                />
                <p>Categorías</p>
            </div>
{/* --------> Barras de Logotipo */}
            <div className='col-span-2 ml-10'>
                <img className='w-40' src={logoKiri} alt="Logo_kiri" />
            </div>
{/* --------> Barras de Buscador */}
            <div className='col-span-7 flex items-center p-4 mr-5'> 
                <form action="" className='flex w-full items-center'>
                    <button>
                    <FontAwesomeIcon icon={faMagnifyingGlass} className=' bg-primary-rosa rounded-full p-3 text-white m-1 h-6 w-6' />
                    </button>
                    <input 
                    type="text"
                    placeholder='¿Qué estás buscando?'
                    className='bg-gray-200 rounded-full pl-6 w-full h-12' 
                    />
                </form>
            </div>
{/* --------> Iconos de Registro y Carrito */}
            <div className='mr-11 flex gap-10 col-span-2'>
                <div className='flex flex-col items-center'>
                <FontAwesomeIcon 
                className='bg-primary-rosa rounded-full p-2 text-white m-1 h-6 w-6'
                icon={faUser} />
                <p>Inicio/Registro</p>
                </div> 
                <div className='flex flex-col items-center'>
                <FontAwesomeIcon 
                className='bg-primary-rosa rounded-full p-2 text-white m-1 h-6 w-6'
                icon={faCartShopping} />
                <p>Carrito</p>
                </div>
            </div> 
        </div> 
        </>
    )
}

export default Navbar