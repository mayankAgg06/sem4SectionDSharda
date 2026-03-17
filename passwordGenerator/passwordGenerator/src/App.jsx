import { useState, useCallback, useEffect } from 'react'
import './App.css'

function App() {

  const [length,setLength] = useState(5)
  const [numsAllowed, setNumsAllowed] = useState(false)
  const [charsAllowed, setCharsAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordGenerator = useCallback(()=>{
    let pass = "";
    let myString = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numsAllowed)myString += "1234567890"
    if(charsAllowed) myString+= "*&^%$#@!=+_"

    for(let i =1; i<=length; i++)
    {
      let index = Math.floor(Math.random()*myString.length+1)
      pass+= myString[index]
    }
    setPassword(pass)
  },[length,numsAllowed,charsAllowed,setPassword])

  useEffect(()=>{
    passwordGenerator()
  },[length,charsAllowed,numsAllowed])

  return (
    <>
      <h1>Password Generator</h1>
      <input 
      type='text' 
      placeholder='Your Password' 
      value={password}
      readOnly>
      </input>

      <div>
          <input 
          type='range'
          max={50}
          min={1}
          className='cursor-pointer'
          value={length}
          onChange={(event)=>{setLength(event.target.value)}}>
          </input>

          <label>Length:{length}</label>
      </div>
      
      <div>
      <input 
      type='checkbox'
      defaultChecked = {numsAllowed}
      value={numsAllowed}
      onChange={(event)=>{setNumsAllowed(event.target.value)}}>
      </input>

      <label>Numbers</label>
      </div>

      <div>
      <input 
      type='checkbox'
      defaultChecked = {charsAllowed}
      value={charsAllowed}
      onChange={(event)=>{setCharsAllowed(event.target.value)}}>
      </input>

      <label>Characters</label>
      </div>
    </>
  )
}

export default App
