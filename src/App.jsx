import { useState } from 'react'
import './style/App.css'
import Agent from "./Agent";

function App() {
  const [count, setCount] = useState(0)

  return (
      <Agent />
  );
}

export default App
