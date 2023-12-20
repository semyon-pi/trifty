'use client'
import React, { useState, useEffect, useContext } from 'react'
import { UserContext } from '@app/context/UserContext'
import Popup from '@components/Popup'

async function checkUserShippingInfo(userId) {
  try {
    const response = await fetch(
      `http://localhost:3000/shipping-info/user/${userId}`
    )

    if (response.ok) {
      const responseData = await response.text() // Read the response body as text
      if (responseData) {
        return JSON.parse(responseData) // Parse JSON if data is not empty
      } else {
        return null // Return null if response body is empty
      }
    } else {
      return null
    }
  } catch (error) {
    console.error('Error while checking user shipping info:', error)
    throw error
  }
}

const UserAddress = () => {
  const { userData } = useContext(UserContext)
  const [shippingInfoUpdated, setShippingInfoUpdated] = useState(false)
  const [shippingInfoExists, setShippingInfoExists] = useState(false)
  const [shippingInfo, setShippingInfo] = useState({
    firstName: '',
    lastName: '',
    country: 'ישראל',
    city: '',
    address: '',
    phoneNumber: '',
    zipCode: 0,
    floor: 0,
    apartment: 0,
    entrance: '',
    userId: '',
    id: '',
    createdAt: '2023-09-23T09:01:25.713Z',
    updatedAt: '2023-09-23T09:01:25.713Z',
  })

  useEffect(() => {
    async function fetchUserShippingInfo() {
      try {
        const userShippingInfo = await checkUserShippingInfo(userData.id)
        if (userShippingInfo) {
          setShippingInfo(userShippingInfo)
          setShippingInfoExists(true)
        } else {
          setShippingInfoExists(false)
          setShippingInfo({
            ...shippingInfo, // Spread the existing properties
            userId: userData.id,
          })
        }
      } catch (error) {}
    }

    fetchUserShippingInfo()
  }, [userData])

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      console.log(shippingInfo)
      if (!shippingInfoExists) {
        const response = await fetch(`http://localhost:3000/shipping-info`, {
          method: 'POST',
          body: JSON.stringify(shippingInfo),
          headers: {
            'Content-Type': 'application/json',
          },
        })

        if (response.ok) {
          shippingInfoExists(true)
          setShippingInfoUpdated(true)
        } else {
          console.error('Failed to create address:', response.statusText)
        }
      } else {
        const response = await fetch(
          `http://localhost:3000/shipping-info/${shippingInfo.id}`,
          {
            method: 'PATCH',
            body: JSON.stringify(shippingInfo),
            headers: {
              'Content-Type': 'application/json',
            },
          }
        )

        if (response.ok) {
          setShippingInfoUpdated(true)
        } else {
          console.error('Failed to update address:', response.statusText)
        }
      }
    } catch (error) {
      console.error('Error while processing request:', error.message)
    }
  }

  const handleClosePopup = () => {
    setShippingInfoUpdated(false)
  }
  function renderInputField(labelText, inputName, value, onChange) {
    const hasData = value !== ''

    return (
      <label
        htmlFor={inputName}
        className={`my-2 relative block rounded-md border border-gray-200 shadow-sm ${
          hasData
            ? 'focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600'
            : ''
        }`}
      >
        <input
          type='text'
          className='p-2 peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0'
          placeholder=''
          name={inputName}
          value={value}
          onChange={onChange}
        />

        <span
          className={`pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all ${
            hasData
              ? 'peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm'
              : 'peer-focus:top-0 peer-focus:text-xs'
          }`}
        >
          {labelText}
        </span>
      </label>
    )
  }

  return (
    <div className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 rounded-none rounded-b-2xl'>
      {shippingInfoUpdated && (
        <Popup
          title='מידע עודכן'
          text='פרטי משלוח עודכנו בהצלחה'
          onClose={handleClosePopup}
        />
      )}
      <form onSubmit={handleSubmit}>
        <div className='card-body pt-2'>
          <h2 className='font-bold text-center py-0'>כתובת למשלוח</h2>
          <hr />

          {renderInputField(
            'שם פרטי',
            'firstName',
            shippingInfo.firstName,
            (e) =>
              setShippingInfo({ ...shippingInfo, firstName: e.target.value })
          )}

          {renderInputField(
            'שם משפחה',
            'lastName',
            shippingInfo.lastName || '',
            (e) =>
              setShippingInfo({ ...shippingInfo, lastName: e.target.value })
          )}

          {renderInputField(
            'ישוב / עיר',
            'city',
            shippingInfo.city || '',
            (e) => setShippingInfo({ ...shippingInfo, city: e.target.value })
          )}

          {renderInputField(
            'רחוב',
            'address',
            shippingInfo.address || '',
            (e) => setShippingInfo({ ...shippingInfo, address: e.target.value })
          )}

          {renderInputField(
            'כניסה',
            'entrance',
            shippingInfo.entrance || '',
            (e) =>
              setShippingInfo({ ...shippingInfo, entrance: e.target.value })
          )}

          {renderInputField('קומה', 'floor', shippingInfo.floor || '', (e) =>
            setShippingInfo({
              ...shippingInfo,
              floor: parseInt(e.target.value, 10),
            })
          )}

          {renderInputField(
            'דירה',
            'apartment',
            shippingInfo.apartment || '',
            (e) =>
              setShippingInfo({
                ...shippingInfo,
                apartment: parseInt(e.target.value, 10),
              })
          )}

          {renderInputField(
            'מיקוד',
            'zipCode',
            shippingInfo.zipCode || '',
            (e) =>
              setShippingInfo({
                ...shippingInfo,
                zipCode: parseInt(e.target.value, 10),
              })
          )}

          {renderInputField(
            'מספר פלאפון',
            'phoneNumber',
            shippingInfo.phoneNumber || '',
            (e) =>
              setShippingInfo({ ...shippingInfo, phoneNumber: e.target.value })
          )}

          <div className='form-control mt-6 flex flex-row justify-between'>
            <button
              className='font-bold text-indigo-400 btn-outline btn btn-circle'
              type='submit'
            >
              {shippingInfoExists ? 'עדכן' : 'צור'}
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default UserAddress
