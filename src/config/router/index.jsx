import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Profile from '../../pages/Profile'
import Home from '../../pages/Home'

const index = () => {
  return (
    <>
        <BrowserRouter>
          <Routes>
          <Route path='/' element={<Home/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/profile' element={<Profile/>}/>
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default index