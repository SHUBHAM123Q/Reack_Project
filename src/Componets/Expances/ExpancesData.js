import React from 'react'

const ExpanceData = (props) => {

  const month = props.date.toLocaleString('en-US', { month: 'long' });
  const year = props.date.getFullYear();
  const day = props.date.toLocaleString('en-US', { day: '2-digit' });


  return (
    <div>
      <div className='text-xl flex'>
        <div>{day}</div>
        <div>{month}</div>
        <div>{year}</div>
      </div>
    </div>
  )
}

export default ExpanceData;