import { Outlet } from 'react-router-dom'
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