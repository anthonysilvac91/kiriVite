import React from 'react'
import CustomButton from '../CustomButton/CustomButton'

const CallToAction = () => {
  return (
    <div className='flex bg-blue-color p-20 justify-center items-center mt-20 ml-10 mr-10 mb-2'>
        <h2 className='2xl:text-4xl 2xl:mr-10'>¡Suscríbete y recibirás nuevas ofertas y novedades!</h2>
        <CustomButton text={'Suscribirse'}/>
    </div>
  )
}

export default CallToAction