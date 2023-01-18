import { useState } from "react"
import { useFetchData } from "./data/fetch"


const App = () => {
  const { isLoading, data, error } = useFetchData(
    "https://jsonplaceholder.typicode.com/posts"
  )
  console.log(data)
  return (
    <>
    <div>Hello from App!</div>
    </>
  )
}

export default App
