import React, { useEffect, useState } from 'react'

const Time = () => {
    const [count , setCount] = useState(1)

    useEffect(()=>{
        setTimeout(()=>{
            setCount (count + 1)
        },1000)
    })
  return (
    <div>
      <p>{count}</p>
    </div>
  )
}

export default Time
