import React from 'react'

const Spinner = () => {
  return (
    <div className='flex flex-col items-center space-y-z'>
      <div className='spinner'></div>
      <p className='text-bgDark text-lg font-semibold'>Loading...</p>
    </div>
  )
}

export default Spinner
 