import React from 'react'
import Image from 'next/image'
import CardImg from './CardImg'

const Festival = () => {
  return (
    <div className='grid h-full place-items-center'>
      <div className='lg:w-3/5 my-4 w-4/5'>
        <div>
          <h2 className='py-4 font-bold'>פסטיבל בטריפטי</h2>
        </div>
        <div className='grid lg:grid-cols-4 gap-4 grid-cols-2'>
          <CardImg
            src={'/assets/Bags_11zon.webp'}
            width={500}
            height={500}
            alt={'תמונה של פרטי לבוש שונים על אישה'}
            title={'תיקים'}
            href={'/'}
            className={'hover:opacity-50 drop-shadow-xl rounded-lg'}
          />
          <CardImg
            src={'/assets/T-shirts.webp'}
            width={500}
            height={500}
            alt={'תמונה של פרטי לבוש שונים על אישה'}
            title={'חולצות'}
            href={'/'}
            className={'hover:opacity-50 drop-shadow-xl rounded-lg'}
          />
          <CardImg
            src={'/assets/Cargo_shorts.webp'}
            width={500}
            height={500}
            alt={'תמונה של פרטי לבוש שונים על אישה'}
            title={'מכנסיים'}
            href={'/'}
            className={'hover:opacity-50 drop-shadow-xl rounded-lg'}
          />
          <CardImg
            src={'/assets/Deals.webp'}
            width={500}
            height={500}
            alt={'תמונה של פרטי לבוש שונים על אישה'}
            title={'דילים'}
            href={'/'}
            className={'hover:opacity-50 drop-shadow-xl rounded-lg'}
          />
        </div>
      </div>
      <div className='lg:w-3/5 mb-4 w-4/5'>
        <div>
          <h2 className='py-4 font-bold'>לפי מחיר</h2>
        </div>
        <div className='grid lg:grid-cols-4 gap-4 grid-cols-2'>
          <CardImg
            src={'/assets/Shorts_under_15_11zon.webp'}
            width={500}
            height={500}
            alt={'תמונה של פרטי לבוש שונים על אישה'}
            title={'20 שח'}
            href={'/'}
            className={'hover:opacity-50 drop-shadow-xl rounded-lg'}
          />
          <CardImg
            src={'/assets/Tshirts_under_15.webp'}
            width={500}
            height={500}
            alt={'תמונה של פרטי לבוש שונים על אישה'}
            title={'40 שח'}
            href={'/'}
            className={'hover:opacity-50 drop-shadow-xl rounded-lg'}
          />
          <CardImg
            src={'/assets/Dresses_under_20_11zon.webp'}
            width={500}
            height={500}
            alt={'תמונה של פרטי לבוש שונים על אישה'}
            title={'80 שח'}
            href={'/'}
            className={'hover:opacity-50 drop-shadow-xl rounded-lg'}
          />
          <CardImg
            src={'/assets/sandals.webp'}
            width={500}
            height={500}
            alt={'תמונה של פרטי לבוש שונים על אישה'}
            title={'150 שח'}
            href={'/'}
            className={'hover:opacity-50 drop-shadow-xl rounded-lg'}
          />
        </div>
      </div>
      <div className='lg:w-3/5 mb-8 w-4/5'>
        <div>
          <h2 className='py-4 font-bold'> החיפושים המובילים</h2>
        </div>
        <div className='grid lg:grid-cols-6 gap-4 grid-cols-3'>
          <CardImg
            src={'/assets/P5 (2).jpg'}
            width={500}
            height={500}
            alt={'תמונה של פרטי לבוש שונים על אישה'}
            title={'תיקים'}
            href={'/'}
            className={'rounded-full hover:opacity-50'}
          />
          <CardImg
            src={'/assets/P5 (4).jpg'}
            width={500}
            height={500}
            alt={'תמונה של פרטי לבוש שונים על אישה'}
            title={'תיקים'}
            href={'/'}
            className={'rounded-full hover:opacity-50'}
          />
          <CardImg
            src={'/assets/P5 (3).jpg'}
            width={500}
            height={500}
            alt={'תמונה של פרטי לבוש שונים על אישה'}
            title={'תיקים'}
            href={'/'}
            className={'rounded-full hover:opacity-50'}
          />
          <CardImg
            src={'/assets/T-shirts.webp'}
            width={500}
            height={500}
            alt={'תמונה של פרטי לבוש שונים על אישה'}
            title={'חולצות'}
            href={'/'}
            className={'rounded-full hover:opacity-50'}
          />
          <CardImg
            src={'/assets/Cargo_shorts.webp'}
            width={500}
            height={500}
            alt={'תמונה של פרטי לבוש שונים על אישה'}
            title={'מכנסיים'}
            href={'/'}
            className={'rounded-full hover:opacity-50'}
          />
          <CardImg
            src={'/assets/Deals.webp'}
            width={500}
            height={500}
            alt={'תמונה של פרטי לבוש שונים על אישה'}
            title={'דילים'}
            href={'/'}
            className={'rounded-full hover:opacity-50'}
          />
        </div>
      </div>
      <div className='lg:w-3/5 mb-8 w-4/5'>
        <div className='pb-1'>
          <h2 className='py-1 font-bold p-0'>הבחירה של טריפטי</h2>
          <p className='font-xs'>שווה לראות</p>
        </div>
        <div className='grid lg:grid-cols-6 gap-2 grid-cols-3'>
          <CardImg
            src={'/assets/P5 (1).jpg'}
            width={500}
            height={500}
            alt={'תמונה של פרטי לבוש שונים על אישה'}
            title={'80 שח'}
            href={'/'}
            className={'hover:opacity-50'}
          />
          <CardImg
            src={'/assets/P5.jpg'}
            width={500}
            height={500}
            alt={'תמונה של פרטי לבוש שונים על אישה'}
            title={'50 שח'}
            href={'/'}
            className={'hover:opacity-50'}
          />
          <CardImg
            src={'/assets/P6 (1).jpg'}
            width={500}
            height={500}
            alt={'תמונה של פרטי לבוש שונים על אישה'}
            title={' 27 שח'}
            href={'/'}
            className={'hover:opacity-50'}
          />
          <CardImg
            src={'/assets/P6 (2).jpg'}
            width={500}
            height={500}
            alt={'תמונה של פרטי לבוש שונים על אישה'}
            title={'66 שח'}
            href={'/'}
            className={'hover:opacity-50'}
          />
          <CardImg
            src={'/assets/P6 (3).jpg'}
            width={500}
            height={500}
            alt={'תמונה של פרטי לבוש שונים על אישה'}
            title={'89 שח'}
            href={'/'}
            className={'hover:opacity-50'}
          />
          <CardImg
            src={'/assets/P6 (4).jpg'}
            width={500}
            height={500}
            alt={'תמונה של פרטי לבוש שונים על אישה'}
            title={'36 שח'}
            href={'/'}
            className={'hover:opacity-50'}
          />
          <CardImg
            src={'/assets/P6 (5).jpg'}
            width={500}
            height={500}
            alt={'תמונה של פרטי לבוש שונים על אישה'}
            title={'42 שח'}
            href={'/'}
            className={'hover:opacity-50'}
          />
          <CardImg
            src={'/assets/P6 (6).jpg'}
            width={500}
            height={500}
            alt={'תמונה של פרטי לבוש שונים על אישה'}
            title={'53 שח'}
            href={'/'}
            className={'hover:opacity-50'}
          />
          <CardImg
            src={'/assets/P6 (7).jpg'}
            width={500}
            height={500}
            alt={'תמונה של פרטי לבוש שונים על אישה'}
            title={'17 שח'}
            href={'/'}
            className={'hover:opacity-50'}
          />
          <CardImg
            src={'/assets/T-shirts.webp'}
            width={500}
            height={500}
            alt={'תמונה של פרטי לבוש שונים על אישה'}
            title={'33 שח'}
            href={'/'}
            className={'hover:opacity-50'}
          />
          <CardImg
            src={'/assets/Cargo_shorts.webp'}
            width={500}
            height={500}
            alt={'תמונה של פרטי לבוש שונים על אישה'}
            title={'56 שח'}
            href={'/'}
            className={'hover:opacity-50'}
          />
          <CardImg
            src={'/assets/P6.jpg'}
            width={500}
            height={500}
            alt={'תמונה של פרטי לבוש שונים על אישה'}
            title={'89 שח'}
            href={'/'}
            className={'hover:opacity-50'}
          />
        </div>
      </div>
      <div className='md:flex md:justify-between lg:w-3/5 mb-8 w-4/5 '>
        <div className='grid md:gap-4 content-center md:w-3/5 md:px-8 py-4'>
          <h2>תמצא את הסגנון שלך</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            quas nam quo cupiditate dolorum similique, non amet. Commodi,
            laborum eligendi odit corrupti, obcaecati vel expedita soluta
            consequuntur harum, neque dolore.
          </p>
          <div>
            <button className='bg-indigo-500 hover:bg-indigo-600 text-white rounded p-2 my-4'>
              צפה בפריטים
            </button>
          </div>
        </div>
        <div>
          <Image
            src={'/assets/homepage-narrative.webp'}
            width={500}
            height={500}
            alt='תמונה של בחור'
          />
        </div>
      </div>
      <div className='my-4 p-4'>תהיה חלק מהקהילה שמשנה את האופנה.</div>
    </div>
  )
}

export default Festival
