import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';

const DetailComp = ({productDetail}) => {
  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(0);

  const decrement = () => {
    if(quantity > 0) setQuantity(quantity - 1)
  }

  const increment = () => {
    if(quantity < productDetail?.rating?.count) setQuantity(quantity + 1)
  }

  const addBasket = () => {
    dispatch(addToCart({id: productDetail?.id, title: productDetail?.title, image: productDetail?.image, price: productDetail?.price, quantity: quantity}))
  }

  return (
    <div className='flex gap-10 my-10'>
        <img className='w-[600px] h-[600px] object-cover' src={productDetail?.image} alt="" />
        <div className=''>
          <div className='text-3xl font-bold'>{productDetail?.title}</div>
          <div className='my-2 text-2xl italic'>{(productDetail?.description)}</div>
          <div className='my-2 text-xl text-red-500'>Rating: {productDetail?.rating?.rate} & Count: {productDetail?.rating?.count}</div>
          <div className='text-4xl font-bold'>Price: {productDetail?.price} <span className=''>£</span></div>
          <div className='flex items-center gap-5 my-4'>
            <div onClick={decrement} className='text-5xl cursor-pointer'>-</div>
            <input className='w-20 h-18 text-center text-4xl font-bold' type="text" value={quantity} />
            <div onClick={increment} className='text-5xl cursor-pointer'>+</div>
          </div>
          <div onClick={addBasket} className='border w-[200px] h-16 rounded-md text-2xl flex items-center justify-center cursor-pointer bg-green-500 hover:bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%'>Add to Cart</div>
        </div>
    </div>
  )
}

export default DetailComp