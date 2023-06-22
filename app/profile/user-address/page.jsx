import React from 'react'

const UserAddress = () => {
  return (
    <div className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 rounded-none rounded-b-2xl'>
      <div className='card-body pt-2'>
        <h2 className='font-bold text-center py-0'>כתובת למשלוח</h2>
        <hr />

        <div className='form-control'>
          <label className='label'>
            <span className='label-text'>שם מלא</span>
          </label>
          <input
            type='text'
            placeholder='אלכס כוהן'
            className='input input-bordered'
          />
        </div>
        <div className='form-control'>
          <label className='label'>
            <span className='label-text'>ישוב / עיר</span>
          </label>
          <input type='text' placeholder='' className='input input-bordered' />
        </div>
        <div className='form-control'>
          <label className='label'>
            <span className='label-text'>רחוב</span>
          </label>
          <input type='text' placeholder='' className='input input-bordered' />
        </div>
        <div className='flex justify-between'>
          <div className=''>
            <label className='label'>
              <span className='label-text'>מספר בניין</span>
            </label>
            <input
              type='text'
              placeholder=''
              className='input input-bordered w-20'
            />
          </div>

          <div>
            <label className='label'>
              <span className='label-text'>קומה</span>
            </label>
            <input
              type='text'
              placeholder=''
              className='input input-bordered w-20'
            />
          </div>

          <div>
            <label className='label'>
              <span className='label-text'>מספר דירה</span>
            </label>
            <input
              type='text'
              placeholder=''
              className='input input-bordered w-20'
            />
          </div>
        </div>
        <div className='form-control'>
          <label className='label'>
            <span className='label-text'>מיקוד</span>
          </label>
          <input type='text' placeholder='' className='input input-bordered' />
        </div>
        <div className='form-control'>
          <label className='label'>
            <span className='label-text'>מספר פלאפון</span>
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

export default UserAddress
