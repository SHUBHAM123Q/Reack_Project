import React from 'react'
import productalias from "./productjsonData.json"
import { useState } from 'react';

const Product = () => {
    const [nproductdata, setproductdata] = useState(productalias);

    const handleClick = () => {
        setproductdata([]);

    }

    const handleRemove = (productId) => {
        setproductdata(nproductdata.filter(product => product.id !== productId))

    }

    return (
        <>
            <div className='w-full bg-gray-50 h-auto flex'>
                <h1 className='ps-24 pt-2 font-bold text-xl w-1/5'>Contacts</h1>
                <div className=' w-full h-12 pt-2 justify-end flex'>
                    <div><button className='bg-blue-500 px-2 h-8 text-white text-sm font-bold rounded-md'>Add Contacts</button></div>
                    <div className='h-8 w-8 bg-blue-500 ms-2 rounded-md'><span className='ms-auto flex justify-center mt-1'>2</span></div>
                    <div className='h-8 w-8 bg-blue-500 ms-2 rounded-md'><span className='ms-auto flex justify-center mt-1'>3</span></div>
                    <div className='w-auto'> <input type='search' className='h-8 w-32 ms-2 me-2 rounded-md placeholder:ps-2 focus:outline-gray-400 border-2 px-1' placeholder='Search'></input></div>
                </div>
            </div>
            <table className=' w-full table-fixed border border-collapse '>
                <thead className='bg-gray-200 h-12 border border-slate-400'>
                    <tr>
                        <th>Name </th>
                        <th>Email </th>
                        <th>Location </th>
                        <th>Phone </th>
                        <th>Actions</th>
                    </tr>

                </thead>
                <tbody>
                    {
                        productalias.map((ProductListing) => {
                            return (
                                <tr className='text-center h-12 border border-slate-400 text-gray-500 text-sm font-semibold'>
                                    <td className='h-12 flex'><span className='ms-20 my-auto'><img src={ProductListing.image} alt='' className='rounded-full h-8 w-8'></img></span><span className='pt-3 ms-3'>{ProductListing.name}</span></td>
                                    <td className=''>{ProductListing.email}</td>
                                    <td className=''>{ProductListing.location}</td>
                                    <td className=''>{ProductListing.phone}</td>
                                    <td >
                                        <div className='flex justify-center'>
                                            <button className='border border-blue-500 rounded-lg items-center h-6 w-auto px-2 text-blue-700 font-semibold' onClick={()=>handleClick}>Edit</button>
                                            <button className='border border-red-500 rounded-lg  my-auto h-6 w-auto  ms-5 px-2 text-red-700 font-semibold' onClick={() => handleRemove(ProductListing.id)}>Delete</button>
                                        </div>
                                    </td>
                                </tr>

                            )
                        })
                    }

                </tbody>
            </table>
        </>


    )
}

export default Product
