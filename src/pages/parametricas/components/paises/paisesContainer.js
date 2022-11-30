import { Descriptions, Form } from 'antd'
import { Outlet } from 'react-router-dom';
//import { FormConfig } from '../../../../shared/config/GlobalConfig'
import AppEnableTag from '../../../../shared/components/AppEnableTag'
import EntitiesContainer from '../../../../shared/entities/EntitiesContainer'

const FormItem = Form.Item;
const DescItem = Descriptions.Item;

const metadata = {
  endpoint: '/pais/',
  modulo: '',
  entidad: 'Pais',
  referencia: 'pais'
};

const columns = [
  { title: 'Nombre', dataIndex: 'nombre', key: 'nombre' },
  {
    title: 'Habilitado', dataIndex: 'habilitado', key: 'habilitado',
    render: text => <AppEnableTag value={text} />
  },
]

const formDefinition = {
  columns: 1,
  formItemLayout: null,
  fields: [
    { key: 'nombre', label: 'Nombre', clear: 'left', disabled: false },
  ]
}

const viewDefinition = entidad =>
  entidad && <Descriptions bordered size="small" column={1}>
    <DescItem label="Nombre"> {entidad.nombre} </DescItem>
  </Descriptions>

const PaisesContainer = props => {
  return (
         
      <EntitiesContainer
        columns={columns}
        metadata={metadata}
        viewDefinition={viewDefinition}
        formDefinition={formDefinition} />
    
  )
}

export default PaisesContainer