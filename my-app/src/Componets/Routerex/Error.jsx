import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <>
      <div className='text-5xl font-bold text-center mt-48'>
                Oops! Page not found
            </div>
            <div className='text-center text-2xl mx-72 my-5'>Whoops, this is embarassing. Looks like the page you were looking for was not found.</div>
      <Link to="/"><button className='m-auto flex bg-red-500 border-2 border-black px-10 py-1'>Back</button></Link>
    </>
  )
}

export default Error