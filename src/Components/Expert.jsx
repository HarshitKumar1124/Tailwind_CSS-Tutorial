import React from 'react'
import Vector1 from '../Assets/Vector (1).jpg'
import {IoNavigate} from 'react-icons/io5'

const Expert = () => {
  return (
    <div className='border border-[orange] max-w-[1240px] mx-auto md:grid grid-cols-2 my-3 rounded-md shadow-lg shadow-[#787779]'>
        <div className='border border-[blue] h-[100%] col-span-1 p-4 inline'>
            <img src={Vector1} alt="vector1" className='md:w-[100%]  w-[80%] mx-auto '/>
        </div>
        <div className='border border-[blue] h-[100%] col-span-1 p-4 flex flex-col justify-center '>
            <h1 className='text-[#00df9a] font-bold my-4'>Learn From EXPERTS!!</h1>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid assumenda eum qui cumque sunt voluptas, voluptate in incidunt exercitationem minus distinctio libero, impedit laudantium quos nihil beatae dolorem provident neque dignissimos non sint nulla mollitia? Harum explicabo ipsam placeat illo.</p>
            <button className='my-3 flex rounded justify-center items-center p-3 w-[30%] bg-black text-white font-bold text-[15px]'>Get Started <IoNavigate className=" text-2xl mx-4 border border-[red] "/></button>
        </div>

    </div>
  )
}

export default Expert