import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Course from "../components/Course";

function Courses() {
  return (
    <div>
      <Navbar />
      <div className='px-16'>
        <Course />
      </div>
      <Footer />
    </div>
  )
}

export default Courses
