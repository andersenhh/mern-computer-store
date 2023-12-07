import React from 'react'
import { useLoaderData } from 'react-router-dom'

const SingleProduct = () => {
    const {_id, name, imageURL} = useLoaderData();
  return (
    <div className='mt-28 px-4 lg:px-4'>
        <img src={imageURL} alt=""  className= "h-96"/>
        <h2>{name}</h2>
    </div>
  )
}

export default SingleProduct