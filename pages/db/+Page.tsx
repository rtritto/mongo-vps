import type { Component } from 'solid-js'

const Page: Component<{
  dbName: string
}> = (props) => {
  return (
    <>

      <h1>TEST</h1>

      {props.dbName}

      <p>
        Demo using <code>vite-plugin-ssr</code> with Solid.
      </p>
    </>
  )
}

export default Page