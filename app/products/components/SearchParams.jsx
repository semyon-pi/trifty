'use client'
import React, { useContext, useState } from 'react'
import { ShopContext } from '@app/context/ShopContext'
import CategorySelect from '@app/dashboard/add-item/components/categorySelect'
import HoverText from './params/HoverText'
import SubCategoryCheckbox from './params/SubCategoryCheckbox'
import { clothingSizes, hebrewColors, genderOptions } from './params/StaticData'

const SearchParams = () => {
  const initialFormData = {
    colors: [],
    conditions: [],
    priceFrom: 0.0,
    priceTo: 0.0,
    brands: [],
    sizes: [],
    subCategories: [],
  }
  const initialCategorySelection = {
    categoryId: '',
    genderId: '',
  }
  const { handleSortByChange } = useContext(ShopContext)
  const [formData, setFormData] = useState(initialFormData)
  const [categorySelection, setCategorySelection] = useState(
    initialCategorySelection
  )

  const handleResetArray = (field) => {
    let updatedFormData = {
      ...formData,
      [field]: [],
    }

    if (field === 'priceFrom' || field === 'priceTo') {
      updatedFormData = {
        ...updatedFormData,
        priceFrom: 0.0,
        priceTo: 0.0,
      }
    }

    setFormData(updatedFormData)

    const checkboxes = document.querySelectorAll(`input[name='${field}']`)
    checkboxes.forEach((checkbox) => {
      checkbox.checked = false
    })
  }

  const handleCategoryChange = (e) => {
    const { name, value } = e.target
    setCategorySelection({
      ...categorySelection,
      [name]: value,
    })
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    const newValue = convertToNumberIfNeeded(name, value)

    let updatedFormData = { ...formData }

    switch (name) {
      case 'subCategories':
        updatedFormData.subCategories = handleToggleArrayValue(
          formData,
          'subCategories',
          value
        )
        break
      case 'conditions':
        updatedFormData.conditions = handleToggleArrayValue(
          formData,
          'conditions',
          value
        )
        break
      case 'colors':
        updatedFormData.colors = handleToggleArrayValue(
          formData,
          'colors',
          value
        )
        break
      case 'brands':
        updatedFormData.brands = handleToggleArrayValue(
          formData,
          'brands',
          value
        )
        break
      case 'sizes':
        updatedFormData.sizes = handleToggleArrayValue(formData, 'sizes', value)
        break
      default:
        updatedFormData = {
          ...formData,
          [name]: newValue,
        }
    }

    setFormData(updatedFormData)
    console.log(formData)
  }
  return (
    <div className='mt-8 sm:flex sm:items-center sm:justify-between'>
      <div className='hidden sm:flex sm:gap-4'>
        {/* category selection */}
        {/* Choose gender -- Select option */}
        <FilterSection title='מגדר'>
          <FilterContent>
            <div className='p-4'>
              <label htmlFor='gender' className='block mb-1'>
                <select
                  id='gender'
                  name='genderId'
                  onChange={handleCategoryChange}
                  value={categorySelection.genderId}
                  className='mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1'
                >
                  <option>בחר אופציה</option>
                  {genderOptions.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </label>
            </div>
          </FilterContent>
        </FilterSection>

        {/* Category Select Option -- will show when gender is selected, since categories are gender specific */}
        {categorySelection.genderId ? (
          <FilterSection title={'תת קטגוריה'}>
            <FilterContent>
              <header className='flex items-center justify-between p-4'>
                <span className='text-sm text-gray-700'>
                  {formData.sizes.length} נבחרו
                </span>
                <button
                  type='button'
                  className='text-sm text-gray-900 underline underline-offset-4'
                >
                  איפוס
                </button>
              </header>
              <ul className='space-y-1 border-t border-gray-200 p-4'>
                <CategorySelect
                  label='בחר קטגוריה'
                  name='categoryId'
                  value={categorySelection.categoryId}
                  genderId={categorySelection.genderId}
                  onChange={handleCategoryChange}
                />
              </ul>
            </FilterContent>
          </FilterSection>
        ) : (
          <HoverText text='בחר מגדר לפני'>
            <div
              className='relative pointer-events-none opacity-50'
              title='בחר קטגוריה לפני'
            >
              {
                /* Your hover text */ <summary className='flex cursor-pointer items-center gap-2 border p-2 rounded border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600'>
                  <span className='text-sm font-medium'>קטגוריה</span>

                  <span className='transition group-open:-rotate-180'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth='1.5'
                      stroke='currentColor'
                      className='h-4 w-4'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M19.5 8.25l-7.5 7.5-7.5-7.5'
                      />
                    </svg>
                  </span>
                </summary>
              }
            </div>
          </HoverText>
        )}

        {/* SubCategory Select Option -- will show when category is selected, since subcategories are category & gender specific */}

        {categorySelection.categoryId ? (
          <FilterSection title={'תת קטגוריה'}>
            <FilterContent>
              <FilterBox
                length={formData.subCategories.length}
                onClick={() => handleResetArray('subCategories')}
              >
                <SubCategoryCheckbox
                  label='בחר קטגוריה'
                  name='subCategories'
                  categoryid={categorySelection.categoryId}
                  onChange={handleInputChange}
                />
              </FilterBox>
            </FilterContent>
          </FilterSection>
        ) : (
          <HoverText text='בחר קטגוריה לפני'>
            <div className='relative pointer-events-none opacity-50'>
              {
                <summary className='flex cursor-pointer items-center gap-2 border p-2 rounded border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600'>
                  <span className='text-sm font-medium'>תת קטגוריה</span>

                  <span className='transition group-open:-rotate-180'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth='1.5'
                      stroke='currentColor'
                      className='h-4 w-4'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M19.5 8.25l-7.5 7.5-7.5-7.5'
                      />
                    </svg>
                  </span>
                </summary>
              }
            </div>
          </HoverText>
        )}

        {/* end of category selection */}
        <FilterSection title='מותג'>
          <FilterContent>
            <header className='flex items-center justify-between p-4'>
              <span className='text-sm text-gray-700'>
                {formData.brands.length} נבחרו
              </span>
              <button
                type='button'
                className='text-sm text-gray-900 underline underline-offset-4'
                onClick={() => handleResetArray('brands')} // Change 'conditions' to the desired field
              >
                איפוס
              </button>
            </header>
            <div className='p-4'>
              <label
                htmlFor='brandFilter'
                className='text-sm text-gray-700 font-medium'
              >
                חיפוש מותג
              </label>
              <input
                type='text'
                id='brandFilter'
                placeholder='שם מותג באנגלית'
                className='w-full rounded border-gray-300 text-sm'
              />
            </div>
            <ul className='space-y-1 border-t border-gray-200 p-4'>
              {/* Render your filtered brand options here based on user input */}
            </ul>
          </FilterContent>
        </FilterSection>

        <FilterSection title='מידה'>
          <FilterContent>
            <FilterBox
              length={formData.sizes.length}
              onClick={() => handleResetArray('sizes')}
            >
              {clothingSizes.map((size) => (
                <CheckboxFilter
                  key={size}
                  id={`FilterInStock_${size}`}
                  label={size}
                  value={size}
                  name={'sizes'}
                  handleInputChange={handleInputChange}
                />
              ))}
              {/* Add more size options */}
            </FilterBox>
          </FilterContent>
        </FilterSection>

        <FilterSection title='צבע'>
          <FilterContent>
            <FilterBox
              length={formData.colors.length}
              onClick={() => handleResetArray('colors')}
            >
              {hebrewColors.map((color, index) => (
                <CheckboxFilter
                  key={index}
                  id={`FilterInStock_${color}`}
                  label={color}
                  value={color}
                  name={'colors'}
                  handleInputChange={handleInputChange}
                />
              ))}
            </FilterBox>
          </FilterContent>
        </FilterSection>

        <FilterSection title='מצב'>
          <FilterContent>
            <FilterBox
              length={formData.conditions.length}
              onClick={() => handleResetArray('conditions')}
            >
              <CheckboxFilter
                id='FilterInStock'
                value={'new'}
                label='חדש'
                name={'conditions'}
                handleInputChange={handleInputChange}
              />
              <CheckboxFilter
                id='FilterInStock'
                value={'like_new'}
                label='כמו חדש'
                name={'conditions'}
                handleInputChange={handleInputChange}
              />
              <CheckboxFilter
                id='FilterInStock'
                value={'used_good'}
                label='משומש טוב'
                name={'conditions'}
                handleInputChange={handleInputChange}
              />
              <CheckboxFilter
                id='FilterInStock'
                value={'used'}
                label='משומש'
                name={'conditions'}
                handleInputChange={handleInputChange}
              />
              {/* Add more checkbox filters */}
            </FilterBox>
          </FilterContent>
        </FilterSection>

        <div className='relative'>
          <details className='group [&_summary::-webkit-details-marker]:hidden'>
            <summary className='flex cursor-pointer items-center gap-2 border p-2 rounded border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600'>
              <span className='text-sm font-medium'> מחיר </span>

              <span className='transition group-open:-rotate-180'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                  stroke='currentColor'
                  className='h-4 w-4'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M19.5 8.25l-7.5 7.5-7.5-7.5'
                  />
                </svg>
              </span>
            </summary>

            <div className='z-50 group-open:absolute group-open:top-auto group-open:mt-2 ltr:group-open:start-0'>
              <div className='w-96 rounded border border-gray-200 bg-white'>
                <header className='flex items-center justify-between p-4'>
                  <span className='text-sm text-gray-700'>
                    המחיר הגבוהה ביותר הוא 2000 שח
                  </span>

                  <button
                    type='button'
                    className='text-sm text-gray-900 underline underline-offset-4'
                    onClick={() => handleResetArray('priceFrom')} // Change 'conditions' to the desired field
                  >
                    איפוס
                  </button>
                </header>

                <div className='border-t border-gray-200 p-4'>
                  <div className='flex justify-between gap-4'>
                    <label
                      htmlFor='FilterPriceFrom'
                      className='flex items-center gap-2'
                    >
                      <span className='text-sm text-gray-600'>₪</span>

                      <input
                        type='number'
                        id='FilterPriceFrom'
                        name='priceFrom'
                        value={formData.priceFrom}
                        onChange={handleInputChange}
                        placeholder='מי'
                        className='w-full rounded-md border-gray-200 shadow-sm sm:text-sm'
                      />
                    </label>

                    <label
                      htmlFor='FilterPriceTo'
                      className='flex items-center gap-2'
                    >
                      <span className='text-sm text-gray-600'>₪</span>

                      <input
                        type='number'
                        id='FilterPriceTo'
                        name='priceTo'
                        value={formData.priceTo}
                        onChange={handleInputChange}
                        placeholder='עד'
                        className='w-full rounded-md border-gray-200 shadow-sm sm:text-sm'
                      />
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </details>
        </div>
      </div>

      <div className='hidden sm:block'>
        <label htmlFor='SortBy' className='sr-only'>
          מיין
        </label>

        <select id='SortBy' className='h-10 rounded border-gray-300 text-sm'>
          <option>מיין לפי</option>
          <option
            onClick={handleSortByChange('newlyListed')}
            value='Title, DESC'
          >
            חדשים
          </option>
          <option onClick={handleSortByChange('popular')} value='Title, ASC'>
            פופולריים
          </option>
          <option
            onClick={handleSortByChange('priceAscending')}
            value='Price, DESC'
          >
            מחיר, נמוך לגבוהה
          </option>
          <option
            onClick={handleSortByChange('priceDescending')}
            value='Price, ASC'
          >
            מחיר, גבוהה לנמוך
          </option>
        </select>
      </div>
    </div>
  )
}

export default SearchParams

const FilterSection = ({ title, children }) => {
  return (
    <div className='relative'>
      <details className='group [&_summary::-webkit-details-marker]:hidden'>
        <summary className='flex cursor-pointer items-center gap-2 border p-2 rounded border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600'>
          <span className='text-sm font-medium'>{title}</span>
          <span className='transition group-open:-rotate-180'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='currentColor'
              className='h-4 w-4'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M19.5 8.25l-7.5 7.5-7.5-7.5'
              />
            </svg>
          </span>
        </summary>
        {children}
      </details>
    </div>
  )
}
const FilterBox = ({ length, onClick, children }) => {
  return (
    <div>
      <header className='flex items-center justify-between p-4'>
        <span className='text-sm text-gray-700'>{length} נבחרו</span>
        <button
          type='button'
          className='text-sm text-gray-900 underline underline-offset-4'
          onClick={onClick} // Change 'conditions' to the desired field
        >
          איפוס
        </button>
      </header>
      <ul className='space-y-1 border-t border-gray-200 p-4 max-h-48 overflow-y-auto'>
        {children}
      </ul>
    </div>
  )
}

const FilterContent = ({ children }) => {
  return (
    <div className='z-50 group-open:absolute group-open:top-auto group-open:mt-2 ltr:group-open:start-0'>
      <div className='w-60 rounded border border-gray-200 bg-white'>
        {children}
      </div>
    </div>
  )
}

const CheckboxFilter = ({ id, label, value, name, handleInputChange }) => {
  const handleChange = (e) => {
    handleInputChange(e)
  }
  return (
    <li>
      <label htmlFor={id} className='inline-flex items-center gap-2'>
        <input
          type='checkbox'
          id={id}
          name={name}
          value={value} // Utilize the value prop here
          className='h-5 w-5 rounded border-gray-300'
          onChange={handleChange}
        />
        <span className='text-sm font-medium text-gray-700'>{label}</span>
      </label>
    </li>
  )
}

const convertToNumberIfNeeded = (name, value) => {
  if (name === 'priceFrom' || name === 'priceTo') {
    return parseFloat(value)
  }
  return value
}

const handleToggleArrayValue = (formData, field, value) => {
  if (formData[field].includes(value)) {
    return formData[field].filter((item) => item !== value)
  } else {
    return [...formData[field], value]
  }
}
