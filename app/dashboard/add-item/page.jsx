'use client'
import React, { useState, useContext, useEffect } from 'react'
import { UserContext } from '@app/context/UserContext'
import Alert from '@components/Alert'
import GenderSelect from './components/genderSelect'
import CategorySelect from './components/categorySelect'
import SubCategorySelect from './components/subCategorySelect'

const AddItem = () => {
  const initialFormData = {
    title: '',
    color: '',
    condition: 'בחר מצב',
    description: '',
    price: 0.0,
    creatorId: '',
    brandId: '',
    tags: [],
    size: '',
    categoryId: '',
    subCategoryId: '',
    genderId: '',
  }
  const { userData } = useContext(UserContext)
  const [itemIsUploaded, setItemIsUploaded] = useState(false)
  const [formData, setFormData] = useState(initialFormData)

  useEffect(() => {
    if (userData) {
      setFormData((prevData) => ({
        ...prevData,
        creatorId: userData.id || '',
      }))
    }
  }, [userData])

  const handleTagsChange = (e) => {
    const inputValue = e.target.value
    const tagArray = inputValue.split(',').map((tag) => tag.trim())
    setFormData({
      ...formData,
      tags: tagArray,
    })
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    const newValue = name === 'price' ? parseFloat(value) : value
    setFormData({
      ...formData,
      [name]: newValue,
    })
    console.log(formData)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await fetch('http://localhost:3000/items', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setItemIsUploaded(true)
        console.log('Item created successfully')
      } else {
        console.error('Failed to create item')
      }
    } catch (error) {
      console.error('An error occurred:', error)
    }
  }

  const handleClosePopup = () => {
    setItemIsUploaded(false)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='my-8 p-4'>
        {itemIsUploaded && (
          <Alert
            title='פריט נוסף'
            message='הפריט נוסף לחנות בהצלחה'
            onClose={handleClosePopup} // Pass the onClose function to close the popup
          />
        )}
        <p className='py-2 px-8'>תמונות 5/0 את/ה יכול להוסיף עד חמש תמונות.</p>
        <div className='mt-8'>
          <p className='text-sm mb-4'>צריך להיות כמה שיותר מדויק</p>
          <InputField
            label='כותרת'
            name='title'
            type='text'
            value={formData.title}
            onChange={handleInputChange}
            placeholder='שם או כותרת לפריט'
          />
          <InputField
            label='מחיר'
            name='price'
            type='number'
            value={formData.price}
            onChange={handleInputChange}
            placeholder='מחיר הפריט בשקלים'
          />
          <InputField
            label='מותג'
            name='brandId'
            type='text'
            value={formData.brandId}
            onChange={handleInputChange}
            placeholder='שם המותג או החברה'
          />
          <InputField
            label='צבע'
            name='color'
            type='text'
            value={formData.color}
            onChange={handleInputChange}
            placeholder='צבע הפריט או צבעים'
          />
          <TextAreaField
            label='מידע'
            name='description'
            value={formData.description}
            onChange={handleInputChange}
            placeholder='מידע נוסף על הפריט'
          />
          <SelectField
            label='מצב הפריט'
            name='condition'
            value={formData.condition}
            onChange={handleInputChange}
            options={['בחר מצב', 'חדש', 'כמו חדש', 'משומש טוב', 'משומש']}
          />
          <GenderSelect
            label='בחר מגדר'
            value={formData.genderId}
            onChange={handleInputChange}
          />
          {formData.genderId && (
            <CategorySelect
              label='בחר קטגוריה'
              name='categoryId'
              value={formData.categoryId}
              genderId={formData.genderId}
              onChange={handleInputChange}
            />
          )}
          {formData.categoryId && (
            <SubCategorySelect
              label='בחר קטגוריה'
              name='subCategoryId'
              value={formData.subCategoryId}
              categoryid={formData.categoryId}
              onChange={handleInputChange}
            />
          )}
          <InputField
            label='מידה'
            name='size'
            type='text'
            value={formData.size}
            onChange={handleInputChange}
            placeholder='מידת הפריט או מידה מוערכת'
          />
          <InputField
            label='תגיות (מופרדות בפסיק)'
            name='tags'
            type='text'
            value={formData.tags.join(', ')} // Join the tags array to display them as a comma-separated string
            onChange={handleTagsChange}
            placeholder='הוסף תג (e.g., casual, summer, cotton)'
          />
          <button
            type='submit'
            className='mt-8 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark-bg-blue-600 dark-hover:bg-blue-700 dark:focus:ring-blue-800'
          >
            העלה
          </button>
        </div>
      </div>
    </form>
  )
}

// Custom Input Field Component
const InputField = ({ label, name, type, value, onChange, placeholder }) => (
  <label className='block mb-1'>
    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
      {label}
    </span>
    <input
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      className='mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1'
      placeholder={placeholder}
    />
  </label>
)

// Custom Textarea Field Component
const TextAreaField = ({ label, name, value, onChange, placeholder }) => (
  <label className='block my-1'>
    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
      {label}
    </span>
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      className='mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1'
      placeholder={placeholder}
    />
  </label>
)

// Custom Select Field Component
const SelectField = ({ label, name, value, onChange, options }) => (
  <label htmlFor={name} className='block mb-1'>
    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
      {label}
    </span>
    <select
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      className='mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1'
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  </label>
)

export default AddItem
