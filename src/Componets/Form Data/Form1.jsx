import React, { useState } from 'react'

const Form1 = () => {
    const [formData,setFormData]=useState({
        name:"",
        email:"",
        password:"",
    })

    const handleInput = (e) =>{
        const{name,value}=e.target;    
        setFormData({
            ...formData,[name]:value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }
  return (
    <>
         <div className='bg-gray-300 h-[250px] w-[360px] flex m-auto mt-[100px] rounded'>
            <form onSubmit={handleSubmit} className='text-center'>
                <div className='mt-3'>
                    <input className='py-1  p-3 ms-7 mt-5 w-[300px]' type='text' name='name' placeholder='Name' value={formData.name} onChange={handleInput} required></input>
                     <br/><br/>
                    <input className='py-1 ms-7 p-3 w-[300px]' type='email' name='email' placeholder='Email' value={formData.email} onChange={handleInput} required></input>
                    <br/><br/>
                    <input className='py-1 ms-7 p-3 w-[300px]' type='password' placeholder='Password' name='password' value={formData.password} onChange={handleInput} required></input>
                    <br/><br/>
                    <button type='submit' className='bg-green-400 px-8 py-1 ms-7 border-2 border-black rounded'>Submit</button>
                </div>
            </form>
        </div>
    </>
  )
}

export default Form1
