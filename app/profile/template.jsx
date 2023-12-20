'use client'
import Link from 'next/link'
import React from 'react'
import withAuth from '@app/auth/withAuth'

const Template = ({ children }) => {
  return (
    <div className='hero'>
      <div className='hero-content flex-col'>
        <div className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 rounded-none rounded-t-2xl'>
          <div className='card-body'>
            <h2 className='pb-2 text-neutral font-bold'>פרופיל</h2>
            <div className='flex'>
              <Link
                href={'/profile/info'}
                className='rounded-none rounded-r-xl btn btn-neutral btn-sm text-white px-6'
              >
                פרטים
              </Link>
              <Link
                href={'/profile/address'}
                className='rounded-none btn btn-neutral btn-sm text-white px-6'
              >
                כתובת
              </Link>
              <Link
                href={'/profile/settings'}
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

export default withAuth(Template)
