import { useLocation } from 'react-router-dom'
import Formulario from './components/form/EntityForm'
import Listado from './components/list/EntityList'

const EntitiesContainer = props => {
  let path = useLocation().pathname

  if (path.includes('new')
    || path.includes('edit')) {
    return (
      <Formulario
        metadata={props.metadata}
        formDefinition={props.formDefinition}
        handleOnChange={props.handleOnChange}
        {...props} />)
  }

  return (
    <Listado
      columns={props.columns}
      metadata={props.metadata}
      columnWhereSearch={props.columnToSearch}
      viewDefinition={props.viewDefinition}
      {...props} />
  )
}

export default EntitiesContainer
