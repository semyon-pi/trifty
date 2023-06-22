import Link from 'next/link'
import React from 'react'

const Banner = () => {
  return (
    <div className='md:h-72 h-48 flex justify-center'>
      <div className="flex justify-center bg-[url('/assets/DESKTOP.webp')] md:h-72 md:w-3/5 h-48 w-full bg-cover bg-center sm:rounded-lg">
        <div className='self-end mb-8 px-4 py-2 bg-white text-black font-bold border-solid border-2 border-black'>
          <Link href={'/products'}>
            <button>באלי לראות</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Banner
