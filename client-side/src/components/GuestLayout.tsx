import React from 'react'
import { Outlet } from 'react-router-dom'

const GuestLayout = () => {
  return (
    <>
      <div>GuestUser</div>
      <Outlet />
    </>
  )
}

export default GuestLayout;