import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Card = ({ product }) => {
  const { title, price, description, id } = product

  return (
    <Link
      className='group block relative overflow-hidden'
      href={`/products/${id}`}
    >
      <button className='absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75'>
        <span className='sr-only'>Wishlist</span>

        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke-width='1.5'
          stroke='currentColor'
          className='h-4 w-4'
        >
          <path
            stroke-linecap='round'
            stroke-linejoin='round'
            d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z'
          />
        </svg>
      </button>
      <img
        src='https://images.unsplash.com/photo-1592921870789-04563d55041c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
        alt=''
        className='h-[350px] w-full object-cover sm:h-[450px]'
      />

      <div className='mt-3 flex justify-between text-sm'>
        <div>
          <h3 className='text-gray-900 group-hover:underline group-hover:underline-offset-4'>
            {title}
          </h3>

          <p className='mt-1.5 max-w-[45ch] text-xs text-gray-500'>
            {description}
          </p>
        </div>

        <p className='text-gray-900'>${price}</p>
      </div>
    </Link>
  )
}

export default Card