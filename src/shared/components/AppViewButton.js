import { Button, Tooltip } from 'antd'
import { EyeOutlined } from '@ant-design/icons'

const AppViewButton = props => {
  return (
    <Tooltip
      title={ props.title ? props.title : 'Ver' } 
    >
      <Button 
        type='primary' 
        shape='circle' 
        size='small' 
        icon={ props.icon ? props.icon : <EyeOutlined /> }
        onClick={ props.onClick }
      />
    </Tooltip>
  )
}

export default AppViewButton