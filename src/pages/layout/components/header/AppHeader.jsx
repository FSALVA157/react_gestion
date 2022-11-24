import React from 'react'
import { Layout, Button, Row, Col, Popover, Tooltip } from 'antd'
import { useNavigate } from 'react-router-dom'
import { MenuOutlined } from '@ant-design/icons'
//import AuthenticationHelper from '../../../../shared/helpers/authenticationHelper'
//import { AppConfig } from '../../../../shared/config/GlobalConfig'
import './AppHeader.scss'

const { Header } = Layout

const AppHeader = () => {
  let navigate = useNavigate()

  const logout = () => {
//    AuthenticationHelper.logout(() => navigate('/login'))
  }

  return (
    <Header className='app-layout-background' style={ { padding: '0 15px' } }>
      <Row>
        <Col xs={ 12 } sm={ 12 } md={ 12 } lg={ 12 }>
          <h2 style={ { fontWeight: 100, margin: 0 } }>{ 'Sistema Administracion' }</h2>
        </Col>
        <Col xs={ 12 } sm={ 12 } md={ 12 } lg={ 12 } style={ { textAlign: 'right' } }>
          <Popover placement='bottomRight'
            content={ 
              <div>
                <Button style={ { textAlign: 'left', width: '100%' } } 
                  type='text' 
                  onClick={ logout }
                >Salir</Button>
              </div>
            } 
            trigger='click'>
            <Tooltip title={ /*user*/ 'Menu' } placement='left'>
              <MenuOutlined 
                style={ { fontSize: 20, marginRight: 8 } }
              />
              {/*<Avatar style={{ backgroundColor: '#f15e21', marginBottom: 16, cursor: 'pointer' }}
                size='large' 
                icon={ <MenuOutlined /> } 
              />*/}
            </Tooltip>
          </Popover>
        </Col>
      </Row>
    </Header>
  )
}

export default AppHeader
