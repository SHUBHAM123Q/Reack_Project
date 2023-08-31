import React from 'react'
import productalias from "./productjsonData.json"
import { useState } from 'react';

const Product = () => {
    const [nproductdata, setproductdata] = useState(productalias);

    const handleRemove = (productId) => {
        setproductdata(nproductdata.filter(product => product.id !== productId))
    }

    let [name,setName]=useState("");
    let [email,setEmail]=useState("");
    let [location,setLocation]=useState("");
    let [phone,setPhone]=useState("");

    function edit (id){
        setproductdata(nproductdata.filter((ele)=>{
            if(ele.name === id){
                ele.name = name;
                ele.email = email;
                ele.phone = phone;
                ele.location = location;      
            }
            return 1;
        }))
    }

    function fname(e){
        setName(e.target.value)
    }
    function femail(e){
        setEmail(e.target.value)
    }
    function fLocation(e){
        setLocation(e.target.value)
    }
    function fphone(e){
        setPhone(e.target.value)
    }
    return (
        <>
            <div><br/>
                <form className='flex justify-center border-2 w-[500px] m-auto items-center bg-black'>
                    <div><br/>
                        <input type='text' placeholder='Name' value={name} onChange={fname} className='border-2 w-[450PX] border-black px-2' required/><br/><br/>
                        <input type='email' placeholder='Email' value={email} onChange={femail} className='border-2 border-black w-[450px] px-2' required/><br/><br/>
                        <input type='text' placeholder='Location' value={location} onChange={fLocation} className='border-2 border-black w-[450px] px-2' required/><br/><br/>
                        <input type='tel' placeholder='Phone' value={phone} onChange={fphone} className='border-2 border-black w-[450px] px-2' required/><br/><br/>
                    </div> 
                </form>
            </div>

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
                        nproductdata.map((productalias) => {
                            return (
                                <tr className='text-center h-12 border border-slate-400 text-gray-500 text-sm font-semibold'>
                                    <td className='h-12 flex'><span className='ms-20 my-auto'></span><span className='pt-3 ms-3'>{productalias.name}</span></td>
                                    <td className=''>{productalias.email}</td>
                                    <td className=''>{productalias.location}</td>
                                    <td className=''>{productalias.phone}</td>
                                    <td >
                                        <div className='flex justify-center'>
                                            <button className='border border-blue-500 rounded-lg items-center h-6 w-auto px-2 text-blue-700 font-semibold' onClick={()=>edit(productalias.name)}>Edit</button>
                                            <button className='border border-red-500 rounded-lg  my-auto h-6 w-auto  ms-5 px-2 text-red-700 font-semibold' onClick={() => handleRemove(productalias.id)}>Delete</button>
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