import { describe, expect, test } from '@jest/globals'
import { addHeaders } from './add-headers'

describe('addHeaders()', () => {
  test('it is a function', () => {
    expect(typeof addHeaders).toEqual('function')
  })

  test('it returns a function', () => {
    expect(typeof addHeaders()).toEqual('function')
  })

  test('it accepts a headers object', () => {
    const headers = { foo: 'bar' }
    expect(addHeaders(headers)({})).toEqual({ headers })
  })

  test('it accepts a function that returns a headers object', () => {
    const headers = { foo: 'bar' }
    expect(addHeaders(() => headers)({})).toEqual({ headers })
  })
})
