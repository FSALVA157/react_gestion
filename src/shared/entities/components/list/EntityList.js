import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Table, Button, Space, Input} from 'antd'
import { PageHeader } from '@ant-design/pro-layout';
import { PlusOutlined } from '@ant-design/icons'
import EntitiesApi from '../../api/EntitiesApi'
import EntityView from '../view/EntityView'
import AppDeleteButton from '../../../../shared/components/AppDeleteButton'
import AppEnableButton from '../../../../shared/components/AppEnableButton'
import AppViewButton from '../../../../shared/components/AppViewButton'
import AppEditButton from '../../../../shared/components/AppEditButton'

const EntityList = props => {
  const navigate = useNavigate()
  const location = useLocation()
  const [entidades, setEntidades] = useState([])
  const [entidadesFiltrados, setEntidadesFiltrados] = useState([])
  const [working, setWorking] = useState(false)
  const [currentItem, setCurrentItem] = useState(undefined)
  const [showItem, setShowItem] = useState(false)

  useEffect(() => {
    loadEntidades()
  }, [])

  const columns =
    props.columns.concat([
      {
        key: 'actions', align: 'right',
        render: (text, record) => {
          return <Space size='small'>
            <AppViewButton onClick={() => { setCurrentItem(record); setShowItem(true) }} />
            <AppEnableButton item={record} onClick={() => toggleHabilitado(record)} />
            <AppEditButton onClick={() => { setCurrentItem(record)
              navigate(location.pathname + '/edit/' + record.id)} } />
            <AppDeleteButton title='Está seguro de eliminar el registro?' onConfirm={() => deleteEntidad(record)} />
          </Space>
        }
      }]
    )

  const loadEntidades = () => {
    setWorking(true)
    EntitiesApi.get(props.metadata.endpoint)
      .then(response => {
        setWorking(false)
        setEntidades(response)
        setEntidadesFiltrados(response)
      })
      .catch(error => setWorking(false))
  }

  const toggleHabilitado = record => {
    setWorking(true)
    EntitiesApi.habilitar(props.metadata.endpoint, record.id, !record.habilitado)
      .then(response => {
        setWorking(false)
        loadEntidades()
      })
      .catch(error => setWorking(false))
  }

  const deleteEntidad = record => {
    setWorking(true)
    EntitiesApi.delete(props.metadata.endpoint, record.id)
      .then(response => {
        setWorking(false)
        loadEntidades()
      })
      .catch(error => setWorking(false))
  }

  return (
    <div style={{ backgroundColor: '#fff', height: '100%', padding: 8 }}>
      <PageHeader
        className='site-page-header'
        title={props.metadata.entidad}
        onBack={() => navigate(-1)}
        extra={[
          <Button key='1' type='primary' icon={<PlusOutlined />}
            onClick={() => navigate(location.pathname + '/new')}>
            Nuevo
          </Button>,
        ]}
      />
      <div style={{ padding: 20 }}>
        <div style={{ display: 'flex' }}>
          <Input style={{ width: 200, marginBottom: 8 }}
            placeholder='Buscar'
            allowClear
            onChange={e => {
              setEntidadesFiltrados(entidades.filter(x => x.nombre.indexOf(e.target.value) > -1))
            }}
            size='small'
          />
        </div>
        <Table
          rowKey={record => record.id}
          size='small'
          loading={working}
          columns={columns}
          dataSource={entidadesFiltrados}
          pagination={{ hideOnSinglePage: true, pageSize: 10, showSizeChanger: false }}
        />

        <EntityView
          visible={showItem}
          onClose={() => {
            setShowItem(false)
            setCurrentItem(undefined)
          }}
          entidad={currentItem}
          metadata={props.metadata}
          viewDefinition={props.viewDefinition}
        />
      </div>
    </div>
  )
}

export default EntityList
