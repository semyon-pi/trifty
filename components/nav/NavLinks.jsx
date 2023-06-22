import React from 'react'

const NavLinks = () => {
  return (
    <nav className='flex sm:px-4 py-4  relative z-20'>
      <div className='dropdown'>
        <label tabIndex={0} className='my-1 ml-1 btn bg-white drop-shadow-2xl'>
          לגבר
        </label>
        <ul
          tabIndex={0}
          className='p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52'
        >
          <li>
            <a href='#'>חולצות</a>
          </li>
          <li>
            <a href='#'>מכנסיים</a>
          </li>
          <li>
            <a href='#'>שורטים</a>
          </li>
          <li>
            <a href='#'>מעילים</a>
          </li>
          <li>
            <a href='#'>הלבשה תחתונה</a>
          </li>
          <li>
            <a href='#'>אקססוריז</a>
          </li>
          <li>
            <a href='#'>נעליים</a>
          </li>
          <li>
            <a href='#'>צפה בהכל</a>
          </li>
        </ul>
      </div>

      <div className='dropdown'>
        <label tabIndex={0} className='my-1 ml-1 btn bg-white drop-shadow-2xl'>
          לאישה
        </label>

        <ul className='p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52'>
          <li>
            <a href='#'>חולצות</a>
          </li>
          <li>
            <a href='#'>מכנסיים</a>
          </li>
          <li>
            <a href='#'>שמלות</a>
          </li>
          <li>
            <a href='#'>חציות</a>
          </li>
          <li>
            <a href='#'>שורטים</a>
          </li>
          <li>
            <a href='#'>מעילים</a>
          </li>
          <li>
            <a href='#'>אקססוריז</a>
          </li>
          <li>
            <a href='#'>הלבשה תחתונה</a>
          </li>
          <li>
            <a href='#'>צפה בהכל</a>
          </li>
          <li>
            <a href='#'>נעליים</a>
          </li>
        </ul>
      </div>

      <div className='dropdown'>
        <label tabIndex={0} className='my-1 ml-1 btn bg-white drop-shadow-2xl'>
          תכשיטים
        </label>
        <ul
          tabIndex={0}
          className='p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52'
        >
          <li>
            <a href='#'>עגילים</a>
          </li>
          <li>
            <a href='#'>צמידים</a>
          </li>
          <li>
            <a href='#'>שעונים</a>
          </li>
          <li>
            <a href='#'>טבעות</a>
          </li>
          <li>
            <a href='#'>תכשיטי גוף</a>
          </li>
          <li>
            <a href='#'>צפה בהכל</a>
          </li>
          <li>
            <a href='#'>שרשראות</a>
          </li>
        </ul>
      </div>

      <div className='dropdown'>
        <label tabIndex={0} className='my-1 ml-1 btn bg-white drop-shadow-2xl'>
          טיפוח
        </label>
        <ul
          tabIndex={0}
          className='p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52'
        >
          <li>
            <a href='#'>תוספות שיער</a>
          </li>
          <li>
            <a href='#'>בשמים</a>
          </li>
          <li>
            <a href='#'>מקלחת & וגוף</a>
          </li>
          <li>
            <a href='#'>קרמים</a>
          </li>
          <li>
            <a href='#'>כלים ומברשות</a>
          </li>
          <li>
            <a href='#'>מייקאפ</a>
          </li>
          <li>
            <a href='#'>צפה בהכל</a>
          </li>
        </ul>
      </div>

      <div className='dropdown'>
        <label tabIndex={0} className='my-1 ml-1 btn bg-white drop-shadow-2xl'>
          מותגים
        </label>
        <ul
          tabIndex={0}
          className='p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52'
        >
          <li>
            <a href='#'>Nike</a>
          </li>
          <li>
            <a href='#'>Zara</a>
          </li>
          <li>
            <a href='#'>Levis</a>
          </li>
          <li>
            <a href='#'>Adidas</a>
          </li>
          <li>
            <a href='#'>צפה בכל המותגים</a>
          </li>
          <li>
            <a href='#'>Brandy Melville</a>
          </li>
        </ul>
      </div>

      <div className='dropdown'>
        <label tabIndex={0} className='my-1 ml-1 btn bg-white drop-shadow-2xl'>
          עוד
        </label>
        <ul
          tabIndex={0}
          className='p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52'
        >
          <li>
            <a href='#'>אומנות</a>
          </li>
          <li>
            <a href='#'>לבית</a>
          </li>
          <li>
            <a href='#'>תחפושות</a>
          </li>
          <li>
            <a href='#'>סרטים</a>
          </li>
          <li>
            <a href='#'>ספרים & מגזינים</a>
          </li>
          <li>
            <a href='#'>ילדים</a>
          </li>
          <li>
            <a href='#'>מוזיקה</a>
          </li>
          <li>
            <a href='#'>ציוד ספורט</a>
          </li>
          <li>
            <a href='#'>אחרים</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavLinks
