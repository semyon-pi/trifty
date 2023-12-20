import React, { useState, useEffect } from 'react'
import getAllSubcategoriesByCategoryId from '@lib/categories/getAllSubcategoriesByCategoryId'

const SubCategorySelect = ({ categoryid, label, name, value, onChange }) => {
  const [subCategories, setSubCategories] = useState([])

  useEffect(() => {
    fetchSubcategoriesByCategoryId(categoryid)
  }, [categoryid])

  const fetchSubcategoriesByCategoryId = async (id) => {
    try {
      const data = await getAllSubcategoriesByCategoryId(id)
      console.log(data)
      setSubCategories(data)
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

        {subCategories.map((subCategory) => (
          <option key={subCategory.id} value={subCategory.id}>
            {subCategory.name}
          </option>
        ))}
      </select>
    </label>
  )
}

export default SubCategorySelect
