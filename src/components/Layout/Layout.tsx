import React from 'react'
import { Outlet } from 'react-router-dom'
import { Dock } from '../Dock/Dock'
import { DockMenu } from '../DockMenu/DockMenu'
import Header from '../Header/Header'

const Layout = () => {
  return (
    <div>
      <Header/>
        <Outlet/>
        <DockMenu />
    </div>
  )
}

export default Layout