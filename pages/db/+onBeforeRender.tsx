// https://vite-plugin-ssr.com/onBeforeRender

import { PageContext } from '../../renderer/types'
import { isValidDatabaseName } from '../../utils/validations'

async function onBeforeRender(pageContext: PageContext) {
  const { dbName } = pageContext.routeParams
  const validationRes = isValidDatabaseName(dbName)
  if ('error' in validationRes) {
    throw new Error(validationRes.error)
  }
  return {
    pageContext: {
      pageProps: pageContext.routeParams,
      config: {
        title: `${dbName} - Mongo Express`
      }
    }
  }
}

export default onBeforeRender