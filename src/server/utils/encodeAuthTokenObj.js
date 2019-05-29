import {sign} from 'jsonwebtoken'
import {clientSecret} from './auth0Helpers'

const encodeAuthTokenObj = (authTokenObj) => {
  const secret = clientSecret // Buffer.from(clientSecret, 'base64')
  return sign(authTokenObj, secret)
}

export default encodeAuthTokenObj
