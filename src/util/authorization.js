export function provideAuthorizationBearerTokenHeader (provideToken) {
  let token

  switch (typeof provideToken) {
    case 'string':
      token = provideToken
      break

    case 'function':
      token = provideToken()
      break

    default:
      throw new TypeError('provideToken must be a token string or function that returns a token string')
  }

  return {
    Authorization: 'Bearer ' + token
  }
}
