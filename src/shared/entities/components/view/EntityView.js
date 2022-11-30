import { Card, Drawer } from 'antd'

const EntityView = props =>
  <Drawer
    title={`${props.metadata.entidad}: `}
    placement='right'
    closable={false}
    onClose={props.onClose}
    visible={props.visible}
    width={550} >
    <Card>
      {props.viewDefinition(props.entidad)}
    </Card>
  </Drawer>

  export default EntityView
