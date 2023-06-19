import React from 'react'

const Filter1 = (props) => {
    let {author,country,language,pages,title,year,img} = props;
  return (
    <>
        <tr className='border-2 border-black'>
          <td><img src={img} alt='NOt Show' className='w-[150px] m-auto overflow-hidden h-[150px] border-black'/></td>
          <td><p className='text-center'>{author}</p></td>
          <td><p className='text-center'>{country}</p></td>
          <td><p className='text-center'>{language}</p></td>
          <td><p className='text-center'>{pages}</p></td>
          <td><p className='text-center'>{title}</p></td>
          <td><p className='text-center'>{year}</p></td>
        </tr>
    </>
  )
}
export default Filter1
