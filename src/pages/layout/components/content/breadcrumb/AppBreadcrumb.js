import React from 'react'
import { Breadcrumb } from 'antd'
import { HomeOutlined } from '@ant-design/icons'
//import AuthenticationHelper from '../../../../../shared/helpers/authenticationHelper'
import { useLocation } from 'react-router'
import { Link } from 'react-router-dom'

const BreadItem = Breadcrumb.Item

const AppBreadcrumb = () => {
  const location = useLocation()
  
  const pathSnippets = location.pathname.split('/').filter(x => isNaN(x))
  
  const routes = pathSnippets.map((route, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join('/')}`
    route = route.charAt(0).toUpperCase() + route.slice(1)
    if(url !== '/home'){
      return <BreadItem key={url}>{ index !== pathSnippets.length - 1 ? <Link to={ url }>{ route }</Link> : route }</BreadItem>
    }
  })

  const breadcrumbs = [
    <BreadItem key='home' href='/home'><HomeOutlined /></BreadItem>,
  ].concat(routes)

//  if (AuthenticationHelper.isUserAuthenticated()){
    return <Breadcrumb style={ { marginBottom: 16 } } separator='>'>{ breadcrumbs }</Breadcrumb>
//  }else{
//    return null
//  }
}

export default AppBreadcrumb
