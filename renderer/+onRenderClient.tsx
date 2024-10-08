// Client https://vike.dev/onRenderClient

import { createStore, reconcile } from 'solid-js/store'
import { hydrate, render } from 'solid-js/web'
import type { PageContextClient } from 'vike/types'

import { PageLayout } from './PageLayout'

let dispose: () => void
let rendered = false

const [pageContextStore, setPageContext] = createStore<PageContextClient>({} as PageContextClient)

async function onRenderClient(pageContext: PageContextClient) {
  if (rendered === true) {
    document.title = pageContext.config.title
    // console.log('1 pageContext.pageProps.databases: ', pageContext.pageProps.databases);
    setPageContext(reconcile(pageContext))
  } else {
    // console.log('2 pageContext.pageProps.databases: ', pageContext.pageProps.databases);
    // Dispose to prevent duplicate pages when navigating
    if (dispose) dispose()

    setPageContext(pageContext)

    const container = document.querySelector('#page-view')!
    dispose = pageContext.isHydration
      ? hydrate(() => <PageLayout pageContext={pageContextStore} />, container)
      : render(() => <PageLayout pageContext={pageContextStore} />, container)

    rendered = true
  }
}

export default onRenderClient