import React from 'react';
import Filters from './Filters.json'
import Filter1 from './Filter1';


const Filterdata = () => {
    var from =["Dr Sreeram Chauliahas","Vinit Karnik"];
  return (
    <>
        <table>
            <thead className='border-2 border-black'>
                <th className='w-[150px] bg-blue-500 text-center border-2 '>Img</th>
                <th className='w-[250px] bg-red-500 text-center border-2'>Author</th>
                <th className='w-[150px] bg-blue-500 text-center border-2'>Country</th>
                <th className='w-[150px] bg-green-500 text-center border-2'>Language</th>
                <th className='w-[100px] bg-purple-300 text-center border-2'>Pages</th>
                <th className='w-[250px] bg-green-500 text-center border-2'>Title</th>
                <th className='w-[50px] bg-red-500 text-center border-2'>Year</th>
            </thead>
    

            <tbody >
                {
                    Filters.filter((ele)=>{return from[0] === ele.author}).map((ele)=>{
                        return(
                            <Filter1 author={ele.author} country={ele.country} language={ele.language} pages={ele.pages} title= {ele.title} year={ele.year} img={ele.img}/>
                        )
                    })
                } 
            </tbody>
            <br/>
            {
                Filters.filter((ele)=>{return from[1] === ele.author}).map((ele)=>{
                    return(
                        <Filter1 author={ele.author} country={ele.country} language={ele.language} pages={ele.pages} title={ele.title} year={ele.year} img={ele.img} />
                    )
                })
            }
        </table>
    </>
  )
}
export default Filterdata