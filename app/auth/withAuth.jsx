'use client'
import { useRouter } from 'next/navigation'
import { useEffect, useContext } from 'react'
import { UserContext } from '@app/context/UserContext'

const withAuth = (WrappedComponent) => {
  const AuthenticatedComponent = (props) => {
    const { isAuthenticated } = useContext(UserContext)
    const router = useRouter()

    useEffect(() => {
      if (isAuthenticated === false) {
        router.push('/login')
      }
    }, [isAuthenticated]) // Include isAuthenticated as a dependency

    if (isAuthenticated === null) {
      return <div className='h-screen'>Loading...</div>
    }
    return <WrappedComponent {...props} />
  }

  return AuthenticatedComponent
}

export default withAuth
