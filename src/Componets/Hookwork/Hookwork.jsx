import React, { useState } from 'react'
import Datas from './Hookwork.json'

const Hookwork = () => {
    const [nData,setData]=useState(Datas);

    
    const handleRemove = (itemId) => {
        setData(nData.filter(item => item.id!==itemId))
    }

    const handleClick=()=>{
        setData([])
    }
  return (
    <div>
        {
            nData.map(items=>
                <ul key={items.id}><br/>
                    <label>name:{items.name}</label><br/>
                    <label>type:{items.type}</label><br/>
                    <button onClick={()=>handleRemove(items.id)}>Remove</button>
                </ul>
            )
        }
        <button onClick={handleClick}>Click</button>
    </div>
  )
}

export default Hookwork
