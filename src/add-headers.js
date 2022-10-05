export function addHeaders (headersProvider) {
  return function (config) {
    let headers = {}
    if (typeof headersProvider === 'function') {
      headers = headersProvider()
    } else if (typeof headers === 'object') {
      headers = headersProvider
    }
    config.headers = { ...(config.headers || {}), ...headers }
    return config
  }
}
