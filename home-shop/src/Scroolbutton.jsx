import React, { useState } from 'react'

const Scroolbutton = () => {

    const [visibal , setvisibale] = useState(false);

    const tooglevisibale = () => {
        const scroll = document.documentElement.scrollTop;

        if(scroll > 250){
            setvisibale(true)
        }
        else{
            setvisibale(false)
        }
    }

    const scrolltoTop = () =>{
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
    }

    window.addEventListener("scroll",tooglevisibale)

  return (
    <div>
      <button onClick={scrolltoTop} style={{display:visibal ? 'inline': 'none'}} className='bottom-16 right-10 fixed bg-black  rounded-full px-5 py-4'><i className='fa-solid fa-angle-up text-white text-[18px]'></i></button>
    </div>
  )
}

export default Scroolbutton
