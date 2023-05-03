// https://vite-plugin-ssr.com/onRenderHtml

import { generateHydrationScript, renderToStream } from 'solid-js/web'
import { escapeInject, dangerouslySkipEscape, stampPipe } from 'vite-plugin-ssr/server'

import { PageLayout } from './PageLayout'
import type { PageContext } from './types'

function onRenderHtml(pageContext: PageContext) {
  const { pipe } = renderToStream(() => <PageLayout pageContext={pageContext} />)
  stampPipe(pipe, 'node-stream')

  // Config values are available at pageContext.config
  // See:
  //  - https://vite-plugin-ssr.com/head
  //  - https://vite-plugin-ssr.com/markdown
  const { title } = pageContext.config

  return escapeInject`<!DOCTYPE html>
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
}

export default onRenderHtml