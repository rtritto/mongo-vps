// https://vike.dev/onBeforeRender

import { mapServerStatus } from '../../utils/mappers/mapInfo'

async function onBeforeRender(pageContext) {
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

export default onBeforeRender