'use client'
import Link from 'next/link'
import React, { useState, useContext } from 'react'
import { useRouter } from 'next/navigation'
import { UserContext } from '@app/context/UserContext'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login } = useContext(UserContext)
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ email, password }),
      })

      if (response.ok) {
        const token = await response.json()
        login(token.accessToken)
        router.push('/')
      } else {
        const errorData = await response.json()
        if (errorData.code === 'auth/email-already-in-use') {
          alert('האימייל כבר בשימוש')
        } else {
          console.log('User login encountered an error:', errorData)
        }
      }
    } catch (error) {
      console.log('Error login to user:', error)
    }
  }

  return (
    <div className='flex justify-center h-screen '>
      <div className='sm:w-2/6 w-5/6 my-8 '>
        <h2 className='p-2 font-bold'>התחברות באמצעות</h2>
        <div className='p-2'>
          <button className='btn p-2 bg-yellow-400 w-full'>
            <svg
              viewBox='0 0 512 512'
              fill='currentColor'
              height='2em'
              width='2em'
            >
              <path d='M473.16 221.48l-2.26-9.59H262.46v88.22H387c-12.93 61.4-72.93 93.72-121.94 93.72-35.66 0-73.25-15-98.13-39.11a140.08 140.08 0 01-41.8-98.88c0-37.16 16.7-74.33 41-98.78s61-38.13 97.49-38.13c41.79 0 71.74 22.19 82.94 32.31l62.69-62.36C390.86 72.72 340.34 32 261.6 32c-60.75 0-119 23.27-161.58 65.71C58 139.5 36.25 199.93 36.25 256s20.58 113.48 61.3 155.6c43.51 44.92 105.13 68.4 168.58 68.4 57.73 0 112.45-22.62 151.45-63.66 38.34-40.4 58.17-96.3 58.17-154.9 0-24.67-2.48-39.32-2.59-39.96z' />
            </svg>
          </button>
        </div>
        <div className='p-2'>
          <button className='btn p-2 bg-black text-white w-full p-2'>
            <svg
              viewBox='0 0 1024 1024'
              fill='currentColor'
              height='2em'
              width='2em'
            >
              <path d='M747.4 535.7c-.4-68.2 30.5-119.6 92.9-157.5-34.9-50-87.7-77.5-157.3-82.8-65.9-5.2-138 38.4-164.4 38.4-27.9 0-91.7-36.6-141.9-36.6C273.1 298.8 163 379.8 163 544.6c0 48.7 8.9 99 26.7 150.8 23.8 68.2 109.6 235.3 199.1 232.6 46.8-1.1 79.9-33.2 140.8-33.2 59.1 0 89.7 33.2 141.9 33.2 90.3-1.3 167.9-153.2 190.5-221.6-121.1-57.1-114.6-167.2-114.6-170.7zm-105.1-305c50.7-60.2 46.1-115 44.6-134.7-44.8 2.6-96.6 30.5-126.1 64.8-32.5 36.8-51.6 82.3-47.5 133.6 48.4 3.7 92.6-21.2 129-63.7z' />
            </svg>
          </button>
        </div>
        <div className='p-2 mb-4'>
          <button className='btn btn-active p-2 bg-[#4A66A0] text-white w-full'>
            <svg
              viewBox='0 0 1024 1024'
              fill='currentColor'
              height='2em'
              width='2em'
            >
              <path d='M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-92.4 233.5h-63.9c-50.1 0-59.8 23.8-59.8 58.8v77.1h119.6l-15.6 120.7h-104V912H539.2V602.2H434.9V481.4h104.3v-89c0-103.3 63.1-159.6 155.3-159.6 44.2 0 82.1 3.3 93.2 4.8v107.9z' />
            </svg>
          </button>
        </div>
        <div className='divider'>או</div>
        <form method='post' onSubmit={handleSubmit}>
          <div className='mt-4 p-2'>
            <div className='border-2 border-blue-400 p-2 mb-2'>
              <input
                type='email'
                placeholder='אימייל*'
                className='input input-ghost w-full max-w-xs text-black'
                required
                name='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className='border-2 border-blue-400 p-2 mb-2'>
              <input
                type='password'
                placeholder='ססמא*'
                className='input input-ghost w-full max-w-xs text-black'
                required
                name='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Link href={'/recover'} className='text-xs text-blue-400 link'>
              שכחת את הססמא?
            </Link>
            <button
              type='submit'
              className='btn btn-primary text-white w-full my-2'
            >
              התחבר
            </button>
            <p className='text-xs'>
              אין לך חשבון?
              <Link className='link text-blue-400' href={'/signup'}>
                הרשם עכשיו
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
