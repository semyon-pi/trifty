'use client'
import React, { useContext } from 'react'
import { ShopContext } from '@app/context/ShopContext'

const SearchParams = () => {
  const { handleSortByChange } = useContext(ShopContext)

  return (
    <div className='mt-8 sm:flex sm:items-center sm:justify-between'>
      <div className='block sm:hidden'>
        <button className='flex cursor-pointer items-center gap-2 border p-2 rounded border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600'>
          <span className='text-sm font-medium'> פילטר & מיון </span>

          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke-width='1.5'
            stroke='currentColor'
            className='h-4 w-4 rtl:rotate-180'
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              d='M8.25 4.5l7.5 7.5-7.5 7.5'
            />
          </svg>
        </button>
      </div>

      <div className='hidden sm:flex sm:gap-4'>
        <div className='relative'>
          <details className='group [&_summary::-webkit-details-marker]:hidden'>
            <summary className='flex cursor-pointer items-center gap-2 border p-2 rounded border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600'>
              <span className='text-sm font-medium'> קטגוריה </span>

              <span className='transition group-open:-rotate-180'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke-width='1.5'
                  stroke='currentColor'
                  className='h-4 w-4'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='M19.5 8.25l-7.5 7.5-7.5-7.5'
                  />
                </svg>
              </span>
            </summary>

            <div className='z-50 group-open:absolute group-open:top-auto group-open:mt-2 ltr:group-open:start-0'>
              <div className='w-96 rounded border border-gray-200 bg-white'>
                <header className='flex items-center justify-between p-4'>
                  <span className='text-sm text-gray-700'> 0 נבחרו </span>

                  <button
                    type='button'
                    className='text-sm text-gray-900 underline underline-offset-4'
                  >
                    איפוס
                  </button>
                </header>

                <ul className='space-y-1 border-t border-gray-200 p-4'>
                  <li>
                    <label
                      for='FilterInStock'
                      className='inline-flex items-center gap-2'
                    >
                      <input
                        type='checkbox'
                        id='FilterInStock'
                        className='h-5 w-5 rounded border-gray-300'
                      />

                      <span className='text-sm font-medium text-gray-700'>
                        שחור
                      </span>
                    </label>
                  </li>

                  <li>
                    <label
                      for='FilterPreOrder'
                      className='inline-flex items-center gap-2'
                    >
                      <input
                        type='checkbox'
                        id='FilterPreOrder'
                        className='h-5 w-5 rounded border-gray-300'
                      />

                      <span className='text-sm font-medium text-gray-700'>
                        לבן
                      </span>
                    </label>
                  </li>

                  <li>
                    <label
                      for='FilterOutOfStock'
                      className='inline-flex items-center gap-2'
                    >
                      <input
                        type='checkbox'
                        id='FilterOutOfStock'
                        className='h-5 w-5 rounded border-gray-300'
                      />

                      <span className='text-sm font-medium text-gray-700'>
                        אפור
                      </span>
                    </label>
                  </li>
                </ul>
              </div>
            </div>
          </details>
        </div>
        <div className='relative'>
          <details className='group [&_summary::-webkit-details-marker]:hidden'>
            <summary className='flex cursor-pointer items-center gap-2 border p-2 rounded border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600'>
              <span className='text-sm font-medium'> תת קטגוריה </span>

              <span className='transition group-open:-rotate-180'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke-width='1.5'
                  stroke='currentColor'
                  className='h-4 w-4'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='M19.5 8.25l-7.5 7.5-7.5-7.5'
                  />
                </svg>
              </span>
            </summary>

            <div className='z-50 group-open:absolute group-open:top-auto group-open:mt-2 ltr:group-open:start-0'>
              <div className='w-96 rounded border border-gray-200 bg-white'>
                <header className='flex items-center justify-between p-4'>
                  <span className='text-sm text-gray-700'> 0 נבחרו </span>

                  <button
                    type='button'
                    className='text-sm text-gray-900 underline underline-offset-4'
                  >
                    איפוס
                  </button>
                </header>

                <ul className='space-y-1 border-t border-gray-200 p-4'>
                  <li>
                    <label
                      for='FilterInStock'
                      className='inline-flex items-center gap-2'
                    >
                      <input
                        type='checkbox'
                        id='FilterInStock'
                        className='h-5 w-5 rounded border-gray-300'
                      />

                      <span className='text-sm font-medium text-gray-700'>
                        שחור
                      </span>
                    </label>
                  </li>

                  <li>
                    <label
                      for='FilterPreOrder'
                      className='inline-flex items-center gap-2'
                    >
                      <input
                        type='checkbox'
                        id='FilterPreOrder'
                        className='h-5 w-5 rounded border-gray-300'
                      />

                      <span className='text-sm font-medium text-gray-700'>
                        לבן
                      </span>
                    </label>
                  </li>

                  <li>
                    <label
                      for='FilterOutOfStock'
                      className='inline-flex items-center gap-2'
                    >
                      <input
                        type='checkbox'
                        id='FilterOutOfStock'
                        className='h-5 w-5 rounded border-gray-300'
                      />

                      <span className='text-sm font-medium text-gray-700'>
                        אפור
                      </span>
                    </label>
                  </li>
                </ul>
              </div>
            </div>
          </details>
        </div>
        <div className='relative'>
          <details className='group [&_summary::-webkit-details-marker]:hidden'>
            <summary className='flex cursor-pointer items-center gap-2 border p-2 rounded border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600'>
              <span className='text-sm font-medium'> מותג </span>

              <span className='transition group-open:-rotate-180'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke-width='1.5'
                  stroke='currentColor'
                  className='h-4 w-4'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='M19.5 8.25l-7.5 7.5-7.5-7.5'
                  />
                </svg>
              </span>
            </summary>

            <div className='z-50 group-open:absolute group-open:top-auto group-open:mt-2 ltr:group-open:start-0'>
              <div className='w-96 rounded border border-gray-200 bg-white'>
                <header className='flex items-center justify-between p-4'>
                  <span className='text-sm text-gray-700'> 0 נבחרו </span>

                  <button
                    type='button'
                    className='text-sm text-gray-900 underline underline-offset-4'
                  >
                    איפוס
                  </button>
                </header>

                <ul className='space-y-1 border-t border-gray-200 p-4'>
                  <li>
                    <label
                      for='FilterInStock'
                      className='inline-flex items-center gap-2'
                    >
                      <input
                        type='checkbox'
                        id='FilterInStock'
                        className='h-5 w-5 rounded border-gray-300'
                      />

                      <span className='text-sm font-medium text-gray-700'>
                        שחור
                      </span>
                    </label>
                  </li>

                  <li>
                    <label
                      for='FilterPreOrder'
                      className='inline-flex items-center gap-2'
                    >
                      <input
                        type='checkbox'
                        id='FilterPreOrder'
                        className='h-5 w-5 rounded border-gray-300'
                      />

                      <span className='text-sm font-medium text-gray-700'>
                        לבן
                      </span>
                    </label>
                  </li>

                  <li>
                    <label
                      for='FilterOutOfStock'
                      className='inline-flex items-center gap-2'
                    >
                      <input
                        type='checkbox'
                        id='FilterOutOfStock'
                        className='h-5 w-5 rounded border-gray-300'
                      />

                      <span className='text-sm font-medium text-gray-700'>
                        אפור
                      </span>
                    </label>
                  </li>
                </ul>
              </div>
            </div>
          </details>
        </div>
        <div className='relative'>
          <details className='group [&_summary::-webkit-details-marker]:hidden'>
            <summary className='flex cursor-pointer items-center gap-2 border p-2 rounded border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600'>
              <span className='text-sm font-medium'> מידה </span>

              <span className='transition group-open:-rotate-180'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke-width='1.5'
                  stroke='currentColor'
                  className='h-4 w-4'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='M19.5 8.25l-7.5 7.5-7.5-7.5'
                  />
                </svg>
              </span>
            </summary>

            <div className='z-50 group-open:absolute group-open:top-auto group-open:mt-2 ltr:group-open:start-0'>
              <div className='w-96 rounded border border-gray-200 bg-white'>
                <header className='flex items-center justify-between p-4'>
                  <span className='text-sm text-gray-700'> 0 נבחרו </span>

                  <button
                    type='button'
                    className='text-sm text-gray-900 underline underline-offset-4'
                  >
                    איפוס
                  </button>
                </header>

                <ul className='space-y-1 border-t border-gray-200 p-4'>
                  <li>
                    <label
                      for='FilterInStock'
                      className='inline-flex items-center gap-2'
                    >
                      <input
                        type='checkbox'
                        id='FilterInStock'
                        className='h-5 w-5 rounded border-gray-300'
                      />

                      <span className='text-sm font-medium text-gray-700'>
                        שחור
                      </span>
                    </label>
                  </li>

                  <li>
                    <label
                      for='FilterPreOrder'
                      className='inline-flex items-center gap-2'
                    >
                      <input
                        type='checkbox'
                        id='FilterPreOrder'
                        className='h-5 w-5 rounded border-gray-300'
                      />

                      <span className='text-sm font-medium text-gray-700'>
                        לבן
                      </span>
                    </label>
                  </li>

                  <li>
                    <label
                      for='FilterOutOfStock'
                      className='inline-flex items-center gap-2'
                    >
                      <input
                        type='checkbox'
                        id='FilterOutOfStock'
                        className='h-5 w-5 rounded border-gray-300'
                      />

                      <span className='text-sm font-medium text-gray-700'>
                        אפור
                      </span>
                    </label>
                  </li>
                </ul>
              </div>
            </div>
          </details>
        </div>
        <div className='relative'>
          <details className='group [&_summary::-webkit-details-marker]:hidden'>
            <summary className='flex cursor-pointer items-center gap-2 border p-2 rounded border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600'>
              <span className='text-sm font-medium'> צבעים </span>

              <span className='transition group-open:-rotate-180'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke-width='1.5'
                  stroke='currentColor'
                  className='h-4 w-4'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='M19.5 8.25l-7.5 7.5-7.5-7.5'
                  />
                </svg>
              </span>
            </summary>

            <div className='z-50 group-open:absolute group-open:top-auto group-open:mt-2 ltr:group-open:start-0'>
              <div className='w-96 rounded border border-gray-200 bg-white'>
                <header className='flex items-center justify-between p-4'>
                  <span className='text-sm text-gray-700'> 0 נבחרו </span>

                  <button
                    type='button'
                    className='text-sm text-gray-900 underline underline-offset-4'
                  >
                    איפוס
                  </button>
                </header>

                <ul className='space-y-1 border-t border-gray-200 p-4'>
                  <li>
                    <label
                      for='FilterInStock'
                      className='inline-flex items-center gap-2'
                    >
                      <input
                        type='checkbox'
                        id='FilterInStock'
                        className='h-5 w-5 rounded border-gray-300'
                      />

                      <span className='text-sm font-medium text-gray-700'>
                        שחור
                      </span>
                    </label>
                  </li>

                  <li>
                    <label
                      for='FilterPreOrder'
                      className='inline-flex items-center gap-2'
                    >
                      <input
                        type='checkbox'
                        id='FilterPreOrder'
                        className='h-5 w-5 rounded border-gray-300'
                      />

                      <span className='text-sm font-medium text-gray-700'>
                        לבן
                      </span>
                    </label>
                  </li>

                  <li>
                    <label
                      for='FilterOutOfStock'
                      className='inline-flex items-center gap-2'
                    >
                      <input
                        type='checkbox'
                        id='FilterOutOfStock'
                        className='h-5 w-5 rounded border-gray-300'
                      />

                      <span className='text-sm font-medium text-gray-700'>
                        אפור
                      </span>
                    </label>
                  </li>
                </ul>
              </div>
            </div>
          </details>
        </div>
        <div className='relative'>
          <details className='group [&_summary::-webkit-details-marker]:hidden'>
            <summary className='flex cursor-pointer items-center gap-2 border p-2 rounded border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600'>
              <span className='text-sm font-medium'> מצב </span>

              <span className='transition group-open:-rotate-180'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke-width='1.5'
                  stroke='currentColor'
                  className='h-4 w-4'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='M19.5 8.25l-7.5 7.5-7.5-7.5'
                  />
                </svg>
              </span>
            </summary>

            <div className='z-50 group-open:absolute group-open:top-auto group-open:mt-2 ltr:group-open:start-0'>
              <div className='w-96 rounded border border-gray-200 bg-white'>
                <header className='flex items-center justify-between p-4'>
                  <span className='text-sm text-gray-700'> 0 נבחרו </span>

                  <button
                    type='button'
                    className='text-sm text-gray-900 underline underline-offset-4'
                  >
                    איפוס
                  </button>
                </header>

                <ul className='space-y-1 border-t border-gray-200 p-4'>
                  <li>
                    <label
                      for='FilterInStock'
                      className='inline-flex items-center gap-2'
                    >
                      <input
                        type='checkbox'
                        id='FilterInStock'
                        className='h-5 w-5 rounded border-gray-300'
                      />

                      <span className='text-sm font-medium text-gray-700'>
                        חדש
                      </span>
                    </label>
                  </li>

                  <li>
                    <label
                      for='FilterPreOrder'
                      className='inline-flex items-center gap-2'
                    >
                      <input
                        type='checkbox'
                        id='FilterPreOrder'
                        className='h-5 w-5 rounded border-gray-300'
                      />

                      <span className='text-sm font-medium text-gray-700'>
                        כמו חדש
                      </span>
                    </label>
                  </li>

                  <li>
                    <label
                      for='FilterOutOfStock'
                      className='inline-flex items-center gap-2'
                    >
                      <input
                        type='checkbox'
                        id='FilterOutOfStock'
                        className='h-5 w-5 rounded border-gray-300'
                      />

                      <span className='text-sm font-medium text-gray-700'>
                        משומש מצוין
                      </span>
                    </label>
                  </li>
                  <li>
                    <label
                      for='FilterOutOfStock'
                      className='inline-flex items-center gap-2'
                    >
                      <input
                        type='checkbox'
                        id='FilterOutOfStock'
                        className='h-5 w-5 rounded border-gray-300'
                      />

                      <span className='text-sm font-medium text-gray-700'>
                        משומש טוב
                      </span>
                    </label>
                  </li>
                  <li>
                    <label
                      for='FilterOutOfStock'
                      className='inline-flex items-center gap-2'
                    >
                      <input
                        type='checkbox'
                        id='FilterOutOfStock'
                        className='h-5 w-5 rounded border-gray-300'
                      />

                      <span className='text-sm font-medium text-gray-700'>
                        משומש
                      </span>
                    </label>
                  </li>
                </ul>
              </div>
            </div>
          </details>
        </div>

        <div className='relative'>
          <details className='group [&_summary::-webkit-details-marker]:hidden'>
            <summary className='flex cursor-pointer items-center gap-2 border p-2 rounded border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600'>
              <span className='text-sm font-medium'> מחיר </span>

              <span className='transition group-open:-rotate-180'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke-width='1.5'
                  stroke='currentColor'
                  className='h-4 w-4'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
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
                  >
                    איפוס
                  </button>
                </header>

                <div className='border-t border-gray-200 p-4'>
                  <div className='flex justify-between gap-4'>
                    <label
                      for='FilterPriceFrom'
                      className='flex items-center gap-2'
                    >
                      <span className='text-sm text-gray-600'>₪</span>

                      <input
                        type='number'
                        id='FilterPriceFrom'
                        placeholder='מי'
                        className='w-full rounded-md border-gray-200 shadow-sm sm:text-sm'
                      />
                    </label>

                    <label
                      for='FilterPriceTo'
                      className='flex items-center gap-2'
                    >
                      <span className='text-sm text-gray-600'>₪</span>

                      <input
                        type='number'
                        id='FilterPriceTo'
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
        <label for='SortBy' className='sr-only'>
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
