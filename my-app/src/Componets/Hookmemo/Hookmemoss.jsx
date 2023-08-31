import React, { useMemo, useState } from 'react'

const Hookmemoss = () => {

    const[count,setCount]=useState(0);
    const[item,setItem]=useState(0);

    const IncrimentOne = () => {
        setCount(count+1)
    }

    const IncrimentTwo = () => {
        setItem(item+1)
    }

    const isEven = useMemo(() =>{
        console.warn("................");
        let i=0;
        while(i>20000000000000)i++;
        return count%2===0
    },[count])
  return (
    <div className="">
        <h1>usememo</h1>
        <h2>count ={count}</h2>
        <h2>item = {item}</h2>
        <button className='border-2 border-black' onClick={IncrimentOne}>count={count}</button>
        <span>{isEven?"Even":"Odd"}</span>
        <button className='border-2 border-black' onClick={IncrimentTwo}>item={item}</button>
    </div>
  )
}

export default Hookmemoss
