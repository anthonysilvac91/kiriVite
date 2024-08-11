import React, { useState } from 'react';
import { menuItems } from '../../Utils/menuItems';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUser, faMagnifyingGlass, faCartShopping, faX } from '@fortawesome/free-solid-svg-icons';
import logoKiri from '../../Assets/logo_kiri.png';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    
    return (
        <>
        <div className='grid grid-cols-12 justify-center items-center gap-2 bg-background-color' >
{/* --------> Barras de Menú Categorías */}
            <div className='ml-11 flex flex-col items-center col-span-1'>
                <FontAwesomeIcon
                    className='bg-primary-rosa rounded-full p-2 text-white h-6 w-6'
                    icon={menuOpen ? faX : faBars}
                    onClick={toggleMenu}
                    
                />
                <p>Categorías</p>
            </div>
{/* --------> Barras de Logotipo */}
            <div className='col-span-2 ml-10'>
               <Link to={'/'}><img className='w-40' src={logoKiri} alt="Logo_kiri" /></Link> 
            </div>
{/* --------> Barras de Buscador */}
            <div className='col-span-7 flex items-center p-4 mr-5'> 
                <form action="" className='flex w-full items-center'>
                    
                    <input 
                    type="text"
                    placeholder='¿Qué estás buscando?'
                    className='bg-gray-200 rounded-full pl-6 w-full h-12' 
                    />
                    <button>
                    <FontAwesomeIcon icon={faMagnifyingGlass} className=' bg-primary-rosa rounded-full p-3 text-white m-1 h-6 w-6' />
                    </button>
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
        {menuOpen && (
            <> 
             <div onClick={toggleMenu} className='bg-gray-600/80 min-h-screen w-full fixed left-0 right-0'></div>
             <div className='bg-background-color min-h-screen w-96 left-0 right-0 fixed'>
             {/* <Link className='text-3xl' to='/'><h2 className='m-5'>Categorías</h2></Link> */}
            <ul>
             {menuItems.map((item,index) =>(
                 <li className='m-5 hover:text-primary-rosa' key={index}>
                     <Link to={item.route}>
                         <span className={`${location.pathname === item.route ? 'text-primary-rosa' : 'text-text-color'} text-xl font-bold`}>
                         {item.text} 
                        </span>                        
                     </Link>
                     
                     
                 </li>
             ))}
             </ul>
     
             </div> 

             
             
             </>


        )}
       
        </>
    )
}

export default Navbar