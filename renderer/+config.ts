// https://vike.dev/config

import type { Config } from 'vike/types'

export default {
  clientRouting: true,
  meta: {
    // We define a new config 'title'
    title: {
      // The value of 'title' should only be loaded on the server
      env: 'server-only'
    }
  },
  passToClient: [
    // 'documentProps',
    'pageProps',
    'title',
    'databases'
  ]
} satisfies Config