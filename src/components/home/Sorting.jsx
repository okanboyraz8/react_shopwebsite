import React from 'react'

const Sorting = ({setSort}) => {
  return (
    <div className='bg-gradient-to-r from-indigo-500 to-pink-500 my-5 p-5 flex items-center justify-end'>
      <select onChange={e => setSort(e.target.value)} className='bg-green-100 py-2 px-6' name="" id="">
        <option disabled value="">CHOOSE</option>
        <option value="inc">Increment</option>
        <option value="dec">Decrement</option>
      </select>
    </div>
  )
}

export default Sorting