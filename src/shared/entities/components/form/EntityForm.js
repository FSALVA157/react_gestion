import { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { Button, Form, Card, Spin, notification, Row } from 'antd'
import { SaveOutlined } from '@ant-design/icons'
import { FormConfig } from '../../../../shared/config/GlobalConfig'
import EntitiesApi from '../../api/EntitiesApi'
import { PageHeader } from '@ant-design/pro-layout';
import  FormBuilder  from "antd-form-builder";

const FormItem = Form.Item

const EntityForm = props => {
  const navigate = useNavigate()
  const location = useLocation()
  const [entidad, setEntidad] = useState(undefined)
  const [working, setWorking] = useState(false)
  const [form] = Form.useForm()
  const { id } = useParams()
  console.log("Form: ", form);

  useEffect(() => {
    if (location.pathname.includes('edit')) {
      loadEntidad(id)
    }
  }, [])

  const loadEntidad = id => {
    setWorking(true)
    EntitiesApi.get(props.metadata.endpoint, id)
      .then(response => {
        setWorking(false)
        setEntidad(response)
        form.setFieldsValue({ ...response })
      })
      .catch(error => setWorking(false))
  }

  const onFinish = values => {
    setWorking(true)
    let data = { id: id, ...values }
    EntitiesApi.save(props.metadata.endpoint, data)
      .then(response => {
        setWorking(false)
        notification.success({
          message: 'Exito',
          description: `${props.metadata.entidad} guardado`, placement: 'bottomRight'
        })
        navigate(-1)
      })
      .catch(error => setWorking(false))
  }

  return (
    <div style={{ backgroundColor: '#fff', height: '100%', padding: 8 }}>
      <PageHeader
        className="site-page-header"
        title={`${id ? 'Editar ' : 'Nuevo '} ${props.metadata.entidad} `}
        onBack={() => navigate(-1)} />
      <div style={{ padding: 20 }}>
        <Spin spinning={working}>
          <Card>
            <Form
              {...FormConfig.DefaultLayout}
              form={form}
              name="formulario"
              onFinish={onFinish}
              initialValues={{ ...entidad }}
              scrollToFirstError >      

             <FormBuilder meta={ props.formDefinition } form={ form } />
 
              <Row justify="end">
                <FormItem>
                  <Button type="primary" htmlType="submit" icon={<SaveOutlined />}>Guardar</Button>
                </FormItem>

              </Row>
            </Form>
          </Card>
        </Spin>
      </div>
    </div>
  )
}

export default EntityForm