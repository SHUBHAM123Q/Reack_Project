import React, { useEffect, useRef } from 'react'

const UseRef = () => {

  const inputRef = useRef(null)

  useEffect (()=>{
    inputRef.current.focus();
  })

  function update () {
    inputRef.current.value="200"
  }
  return (
    <div>
      <input type='text' ref={inputRef} />
      <button onClick={update}>update</button>
    </div>
  )
}

export default UseRef
