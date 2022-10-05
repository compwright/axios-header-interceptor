import { describe, expect, test } from '@jest/globals'
import { provideAuthorizationBearerTokenHeader } from './authorization'

describe('provideAuthorizationBearerTokenHeader()', () => {
  test('it is a function', () => {
    expect(typeof provideAuthorizationBearerTokenHeader).toEqual('function')
  })

  test('it accepts a token string', () => {
    expect(provideAuthorizationBearerTokenHeader('foo')).toEqual({
      Authorization: 'Bearer foo'
    })
  })

  test('it accepts a function that returns a token string', () => {
    expect(provideAuthorizationBearerTokenHeader(() => 'foo')).toEqual({
      Authorization: 'Bearer foo'
    })
  })
})
