import React from 'react'
import {SiExpertsexchange} from 'react-icons/si'
import {GiCardExchange} from 'react-icons/gi'
import {MdCurrencyExchange} from 'react-icons/md'

const Plans = () => {
  return (
    <div className='p-[100px] '>
        <div className='grid grid-cols-3  gap-10 '>

            <div className='shadow-xl gap-3 shadow-black bg-gray-100 hover:scale-105 rounded-xl duration-300 ease-in flex flex-col justify-center'>
            {/* border gap-3 border-black */}
                <div className=" flex justify-center"><SiExpertsexchange className="text-5xl "/></div>
                <h2 className='text-center font-bold text-2xl'>Web Development</h2>
                <h1 className="text-center font-bold text-2xl my-3">$149</h1>
                <ul className="bg-gray-200 text-center w-[90%] mx-auto px-1">
                    <li className='py-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum, repudiandae!</li>
                    <li className='py-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias assumenda saepe .</li>
                    <li className='py-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam harum debitis v.</li>
                </ul>
                <div className="m-4 px-1 text-center"><button className="bg-[#00df9a] hover:bg-[#013a28] text-center w-full font-bold p-2 text-white rounded shadow hover:shadow-[#00df9a]">Start Trial</button></div>

            </div>
            <div className='shadow-xl gap-3 shadow-black hover:scale-105 rounded-xl duration-500 ease-in flex flex-col justify-center'>
            {/* border gap-3 border-black */}
            <div className=" flex justify-center"><MdCurrencyExchange className="text-5xl "/></div>
                <h2 className='text-center font-bold text-2xl'>Web Development</h2>
                <h1 className="text-center font-bold text-2xl my-3">$150</h1>
                <ul className="bg-gray-200 text-center w-[90%] mx-auto px-1">
                    <li className='py-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum, repudiandae!</li>
                    <li className='py-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias assumenda saepe .</li>
                    <li className='py-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam harum debitis v.</li>
                </ul>
                <div className="m-4 px-1 text-center"><button className="bg-[#00df9a] hover:bg-[#013a28] text-center w-full font-bold p-2 text-white rounded shadow hover:shadow-[#00df9a]">Start Trial 2</button></div>

            </div>
            <div className='shadow-xl gap-3 shadow-black hover:scale-105 rounded-xl duration-300 ease-in flex flex-col justify-center'>
            {/* border gap-3 border-black */}
            <div className=" flex justify-center"><GiCardExchange className="text-5xl "/></div>
            
                <h2 className='text-center font-bold text-2xl'>Web Development</h2>
                <h1 className="text-center font-bold text-2xl my-3">$151</h1>
                <ul className="bg-gray-200 text-center w-[90%] mx-auto px-1">
                    <li className='py-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum, repudiandae!</li>
                    <li className='py-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias assumenda saepe .</li>
                    <li className='py-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam harum debitis v.</li>
                </ul>
                <div className="m-4 px-1 text-center "><button className="bg-[#00df9a] hover:bg-[#013a28] text-center w-full font-bold p-2 text-white rounded shadow hover:shadow-[#00df9a]">Start Trial 3</button></div>

            </div>

        </div>
    </div>
  )
}

export default Plans