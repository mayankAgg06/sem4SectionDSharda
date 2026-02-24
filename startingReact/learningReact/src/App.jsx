import { useState } from 'react'
import './App.css'
import ProductCard from './products/productCard'
import themes from './themes.js'

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
    <div style={{backgroundColor: currentTheme.colors.background}}>
      {/* <h1> Current Count {currentCount}</h1>
      <button onClick={addValue}>Increment</button>
      <button onClick={subtractValue}>Decrement</button>
      <h1>This is the new thing</h1>
      <ProductCard /> */}
      
      <h1>{currentTheme.name}</h1>
      <h2 style={{color:currentTheme.colors.primary}}>{currentTheme.colors.text}</h2>

      <div>
        {/* {themes.map((theme)=>{
          <button key={theme.id} onClick={(theme)=>setTheme(theme)}
          style={{backgroundColor: theme.colors.primary}}>{theme.name}</button>
        })} */}

        <button key={themes[1].id} onClick={()=>setTheme(themes[1])}
          style={{backgroundColor: themes[1].colors.primary}}>{themes[1].name}</button>
        <button key={themes[2].id} onClick={()=>setTheme(themes[2])}
          style={{backgroundColor: themes[2].colors.primary}}>{themes[2].name}</button>
        <button key={themes[3].id} onClick={()=>setTheme(themes[3])}
          style={{backgroundColor: themes[3].colors.primary}}>{themes[3].name}</button>
        <button key={themes[4].id} onClick={()=>setTheme(themes[4])}
          style={{backgroundColor: themes[4].colors.primary}}>{themes[4].name}</button>
        
        
      </div>

    </div>
  )
}

export default App
