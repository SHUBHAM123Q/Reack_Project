import React from 'react'
import Usecustehook2 from './Usecustehook2'

const Custemhook = () => {
    const [count,Incriment,Decriment] = Usecustehook2(0);
    return (
        <>
            <div className='flex justify-center items-center h-[600px]'>
                <div>
                    <h1 className='ms-[70px]'>{count}</h1>
                    <button onClick={Incriment} className='border-2'>Incriment</button>
                    <button onClick={Decriment} className='ms-2 border-2'>Decriment</button>
                </div>
            </div>
        </>
    )
}

export default Custemhook
