import React,{ useState } from 'react'
import { IProduct } from '../models'

interface ProductProps {
    product:IProduct,
}

export default function Product({ product }:ProductProps) {

    const[showDetails,setShowDetails] = useState(false)



  return (
    <div 
        className='border py-2 px-4 rounded flex flex-col items-center mb-2'
    >
        <img src={product.image} className="w-1/6" alt={product.title}/>
        <p>{product.title}</p>
        <p className='font-bold'>{product.price}</p>
        <button 
            className={showDetails?'px-4 py-2 border bg-blue-400':'px-4 py-2 border bg-yellow-400'}
            onClick={()=>setShowDetails(prev=>!prev)}
        >
            {showDetails?"Hide Details" : "Show Details"}
        </button>
        {showDetails && <div>
            <p>{ product.description }</p>
            <p>
                Rate:<span style={{fontWeight:'bold'}}>{product.rating?.rate}</span>
            </p>
        </div>}
    </div>
  )
}
