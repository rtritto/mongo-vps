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

export const passToClient = ['pageProps']