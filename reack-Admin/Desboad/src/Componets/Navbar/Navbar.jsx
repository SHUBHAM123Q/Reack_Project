import React from 'react'
const Navbar = () => {
    return (
        <>
            <div className=''>
                <div className='flex justify-between bg-[#2a2b36] h-[60px] items-center px-3 flex-wrap'>
                    <div className=''>
                        <ul className='flex gap-4'>
                            <i className="fa-solid fa-bars text-[20px] mt-[3px] text-white cursor-pointer"></i>
                            <li><a className='cursor-pointer text-[16px] text-[#ffffff]'>Desbord</a></li>
                            <li><a className='cursor-pointer text-[16px] text-white opacity-75 hover:opacity-100'>User</a></li>
                            <li><a className='cursor-pointer text-[16px] text-white opacity-75 hover:opacity-100'>Setting</a></li>
                        </ul>
                    </div>

                    <div className=''>
                        <ul className='gap-10 flex flex-wrap'>
                            <li className='flex text-center items-center'>
                                <div className='w-12 rounded-s-md bg-purple-600 py-1 cursor-pointer'><i className='bi bi-sun text-lg'></i></div>
                                <div className='w-12 rounded-e-md bg-purple-500 py-1 cursor-pointer'><i className='bi bi-moon text-lg'></i></div>
                            </li>
                            <li>
                                <i class="bi bi-bell text-[23px] text-white opacity-75 hover:opacity-100 active:opacity-100 relative cursor-pointer">
                                    <span className="h-[18px] w-[18px] absolute top-0 bg-red-600 rounded-full translate flex items-center justify-center ms-4 text-xs font-bold ">
                                        5
                                    </span>
                                </i>
                            </li>
                            <li>
                                <i class="bi bi-list-task text-[25px] text-white opacity-75 hover:opacity-100 active:opacity-100 relative cursor-pointer">
                                    <span className="h-[18px] w-[18px] absolute top-0 bg-yellow-500 rounded-full translate flex items-center justify-center ms-5 text-xs font-bold">
                                        5
                                    </span>
                                </i>
                            </li>
                            <li>
                                <i class="bi bi-envelope-open text-[23px] text-white opacity-75 hover:opacity-100 active:opacity-100 relative cursor-pointer">
                                    <span className="h-[18px] w-[18px] absolute top-0 bg-blue-600 rounded-full translate flex items-center justify-center ms-5 text-xs font-bold">
                                        4
                                    </span>
                                </i>
                            </li>
                            <li>
                                <img src="	https://coreui.io/demos/react/4.6/dark/static/media/8.35ee8919ea545620a475.jpg" alt="no image" className="rounded-full w-9 cursor-pointer"
                                />
                            </li>
                            <li><i class="bi bi-ui-radios-grid text-[23px] text-white opacity-75 hover:opacity-100 cursor-pointer"></i></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
