import React, { useContext } from 'react'
import { UserContext } from '@app/context/UserContext'
import Image from 'next/image'
import Link from 'next/link'

const NavUser = () => {
  const { isAuthenticated, user, logout } = useContext(UserContext)
  return (
    <div className='dropdown'>
      <label tabIndex={0} className='btn btn-ghost btn-circle avatar'>
        <div className='w-10 rounded-full'>
          <Image
            src={'/assets/profile.jpg'}
            width={500}
            height={500}
            alt={'תמונה של פרטי לבוש שונים על אישה'}
            title={'חולצות'}
            href={'/'}
            className={'hover:opacity-50 drop-shadow-xl rounded-lg'}
          />
        </div>
      </label>
      <ul
        tabIndex={0}
        className='menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'
      >
        <li>
          <Link href='/profile/user-info'>פרופיל</Link>
        </li>
        <li>
          <Link href='/dashboard'>חנות אישית</Link>
        </li>
        <li>
          <a onClick={logout}>התנתקות</a>
        </li>
      </ul>
    </div>
  )
}

export default NavUser
