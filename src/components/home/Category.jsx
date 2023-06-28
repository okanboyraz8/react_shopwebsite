import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategories } from '../../redux/categorySlice';

const Category = ({setCategory}) => {
  const dispatch = useDispatch();
  const {categories} = useSelector(state => state.categories)

  console.log("categories", categories);

  useEffect(() => {
    dispatch(getCategories())
  }, [dispatch])  

  return (
    <div className='w-1/6 bg-gradient-to-r from-pink-500 to-violet-400 p-3 my-3 rounded-md max-h-screen'>
      <div className='border-b pb-2 mx-2 text-xl font-bold'>CATEGORY</div>
      {
        categories?.map((category, i) => (
          <div onClick={() => setCategory(category)} className='text-lg italic mt-1 cursor-pointer hover:opacity-40 p-2' key={i}>{category}</div>
        ))
      }
    </div>
  )
}

export default Category