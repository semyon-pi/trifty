import React, { useState, useEffect } from 'react'

const GenderSelect = ({ onChange, label, value }) => {
  const genderOptions = [
    { id: '9617dfb8-d195-4366-b8f6-9b925e440df0', label: 'לגבר' },
    { id: '4668cb12-2f65-4e8c-b78a-2ba0d8983af4', label: 'לאישה' },
    { id: 'ffa67f5a-c036-4557-8fc7-8ec27e359598', label: 'אחר' },
  ]
  return (
    <label htmlFor='gender' className='block mb-1'>
      <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
        {label}
      </span>
      <select
        id='gender'
        name='genderId'
        onChange={onChange}
        value={value}
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
  )
}

export default GenderSelect
