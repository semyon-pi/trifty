import Link from 'next/link'
import React from 'react'

const NavButtonsSign = () => {
  return (
    <div className='flex items-center'>
      <Link href={'/login'}>
        <button className='btn btn-outline btn-primary btn-sm px-4 font-bold'>
          התחבר
        </button>
      </Link>
      <Link href={'/register'}>
        <button className='btn btn-primary btn-sm mx-2 px-4 font-bold text-white'>
          יצירת משתמש
        </button>
      </Link>
    </div>
  )
}

export default NavButtonsSign
