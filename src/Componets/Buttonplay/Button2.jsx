import React from 'react'

const Button2 = ({name,onPlay,onPause}) => {
    let playing = false;
    function handaleClick(){
        if(playing)
        {
            onPause()
        }
        else
        {
            onPlay()
        }
        playing = !playing;
    }
  return (
    <div>
      <button onClick={handaleClick}>{name}</button>
    </div>
  )
}

export default Button2
