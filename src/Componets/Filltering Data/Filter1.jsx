import React from 'react'

const Filter1 = (props) => {
    let {author,country,language,pages,title,year,img} = props;
  return (
    <>
      <div className='inline-block overflow-auto ml-5 mb-1 hover:bg-purple-300 mt-4 bg-pink-400 shadow-2xl border-2 border-black w-[350px]'>
        <div className='p-2 '>
          <img src={img} alt='NOt Show' className='w-[150px] m-auto'/>
        </div>
        <div className='text-center'>
          <p className=''>Author:{author}</p>
          <p className=''>Country:{country}</p>
          <p className=''>Language:{language}</p>
          <p className=''>Pages:{pages}</p>
          <p className=''>Title:{title}</p>
          <p className=''>Year:{year}</p>
        </div>
      </div>
      
    </>
  )
}
export default Filter1
