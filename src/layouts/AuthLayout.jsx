import React from 'react'
import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
  return (
    <div className='auth'>
         Authlayout
         <Outlet/>
    </div>
  )
}

export default AuthLayout
