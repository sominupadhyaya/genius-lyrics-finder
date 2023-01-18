import { useState } from "react"
import { useFetchData } from "./data/fetch"


const App = () => {
  const { isLoading, data, error } = useFetchData(
    "https://jsonplaceholder.typicode.com/posts"
  )
  console.log(data) // prints out data!
  
  //interact with the genius api now
  //make required changes to the client.ts accordingly!`
  return (
    <>
    <div>Hello from App!</div>
    </>
  )
}

export default App
