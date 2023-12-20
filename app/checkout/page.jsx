import React from 'react'

const Checkout = () => {
  return (
    <section className='p-4 bg-gradient-to-r from-red-50 to-blue-100'>
      <h1 className='sr-only'>קופה</h1>
      <div className='mx-auto grid max-w-screen-2xl grid-cols-1 md:grid-cols-2'>
        <div className='bg-gray-50 shadow-md sm:rounded-r-2xl rounded-t-2xl sm:rounded-tl-none py-12 md:py-24'>
          <div className='mx-auto max-w-lg space-y-8 px-4 lg:px-8'>
            <div className='flex items-center gap-4'>
              <span className='h-10 w-10 rounded-full bg-blue-700'></span>

              <h2 className='font-medium text-gray-900'>BambooYou123</h2>
            </div>

            <div>
              <p className='text-2xl font-medium tracking-tight text-gray-900'>
                ₪99.99
              </p>

              <p className='mt-1 text-sm text-gray-600'>עבור הרכישה של</p>
            </div>

            <div>
              <div className='flow-root'>
                <ul className='-my-4 divide-y divide-gray-100'>
                  <li className='flex items-center gap-4 py-4'>
                    <img
                      src='https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80'
                      alt=''
                      className='h-16 w-16 rounded object-cover'
                    />

                    <div>
                      <h3 className='text-sm text-gray-900'>
                        Basic Tee 6-Pack
                      </h3>

                      <dl className='mt-0.5 space-y-px text-[10px] text-gray-600'>
                        <div>
                          <dt className='inline'>Size:</dt>
                          <dd className='inline'>XXS</dd>
                        </div>

                        <div>
                          <dt className='inline'>Color:</dt>
                          <dd className='inline'>White</dd>
                        </div>
                      </dl>
                    </div>
                  </li>

                  <li className='flex items-center gap-4 py-4'>
                    <img
                      src='https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80'
                      alt=''
                      className='h-16 w-16 rounded object-cover'
                    />

                    <div>
                      <h3 className='text-sm text-gray-900'>
                        Basic Tee 6-Pack
                      </h3>

                      <dl className='mt-0.5 space-y-px text-[10px] text-gray-600'>
                        <div>
                          <dt className='inline'>Size:</dt>
                          <dd className='inline'>XXS</dd>
                        </div>

                        <div>
                          <dt className='inline'>Color:</dt>
                          <dd className='inline'>White</dd>
                        </div>
                      </dl>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className='bg-white sm:rounded-l-2xl rounded-b-2xl sm:rounded-br-none py-12 md:py-24 shadow-md'>
          <div className='mx-auto max-w-lg px-4 lg:px-8'>
            <form className='grid grid-cols-6 gap-4'>
              <div className='col-span-3'>
                <label
                  htmlFor='FirstName'
                  className='block text-xs font-medium text-gray-700'
                >
                  שם פרטי
                </label>

                <input
                  type='text'
                  id='FirstName'
                  className='mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm'
                />
              </div>

              <div className='col-span-3'>
                <label
                  htmlFor='LastName'
                  className='block text-xs font-medium text-gray-700'
                >
                  שם משפחה
                </label>

                <input
                  type='text'
                  id='LastName'
                  className='mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm'
                />
              </div>

              <div className='col-span-6'>
                <label
                  htmlFor='Email'
                  className='block text-xs font-medium text-gray-700'
                >
                  אימייל
                </label>

                <input
                  type='email'
                  id='Email'
                  className='mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm'
                />
              </div>

              <div className='col-span-6'>
                <label
                  htmlFor='Phone'
                  className='block text-xs font-medium text-gray-700'
                >
                  מספר פלאפון
                </label>

                <input
                  type='tel'
                  id='Phone'
                  className='mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm'
                />
              </div>

              <fieldset className='col-span-6'>
                <legend className='block text-sm font-medium text-gray-700'>
                  פרטי אשראי
                </legend>

                <div className='mt-1 -space-y-px rounded-md bg-white shadow-sm'>
                  <div className='py-2'>
                    <label htmlFor='CardNumber' className='sr-only'>
                      {' '}
                      Card Number{' '}
                    </label>

                    <input
                      type='text'
                      id='CardNumber'
                      placeholder='מספר כרטיס'
                      className='relative mt-1 w-full rounded-t-md border-gray-200 focus:z-10 sm:text-sm'
                    />
                  </div>

                  <div className='flex py-2'>
                    <div className='flex-1'>
                      <label htmlFor='CardExpiry' className='sr-only'>
                        {' '}
                        Card Expiry{' '}
                      </label>

                      <input
                        type='text'
                        id='CardExpiry'
                        placeholder='תאריך תפוגה'
                        className='relative w-full rounded-es-md border-gray-200 focus:z-10 sm:text-sm'
                      />
                    </div>

                    <div className='-ms-px flex-1'>
                      <label htmlFor='CardCVC' className='sr-only'>
                        {' '}
                        Card CVC{' '}
                      </label>

                      <input
                        type='text'
                        id='CardCVC'
                        placeholder='CVC'
                        className='relative w-full rounded-ee-md border-gray-200 focus:z-10 sm:text-sm'
                      />
                    </div>
                  </div>
                </div>
              </fieldset>

              <div className='col-span-6'>
                <button className='block w-full rounded-md bg-black p-2.5 text-sm text-white transition hover:shadow-lg'>
                  שלם
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Checkout
