import Link from 'next/link'
import React, { useContext } from 'react'
import { CartContext } from '@app/context/CartContext'
import { countItemsAndTotalPrice } from '@utils/funcCartItems'

const CartIcon = () => {
  const { cartItems } = useContext(CartContext)
  const { itemCount, totalPrice } = countItemsAndTotalPrice(cartItems)

  return (
    <div className='flex-none'>
      <div className='dropdown '>
        <label tabIndex={0} className='btn btn-ghost btn-circle'>
          <div className='indicator'>
            <svg
              className='hover:text-red-400'
              fill='currentColor'
              viewBox='0 0 16 16'
              height='2em'
              width='2em'
            >
              <path d='M8 1a2.5 2.5 0 012.5 2.5V4h-5v-.5A2.5 2.5 0 018 1zm3.5 3v-.5a3.5 3.5 0 10-7 0V4H1v10a2 2 0 002 2h10a2 2 0 002-2V4h-3.5zM2 5h12v9a1 1 0 01-1 1H3a1 1 0 01-1-1V5z' />
            </svg>
            <span className='badge badge-sm indicator-item bg-primary text-white'>
              {itemCount}
            </span>
          </div>
        </label>
        <div
          tabIndex={0}
          className='mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow'
        >
          <div className='card-body'>
            <span className='font-bold text-lg'>{itemCount} פריטים</span>
            <span className='text-info'>שכלול: ₪{totalPrice.toFixed(1)}</span>
            <div className='card-actions'>
              <Link href='/cart' className='btn btn-primary btn-block'>
                צפה
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartIcon
