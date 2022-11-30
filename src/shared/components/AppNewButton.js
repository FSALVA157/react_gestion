import { Button, Tooltip } from 'antd'
import { PlusOutlined } from '@ant-design/icons'

const AppNewButton = props => {
  return (
    <Tooltip 
      title={ props.title ? props.title : 'Agregar' } 
    >
      <Button 
        { ...props }
        shape='circle' 
        size='small' 
        icon={ props.icon ? props.icon : <PlusOutlined style={ { color: '#f15e21' } } /> }
        onClick={ props.onClick }
      />
    </Tooltip>
  )
}

export default AppNewButton