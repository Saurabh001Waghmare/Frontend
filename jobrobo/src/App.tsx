import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Robo-Job🤖</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          mujhe {count} bar dabao daddy ..! 
        </button>
      </div>
    </>
  )
}

export default App
