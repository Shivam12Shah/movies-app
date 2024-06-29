import React from 'react'
import Error from "../../public/giphy.webp"

const Notfound = () => {
  return (
    <div className='flex items-center justify-center w-full bg-[rgba(0,0,0,.98)]'>
        <img src={Error} alt="" />
    </div>
  )
}

export default Notfound