import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
const About = () => {
    const edit =useNavigate();
    
    const editt = () => {
      edit('/')
  }
  return (
    <>
      <h1>Shubham</h1>
      <button className='' onClick={() => editt()}>On Chang</button>

     <nav className=''>
        <div className='flex justify-between w-[300px] m-auto'>
          <Link to={"Feature"} className='text-[30px]'>Feature</Link>
          <Link to={"new"} className='text-[30px]'>New</Link>
        </div>
     </nav>
    </>
  )
}

export default About
