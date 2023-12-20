import getAllCategoriesByGender from '@lib/categories/getAllCategoriesByGender'
import React, { useState, useEffect } from 'react'

const CategorySelect = ({ genderId, label, name, value, onChange }) => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    // Call fetchCategoriesByGender initially
    fetchCategoriesByGender(genderId)
  }, [genderId])

  const fetchCategoriesByGender = async (id) => {
    try {
      const data = await getAllCategoriesByGender(id)
      setCategories(data)
    } catch (error) {
      console.error(error.message)
    }
  }

  return (
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
        <option>בחר אופציה</option>
        {categories.map((category) => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>
    </label>
  )
}

export default CategorySelect
