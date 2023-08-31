import React, { useState } from 'react'
import Datas from './data'

const Datahook = () => {
  const [nData,setData]=useState(Datas);

  const handleRemove = (itemId) =>{
    setData(nData.filter(item=> item.id !==itemId))
  }
  
  const handleClick = () =>{
    setData([])
  }  
  return (
    <div>
      <ul>
        {
          nData.map(items=>
            <li key={items.id}>
              {items.name}
              <button onClick={ () =>handleRemove(items.id)} className='ms-3 bg-purple-400 border-[1px] border-black'>Remove</button>
            </li>
            )
        }
      </ul>
      <button onClick={handleClick} className=' bg-purple-400 border-[1px] border-black'>Clear</button>
    </div>
  )
}

export default Datahook
