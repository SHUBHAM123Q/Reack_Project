import React from 'react'
import Taska2 from './Taska2'
import Taska3 from './Taska3'
import Taska4 from './Taska4'

export const UserContext = React.createContext()

const Taska1 = () => {

  let shubham =[
    {name:"aryan",age:20},
    {name:"shubha",age:21},
    {name:"shyam",age:22},
  ]
  return (
    <>
      <div>
            <UserContext.Provider value={shubham}>
                <Taska2/>
                <Taska3/>
                <Taska4/>
            </UserContext.Provider>
      </div>
    </>
  )
}

export default Taska1
