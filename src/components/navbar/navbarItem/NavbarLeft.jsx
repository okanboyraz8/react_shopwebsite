import React from 'react'

const NavbarLeft = () => {
    return (
        <div className='flex items-center justify-between space-x-1 mb-5'>
            <img className='w-[150px]' src="https://plus.unsplash.com/premium_photo-1668447247133-e5b6354a7763?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" />
            <div>
                <div className='text-3xl'>THE GREAT</div>
                <div className='text-3xl'>BRITISH</div>
                <div className='text-3xl'>SHOP</div>
            </div>
        </div>
    )
}

export default NavbarLeft