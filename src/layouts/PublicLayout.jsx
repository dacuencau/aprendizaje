import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

const PublicLayout = () => {
  return (
    <div className='flex flex-col justify-between h-screen'>
      <NavBar/>
      <div className='h-full overflow-y-scroll bg-blue-400'>
      <main >
        <Outlet/>
      </main>
      </div>
      <Footer/>
    </div>
  )
}

export default PublicLayout
