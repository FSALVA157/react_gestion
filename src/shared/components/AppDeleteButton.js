import { Button, Popconfirm, Tooltip } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'

const AppDeleteButton = props => {
  return (
    <Popconfirm 
      placement='topRight' 
      title={ props.title ? props.title : '¿Está seguro?' } 
      onConfirm={ props.onConfirm } 
      okText={ props.okText ? props.okText : 'Eliminar' } 
      cancelText='No'
    >
      <Tooltip 
        title={ props.btnTitle ? props.btnTitle : 'Eliminar' } 
      >
        <Button 
          shape='circle' 
          size='small' 
          type={ props.btnType ? props.btnType : 'primary' } 
          icon={ props.icon ? props.icon : <DeleteOutlined /> }
          disabled={ props.disabled }
        />
      </Tooltip>
    </Popconfirm>
  )
}

export default AppDeleteButton