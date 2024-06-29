import React from 'react'
import loader from "../../public/loading.mp4"

const Loading = () => {
  return (
    <div className='w-full h-screen'>
        <video className='w-full h-full object-cover' autoPlay muted loop src={loader}></video>
    </div>
  )
}

export default Loading