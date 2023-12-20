'use client'
import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '@app/context/UserContext'

const UserSettings = () => {
  const { userData, loading, logout } = useContext(UserContext)
  const [formData, setFormData] = useState({
    currentPassword: '',
    newPassword: '',
    newEmail: '',
    newUsername: '',
  })
  useEffect(() => {}, [userData])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    let email = userData.email
    let password = formData.currentPassword
    const payload = {}

    if (formData.currentPassword && formData.newPassword) {
      payload.password = formData.newPassword
    }

    if (formData.newEmail) {
      payload.email = formData.newEmail
    }

    if (formData.newUsername) {
      payload.username = formData.newUsername
    }

    try {
      const response = await fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ email, password }),
      })
      console.log(payload)
      if (response.ok) {
        const token = await response.json()
        const response2 = await fetch(
          `http://localhost:3000/users/${userData.id}`,
          {
            method: 'PATCH',
            headers: {
              Authorization: `Bearer ${token.accessToken}`,
              'Content-Type': 'application/json',
            },
            credentials: 'include',

            body: JSON.stringify(payload),
          }
        )
        console.log(response2)
      } else {
        console.log('User update encountered an error:')
      }
    } catch (error) {
      console.log('Error login to user:', error)
    }
  }

  return (
    <div className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 rounded-none rounded-b-2xl'>
      <div className='card-body pt-2'>
        <h2 className='font-bold text-center py-0'>הגדרות</h2>
        <hr />
        <form method='post' onSubmit={handleSubmit}>
          <label
            htmlFor='password'
            className='my-3 relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600'
          >
            <input
              type='password'
              id='currentPassword'
              name='currentPassword'
              className='p-2 peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0'
              placeholder='ססמא נוכחית'
              value={formData.currentPassword}
              onChange={handleChange}
            />

            <span className='pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs'>
              ססמא נוכחית*
            </span>
          </label>
          <h3 className='text-sm font-bold text-gray-600'>
            עדכן אחד או יותר מהפרטים הבאים
          </h3>
          <label
            htmlFor='password'
            className='mt-3 relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600'
          >
            <input
              type='password'
              id='newPassword'
              name='newPassword'
              className='p-2 peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0'
              placeholder='ססמא חדשה'
              value={formData.newPassword}
              onChange={handleChange}
            />

            <span className='pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs'>
              ססמא חדשה
            </span>
          </label>

          <label
            htmlFor='email'
            className='mt-3 relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600'
          >
            <input
              type='newEmail'
              id='newEmail'
              name='newEmail'
              className='p-2 peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0'
              placeholder='newEmail'
              value={formData.newEmail}
              onChange={handleChange}
            />

            <span className='pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs'>
              אימייל חדש
            </span>
          </label>

          <label
            htmlFor='newUsername'
            className='mt-3 relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600'
          >
            <input
              type='text'
              id='newUsername'
              name='newUsername'
              className='p-2 peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0'
              placeholder='newUsername'
              value={formData.newUsername}
              onChange={handleChange}
            />

            <span className='pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs'>
              שם משתמש
            </span>
          </label>

          <div className='form-control mt-6 flex flex-row justify-between'>
            <button
              type='submit'
              className='font-bold text-indigo-400 btn-outline btn btn-circle'
            >
              עדכן
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default UserSettings
