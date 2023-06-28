import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getCartTotal } from '../redux/cartSlice';
import CartComp from '../components/cart/CartComp';

const Cart = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

  const {carts, totalAmount, itemCount} = useSelector(state => state.carts)

  console.log("carts:", carts, "& totalAmount:", totalAmount, "& itemCount:", itemCount);

  useEffect(() => {
    dispatch(getCartTotal())
  }, [dispatch])

  return (
    <div>
        {
            carts?.length > 0 ? <div>
                {
                    carts?.map((cart, i) => (
                        <CartComp key={i} cart={cart} />
                    ))
                }
                <div className='flex items-center justify-end text-2xl'>Total Amount: <span className='font-bold text-2xl ml-2'> {totalAmount} £</span> </div>
            </div> : 
            <div>
                Your Cart Is Currently Empty...
            </div>
        }
    </div>
  )
}

export default Cart