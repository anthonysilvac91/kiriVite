import React from 'react'

const InfoSection = () => {
  return (
    <div className="flex justify-center items-center space-x-6 py-4 mt-5 mb-5">
        <div>
            <h3 className='text-center text-2xl font-bold'>Mis Compras</h3>
            <p className='text-center mt-2 text-lg'>Haz seguimiento y descarga tu boleta</p>
        </div>

        {/* Separador */}
        <div className="border-l-8 border-red-400 h-36" ></div>

        <div>
            <h3 className='text-center text-2xl font-bold' >Contáctanos</h3>
            <p className='text-center mt-2 text-lg'>Te ayudamos a resolver todas tus dudas y solicitudes</p>
        </div>

        {/* Separador */}
        <div className="border-l-8 border-red-400 h-36" ></div>

        <div>
            <h3 className='text-center text-2xl font-bold' >Cambios y Devoluciones</h3>
            <p className='text-center mt-2 text-lg'>Conoce el proceso y realiza tus devoluciones</p>
        </div>
    </div>
  )
}

export default InfoSection