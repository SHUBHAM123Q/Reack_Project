import React, { useEffect, useState } from 'react'

const Dataeffect = () => {

    useEffect(()=>{
        // code to run after render or upadate
    },[])

    const [clicked,setClicked]=useState();
    useEffect(()=>{
        
    })
  return (
    <div>
      <button onClick={()=> setClicked('Subscribe')} className='border-2 border-black bg-red-500'>Subscribe</button><br/><hr/>
      <button onClick={()=> setClicked('To')} className='border-2 border-black bg-purple-500 px-6'>To</button><br/><hr/>
      <button onClick={()=> setClicked('DropOut')} className='border-2 border-black bg-pink-500'>DropOut</button>
      <h1 className='text-[50px] text-bold'>{clicked}</h1>
    </div>
  )
}

export default Dataeffect
