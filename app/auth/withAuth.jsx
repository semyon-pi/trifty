'use client'
import { useRouter } from 'next/navigation'
import { useEffect, useContext } from 'react'
import { UserContext } from '@app/context/UserContext'
import LoadingSpinner from '@components/LoadingSpinner'

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
      return <LoadingSpinner />
    }
    return <WrappedComponent {...props} />
  }

  return AuthenticatedComponent
}

export default withAuth
