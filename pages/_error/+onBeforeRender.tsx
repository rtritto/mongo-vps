import { PageContext } from '../../renderer/types'

async function onBeforeRender(pageContext: PageContext) {
  return {
    pageContext: {
      config: {
        title: pageContext.is404 === true
          ? '404 Page Not Found'
          : '500 Internal Error'
      }
    }
  }
}

export default onBeforeRender