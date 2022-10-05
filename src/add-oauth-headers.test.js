import { describe, expect, test } from '@jest/globals'
import { addOauthHeaders } from './add-oauth-headers'

describe('addOauthHeaders()', () => {
  test('it is a function', () => {
    expect(typeof addOauthHeaders).toEqual('function')
  })

  test('it returns a function', () => {
    expect(typeof addOauthHeaders()).toEqual('function')
  })

  test('it accepts an access token string', () => {
    expect(addOauthHeaders('foo')({})).toEqual({
      headers: {
        Authorization: 'Bearer foo'
      }
    })
  })

  test('it accepts a function that returns an access token string', () => {
    expect(addOauthHeaders(() => 'foo')({})).toEqual({
      headers: {
        Authorization: 'Bearer foo'
      }
    })
  })
})
