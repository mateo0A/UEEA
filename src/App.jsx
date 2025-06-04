import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Links from './components/navLinks'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Links></Links>
    </>
  )
}

export default App
