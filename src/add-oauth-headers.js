import { provideAuthorizationBearerTokenHeader } from './util/authorization'
import { addHeaders } from './add-headers'

export const addOauthHeaders = tokenProvider => addHeaders(
  () => provideAuthorizationBearerTokenHeader(tokenProvider)
)
