import React from 'react'

const Book = (props) => {
  const {image , title , author , price } = props;
  return (
    <div>
      <img src={image} alt='Not Show' style={{height:"300px"}}/>
      <h2>{title}</h2>
      <p>{author}</p>
      <p>{price}</p>
      <button>Add To Cadt</button>

    </div>
  )
}

export default Book
