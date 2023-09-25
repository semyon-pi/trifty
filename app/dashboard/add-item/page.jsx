'use client'
import React, { useState, useContext, useEffect } from 'react'
import { UserContext } from '@app/context/UserContext'
import withAuth from '@app/auth/withAuth'

const AddItem = () => {
  const { user } = useContext(UserContext)

  const initialFormData = {
    title: '',
    color: '',
    condition: 'בחר מצב',
    description: '',
    price: 0.0,
    creatorId: user.userId || '', // Set a default value if user.userId is undefined
    brandId: '',
    tags: [],
    size: '',
    // selectedImage: null,
    // selectedCategory: '',
    // selectedSubcategory: '',
  }
  const [formData, setFormData] = useState(initialFormData)

  // Use useEffect to update creatorId when user changes
  useEffect(() => {
    setFormData((prevData) => ({
      ...prevData,
      creatorId: user.userId || '', // Set a default value if user.userId is undefined
    }))
  }, [user.userId])

  // Define your category and subcategory options
  const categories = [
    {
      label: 'ילדים',
      subcategories: [
        'חולצות',
        'מכנסיים',
        'מעילים',
        'נעליים',
        'הלבשה תחתונה',
        'אקססוריז',
      ],
    },
    {
      label: 'גבר',
      subcategories: [
        'חולצות',
        'מכנסיים',
        'מעילים',
        'נעליים',
        'הלבשה תחתונה',
        'אקססוריז',
      ],
    },
    {
      label: 'אישה',
      subcategories: ['Dresses', 'Skirts', 'Blouses'],
    },
  ]

  const handleImageUpload = (e) => {
    const file = e.target.files[0] // Get the first selected file
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        setFormData({
          ...formData,
          selectedImage: event.target.result, // Store the selected image as a data URL
        })
      }
      reader.readAsDataURL(file) // Read the file as a data URL
    }
  }

  const handleCategoryChange = (e) => {
    setFormData({
      ...formData,
      selectedCategory: e.target.value,
      selectedSubcategory: '', // Reset subcategory when category changes
    })
  }

  // Handle subcategory selection
  const handleSubcategoryChange = (e) => {
    setFormData({
      ...formData,
      selectedSubcategory: e.target.value,
    })
  }

  const handleTagsChange = (e) => {
    const inputValue = e.target.value
    const tagArray = inputValue.split(',').map((tag) => tag.trim())
    setFormData({
      ...formData,
      tags: tagArray,
    })
  }

  // Handle changes in form inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target
    // If the field being updated is 'price', convert the value to a float
    const newValue = name === 'price' ? parseFloat(value) : value

    setFormData({
      ...formData,
      [name]: newValue,
    })
  }

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault() // Prevent the default form submission behavior

    try {
      // Make a POST request to create a new item
      const response = await fetch('http://localhost:3000/items', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        console.log('Item created successfully')
      } else {
        console.error('Failed to create item')
      }
    } catch (error) {
      console.error('An error occurred:', error)
    }
    console.log(formData)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='my-8 p-4'>
        <p className='py-2 px-8'>תמונות 5/0 את/ה יכול להוסיף עד חמש תמונות.</p>
        {/* <div>
                <label
                  htmlFor='imageInput'
                  className='cursor-pointer block bg-slate-200 w-auto h-auto  border grid place-items-center text-center'
                >
                  <input
                    type='file'
                    accept='image/*'
                    onChange={handleImageUpload}
                    id='imageInput'
                    className='hidden'
                  />
                  <span className='sr-only'>בחר תמונה</span>
                  {formData.selectedImage ? (
                    <img
                      src={formData.selectedImage}
                      alt='Selected'
                      className='max-h-44 max-w-44'
                    />
                  ) : (
                    'בחר תמונה'
                  )}
                </label>
              </div> */}

        <div className='mt-8'>
          <p className='text-sm mb-4'>צריך להיות כמה שיותר מדויק</p>
          <label className='block mb-1'>
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
              כותרת
            </span>
            <input
              name='title'
              value={formData.title}
              onChange={handleInputChange}
              type='text'
              className='mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1'
              placeholder='שם או כותרת לפריט'
            />
          </label>
          <label className='block mb-1'>
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
              מחיר
            </span>
            <input
              type='number'
              value={formData.price}
              onChange={handleInputChange}
              name='price'
              className='mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1'
              placeholder='מחיר הפריט בשקלים'
            />
          </label>
          <label className='block mb-1'>
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
              מותג
            </span>
            <input
              type='text'
              value={formData.brandId}
              onChange={handleInputChange}
              name='brandId'
              className='mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1'
              placeholder='שם המותג או החברה'
            />
          </label>
          <label className='block mb-1'>
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
              צבע
            </span>
            <input
              type='text'
              value={formData.color}
              onChange={handleInputChange}
              name='color'
              className='mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1'
              placeholder='צבע הפריט או צבעים'
            />
          </label>
          {/* <div className='mb-1'>
                  <label className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                    קטגוריה
                  </label>
                  <select
                    name='category'
                    value={formData.selectedCategory}
                    onChange={handleCategoryChange}
                    className='mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1'
                  >
                    <option value='' disabled>
                      קטגוריה
                    </option>
                    {categories.map((category) => (
                      <option key={category.label} value={category.label}>
                        {category.label}
                      </option>
                    ))}
                  </select>
                </div> */}

          {/* Subcategory Dropdown */}
          {/* {formData.selectedCategory && (
                  <div className='mb-1'>
                    <label className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                      תת קטגוריה
                    </label>
                    <select
                      name='subcategory'
                      value={formData.selectedSubcategory}
                      onChange={handleSubcategoryChange}
                      className='mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1'
                    >
                      <option value='' disabled>
                        תת קטגוריה
                      </option>
                      {categories
                        .find(
                          (category) =>
                            category.label === formData.selectedCategory
                        )
                        .subcategories.map((subcategory) => (
                          <option key={subcategory} value={subcategory}>
                            {subcategory}
                          </option>
                        ))}
                    </select>
                  </div>
                )} */}
          <label className='block mb-1'>
            <span className=' block text-sm font-medium text-slate-700'>
              מידע
            </span>
            <textarea
              name='description'
              value={formData.description}
              onChange={handleInputChange}
              className='mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1'
              placeholder='מידע נוסף על הפריט'
            />
          </label>
          <label for='condition' className='block mb-1 '>
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
              מצב הפריט
            </span>
          </label>
          <select
            id='condition'
            name='condition'
            value={formData.condition}
            onChange={handleInputChange}
            className='mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1'
          >
            <option value='בחר מצב' disabled>
              בחר מצב
            </option>
            <option value='חדש'>חדש</option>
            <option value='כמו חדש'>כמו חדש</option>
            <option value='משומש טוב'>משומש טוב</option>
            <option value='משומש'>משומש</option>
          </select>
          <label className='block my-1'>
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
              מידה
            </span>
            <input
              type='text'
              value={formData.size}
              onChange={handleInputChange}
              name='size'
              className='mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1'
              placeholder='מידת הפריט או מידה מוערכת'
            />
          </label>
          <label className='block text-sm font-medium text-slate-700'>
            תגיות (מופרדות בפסיק):
          </label>
          <input
            type='text'
            name='tags'
            value={formData.tags.join(', ')} // Join the tags array to display them as a comma-separated string
            onChange={handleTagsChange}
            className='mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1'
            placeholder='הוסף תג (e.g., casual, summer, cotton)'
          />
          <button
            type='submit'
            className='mt-8 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
          >
            העלה
          </button>
        </div>
      </div>
    </form>
  )
}

export default AddItem
