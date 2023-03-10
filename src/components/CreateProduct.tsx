import React,{ useState } from 'react';
import { IProduct } from '../models';
import axios,{AxiosError} from 'axios';
import ErrorMessage from './ErrorMessage';


const productData: IProduct= {
    title: 'test product',
    price: 13.5,
    description: 'lorem ipsum set',
    image: 'https://i.pravatar.cc',
    category: 'electronic',
    rating:{
        rate: 25,
        count: 10,
    }
}

interface CreateProductProps{
    onCreate:(product:IProduct)=>void
}


export default function CreateProduct({ onCreate }:CreateProductProps) {

    const[value,setValue] = useState("")
    const[error,setError] = useState("")

    async function submitHandler(event:React.FormEvent){
        event.preventDefault()
        setError("")

        if(value.trim().length === 0){
            setError('Please enter valid title')
            return
        }
        setValue('')
        productData.title = value
        const response = await axios.post<IProduct>('https://fakestoreapi.com/products', productData)
        onCreate(response.data)
    }


    function changeValue(evenet:React.ChangeEvent<HTMLInputElement>){
        setValue(evenet.target.value)
    }




  return (
    <form onSubmit={submitHandler}>
        <input 
            type="text" 
            className='border py-2 px-4 mb-2 w-full outline-0'
            placeholder='Enter product title...'
            value= {value}
            onChange= {changeValue}
        />
        {error && <ErrorMessage error={error}/> }
        <button type='submit' className='py-2 px-4 border bg-yellow-400 hover:text-white'>Create</button>
    </form>
  )
}
