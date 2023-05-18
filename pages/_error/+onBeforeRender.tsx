import { PageContext } from '../../renderer/types'

async function onBeforeRender(pageContext: PageContext & {
  errorWhileRendering: Error
}) {
  return pageContext.is404 ? {
    pageContext: {
      config: {
        title: '404 Page Not Found'
      }
    }
  } : {
    pageContext: {
      config: {
        title: '500 Internal Error'
      },
      pageProps: {
        err: pageContext.errorWhileRendering.message
      }
    }
  }
}

export default onBeforeRender