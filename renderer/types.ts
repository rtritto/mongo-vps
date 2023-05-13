import type { Component } from 'solid-js'
import type { PageContextBuiltIn } from 'vite-plugin-ssr/types'

// eslint-disable-next-line @typescript-eslint/ban-types
export type PageProps = {}

type Page = Component<PageProps>

export type PageContext = PageContextBuiltIn<Page> & {
  pageProps: PageProps
  config: {
    title: string
  }
}