import type { Component } from 'solid-js'

import './code.css'

const Page: Component = (pageProps) => {
  return (
    <>
      {/* <h1>Conn {pageProps.conn}</h1> */}

      <h1>About</h1>

      <p>
        Demo using <code>vite-plugin-ssr</code> with Solid.
      </p>
    </>
  )
}

export { Page }