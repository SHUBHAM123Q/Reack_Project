import React from 'react'
import {useNavigate} from 'react-router-dom'
const About = () => {
    const edit =useNavigate();
    
    const editt = () => {
      edit('/')
  }
  return (
    <>
      <h1>Shubham</h1>
      <button className='' onClick={() => editt()}>On Chang</button>
    </>
  )
}

export default About
