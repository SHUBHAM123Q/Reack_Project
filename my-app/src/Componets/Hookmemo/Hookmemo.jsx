import React, { useState } from 'react'

const Hookmemo = () => {
    const [count,setCount]=useState(0);
    const [item,setItem]=useState(0);

    function Multicount(){
        console.warn("Multicount");
        return count*2;
    }      

    
  return (
    <div>
        <h1>Use Memo</h1>
        <h2>count= {Multicount()}</h2>
        <h2>item= {item}</h2>
        <button className='border-2 border-black' onClick={()=>setCount(count+1)}>Update count</button>
        <button className='border-2 border-black' onClick={()=>setItem(item+1)}>Update count</button>
    </div>
  )
}

export default Hookmemo
