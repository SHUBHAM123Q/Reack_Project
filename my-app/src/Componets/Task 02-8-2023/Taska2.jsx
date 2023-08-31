import React, { useContext } from 'react'

import { UserContext } from './Taska1'
// import { AdminContext } from './Taska1'

const Taska2 = () => {

  const obj = useContext(UserContext)

  return (
    <>
        {
          obj.map((ele)=>{
            return(
              <div className=''>
                  {ele.name}
                  {ele.age}
              </div>
            )
          })
        }
    </>
  )
}

export default Taska2
