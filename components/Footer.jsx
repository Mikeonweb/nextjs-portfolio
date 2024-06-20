import React from 'react'

const Footer = () => {
  return (
    <div className='h-full w-full mb-4 md:mt-[30rem]'>
        <p className='text-center text-black'>&copy; {new Date().getFullYear()}, Michael Sunday</p>
    </div>
  )
}

export default Footer