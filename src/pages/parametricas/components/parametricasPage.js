import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Card } from 'antd'
import { GlobalOutlined, EnvironmentOutlined, AuditOutlined, ApartmentOutlined, AppstoreOutlined, CalculatorOutlined, BookOutlined, DatabaseOutlined } from '@ant-design/icons'
import './parametricasPage.scss'

const ParametricasPage = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const parametricas = [
    { key: 'paises', label: 'Paises', url: '/paises', icon: <GlobalOutlined /> },
    { key: 'provincias', label: 'Provincias', url: '/provincias', icon: <GlobalOutlined /> },
    { key: 'departamentos', label: 'Departamentos', url: '/departamentos', icon: <EnvironmentOutlined /> },
    { key: 'localidades', label: 'Localidades', url: '/localidades', icon: <EnvironmentOutlined /> },
    { key: 'categorias_iva', label: 'Categorias IVA', url: '/categorias_iva', icon: <DatabaseOutlined /> },
    { key: 'tipos_comprobante', label: 'Tipos Comprobante', url: '/tipos_comprobante', icon: <BookOutlined /> },
    { key: 'tipos_impuesto', label: 'Tipos Impuesto', url: '/tipos_impuesto', icon: <AuditOutlined /> },
    { key: 'tipos_iva', label: 'Tipos IVA', url: '/tipos_iva', icon: <CalculatorOutlined /> },
    { key: 'tipos_oficina', label: 'Tipos Oficina', url: '/tipos_oficina', icon: <AppstoreOutlined /> },
    { key: 'oficinas', label: 'Oficinas', url: '/oficinas', icon: <ApartmentOutlined /> },
  ]

  return (
    <div style={ { backgroundColor: '#fff', height: '100%', padding: 8 } }>
      <Card title='Paramétricas'>
      { parametricas.map(parametrica => (
        <Card.Grid 
          style={ { width: '25%' } }
          className='parametrica'
          key={ parametrica.key } 
          onClick={ () => navigate(location.pathname + parametrica.url) }
        >
          { parametrica.icon }
          <p>{ parametrica.label }</p>
        </Card.Grid>))
      }
      </Card>
    </div>
  )
}

export default ParametricasPage