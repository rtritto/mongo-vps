// https://vike.dev/error-page

import { type Component, Show } from 'solid-js'

const Page: Component<{
  is404: boolean,
  err?: string
}> = (props) => {
  return (
    <Show
      when={props.is404 === true}
      fallback={
        <>
          <h1>500 Internal Error</h1>
          {/* <p>Something went wrong.</p> */}
          <p>{props.err}</p>
        </>
      }
    >
      <>
        <h1>404 Page Not Found</h1>
        <p>This page could not be found.</p>
      </>
    </Show>
  )
}

export default Page