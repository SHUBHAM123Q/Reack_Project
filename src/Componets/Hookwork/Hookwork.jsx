import React, { useState } from 'react'
import Datas from './Hookwork.json'

const Hookwork = () => {
    const [nData,setData]=useState(Datas);

    let a=["Vinit Karnik","Dr Sreeram Chauliahas"]
    
    const handleRemove = (itemId) => {
        setData(nData.filter(item => item.id!==itemId))
    }   

    const handleClick=()=>{
        setData([])
    }
  return (
    <>  
        <button onClick={handleClick} className='m-auto flex bg-red-500 mt-5 mb-5 px-5 py-3'>Clear</button>
        <table className='w-full'>     
            <thead class="bg-slate-400 border-2 border-red-400">
                <tr className=''>
                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-center border-2 border-red-400">
                      Img
                    </th>
                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-center border-2 border-red-400">
                      Author
                    </th>
                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-center border-2 border-red-400">
                      Country
                    </th>
                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-center border-2 border-red-400">
                      Language
                    </th>
                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-center border-2 border-red-400">
                      Pages
                    </th>
                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-center border-2 border-red-400">
                      Title
                    </th>
                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-center border-2 border-red-400">
                      Year
                    </th>
                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-center border-2 border-red-400">
                      Remove
                    </th>
                </tr>
            </thead>
            <tbody className='border-[2px] border-green-300'>
                {
                    a.map((elm)=>{return(
                        nData.filter((el)=>{return el.author === elm}).map(items=>
                            <tr>
                                <td className='px-6 py-4 text-center border-2 border-red-400'><img src={items.img} alt='Nor Show' className='max-w-[100px]'/></td>
                                <td className='px-6 py-4 text-center border-2 border-red-400'><label>{items.author}</label><br/></td>
                                <td className='px-6 py-4 text-center border-2 border-red-400'><label>{items.country}</label><br/></td>
                                <td className='px-6 py-4 text-center border-2 border-red-400'><label>{items.language}</label><br/></td>
                                <td className='px-6 py-4 text-center border-2 border-red-400'><label>{items.pages}</label><br/></td>
                                <td className='px-6 py-4 text-center border-2 border-red-400'><label>{items.title}</label><br/></td>
                                <td className='px-6 py-4 text-center border-2 border-red-400'><label>{items.year}</label><br/></td>
                    <td className='px-6 py-4 text-center border-2 border-red-400'><button onClick={()=>handleRemove(items.id)}>Remove</button></td>
                            </tr>
                        ))} 
                    )
                }
            </tbody>
        </table>
    </>
  )
}
export default Hookwork