import React from 'react'
import Home from './Home/Home'
import { Route, Routes } from 'react-router-dom'
import Course from './Courses/Course'


const App = () => {
  return (
    <>
      <div className='dark:bg-slate-900 dark:text-white'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/course' element={<Course />} />
      </Routes>
      </div>
    </>

  )
}

export default App
