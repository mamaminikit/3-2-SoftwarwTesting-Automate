import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Title from './Title'
import Calculate from './Calculate'
import Result from './Result'
function App() {
  const [first, setFirst] = useState(null)
  const [second, setSecond] = useState(null)
  const [operator, setOperator] = useState(null)
  const [output, setOutput] = useState(0)
  const handleClick = (first, second, output, operator) => {
    setFirst(first)
    setSecond(second)
    setOperator(operator)
    setOutput(output)
  }
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <Title title="AUTOMATE TESTING" descrip="use 'crypree' to automate testing with TDD technic (vitest)" />
      <Calculate onFormClick={handleClick} />
      <Result first={first} second={second} operator={operator} output={output} />
    </>
  )
}

export default App
