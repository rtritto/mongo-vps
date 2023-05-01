// https://vite-plugin-ssr.com/data-fetching

import { mapServerStatus } from '../../utils/mappers/mapInfo.ts'

export async function onBeforeRender(pageContext) {
  const { config, mongo } = global
  return {
    pageContext: {
      pageProps: {
        databases: mongo.databases,
        options: config.options,
        ...mongo.adminDb !== null && {
          serverStatus: mapServerStatus(await mongo.adminDb.serverStatus() as ServerStatus)
        }
      }
    }
  }
}

export const documentProps = {
  title: 'Home - Mongo Express'
}

export const passToClient = ['pageProps']