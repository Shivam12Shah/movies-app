import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Loading from './Components/Loading'
import Trending from './Components/Trending'

const App = () => {
  return (
    <div className='w-full h-screen bg-[#1F1E24] flex '>
      <Routes>
        <Route path='/'  element={<Home />} />
        <Route path='/trending'  element={<Trending />} />
        <Route path='/l'  element={<Loading />} />
      </Routes>
    </div>
  )
}

export default App
