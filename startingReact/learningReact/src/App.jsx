import { useState } from 'react'
import './App.css'
import ProductCard from './products/productCard'

function App() {
  let [currentCount,setCurrentCount] = useState(0)

  let [currentTheme,setTheme] = useState(themes[0]);
  

  function addValue()
  {
    // currentCount++
    setCurrentCount(currentCount+1)
    console.log('counter incremented',currentCount)
  }

  function subtractValue()
  {
    // currentCount--
    setCurrentCount(currentCount-1)
    console.log('counter decremented',currentCount)
  }

  return (
    <div>
      <h1> Current Count {currentCount}</h1>
      <button onClick={addValue}>Increment</button>
      <button onClick={subtractValue}>Decrement</button>
      <h1>This is the new thing</h1>
      <ProductCard />
    </div>
  )
}

export default App
