import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Posts from './Posts'

import Mokup from './Mokup'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h3>React Core Concepts</h3>
    <ol>
      <li>Components</li>
      <li>JSX</li>
      <li>Props</li>
      <li>Event Handler</li>
      <li>State</li>
      <li>Load Data</li>
    </ol>
    <hr />
    <Mokup></Mokup>
  
    <Posts></Posts>
    </>
  )
}

export default App
