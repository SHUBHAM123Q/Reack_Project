import React from 'react'

const App = ({name,onPlay,onPause}) => {
  let Playing = false;
  function hendaleClick(){
    if(Playing){
      onPause()
    }
    else{
      onPlay()
    }
    Playing =!Playing;
  }
  return (
    <div>
      <button onClick={hendaleClick} className='bg-purple-500 flex justify-center m-auto'>{name}</button>
      <div id='result' className='w-[400px] m-auto mt-5 border-2 border-black'></div>
    </div>
  )
}

export default App
