import legitify from 'universal/validation/legitify'
import {makeOfficeNameSchema, address, phone} from 'universal/validation/templates'

export default function addOfficeValidation (officeNames) {
  return legitify({
    newOffice: {
      name: makeOfficeNameSchema(officeNames),
      address,
      phone
    }
  })
}
