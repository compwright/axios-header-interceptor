'use strict';

function addHeaders(headersProvider) {
  return function(config) {
    let headers = {};
    if (typeof headersProvider === "function") {
      headers = headersProvider();
    } else if (typeof headers === "object") {
      headers = headersProvider;
    }
    config.headers = { ...config.headers || {}, ...headers };
    return config;
  };
}

function provideAuthorizationBearerTokenHeader(provideToken) {
  let token;
  switch (typeof provideToken) {
    case "string":
      token = provideToken;
      break;
    case "function":
      token = provideToken();
      break;
    default:
      throw new TypeError("provideToken must be a token string or function that returns a token string");
  }
  return {
    Authorization: "Bearer " + token
  };
}

const addOauthHeaders = (tokenProvider) => addHeaders(
  () => provideAuthorizationBearerTokenHeader(tokenProvider)
);

exports.addHeaders = addHeaders;
exports.addOauthHeaders = addOauthHeaders;
