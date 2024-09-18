import React, { useState } from 'react';
import { menuItems } from '../../Utils/menuItems';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUser, faCartShopping, faX } from '@fortawesome/free-solid-svg-icons';
import logoKiri from '../../Assets/logo_kiri.png';
import Search from '../Search/Search';

const NavbarM = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    
    return (
        <header className='bg-background-color' >
        <nav className='grid grid-cols-4 sm:grid-cols-5 md:grid-cols-10 2xl:grid-cols-12 items-center ' >
{/* --------> Barras de Menú Categorías */}
            <div className='col-span-1 flex justify-start'>
                <div className='text-center ml-4 pt-1 2xl:ml-10'>
                    <FontAwesomeIcon
                        className='text-primary-rosa text-xl md:text-2xl 2xl:text-4xl'
                        icon={menuOpen ? faX : faBars}
                        onClick={toggleMenu} 
                    />
                    <p className='md:text-xl 2xl:text-1xl'>Menú</p>
                </div>
            </div>
{/* --------> Barras de Logotipo */}
            <div className='col-span-2 sm:col-span-3 md:col-span-2'>
               <Link to={'/'}><img className='max-w-40 max-h-16 2xl:max-h-44' src={logoKiri} alt="Logo_kiri" /></Link> 
            </div>
{/* --------> Barras de Buscador Desktop */}
            <div className='md:col-span-5 2xl:col-span-7 md:flex items-center p-4 mr-5 hidden '> 
                <Search/>
            </div>
{/* --------> Iconos de Registro y Carrito */}
                <div className='flex justify-end col-span-1 md:col-span-2'>
                    <div className='text-center mr-2 2xl:mr-4'>
                    <FontAwesomeIcon 
                    className='text-primary-rosa text-xl pt-1 md:text-2xl 2xl:text-4xl'
                    icon={faUser} />
                    <p className='md:text-xl 2xl:text-1xl'>Inicio</p>
                    </div> 

                    <div className='text-center mr-4 2xl:mr-10'>
                    <FontAwesomeIcon 
                    className='text-primary-rosa text-xl pt-1 md:text-2xl 2xl:text-4xl'
                    icon={faCartShopping} />
                    <p className='md:text-xl 2xl:text-1xl'>Carrito</p>
                    </div>
                </div>
        </nav> 
{/* --------> Barras de Buscador Mobile */}
        <div className='mr-4 ml-4 mt-3 pb-4 md:hidden'> 
                <Search/>
        </div>
{/* --------> Menú Categorias lateral */}
        {menuOpen && (
            <> 
             <div onClick={toggleMenu} className='bg-gray-600/80 min-h-screen w-full fixed left-0 right-0'></div>
             <div className='bg-background-color min-h-screen w-96 left-0 right-0 fixed'>
             
                <ul>
                {menuItems.map((item,index) =>(
                    <li className='m-5 hover:text-primary-rosa' key={index}>
                        <Link to={`/category/${item.route.toLowerCase()}`}>
                            <span className={`${location.pathname === `/category/${item.route.toLowerCase()}` ? 'text-primary-rosa' : 'text-text-color'} text-xl font-bold`}>
                            {item.text} 
                            </span>                        
                        </Link>
                        
                        
                    </li>
                ))}
                </ul>
             </div> 

             
             
             </>


        )}
       
        </header>
    )
}

export default NavbarM