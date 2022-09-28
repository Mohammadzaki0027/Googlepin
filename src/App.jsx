import React,{ useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Pin from './Components/Pin'

function App() {
const[otplength,setotplength]=React.useState(5)
const[pinnumber,setPinnumber]=React.useState("")
  return (
    <div className="App">
            <div className='pindiv'>

      <Pin length={otplength}  setPinnumber={setPinnumber}></Pin>
            </div>
    
      <div >
        <h3>Enter Pin:{pinnumber}</h3>

      </div>
    </div>
  )
}

export default App
