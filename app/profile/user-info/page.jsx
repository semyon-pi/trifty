import React from 'react'
import Image from 'next/image'

const UserInfo = () => {
  return (
    <div className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 rounded-none rounded-b-2xl'>
      <div className='card-body pt-2'>
        <h2 className='font-bold text-center py-0'>פרטים</h2>
        <hr />
        <div className='form-control flex items-center'>
          <div className='w-20 rounded-full'>
            <Image
              src={'/assets/profile.jpg'}
              width={500}
              height={500}
              alt={'תמונה של פרטי לבוש שונים על אישה'}
              title={'חולצות'}
              href={'/'}
              className={'hover:opacity-50 drop-shadow-xl rounded-lg'}
            />
          </div>
          <p className='font-bold text-indigo-400 text-sm py-2'>
            ערוך את התמונה
          </p>
        </div>
        <div className='form-control'>
          <label className='label'>
            <span className='label-text'>מדיה חברתית</span>
          </label>
          <input
            type='text'
            placeholder='אינסטגרם'
            className='input input-bordered'
          />
        </div>
        <div className='form-control'>
          <label className='label'>
            <span className='label-text'>ביו: משהו שתרצה לשתף</span>
          </label>
          <textarea
            type='text'
            placeholder=''
            className='input input-bordered'
          />
        </div>
        <div className='form-control mt-6 flex flex-row justify-between'>
          <button className='font-bold text-indigo-400 btn-outline btn btn-circle'>
            עדכן
          </button>
        </div>
      </div>
    </div>
  )
}

export default UserInfo
