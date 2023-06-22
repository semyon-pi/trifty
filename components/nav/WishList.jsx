import Link from 'next/link'
import React from 'react'

const WishList = () => {
  return (
    <div className='flex-none'>
      <div className='dropdown '>
        <label tabIndex={0} className='btn btn-ghost btn-circle'>
          <div className='indicator'>
            <svg
              className='hover:text-red-400'
              fill='currentColor'
              viewBox='0 0 16 16'
              height='1.5em'
              width='1.5em'
            >
              <path d='M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 01.176-.17C12.72-3.042 23.333 4.867 8 15z' />
            </svg>
            <span className='badge badge-sm indicator-item bg-primary text-white'>
              8
            </span>
          </div>
        </label>
        <div
          tabIndex={0}
          className='mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow'
        >
          <div className='card-body'>
            <span className='font-bold text-lg'>8 פריטים</span>
            <span className='text-info'>שכלול: 99 שח</span>
            <div className='card-actions'>
              <Link href='/wishlist' className='btn btn-primary btn-block'>
                פריטים שאהבתי
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WishList
