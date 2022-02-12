import React  from 'react'
import SideBar from '../components/SideBar'
import { Outlet } from 'react-router-dom'

const PrivateLayout = () => {
  return (
    <div className='put'>
      <div className='pate'>
      <SideBar/>
      </div>
      <main className='qu' ><Outlet/></main>
    </div>
  )
}

export default PrivateLayout
