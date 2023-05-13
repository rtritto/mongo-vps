import { type Component, createSignal } from 'solid-js'

const Counter: Component = () => {
  const [count, setCount] = createSignal(0)
  return (
    <button type="button" onClick={() => setCount((prev) => prev + 1)}>
      Counter {count()}
    </button>
  )
}

export { Counter }