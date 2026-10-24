import { useState } from 'react'

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
        <button onClick={() => setCount(count + 1)}>
          Increment
        </button>
      </main>
    </div>
  )
}

export default App