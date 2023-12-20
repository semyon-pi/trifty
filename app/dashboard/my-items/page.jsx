'use client'
import React, { useContext, useState, useEffect } from 'react'
import getAllUserItems from '@lib/getAllUserItems'
import deleteItem from '@lib/deleteItem'
import { UserContext } from '@app/context/UserContext'
import Alert from '@components/Alert'
import Link from 'next/link'

const MyItems = () => {
  const { userData } = useContext(UserContext)
  const [userItems, setUserItems] = useState([])
  const [isDeleted, setIsDeleted] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  // Create an array of boolean values to track the open/closed state of each dropdown
  const [isDropdownOpenArray, setIsDropdownOpenArray] = useState([])

  const toggleDropdown = (index) => {
    // Toggle the state for the specified index
    const updatedDropdownState = [...isDropdownOpenArray]
    updatedDropdownState[index] = !updatedDropdownState[index]

    // Close all other dropdowns except the one being toggled
    for (let i = 0; i < updatedDropdownState.length; i++) {
      if (i !== index) {
        updatedDropdownState[i] = false
      }
    }

    setIsDropdownOpenArray(updatedDropdownState)
  }

  useEffect(() => {
    console.log(1)
    console.log(userData)
    if (userData) {
      fetchUserItems(userData.id)
    }
  }, [userData, isDeleted])

  const fetchUserItems = async (id) => {
    try {
      if (userData) {
        const data = await getAllUserItems(id)
        setUserItems(data)
        setIsLoading(false)
        // Initialize the dropdown state array with false values for each row
        setIsDropdownOpenArray(new Array(data.length).fill(false))
      }
    } catch (error) {
      setError(error.message)
      setIsLoading(false)
    }
  }

  const handleDelete = async (id, index) => {
    try {
      const success = await deleteItem(id)
      if (success) {
        setUserItems((prevItems) => prevItems.filter((item) => item.id !== id))
        setIsDeleted(true)
        // Close the dropdown for the deleted item
        setIsDropdownOpenArray((prevState) => {
          const updatedState = [...prevState]
          updatedState[index] = false
          return updatedState
        })
      } else {
        console.error('Failed to delete item')
      }
    } catch (error) {
      console.error('Error while deleting item:', error)
    }
  }

  const handleClosePopup = () => {
    setIsDeleted(false)
  }

  return (
    <div className='overflow-x-auto p-2 my-8'>
      {isDeleted && (
        <Alert
          title='פריט נמחק'
          message='מחיקת הפריט בוצעה בהצלחה'
          onClose={handleClosePopup} // Pass the onClose function to close the popup
        />
      )}
      <table className='min-w-full divide-y-2 divide-gray-200 bg-white text-sm border'>
        <thead className='ltr:text-left rtl:text-right'>
          <tr>
            <th className='whitespace-nowrap px-4 py-2 font-medium text-gray-900'>
              כותרת
            </th>
            <th className='whitespace-nowrap px-4 py-2 font-medium text-gray-900'>
              מצב
            </th>
            <th className='whitespace-nowrap px-4 py-2 font-medium text-gray-900'>
              מותג
            </th>
            <th className='whitespace-nowrap px-4 py-2 font-medium text-gray-900'>
              מחיר
            </th>
            <th className='px-4 py-2'></th>
          </tr>
        </thead>

        <tbody className='divide-y divide-gray-200'>
          {isLoading ? (
            <tr>
              <td colSpan='5' className='text-center py-4'>
                Loading...
              </td>
            </tr>
          ) : (
            userItems.map((item, index) => (
              <tr key={item.id}>
                <td className='px-4 py-2 text-left text-sm font-medium text-gray-900'>
                  {item.title}
                </td>
                <td className='px-4 py-2 text-left text-sm text-gray-700'>
                  {item.condition}
                </td>
                <td className='px-4 py-2 text-left text-sm text-gray-700'>
                  {item.brandId}
                </td>
                <td className='px-4 py-2 text-left text-sm text-gray-700'>
                  ₪{item.price}
                </td>
                <td className='whitespace-nowrap px-4 py-2'>
                  <div className='relative'>
                    <div className='inline-flex items-center overflow-hidden rounded-md border bg-white'>
                      <a
                        href='#'
                        className='border-e px-4 py-2 text-sm/none text-gray-600 hover:bg-gray-50 hover:text-gray-700'
                        onClick={() => toggleDropdown(index)} // Toggle the dropdown when the "ערוך" link is clicked
                      >
                        ערוך
                      </a>
                      <button
                        className='h-full p-2 text-gray-600 hover:bg-gray-50 hover:text-gray-700'
                        onClick={() => toggleDropdown(index)} // Toggle the dropdown when the button is clicked
                      >
                        <span className='sr-only'>Menu</span>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          className={`h-4 w-4 transform ${
                            isDropdownOpenArray[index] ? 'rotate-180' : ''
                          }`}
                          viewBox='0 0 20 20'
                          fill='currentColor'
                        >
                          <path
                            fillRule='evenodd'
                            d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                            clipRule='evenodd'
                          />
                        </svg>
                      </button>
                    </div>

                    {isDropdownOpenArray[index] && (
                      <div
                        className='absolute end-0 z-10 mt-2 w-56 divide-y divide-gray-100 rounded-md border border-gray-100 bg-white shadow-lg'
                        role='menu'
                      >
                        <div className='p-2'>
                          <Link
                            href={`/products/${item.id}`}
                            className='block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700'
                            role='menuitem'
                          >
                            צפה
                          </Link>

                          <a
                            href='#'
                            className='block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700'
                            role='menuitem'
                          >
                            עדכן
                          </a>

                          <a
                            href='#'
                            className='block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700'
                            role='menuitem'
                          >
                            צור העתק
                          </a>

                          <a
                            href='#'
                            className='block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700'
                            role='menuitem'
                          >
                            הפוך ללא זמין
                          </a>
                          <a
                            href='#'
                            className='block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700'
                            role='menuitem'
                          >
                            סמן כנמכר
                          </a>
                        </div>

                        <div className='p-2'>
                          <button
                            onClick={() => handleDelete(item.id, index)}
                            className='flex w-full items-center gap-2 rounded-lg px-4 py-2 text-sm text-red-700 hover:bg-red-50'
                            role='menuitem'
                          >
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              className='h-4 w-4'
                              fill='none'
                              viewBox='0 0 24 24'
                              stroke='currentColor'
                              strokeWidth='2'
                            >
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
                              />
                            </svg>
                            מחק פריט
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </td>
                {/* Add more table cells for other item properties */}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  )
}

export default MyItems
