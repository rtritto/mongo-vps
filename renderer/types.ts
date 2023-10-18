import type { Component } from 'solid-js'
import type { PageContextBuiltIn } from 'vike/types'

export type PageProps = {
  dbName?: string
  collectionName?: string
  databases: Mongo['databases']
}

type Page = Component<PageProps>

export type PageContext = PageContextBuiltIn<Page> & {
  pageProps: PageProps
  config: {
    title: string
  }
}