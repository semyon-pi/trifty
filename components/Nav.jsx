'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import NavLinks from './nav/NavLinks'
import NavRightSide from './nav/NavRightSide'

const Nav = () => {
  const [navFlag, setNavFlag] = useState(false)

  const toggleOn = () => {
    // 👇️ passed function to setState
    setNavFlag((navFlag) => !navFlag)
  }
  return (
    <div className=''>
      <div className='hidden sm:block'>
        <div className='flex justify-between sm:py-4 sm:px-4 py-4 bg-white relative z-30'>
          <NavRightSide />
          <div className='flex flex-row w-88 border rounded mx-4 px-2 py-1'>
            <button className='px-2' type='submit'>
              <svg
                viewBox='0 0 1024 1024'
                fill='currentColor'
                height='1em'
                width='1em'
              >
                <path d='M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z' />
              </svg>
            </button>
            <input
              className='mx-4'
              size='50'
              type='search'
              placeholder='חיפוש פריטים, מותגים, או סגנון לבוש...'
            />
          </div>

          <Link href={'/'}>
            <div className='text-red-600 font-bold '>Trifty</div>
          </Link>
        </div>
        <NavLinks />
      </div>
      <div className='sm:hidden'>
        <div className='flex justify-between px-4 py-2 rounded-lg bg-white mx-4 drop-shadow-md'>
          <div className='text-red-600 font-bold'>
            <Link href={'/'}>Trifty</Link>
          </div>
          <label className='btn btn-circle swap swap-rotate bg-white'>
            <input type='checkbox' checked={navFlag} onChange={toggleOn} />
            <svg
              viewBox='0 0 512 512'
              fill='currentColor'
              width='36'
              height='36'
              className='swap-on fill-current'
            >
              <path
                d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'
                fill='black'
              />
            </svg>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              width='36'
              height='36'
              className='swap-off fill-current'
            >
              <path fill='none' d='M0 0h24v24H0z' />
              <path
                d='M3 4h18v2H3V4zm6 7h12v2H9v-2zm-6 7h18v2H3v-2z'
                fill='black'
              />
            </svg>
          </label>
        </div>
        <div
          className={
            navFlag
              ? 'overflow-y-hidden md:hidden ease-in duration-300 absolute text-black right-0 top-0 h-screen bg-white px-4 py-20 flex flex-col z-40'
              : 'absolute top-0 h-screen right-[-100%] ease-in duration-500 z-40'
          }
        >
          <div>
            <div className='flex flex-row px-8'>
              <button className='mx-2'>
                <svg
                  viewBox='0 0 1024 1024'
                  fill='currentColor'
                  height='1.5em'
                  width='1.5em'
                >
                  <path d='M512 378.7c-73.4 0-133.3 59.9-133.3 133.3S438.6 645.3 512 645.3 645.3 585.4 645.3 512 585.4 378.7 512 378.7zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zM512 717.1c-113.5 0-205.1-91.6-205.1-205.1S398.5 306.9 512 306.9 717.1 398.5 717.1 512 625.5 717.1 512 717.1zm213.5-370.7c-26.5 0-47.9-21.4-47.9-47.9s21.4-47.9 47.9-47.9 47.9 21.4 47.9 47.9a47.84 47.84 0 01-47.9 47.9z' />
                </svg>
              </button>
              <button className='mx-2'>
                <svg
                  viewBox='0 0 1024 1024'
                  fill='currentColor'
                  height='1.5em'
                  width='1.5em'
                >
                  <path d='M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM727.3 401.7c.3 4.7.3 9.6.3 14.4 0 146.8-111.8 315.9-316.1 315.9-63 0-121.4-18.3-170.6-49.8 9 1 17.6 1.4 26.8 1.4 52 0 99.8-17.6 137.9-47.4-48.8-1-89.8-33-103.8-77 17.1 2.5 32.5 2.5 50.1-2a111 111 0 01-88.9-109v-1.4c14.7 8.3 32 13.4 50.1 14.1a111.13 111.13 0 01-49.5-92.4c0-20.7 5.4-39.6 15.1-56a315.28 315.28 0 00229 116.1C492 353.1 548.4 292 616.2 292c32 0 60.8 13.4 81.1 35 25.1-4.7 49.1-14.1 70.5-26.7-8.3 25.7-25.7 47.4-48.8 61.1 22.4-2.4 44-8.6 64-17.3-15.1 22.2-34 41.9-55.7 57.6z' />
                </svg>
              </button>
              <button className='mx-2'>
                <svg
                  viewBox='0 0 1024 1024'
                  fill='currentColor'
                  height='1.5em'
                  width='1.5em'
                >
                  <path d='M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-92.4 233.5h-63.9c-50.1 0-59.8 23.8-59.8 58.8v77.1h119.6l-15.6 120.7h-104V912H539.2V602.2H434.9V481.4h104.3v-89c0-103.3 63.1-159.6 155.3-159.6 44.2 0 82.1 3.3 93.2 4.8v107.9z' />
                </svg>
              </button>
              <button className='mx-2'>
                <svg
                  viewBox='0 0 448 512'
                  fill='currentColor'
                  height='1.5em'
                  width='1.5em'
                >
                  <path d='M448 209.91a210.06 210.06 0 01-122.77-39.25v178.72A162.55 162.55 0 11185 188.31v89.89a74.62 74.62 0 1052.23 71.18V0h88a121.18 121.18 0 001.86 22.17A122.18 122.18 0 00381 102.39a121.43 121.43 0 0067 20.14z' />
                </svg>
              </button>
            </div>
            <div className='py-8 my-4 grid gap-2 font-bold border-b'>
              <h2>התחבר</h2>
              <h2>הרשם</h2>
              <h2>הורד את האפליקציה</h2>
            </div>
            <div>
              <h2 className='font-bold py-4'>צפה בפריטים</h2>
              <div>
                <div className='flex justify-between border-b py-2'>
                  <h3>גברים</h3>
                  <svg
                    fill='currentColor'
                    viewBox='0 0 16 16'
                    height='1.5em'
                    width='1.5em'
                  >
                    <path
                      fillRule='evenodd'
                      d='M15 8a.5.5 0 00-.5-.5H2.707l3.147-3.146a.5.5 0 10-.708-.708l-4 4a.5.5 0 000 .708l4 4a.5.5 0 00.708-.708L2.707 8.5H14.5A.5.5 0 0015 8z'
                    />
                  </svg>
                </div>
                <div className='flex justify-between border-b py-2'>
                  <h3>נשים</h3>
                  <svg
                    fill='currentColor'
                    viewBox='0 0 16 16'
                    height='1.5em'
                    width='1.5em'
                  >
                    <path
                      fillRule='evenodd'
                      d='M15 8a.5.5 0 00-.5-.5H2.707l3.147-3.146a.5.5 0 10-.708-.708l-4 4a.5.5 0 000 .708l4 4a.5.5 0 00.708-.708L2.707 8.5H14.5A.5.5 0 0015 8z'
                    />
                  </svg>
                </div>
                <div className='flex justify-between border-b py-2'>
                  <h3>תכשיטים</h3>
                  <svg
                    fill='currentColor'
                    viewBox='0 0 16 16'
                    height='1.5em'
                    width='1.5em'
                  >
                    <path
                      fillRule='evenodd'
                      d='M15 8a.5.5 0 00-.5-.5H2.707l3.147-3.146a.5.5 0 10-.708-.708l-4 4a.5.5 0 000 .708l4 4a.5.5 0 00.708-.708L2.707 8.5H14.5A.5.5 0 0015 8z'
                    />
                  </svg>
                </div>
                <div className='flex justify-between border-b py-2'>
                  <h3>טיפוח</h3>
                  <svg
                    fill='currentColor'
                    viewBox='0 0 16 16'
                    height='1.5em'
                    width='1.5em'
                  >
                    <path
                      fillRule='evenodd'
                      d='M15 8a.5.5 0 00-.5-.5H2.707l3.147-3.146a.5.5 0 10-.708-.708l-4 4a.5.5 0 000 .708l4 4a.5.5 0 00.708-.708L2.707 8.5H14.5A.5.5 0 0015 8z'
                    />
                  </svg>
                </div>
                <div className='flex justify-between border-b py-2'>
                  <h3>מותגים</h3>
                  <svg
                    fill='currentColor'
                    viewBox='0 0 16 16'
                    height='1.5em'
                    width='1.5em'
                  >
                    <path
                      fillRule='evenodd'
                      d='M15 8a.5.5 0 00-.5-.5H2.707l3.147-3.146a.5.5 0 10-.708-.708l-4 4a.5.5 0 000 .708l4 4a.5.5 0 00.708-.708L2.707 8.5H14.5A.5.5 0 0015 8z'
                    />
                  </svg>
                </div>
                <div className='flex justify-between border-b py-2'>
                  <h3>עוד</h3>
                  <svg
                    fill='currentColor'
                    viewBox='0 0 16 16'
                    height='1.5em'
                    width='1.5em'
                  >
                    <path
                      fillRule='evenodd'
                      d='M15 8a.5.5 0 00-.5-.5H2.707l3.147-3.146a.5.5 0 10-.708-.708l-4 4a.5.5 0 000 .708l4 4a.5.5 0 00.708-.708L2.707 8.5H14.5A.5.5 0 0015 8z'
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div>
              <h2 className='font-bold py-4'>עוד בטריפטי</h2>
              <div className='grid grid-cols-2'>
                <ul>
                  <li>
                    <Link className='px-2' href={'/sustainability'}>
                      קַיָּמוּת
                    </Link>
                  </li>

                  <li>
                    <Link className='px-2' href={'/blog'}>
                      בלוג
                    </Link>
                  </li>

                  <li>
                    <Link className='px-2' href={'/about'}>
                      עליינו
                    </Link>
                  </li>

                  <li>
                    <Link className='px-2' href={'/sell'}>
                      מכור בטריפטי
                    </Link>
                  </li>

                  <li>
                    <Link className='px-2' href={'/careers'}>
                      קריירה
                    </Link>
                  </li>

                  <li>
                    <Link className='px-2' href={'/news'}>
                      חדשות
                    </Link>
                  </li>
                </ul>
                <ul>
                  <li>
                    <Link className='px-2' href={'/support'}>
                      תמיכה
                    </Link>
                  </li>
                  <li>
                    <Link className='px-2' href={'/terms'}>
                      נהלים
                    </Link>
                  </li>
                  <li>
                    <Link className='px-2' href={'/privacy'}>
                      פרטיות
                    </Link>
                  </li>
                  <li>
                    <Link className='px-2' href={'/safety'}>
                      בטיחות
                    </Link>
                  </li>
                  <li>
                    <Link className='px-2' href={'/site-map'}>
                      מפת אתר
                    </Link>
                  </li>
                  <li>
                    <Link className='px-2' href={'/cookies'}>
                      קוקיז
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
// 'overflow-y-hidden md:hidden ease-in duration-300 absolute text-light right-0 top-0 h-screen opacity-80 bg-dark px-4 py-20 flex flex-col'
// 'absolute top-0 h-screen right-[-100%] ease-in duration-500'
export default Nav
