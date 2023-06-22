import Link from 'next/link'
import React from 'react'

const Template = ({ children }) => {
  return (
    <div className='bg-gradient-to-r from-red-50 to-blue-100 hero'>
      <div className='hero-content flex-col'>
        <div className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 rounded-none rounded-t-2xl'>
          <div className='card-body'>
            <h2 className='pb-2 text-neutral font-bold'>פרופיל</h2>
            <div className='flex'>
              <Link
                href={'/profile/user-info'}
                className='rounded-none rounded-r-xl btn btn-neutral btn-sm text-white px-6'
              >
                פרטים
              </Link>
              <Link
                href={'/profile/user-address'}
                className='rounded-none btn btn-neutral btn-sm text-white px-6'
              >
                כתובת
              </Link>
              <Link
                href={'/profile/user-settings'}
                className='rounded-none rounded-l-lg btn btn-neutral btn-sm text-white px-6'
              >
                הגדרות
              </Link>
            </div>
          </div>
        </div>
        {children}
      </div>
    </div>
  )
}

export default Template
