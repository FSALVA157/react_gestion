import React, { Fragment } from 'react'
import { Layout } from 'antd'
import { Outlet } from 'react-router-dom'
import AppLeftMenu from './components/leftMenu/AppLeftMenu'
import AppHeader from './components/header/AppHeader'
import AppFooter from './components/footer/AppFooter'
import AppContent from './components/content/AppContent'
/*import AuthenticationHelper from '../../shared/helpers/authenticationHelper'
import LoginContainer from '../login/LoginContainer'*/
import './AppLayout.scss'

const AppLayout = () => {
  return (
    <>
      <Layout style={{ minHeight: "100vh" }}>
        <AppLeftMenu />
          <Layout className='app-layout'>
            <AppHeader />
            <AppContent />
            <AppFooter />
          </Layout>
      </Layout>
      <Outlet />
    </>
  )
}

export default AppLayout
