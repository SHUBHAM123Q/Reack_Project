import React from 'react'
import Button from './Button2'
const Button1 = () => {
  return (
    <div>
      <Button name="Play" massage="hi" onPlay={()=>console.log("Play")} onPause={()=>console.log("Pause")}></Button>
    </div>
  )
}

export default Button1
