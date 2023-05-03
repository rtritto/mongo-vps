// https://vite-plugin-ssr.com/data-fetching

async function onBeforeRender(pageContext) {
  return {
    pageContext: {
      pageProps: {
        // config: getGlobalConfig()
      }
    }
  }
}

export default onBeforeRender