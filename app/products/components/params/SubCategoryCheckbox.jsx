import React, { useState, useEffect } from 'react'
import getAllSubcategoriesByCategoryId from '@lib/categories/getAllSubcategoriesByCategoryId'

const SubCategoryCheckbox = ({ categoryid, name, onChange }) => {
  const [subCategories, setSubCategories] = useState([])

  useEffect(() => {
    fetchSubcategoriesByCategoryId(categoryid)
  }, [categoryid])

  const fetchSubcategoriesByCategoryId = async (id) => {
    try {
      const data = await getAllSubcategoriesByCategoryId(id)
      setSubCategories(data)
    } catch (error) {
      console.error(error.message)
    }
  }

  return (
    <div>
      {subCategories.map((subCategory) => (
        <li key={subCategory.id}>
          <label
            htmlFor={subCategory.id}
            className='inline-flex items-center gap-2'
          >
            <input
              type='checkbox'
              id={subCategory.id}
              name={name}
              value={subCategory.name}
              className='h-5 w-5 rounded border-gray-300'
              onChange={onChange}
            />
            <span className='text-sm font-medium text-gray-700'>
              {subCategory.name}
            </span>
          </label>
        </li>
      ))}
    </div>
  )
}

export default SubCategoryCheckbox
