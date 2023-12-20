'use client'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const defaultFormFields = {
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
  dateOfBirth: '',
}

const Register = () => {
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { username, email, password, confirmPassword, dateOfBirth } = formFields

  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      alert('Passwords do not match')
      return
    }

    try {
      const response = await fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password, dateOfBirth }),
      })

      if (response.ok) {
        alert('ההרשמה בוצע בהצלחה')
        router.push('/login')
      } else {
        const errorData = await response.json()
        if (errorData.code === 'auth/email-already-in-use') {
          alert('האימייל כבר בשימוש')
        } else {
          console.log('User creation encountered an error:', errorData)
        }
      }
    } catch (error) {
      console.log('Error creating user:', error)
    }
  }

  // const resetFormFields = () => {
  //   setFormFields(defaultFormFields)
  // }

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormFields({ ...formFields, [name]: value })
  }

  return (
    <div className=''>
      <div className='hero min-h-screen'>
        <div className='hero-content flex-col lg:flex-row-reverse'>
          <div className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
            <form method='post' onSubmit={handleSubmit}>
              <div className='card-body'>
                <div className='form-control'>
                  <label className='label'>
                    <span className='label-text'>שם משתמש / כינוי</span>
                  </label>
                  <input
                    name='username'
                    required
                    type='text'
                    placeholder='joedoe34'
                    className='input input-bordered'
                    value={username}
                    onChange={handleChange}
                  />
                </div>
                <div className='form-control'>
                  <label className='label'>
                    <span className='label-text'>אימייל</span>
                  </label>
                  <input
                    required
                    type='email'
                    placeholder='example@gmail.com'
                    className='input input-bordered'
                    name='email'
                    value={email}
                    onChange={handleChange}
                  />
                </div>
                <div className='form-control'>
                  <label className='label'>
                    <span className='label-text'>תאריך ליידה</span>
                  </label>
                  <input
                    required
                    type='date'
                    className='input input-bordered'
                    name='dateOfBirth'
                    value={dateOfBirth}
                    onChange={handleChange}
                  />
                </div>
                <div className='form-control'>
                  <label className='label'>
                    <span className='label-text'>ססמא</span>
                  </label>
                  <input
                    name='password'
                    required
                    type='password'
                    placeholder='***********'
                    className='input input-bordered'
                    value={password}
                    onChange={handleChange}
                  />
                </div>
                <div className='form-control'>
                  <label className='label'>
                    <span className='label-text'>חזור על הססמא</span>
                  </label>
                  <input
                    name='confirmPassword'
                    required
                    minlength='8'
                    maxlength='30'
                    type='password'
                    placeholder='***********'
                    className='input input-bordered'
                    value={confirmPassword}
                    onChange={handleChange}
                  />
                  <label className='label'>
                    <a href='#' className='label-text-alt link link-hover'>
                      ססמא חייבת להכיל לפחות 8 תווים
                    </a>
                  </label>
                </div>
                <div className='form-control mt-6'>
                  <button type='submit' className='btn btn-primary text-white'>
                    הרשם
                  </button>
                </div>
                {/* <div className='divider'> או</div> */}
                {/* <div className='form-control mt-6'>
                  <button className='btn bg-yellow-400 text-black'>
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
                <div className='form-control mt-6'>
                  <button className='btn bg-black text-white'>
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
                <div className='form-control mt-6'>
                  <button className='btn bg-[#4A66A0] text-white'>
                    <svg
                      viewBox='0 0 1024 1024'
                      fill='currentColor'
                      height='2em'
                      width='2em'
                    >
                      <path d='M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-92.4 233.5h-63.9c-50.1 0-59.8 23.8-59.8 58.8v77.1h119.6l-15.6 120.7h-104V912H539.2V602.2H434.9V481.4h104.3v-89c0-103.3 63.1-159.6 155.3-159.6 44.2 0 82.1 3.3 93.2 4.8v107.9z' />
                    </svg>
                  </button>
                </div> */}
              </div>
            </form>
          </div>
          <div className='text-center lg:text-right'>
            <h1 className='text-5xl font-bold'>הרשם עכשיו</h1>
            <p className='py-6'>
              הרשם כדי להנות מהפלטפורמה היחידה בישראל שמאפשרת לכל אדם לקנות
              ולמכור את הבגדים שעומדים בארון, לעשות מזה כסף וגם להתחדש בפריטים
              חדשים ומגניבים.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
