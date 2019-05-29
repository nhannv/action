import {GraphQLNonNull} from 'graphql'
import AddOfficePayload from 'server/graphql/types/AddOfficePayload'
import NewOfficeInput from 'server/graphql/types/NewOfficeInput'
import {getUserId, isUserInOrg} from 'server/utils/authorization'
import shortid from 'shortid'
import addOfficeValidation from './helpers/addOfficeValidation'
import standardError from 'server/utils/standardError'
import rateLimit from 'server/graphql/rateLimit'
import getRethink from 'server/database/rethinkDriver'

export default {
  type: AddOfficePayload,
  description: 'Create a new office',
  args: {
    newOffice: {
      type: new GraphQLNonNull(NewOfficeInput),
      description: 'The new office object'
    }
  },
  resolve: rateLimit({perMinute: 4, perHour: 20})(
    async (source, args, {authToken, dataLoader, socketId: mutatorId, orgId}) => {
      // AUTH
      const {approverId, city, IP, openTime, closeTime} = args.newOffice
      const viewerId = getUserId(authToken)
      const userInOrg = await isUserInOrg(viewerId, orgId)
      if (!userInOrg) return standardError(new Error('Failed'), {userId: viewerId})

      // VALIDATION
      const orgOffices = await dataLoader.get('officesByOrgId').load(orgId)
      const orgOfficeNames = orgOffices.map((office) => office.name)
      const {
        data: {newOffice},
        errors
      } = addOfficeValidation(orgOfficeNames)(args)

      if (Object.keys(errors).length) {
        return standardError(new Error('Failed input validation'))
      }
      // RESOLUTION
      const officeId = shortid.generate()
      const verifiedOffice = {
        id: officeId,
        city,
        IP,
        openTime,
        closeTime,
        orgId,
        ...newOffice,
        createdAt: new Date(),
        updatedAt: new Date()
      }
      await r({
        // insert office
        office: r
          .table('Office')
          .insert(verifiedOffice, {returnChanges: true})('changes')(0)('new_val')
          .default(null)
      })

      const data = {
        officeId,
        orgId,
        approverId
      }

      return data
    }
  )
}
