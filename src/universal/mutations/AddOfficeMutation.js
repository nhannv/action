import {commitMutation} from 'react-relay'
import handleAddNotifications from 'universal/mutations/handlers/handleAddNotifications'
import handleAddOffices from 'universal/mutations/handlers/handleAddOffices'
import createProxyRecord from 'universal/utils/relay/createProxyRecord'

graphql`
  fragment AddOfficeMutation_office on AddOfficePayload {
    office {
        id
        name
        address
        city
        phone
        IP
        openTime
        closeTime
        default
    }
  }
`

const mutation = graphql`
  mutation AddOfficeMutation($newOffice: NewOfficeInput!) {
    addOffice(newOffice: $newOffice) {
      error {
        message
      }
      ...AddOfficeMutation_office @relay(mask: false)
    }
  }
`

const popOfficeCreatedToast = (res, {atmosphere}) => {
  const {name: officeName} = res.addOffice.office
  atmosphere.eventEmitter.emit('addToast', {
    title: 'Tạo văn phòng thành công!',
    message: `Văn phòng ${officeName} đã được tạo`,
    level: 'success'
  })
}

export const addOfficeOfficeUpdater = (payload, office, viewerId) => {
  const officePayload = payload.getLinkedRecord('office')
  handleAddOffices(officePayload, office, viewerId)
}

const AddOfficeMutation = (atmosphere, variables, {history}, onError, onCompleted) => {
  const {viewerId} = atmosphere
  return commitMutation(atmosphere, {
    mutation,
    variables,
    updater: (office) => {
      const payload = office.getRootField('addOffice')
      if (!payload) return
      addOfficeOfficeUpdater(payload, office, viewerId, {history})
    },
    optimisticUpdater: (office) => {
      const {newOffice} = variables
      const officeRecord = createProxyRecord(office, 'Office', {
        ...newOffice
      })
      handleAddOffices(officeRecord, office, viewerId)
    },
    onCompleted: (res, errors) => {
      onCompleted(res, errors)
      popOfficeCreatedToast(res, {atmosphere, history})
    },
    onError
  })
}

export default AddOfficeMutation
