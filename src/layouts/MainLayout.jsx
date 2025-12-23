import App from '@/App'
import React from 'react'
import { Outlet } from 'react-router'

const MainLayout = () => {
  return (
    <>
    <App/>
    <Outlet/>
    </>
  )
}

export default MainLayout