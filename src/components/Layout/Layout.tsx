import React from 'react'
import { Outlet } from 'react-router-dom'
import { Dock } from '../Dock/Dock'
import { DockMenu } from '../DockMenu/DockMenu'

const Layout = () => {
  return (
    <div style={{position : 'relative'}}>
        <Outlet/>
        <DockMenu />
    </div>
  )
}

export default Layout