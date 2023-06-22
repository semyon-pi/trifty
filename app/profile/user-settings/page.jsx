import React from 'react'

const UserSettings = () => {
  return (
    <div className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 rounded-none rounded-b-2xl'>
      <div className='card-body pt-2'>
        <h2 className='font-bold text-center py-0'>הגדרות</h2>
        <hr />

        <h3>החלפת ססמא</h3>
        <div className='form-control'>
          <label className='label'>
            <span className='label-text'>ססמא נוכחית</span>
          </label>
          <input
            type='text'
            placeholder='**********'
            className='input input-bordered'
          />
        </div>
        <div className='form-control'>
          <label className='label'>
            <span className='label-text'>ססמא חדשה</span>
          </label>
          <input
            type='text'
            placeholder='**********'
            className='input input-bordered'
          />
        </div>

        <h3>החלפת מייל</h3>

        <div className='form-control'>
          <label className='label'>
            <span className='label-text'>ססמא</span>
          </label>
          <input
            type='text'
            placeholder='**********'
            className='input input-bordered'
          />
        </div>
        <div className='form-control'>
          <label className='label'>
            <span className='label-text'>אימייל חדש</span>
          </label>
          <input type='text' placeholder='' className='input input-bordered' />
        </div>

        <div className='form-control mt-6 flex flex-row justify-between'>
          <button className='font-bold text-indigo-400 btn-outline btn btn-circle'>
            עדכן
          </button>
          <button className='font-bold text-red-400 btn-outline btn btn-circle'>
            בטל
          </button>
        </div>
      </div>
    </div>
  )
}

export default UserSettings
