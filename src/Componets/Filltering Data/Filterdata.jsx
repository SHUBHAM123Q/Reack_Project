import React from 'react'
import Filters from './Filters.json'
import Filter1 from './Filter1';

const Filter = () => {
    var from ="Dr Sreeram Chauliahas";
  return (
    <>
        {
            Filters.filter((ele)=>{return from === ele.author}).map((ele)=>{
                return(
                    <Filter1 author={ele.author} country={ele.country} language={ele.language} pages={ele.pages} title={ele.title} year={ele.year} img={ele.img}/>
                )
            })
        }
               
    </>
  )
}

export default Filter
