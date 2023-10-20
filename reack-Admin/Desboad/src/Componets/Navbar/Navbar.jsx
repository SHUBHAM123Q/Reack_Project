import React from 'react'
import "tw-elements-react/dist/css/tw-elements-react.min.css";
import {
    Offcanvas,
    Ripple,
    Dropdown,
    initTE,
} from "tw-elements";

initTE({ Offcanvas, Ripple, Dropdown });
const Navbar = () => {
    return (
        <>
            <div className=''>
                <div className='flex justify-between bg-[#2a2b36] h-[60px] items-center px-3 flex-wrap'>
                    <div className=''>
                        <ul className='flex gap-4'>

                            <div>
                                <button>
                                    <i className="fa-solid fa-bars text-[20px] mt-[3px] text-white cursor-pointer"
                                        data-te-offcanvas-toggle
                                        href="#offcanvasExample"
                                        role="button"
                                        aria-controls="offcanvasExample"
                                        data-te-ripple-init
                                        data-te-ripple-color="light"
                                    ></i>
                                </button>
                            </div>

                            <div>
                                <div
                                    class="invisible fixed bottom-0 left-0 top-0 z-[1045] flex w-96 max-w-full -translate-x-full flex-col border-none bg-white bg-clip-padding text-neutral-700 shadow-sm outline-none transition duration-300 ease-in-out dark:bg-neutral-800 dark:text-neutral-200 [&[data-te-offcanvas-show]]:transform-none"
                                    tabindex="-1"
                                    id="offcanvasExample"
                                    aria-labelledby="offcanvasExampleLabel"
                                    data-te-offcanvas-init>
                                    <div class="flex items-center justify-between p-4">
                                        <h5
                                            class="mb-0 font-semibold leading-normal"
                                            id="offcanvasExampleLabel">
                                            Offcanvas
                                        </h5>
                                        <button
                                            type="button"
                                            class="box-content rounded-none border-none opacity-50 hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                                            data-te-offcanvas-dismiss>
                                            <span
                                                class="w-[1em] focus:opacity-100 disabled:pointer-events-none disabled:select-none disabled:opacity-25 [&.disabled]:pointer-events-none [&.disabled]:select-none [&.disabled]:opacity-25">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke-width="1.5"
                                                    stroke="currentColor"
                                                    class="h-6 w-6">
                                                    <path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </span>
                                        </button>
                                    </div>
                                    <div>
                                        <h1>Shubham</h1>
                                    </div>
                                </div>
                            </div>
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
