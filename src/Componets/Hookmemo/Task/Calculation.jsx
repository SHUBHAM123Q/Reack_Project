import React from 'react'
import { useMemo } from 'react';
import { useState } from 'react'

const Calculation = () => {
  const [count,setcount]=useState();
  const [count1,setcount1]=useState();

  const [out,setout]=useState();
  const [out1,setout1]=useState();

  function output (e){
    setout(e.target.value);
  }

  function output1 (e){
    setout1(e.target.value);
  }

  let a1 = () => {
    setcount (+out+ +out1);
  }

  let a2 = () => {
    setcount1 (out -out1);
  }

  let multicount = useMemo(()=>{
    console.warn("--------odd--------")
  },[count])

  let multicount1 = useMemo(()=>{
    console.warn("--------even--------")
  },[count1])
  return (
    <>
        <div className='flex items-center justify-center h-[500px]'>
            <div className=''>
                <input type='text' onChange={output} value={out} className='border-2 border-black mt-2'/><br/>
                <input type='text' onChange={output1} value={out1} className='border-2 border-black mt-2'/>
                <h1>{count}</h1>
                <h1>{count1}</h1>
                <button onClick={a1} className='border-2 border-black px-10 py-1 mt-10'>+</button>
                <button onClick={a2} className='border-2 border-black px-10 py-1 mt-10'>-</button>
            </div>
        </div>
    </>
  )
}

export default Calculation
