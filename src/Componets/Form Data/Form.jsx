import React, { useState } from 'react'

const Form = () => {
    const [name,setName]=useState("");
    const [email,setEmai]=useState("");
    const [password,setPassword]=useState("");

    const handleName = (e) => {
        console.log(e.target.value);
        setName(e.target.value);
    }
    const handleEmail = (e) => {
        console.log(e.target.value);
        setEmai(e.target.value)
    }
    const handlePassworld = (e) => {
        console.log(e.target.value);
        setPassword(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
    }
  return (
    <>
        <div>
            <form onSubmit={handleSubmit}>
                <label>Name
                    <input type='text' value={name} onChange={handleName}></input>
                </label><br/>
                <label>Email
                    <input type='email' value={email} onChange={handleEmail}></input>
                </label><br/>
                <label>Password
                    <input type='password' value={password} onChange={handlePassworld}></input>
                </label><br/>
                <button type='submit'>Submit</button>
            </form>
        </div>
    </>
  )
}

export default Form
