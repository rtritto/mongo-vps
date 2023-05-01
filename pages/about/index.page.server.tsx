// https://vite-plugin-ssr.com/data-fetching

export async function onBeforeRender(pageContext) {
  return {
    pageContext: {
      pageProps: {
        // config: getGlobalConfig()
      }
    }
  }
}

export const documentProps = {
  title: 'About'
}

export const passToClient = ['pageProps']