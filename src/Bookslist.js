import React from 'react'
import Book from './Book'
// import mybook from './mybook.json'
import fack from './fack.json'


const Bookslist = () => {
  return (
    <>
      {fack.map((ele1) =>{
        return(
        
          <Book userId={ele1.userId} id={ele1.id} title={ele1.title} completed={ele1.completed} />
        
        )
      })}
    </>
  )
}

export default Bookslist
