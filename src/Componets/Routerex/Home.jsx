import React from 'react'
import {NavLink} from 'react-router-dom'

const Home = () => {
  return (
    <header>
        <nav>
            <ul className='flex gap-14 text-[50px]'>
                <li><NavLink to={"/"}>Home</NavLink></li>
                <li><NavLink to={"/About"}>About</NavLink></li>
                <li><NavLink to={"/Contact"}>Contact</NavLink></li>
                <li><NavLink to={"/Error"}>Error</NavLink></li>
            </ul>
        </nav>
    </header>
  )
}

export default Home
