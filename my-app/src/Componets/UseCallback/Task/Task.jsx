import React from 'react'
import { useState , useCallback} from 'react'

const Task = () => {
    const[count,setcount]=useState(0);


    let a1 = useCallback(()=>{
        console.warn("Shubham")
        setcount(count+1);
    },[count])

    let a2 = useCallback(()=>{
        console.warn("Shubham123")
        setcount(count-1);
    },[count])
  return (
   <>
        <div>
            <h1 className='text-[35px]'>{count}</h1>
            <button onClick={a1} className='border-2 border-black text-[20px] px-3 mt-5'>+</button>
            <button onClick={a2} className='border-2 border-black text-[20px] px-3 mt-5'>-</button>
        </div>
   </>
  )
}

export default Task
