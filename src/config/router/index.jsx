<<<<<<< HEAD
import React from "react";
=======
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Profile from '../../pages/Profile'
import Home from '../../pages/Home'
>>>>>>> d4700155e1d04c38b07afec028869d8e50db7c4a

const index = () => {
  return (
    <>
<<<<<<< HEAD
      <div>
        <h1> Hallo Yabes</h1>
      </div>
    </>
  );
};

export default index;
=======
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
>>>>>>> d4700155e1d04c38b07afec028869d8e50db7c4a
