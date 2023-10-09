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
    <div className='xs:m-auto xs:max-w-[290px] sm:max-w-[560px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1120px] 2xl:max-w-[1440px] flex justify-end mt-10'>
      <button onClick={scrolltoTop} style={{display:visibal ? 'inline': 'none'}} className='bottom-[10px]  fixed bg-black  rounded-full px-5 py-4 z-10 '><i className='fa-solid fa-angle-up text-white text-[18px]'></i></button>
    </div>
  )
}

export default Scroolbutton
