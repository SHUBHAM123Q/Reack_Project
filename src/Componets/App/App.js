import React from 'react'

let bus = () =>{
  return<div>
          <div className='w-[500px] border-2 border-black m-auto mt-3'>
            <img src='https://img.freepik.com/free-vector/school-bus-cartoon-sticker-white-background_1308-76579.jpg?w=2000' alt='Not Show' />
            <hr className='border-[3px] border-black'></hr>
            <h1 className='text-red-500 text-center'>Bus</h1>
            <hr className='border-[3px] border-black'></hr>
            <p className='text-[17px]'><b className='text-[red]'>Step:1:=</b>Improves Community Health. ...</p>
            <p className='text-[17px]'><b className='text-[red]'>Step:2:=</b>Economic Benefits to the Community. ...</p>
            <p className='text-[17px]'><b className='text-[red]'>Step:3:=</b>Improves Fuel Efficiency. ...</p>
            <p className='text-[17px]'><b className='text-[red]'>Step:4:=</b>Improves Community Mobility. ...</p>
          </div>
        </div>
}

let car = () =>{
  return<div>
          <div className='w-[500px] border-2 border-black m-auto mt-3'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFEUr68rbnp1A1Rknshqig7rvWduRX83f4iA&usqp=CAU' alt='Not Show' className='h-[350px]' />
            <hr className='border-[3px] border-black'></hr>
            <h1 className='text-red-500 text-center'>Car</h1>
            <hr className='border-[3px] border-black'></hr>
            <p className='text-[17px]'><b className='text-[red]'>Step:1:=</b>Health and Emergencies. ...</p>
            <p className='text-[17px]'><b className='text-[red]'>Step:2:=</b>Save Time. ...</p>
            <p className='text-[17px]'><b className='text-[red]'>Step:3:=</b>Take pleasure trips. ...</p>
            <p className='text-[17px]'><b className='text-[red]'>Step:4:=</b>Future savings.</p>
          </div>
        </div>
}

let Shubham=({a1,a2,a3})=>{
  if(a3 === "bus"){
    return <h1>{a1}</h1>
  }
  else if(a3 ==="car"){
    return <h1>{a2}</h1>
  }
  else{
    return <h1>Not Found</h1>
  }
}

const App = () => {
  return (
    <div>
      <Shubham a1={bus()} a2={car()} a3="bus" />
    </div>
  )
}

export default App
