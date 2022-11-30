import { Tag } from 'antd'

const AppEnableTag = props => {
  let color = props.value ? 'blue' : 'grey'
  return (
    <Tag color={ color } key={ props.key ? props.key : props.value }>{ props.value ? 'HABILITADO' : 'DESHABILITADO' }</Tag>
  )
}

export default AppEnableTag