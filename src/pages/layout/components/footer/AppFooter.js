import React from 'react'
import { Layout } from 'antd'

const { Footer } = Layout

const AppFooter = () => {
  return (
    <Footer className='app-layout-background' style={{ textAlign: 'center' }}>
      Sistema Integrado ©2022
    </Footer>
  )
}

export default AppFooter
