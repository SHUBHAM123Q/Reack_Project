import React, { useEffect } from 'react'

const FirstRequest = () => {
    useEffect(()=>{
        console.log("first axios requst");
    },[])
  return (
    <div>
      <h2 className=''>first requst</h2>
    </div>
  )
}

export default FirstRequest;
