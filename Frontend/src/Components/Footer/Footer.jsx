import React from 'react'
import logo from '../../Assets/logo_kiri.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  return (
    <div className='grid grid-cols-3 h-48 lg:mr-20 lg:ml-20'>
        <div className='h-40 flex items-center'>
            <img className='h-full' src={logo} alt="logo_kiri" />
        </div>
        <div className='flex justify-center items-center'>
            <div className='bg-primary-rosa mr-10 rounded-full h-16 w-16 flex justify-center items-center'>
                <FontAwesomeIcon className='text-4xl text-white p-3 ' icon={faInstagram} />
            </div>
            <div className='bg-primary-rosa mr-10 rounded-full h-16 w-16 flex justify-center items-center'>
                <FontAwesomeIcon className='text-4xl text-white p-3 ' icon={faFacebookF} />
            </div >
            <div className='bg-primary-rosa rounded-full h-16 w-16 flex justify-center items-center'>
                <FontAwesomeIcon className='text-4xl text-white p-3 ' icon={faWhatsapp} /> 
            </div>

        </div>
        <div className='flex justify-end items-center'>
            <ul className='mr-10 text-1xl font-bold'>
                <li>Inicio</li>
                <li>Categoría</li>
                <li>Despacho</li>
            </ul>
            <ul className='mr-10 text-1xl font-bold'>
                <li>Sobre Nosotros</li>
                <li>Contacto</li>
                <li>FAQ</li>
            </ul>
        </div>
    </div>
  )
}

export default Footer