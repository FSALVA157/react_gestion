import { Descriptions, Form } from 'antd'
import { Outlet } from 'react-router-dom';
//import { FormConfig } from '../../../../shared/config/GlobalConfig'
import HabilitadoTag from '../../../../shared/components/habilitadoTag'
import EntidadesContainer from '../../../../shared/entidades/entidadesContainer'

const FormItem = Form.Item;
const DescItem = Descriptions.Item;

const metadatos = {
  endpoint: '/pais/',
  modulo: '',
  entidad: 'Pais',
  referencia: 'pais'
};

const columns = [
  { title: 'Nombre', dataIndex: 'nombre', key: 'nombre' },
  {
    title: 'Habilitado', dataIndex: 'habilitado', key: 'habilitado',
    render: text => <HabilitadoTag value={text} />
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
    <>
      <Outlet />
      <EntidadesContainer
        action= {props.action}
        columns={columns}
        metadatos={metadatos}
        viewDefinition={viewDefinition}
        formDefinition={formDefinition} />
    </>
  )
}

export default PaisesContainer