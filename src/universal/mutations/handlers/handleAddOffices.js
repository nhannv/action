import pluralizeHandler from 'universal/mutations/handlers/pluralizeHandler'
import addNodeToArray from 'universal/utils/relay/addNodeToArray'

const handleAddOffice = (newNode, office, viewerId) => {
  const viewer = office.get(viewerId)
  addNodeToArray(
    newNode,
    viewer,
    'offices'
  )
}

const handleAddOffices = pluralizeHandler(handleAddOffice)
export default handleAddOffices
