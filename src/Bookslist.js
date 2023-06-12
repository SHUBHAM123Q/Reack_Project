import React from 'react'
import Book from './Book'
import mybook from './mybook.json'

const Bookslist = () => {
  return (
    <>
      {mybook.map((ele1) =>{
        return(
        <div>
          <Book image={ele1.image} title={ele1.title} author={ele1.author} price={ele1.price} />
        </div>
        )
      })}
    </>
  )
}

export default Bookslist
