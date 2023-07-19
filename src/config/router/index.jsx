import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Profile from '../../pages/Profile'
import Profile from '../../pages/Home'

const index = () => {
  return (
    <>
        <BrowserRouter>
          <Routes>
          <Route path='/' element={<Home/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/home' element={<Home/>}/>
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default index