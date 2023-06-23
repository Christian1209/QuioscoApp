import Image from 'next/image'
import React from 'react'
import { formatearDinero } from '../helpers';
import { useQuiosco } from '../hooks/useQuiosco';


export const Producto = ({producto}) => {
    const {nombre, imagen, precio } = producto;
    const {handleSetProducto, handleChangeModal} = useQuiosco();
  return (
    <div className='border p-3'>
       <Image 
       src = {`/assets/img/${imagen}.jpg`}
       alt = {`Imagen Platillo ${nombre}`}
       width={350}
       height={10}
       />
       <div className='p-5'>
            <h3 className='text-2xl font-bold'>
                {nombre}
            </h3>
            <p className='mt-5 font-black text-4xl text-amber-500'> 
                {formatearDinero(precio)}
            </p>
            <button
              type= "button"
              className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold rounded-md"
              onClick= {() => {
                handleChangeModal()
                handleSetProducto(producto) 
              }}
            >
              Agregar
            </button>
       </div>
    </div>
  )
}
