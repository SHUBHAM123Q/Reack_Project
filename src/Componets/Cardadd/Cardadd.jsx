import React, { useEffect, useState } from 'react'

const Cardadd = () => {
    const [count,setCount] =useState(0);
    const [count1,setCount1] =useState(0);

    useEffect(()=>{
        setCount1(count);
    },[count]);
  return (
    <>
        <nav className=''>
            <ul className='justify-center mt-5 bg-purple-400 py-2 flex gap-5 m-auto w-full'>
                <li>
                    <a>Home</a>
                </li>
                <li>
                    <a>About</a>
                </li>
                <li className=''>
                    <a className='ms-48'>Add item:{count1}</a>
                </li>
            </ul>
        </nav>

        <div className='mt-5'>
            <button className='border-2 border-black bg-yellow-500 py-1' onClick={()=> setCount(count+1)}>Add Card</button>
            <button className='border-2 border-black bg-yellow-500 py-1 ms-5' onClick={()=> setCount(count+1)}>Add Card</button>
            <button className='border-2 border-black bg-yellow-500 py-1 ms-5' onClick={()=> setCount(0)}>Clear</button>
        </div>
    </>
  )
}

export default Cardadd
