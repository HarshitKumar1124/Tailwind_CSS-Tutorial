import React,{useState} from 'react'
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai'

const Header = () => {
  const [Toggle, setToggle] = useState(false)
  return (
    <div className='bg-[#2698fbdb] drop-shadow-xl p-4 '>
      {/* border border-[yellow] */}
        <div className='max-w-[1240px]  mx-auto flex justify-between items-center '>
        {/* border border-black */}
            <div className=' text-3xl font-bold'>Harry Knocker</div>
            {/* border border-[green] */}
            
            {
            Toggle===false 
            ?<AiOutlineMenu className='text-white text-2xl block md:hidden'  onClick={()=> setToggle(!Toggle)}/> 
            :<AiOutlineClose className='text-white text-2xl block' onClick={()=> setToggle(!Toggle)}/>
            }

            <ul className=' flex gap-5 items-center text-white hidden md:flex'>
            {/* border border-[red] */}
                {/* it will be flex until size is greater than medim siz  */}
                <li>Home</li>
                <li>Company</li>
                <li>Resource</li>
                <li>Contact</li>
            </ul>

            {/* Creating Responsive */}
            <ul className={`duration-300 ease-in-out w-full h-screen text-white md:hidden absolute bg-black top-[71px] ${Toggle?`left-0`:`left-[-100%]`} transition-all `} >
            {/* border border-[red]  */}
                {/* it will be flex until size is greater than medim siz  */}
                <li className='p-3'>Home</li>
                <li className='p-3'>Company</li>
                <li className='p-3'>Resource</li>
                <li className='p-3'>Contact</li>
            </ul>

        </div>
    </div>
  )
}

export default Header