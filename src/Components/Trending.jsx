import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Topnav from '../partials/Topnav'

const Trending = () => {
    const navigate = useNavigate()
  return (
    <div className='w-screen h-screen p-10'>
  
        <div className="trending w-full flex items-center text-white bg-red-50 ">
       
            <h1 className='text-xl'>  <i onClick={()=>navigate(-1)} className="ri-arrow-left-line text-xl hover:text-[#6556CD]"></i> Trending </h1>

            <Topnav/>
        </div>
    </div>
  )
}

export default Trending