import React from 'react'
import { Tag } from 'antd'

const AppUserStateTag = props => {

  let color = ''
  switch(props.value){
    case 'ALTA': 
      color = 'blue'
      break
    case 'BAJA': 
      color = 'grey'
      break
    default: color = 'blue'
  }

  return (
    <Tag color={ color } key={ props.key ? props.key : props.value }>{ props.value }</Tag>
  )
}

export default AppUserStateTag