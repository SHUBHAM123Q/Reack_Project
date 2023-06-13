import React from 'react'

const Book = (props) => {
  const {userId , id , title , completed } = props;
  return (
    <>
      <div className='inline-block border-2 border-green-400 max-h-[100px] max-w-[100px] overflow-hidden'>
        <div>
          <p>{userId}</p>
          <p>{id}</p>
          <p>{title}</p>
          <p>{completed}</p>
        </div>
      </div>
    </>
  )
}

export default Book
