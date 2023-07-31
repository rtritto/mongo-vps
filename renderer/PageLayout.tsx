
import type { JSX, Component } from 'solid-js'
import type { Store } from 'solid-js/store'
import { Dynamic } from 'solid-js/web'
import { useSetAtom, Provider, createStore, useStore } from 'solid-jotai'

import Link from './components/Link'
import type { PageContext } from './types'
import { PageContextProvider, usePageContext } from './usePageContext'
import './PageLayout.css'
import NavBar from './components/NavBar'
import { databasesState, selectedCollectionState, selectedDatabaseState } from '../components/store/globalAtoms'

interface Children {
  children: JSX.Element
}

const Layout: Component<Children> = (props) => {
  return (
    <div
      style={{
        display: 'flex',
        'max-width': '900px',
        margin: 'auto'
      }}
    >
      {props.children}
    </div>
  )
}

const Sidebar: Component<Children> = (props) => {
  return (
    <div
      style={{
        padding: '20px',
        'flex-shrink': 0,
        display: 'flex',
        'flex-direction': 'column',
        'align-items': 'center',
        'line-height': '1.8em'
      }}
    >
      {props.children}
    </div>
  )
}

const Content: Component<Children> = (props) => {
  return (
    <div
      style={{
        padding: '20px',
        'padding-bottom': '50px',
        'border-left': '2px solid #eee',
        'min-height': '100vh'
      }}
    >
      {props.children}
    </div>
  )
}

const Logo: Component = () => {
  return (
    <div
      style={{
        'margin-top': '20px',
        'margin-bottom': '10px'
      }}
    >
      <a href="/">
        <img src="/favicon.ico" height={64} width={64} alt="logo" />
      </a>
    </div>
  )
}

function Page() {
  const pageContext = usePageContext()
  return (
    <>
      <Dynamic component={pageContext.Page} {...(pageContext.pageProps ?? {})} />
    </>
  )
}

const store = createStore()
const PageLayout: Component<{
  pageContext: Store<PageContext>
  // databases: Mongo['databases']
}> = (props) => {
  const { dbName, collectionName, databases } = props.pageContext.pageProps
  // const { databases } = props.pageContext
  // const store = useStore()
  console.log('PageLayout.databases: ', databases);
  // console.log('props.databases: ', databases);
  if (databases) {
    store.set(databasesState, databases)
  }
  store.set(selectedCollectionState, collectionName)
  store.set(selectedDatabaseState, dbName)
  return (
    <Provider store={store}>
      <PageContextProvider pageContext={props.pageContext}>
        <NavBar
        // show={{
        //   databases: dbName !== undefined,
        //   collections: collectionName !== undefined
        // }}
        />
        {/* <Layout> */}
        {/* <Sidebar> */}
        {/* <Logo /> */}
        {/* <Link href="/">Home</Link> */}
        {/* <Link href="/about">About</Link> */}
        {/* </Sidebar> */}
        {/* <Content> */}
        <Page />
        {/* </Content> */}
        {/* </Layout> */}
      </PageContextProvider>
    </Provider>
  )
}

export { PageLayout }