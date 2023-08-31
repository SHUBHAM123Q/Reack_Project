import React, { useMemo, useState } from 'react'

const Hookmemos = () => {
    const [count,setCount]=useState(0);
    const [item,setItem]=useState(5);

    const multimemo=useMemo(
    function Multicount(){
        console.warn("Multicount");
        return count*2;
    } , [count])

  return (
    <div>
        <h1>Use memo</h1>
        <h2>count = {multimemo}</h2>
        <h2>item = {item}</h2>
        <button className='border-2 border-black' onClick={()=>setCount(count+1)}>Update count</button>
        <button className='border-2 border-black' onClick={()=>setItem(item+1)}>Update count</button>
    </div>
  )
}

export default Hookmemos
