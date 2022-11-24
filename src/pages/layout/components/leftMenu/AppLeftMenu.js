import React, { useState } from 'react'
import { Layout, Menu } from 'antd'
import { Link } from "react-router-dom"
import logo from '../../assets/logo.png'
import Icon, { HomeOutlined, DatabaseOutlined, 
  TagsOutlined, DollarCircleOutlined, 
  AppstoreOutlined, FormatPainterOutlined } from "@ant-design/icons"
import './AppLeftMenu.scss'

const { Sider } = Layout;
const { SubMenu } = Menu;
const MenuItem = Menu.Item;

const AppLeftMenu = () => {
  const [collapsed, onCollapse] = useState(false)

  const menuitems = [
    { key: '1', icon: HomeOutlined, link: '/home', title: 'Home' },
    { key: '2', icon: DollarCircleOutlined, link: '/compras', title: 'Compras' },
    { key: '3', icon: TagsOutlined, link: '/expedientes', title: 'Expedientes' },
    { key: '4', icon: AppstoreOutlined, link: '/inventario', title: 'Inventario'},
    { key: '5', icon: FormatPainterOutlined, link: '/presupuestos', title: 'Presupuestos'},
    { key: '6', icon: DatabaseOutlined, link: '/parametricas', title: 'Paramétricas' },
  ]

  function renderMenuItem(item){
    if(item.items && item.items.length > 0){
      return <SubMenu key={ item.key } icon={ <Icon component={ item.icon } /> } title={ item.title }>
        { item.items.map(child => renderMenuItem(child)) }
      </SubMenu>;
    }
    else{
      return <MenuItem key={ item.key } icon={ <Icon component={ item.icon } /> }>
        <Link to={ item.link } /><span>{ item.title }</span>
      </MenuItem>
    }
  }

  return (
    <Sider className="left-menu-main" collapsible collapsed={ collapsed } onCollapse={ onCollapse }>
      <div className="app-layout-logo" >
        <img src={ logo } alt="logo" className="logoImg" />
      </div>

      <Menu theme="dark" defaultSelectedKeys={ ["1"] } mode="inline">
        { menuitems.map(item => renderMenuItem(item)) }
      </Menu>
    </Sider>
  )
}

export default AppLeftMenu
