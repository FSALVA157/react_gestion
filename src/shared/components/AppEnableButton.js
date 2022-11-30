import { Button, Tooltip } from 'antd'
import { DislikeOutlined, LikeOutlined } from '@ant-design/icons'

const AppEnableButton = props => {
  return (
    <Tooltip 
      title={ props.item.habilitado ? 'Deshabilitar' : 'Habilitar' } 
    >
      <Button 
        shape='circle' 
        size='small' 
        icon={ props.item.habilitado ? <DislikeOutlined /> : <LikeOutlined /> }
        onClick={ props.onClick }
      />
    </Tooltip>
  )
}

export default AppEnableButton