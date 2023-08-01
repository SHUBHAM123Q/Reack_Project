import React from 'react'
import {Link} from 'react-router-dom'
const Contct = () => {
  return (
    <header>
        <nav>
            <ul className='flex gap-5'>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/About"}>About</Link></li>
                <li><Link to={"/Contact"}>Contact</Link></li>
                <li><Link to={"/Error"}>Error</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default Contct
