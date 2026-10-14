import { useState } from "react"
import './App.css'

function App(){

  const [num, setNum] = useState(0);

  return(
    <div className="counter">
      <div className="window">
        {num}
      </div>
      <div className="buttons">
        <div onClick={()=>{
          setNum(num+1)
        }} className="button">Increment</div>
        <div onClick={()=>{
          setNum(num-1)
        }} className="button">Decrement</div>
      </div>
    </div>
  )
}

export default App;