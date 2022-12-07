import { Descriptions } from 'antd'
import AppEnableTag from '../../../../shared/components/AppEnableTag'
import SelectItem from '../../../../shared/entities/components/form/formItems/SelectItem'
import EntitiesContainer from '../../../../shared/entities/EntitiesContainer'

const DescItem = Descriptions.Item;

const metadata = {
  endpoint: '/provincia/',
  modulo: ' ',
  entidad: 'Provincia',
  referencia: 'provincia'
};

const columns = [
  { title: 'Nombre', dataIndex: 'nombre', key: 'nombre' },
  { title: 'Pais', dataIndex: ['pais', 'nombre'], key: 'pais_id' },
  { title: 'Habilitado', dataIndex: 'habilitado', key: 'habilitado',
    render: text => <AppEnableTag value={text} /> },
]

const ProvinciasContainer = () => {

  const formDefinition = {
    columns: 1,
    formItemLayout: null,
    fields: [
      { key: 'nombre', label: 'Nombre', clear: 'left', disabled: false },
      { key: 'pais_id', label: 'Pais',
        widget: SelectItem,
        rules: [{ required: true, message: 'Campo Requerido' }],
        widgetProps: { referencia: 'pais_id', endpoint: 'pais', isShow: false  }
      }]
  }

  const viewDefinition = entidad =>
    entidad && <Descriptions bordered size="small" column={1}>
      <DescItem label="País"><b>{entidad.pais.nombre}</b></DescItem>
      <DescItem label="Nombre"><b>{entidad.nombre}</b></DescItem>
    </Descriptions>

  return (
    <EntitiesContainer
      columns={columns}
      metadata={metadata}
      viewDefinition={viewDefinition}
      formDefinition={formDefinition} />
  )
}

export default ProvinciasContainer;