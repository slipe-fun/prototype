import { useState } from 'react'
import { Button } from './components/ui/button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Button className="font-semibold text-5xl h-32">Click me</Button>
  )
}

export default App
