// Server https://vike.dev/onRenderHtml

import { generateHydrationScript, renderToStream } from 'solid-js/web'
import { escapeInject, dangerouslySkipEscape, stampPipe } from 'vike/server'

import { PageLayout } from './PageLayout'
import type { PageContext } from './types'

function onRenderHtml(pageContext: PageContext) {
  // pageContext.pageProps.databases = global.mongo.databases
  // console.log('databases:onRenderHtml ', global.mongo.databases);
  // console.log('pageContext.routeParams.onRenderHtml: ', pageContext.routeParams);
  const { pipe } = renderToStream(() => <PageLayout pageContext={pageContext} />)
  stampPipe(pipe, 'node-stream')

  // Config values are available at pageContext.config
  // See:
  //  - https://vike.dev/head
  //  - https://vike.dev/markdown
  const { title } = pageContext.config

  const documentHtml = escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>${title}</title>
        ${dangerouslySkipEscape(generateHydrationScript())}
      </head>
      <body>
        <div id="page-view">${pipe}</div>
      </body>
    </html>`

  return {
    documentHtml,
    pageContext: {
      pageProps: {
        databases: global.mongo.databases
      }
    }
  }
}

export default onRenderHtml