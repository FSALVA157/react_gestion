import { Button, Tooltip } from 'antd'
import { EditTwoTone } from '@ant-design/icons'

const AppEditButton = props => {
  return (
    <Tooltip 
      title={ props.title ? props.title : 'Editar' } 
    >
      <Button 
        shape='circle' 
        size='small' 
        icon={ props.icon ? props.icon : <EditTwoTone twoToneColor='#f15e21' /> }
        onClick={ props.onClick }
      />
    </Tooltip>
  )
}

export default AppEditButton