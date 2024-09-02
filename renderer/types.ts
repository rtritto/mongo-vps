import type { Component } from 'solid-js'
import type { PageContextServer } from 'vike/types'

export type PageProps = {
  dbName?: string
  collectionName?: string
  databases: Mongo['databases']
}

type Page = Component<PageProps>

export type PageContext = PageContextServer<Page> & {
  pageProps: PageProps
  config: {
    title: string
  }
}