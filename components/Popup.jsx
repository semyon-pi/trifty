import React from 'react'

const Popup = ({ title, text, onClose }) => {
  return (
    <div className='fixed inset-0 flex items-center justify-center z-50'>
      {/* The backdrop */}
      <div className='absolute inset-0 bg-black opacity-50'></div>

      {/* The popup */}
      <div className='relative z-10 rounded-lg border border-gray-400 shadow-lg w-80 bg-white'>
        <button
          onClick={onClose}
          className='absolute -top-2 -right-2 rounded-full border border-gray-300 bg-gray-100 p-1'
        >
          <span className='sr-only'>Close</span>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-3 w-3'
            viewBox='0 0 20 20'
            fill='currentColor'
          >
            <path
              fillRule='evenodd'
              d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
              clipRule='evenodd'
            />
          </svg>
        </button>

        <div className='flex items-center gap-4 p-4'>
          <div>
            <p className='font-medium text-black'>{title}</p>

            <p className='line-clamp-1 text-sm text-black'>{text}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Popup
