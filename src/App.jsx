import { useState } from 'react'
import Button from './components/Button.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <h1>Vite + React</h1>
        <p>Welcome to your React + Vite application!</p>
      </header>
      <main className="App-main">
        <p>Count: {count}</p>
        <Button onClick={() => setCount(count + 1)}>
          Increment
        </Button>
      </main>
    </div>
  )
}

export default App