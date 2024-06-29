import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Loading from './Components/Loading'
import Trending from './Components/Trending'
import Populer from './Components/Populer'
import Movies from './Components/Movies'
import Tvshows from './Components/Tvshows'
import People from './Components/People'

const App = () => {
  return (
    <div className='w-full h-screen bg-[#1F1E24] flex '>
      <Routes>
        <Route path='/'  element={<Home />} />
        <Route path='/trending'  element={<Trending />} />
        <Route path='/populer'  element={<Populer />} />
        <Route path='/movie'  element={<Movies />} />
        <Route path='/tv'  element={<Tvshows />} />
        <Route path='/people'  element={<People />} />
        <Route path='/l'  element={<Loading />} />
      </Routes>
    </div>
  )
}

export default App
