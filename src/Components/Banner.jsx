import React from 'react'
import Typed from 'react-typed'

const Banner = () => {
  return (
    <div className='bg-[#2699fb] w-full py-[100px] '>
      {/* border border-black */}
        <div className='max-w-[1240px] mx-auto text-center font-bold   mt-6'>
        {/* border-[white] */}

            <div className='text-2xl md:text-3xl mt-4'>Learn With Us!</div>
            <h1 className='text-white text-[50px] md:text-[70px] mt-4'>Grow with us.</h1>
            <h2 className='text-[40px] md:text-[50px] mt-4'>Learn <Typed className='text-white' strings={['Web Developer','UX/UI Designer','Software Developer']} loop backSpeed={50} typeSpeed={60}/></h2>

        </div>
    </div>
  )
}

export default Banner