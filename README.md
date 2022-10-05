# axios-header-interceptor

[![Build Status](https://travis-ci.org/compwright/axios-header-interceptor.png?branch=master)](https://travis-ci.org/compwright/axios-header-interceptor)
[![Download Status](https://img.shields.io/npm/dm/axios-header-interceptor.svg?style=flat-square)](https://www.npmjs.com/package/axios-header-interceptor)
[![Sponsor on GitHub](https://img.shields.io/static/v1?label=Sponsor&message=❤&logo=GitHub&link=https://github.com/sponsors/compwright)](https://github.com/sponsors/compwright)

A tiny [axios](https://www.npmjs.com/package/axios) interceptor for adding request headers.

## Installation

With NPM:

```bash
npm install --save axios-header-interceptor
```

With Yarn:

```bash
yarn add axios-header-interceptor
```

## Example usage

```javascript
import axios from 'axios'
import addHeader from 'axios-header-interceptor'
const client = axios.createClient()
client.interceptors.response.use(
  addHeader({ 'X-Requested-With': 'myapp/axios' })
)
```

## Adding OAuth 2.0 access token header

```javascript
import axios from 'axios'
import { addOauthHeader } from 'axios-header-interceptor'
const client = axios.createClient()
// Sets the `Authorization: Bearer ACCESS_TOKEN` header
client.interceptors.response.use(
  addOauthHeader('ACCESS_TOKEN')
)
```
