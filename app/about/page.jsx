import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div className='grid h-full place-items-center'>
      <h2 className='mt-16 mb-8 p-4 font-bold text-2xl text-center'>
        הצטרף למעל מיליון משתמשים לקנייה, מכירה, ומציאה
        <br /> של פריטים מעוררי השראה והכי נדירים בעולם.
      </h2>
      <div className='md:flex md:justify-between lg:w-3/5 w-4/5 '>
        <div className='grid md:gap-4 content-center md:w-3/5 md:px-8 py-8'>
          <h3 className='font-bold text-3xl'>הסיפור</h3>
          <p>
            Depop was founded by co-founder of PIG magazine and RETROSUPERFUTURE
            sunglasses, Simon Beckerman - originally as a social network where
            PIG’s readers could buy items featured in the magazine. After
            realizing that Depop needed a selling function, Simon re-envisioned
            the app as a global marketplace — a mobile space where you can see
            what your friends and the people you’re inspired by are liking,
            buying, and selling.
            <br />
            <br />
            In turn, your friends and creative influencers all over the world
            can see the things you like, buy, and sell, and are inspired by you.
            This ecosystem has supported Depop becoming a global conduit of
            connection, not only in m-commerce, but culture, design, and
            creative communities around the world.
            <br />
            <br />
            In 2021, Depop became a wholly-owned subsidiary of Etsy - the global
            marketplace for unique and creative goods - and continues to operate
            as a standalone company.
            <br />
            <br />
          </p>
        </div>
        <div>
          <Image
            src={'/assets/homepage-narrative.webp'}
            width={300}
            height={300}
            alt='תמונה של בחור'
          />
        </div>
      </div>
      <div dir='ltr' className='md:flex md:justify-between lg:w-3/5 w-4/5 '>
        <div className='grid md:gap-4 content-center md:w-3/5 md:px-8 py-8'>
          <h3 dir='rtl' className='font-bold text-3xl'>
            הצוות
          </h3>
          <p dir='rtl'>
            Depop was founded by co-founder of PIG magazine and RETROSUPERFUTURE
            sunglasses, Simon Beckerman - originally as a social network where
            PIG’s readers could buy items featured in the magazine. After
            realizing that Depop needed a selling function, Simon re-envisioned
            the app as a global marketplace — a mobile space where you can see
            what your friends and the people you’re inspired by are liking,
            buying, and selling.
            <br />
            <br />
          </p>
        </div>
        <div>
          <Image
            src={'/assets/homepage-narrative.webp'}
            width={300}
            height={300}
            alt='תמונה של בחור'
          />
        </div>
      </div>
      <div className='md:flex md:justify-between lg:w-3/5 w-4/5 '>
        <div className='grid md:gap-4 content-center md:w-3/5  md:px-8 py-8'>
          <h3 className='font-bold text-3xl'>קהילתנו</h3>
          <p>
            Depop was founded by co-founder of PIG magazine and RETROSUPERFUTURE
            sunglasses, Simon Beckerman - originally as a social network where
            PIG’s readers could buy items featured in the magazine. After
            realizing that Depop needed a selling function, Simon re-envisioned
            the app as a global marketplace — a mobile space where you can see
            what your friends and the people you’re inspired by are liking,
            buying, and selling.
            <br />
            <br />
          </p>
        </div>
        <div>
          <Image
            src={'/assets/homepage-narrative.webp'}
            width={300}
            height={300}
            alt='תמונה של בחור'
          />
        </div>
      </div>
      <div className='p-2 mx-8 mt-16 mb-8 lg:w-3/5 w-4/5 '>
        <h3 className=' mb-4 p-2 font-bold text-3xl text-center'>קריירה</h3>
        <p className='pb-4'>
          Don’t see your dream Depop job? Think outside of the box. Show us
          something we’ve never seen before. Excite us. Challenge us. Our
          employees are driven by passion, and we want to work with people who
          love Depop just as much as we do.
          <br /> Email your marketing pitches, growth hacks, UX re-designs, and
          genius ideas that only you can think of to experience@depop.com with
          your resume. We’re always open.
        </p>
        <p className='text-center font-bold hover:underline hover:cursor-pointer'>
          צפה במשרות פתוחות
        </p>
      </div>
    </div>
  )
}

export default About
