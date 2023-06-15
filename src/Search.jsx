import React from 'react'
import Aryan from './Shubham';
import { useState } from 'react'
const Search = () => {

    let [form,setform] = useState("");

    function f1(){
        setform("pizza")
    }
    function f2(){
        setform("burger")
    }
    return (
        <>
        <div className='d-flex justify-center'>
            <button type="button" class="btn btn-primary " onClick={f1}>Fullter</button>
            <button type="button" class="btn btn-primary  ms-5" onClick={f2}>FULLSTACK</button>
        </div>
            <Aryan form1={form}></Aryan>
        </>
    )
}
export default Search
