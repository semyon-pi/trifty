import React, { useContext } from 'react'
import { UserContext } from '@app/context/UserContext'
import NavUser from './NavUser'
import CartIcon from './CartIcon'
import WishList from './WishList'
import NavButtonsSign from './NavButtonsSign'

const NavRightSide = () => {
  const { isAuthenticated, userData } = useContext(UserContext)

  console.log(userData)

  return (
    <div>
      <div className='flex flex-row'>
        {isAuthenticated ? <NavUser /> : <NavButtonsSign />}
        <CartIcon />
        <WishList />
      </div>
    </div>
  )
}

export default NavRightSide
