import React from 'react'
import { Link } from 'react-router-dom';
import aset_0 from "../../assets/asset0.svg";

const sidebar = () => {
    return (
        <>
            <div className='xs:m-auto xs:max-w-[290px] sm:max-w-[550px] md:max-w-[700px]    py-20'>
                <div className='grid xs:grid-cols-1 mt-10 max-w-[260px] m-auto'>
                    <div className='flex justify-between items-center h-full'>
                        <div>
                            <Link to="/">
                                <img src={aset_0} className='mt-[-3.5px]' alt="" />
                            </Link>
                        </div>
                        <div className='group flex justify-center items-center'>
                            <button className='border-2 h-10 w-10 group-hover:text-white hover:duration-700 group-hover:bg-pink-500 rounded-full'>
                                <div>
                                    <span class="fa-solid fa-xmark text-lg block"></span>
                                </div>
                            </button>
                        </div>
                    </div>
                    <div>
                        <button className='bg-[rgb(245,9,99)] text-white text-[15px] ps-[20px] pe-[20px] pt-[10px] pb-[10px] hover:bg-black duration-500 mt-10'>
                            Getting Started <i class="fa-solid fa-greater-than ms-[5px] text-[12px]"></i>
                        </button>
                    </div>
                    <div>
                        <p className='text-xl font-bold mt-20'>Follow:</p>
                        <div className='w-[200px] flex mt-2'>
                            <div className='border-2 py-2 px-3 flex justify-center items-center group hover:duration-500 hover:bg-pink-500'>
                                <span><i class="fa-brands fa-facebook-f text-[18px] group-hover:text-white"></i></span>
                            </div>
                            <div className='border-2 py-2 px-3  ms-2 flex justify-center items-center group hover:duration-500 hover:bg-pink-500'>
                                <span><i class="fa-brands fa-twitter text-[18px] group-hover:text-white"></i></span>
                            </div>
                            <div className='border-2 py-2 ms-2 px-3 flex justify-center items-center group hover:duration-500 hover:bg-pink-500'>
                                <span><i class="fa-brands fa-linkedin-in text-[18px] group-hover:text-white"></i></span>
                            </div>
                            <div className='border-2 py-2 ms-2 px-3 flex justify-center items-center group hover:duration-500 hover:bg-pink-500'>
                                <span><i class="fa-brands fa-youtube text-[18px] group-hover:text-white"></i></span>
                            </div>
                        </div>
                    </div>
                    <hr className='mt-10'></hr>
                    <p className='text-xl font-bold mt-5'>+964 742 44 763</p>
                    <p className='text-lg mt-2 hover:text-pink-500 hover:duration-700'>info@harry.com</p>

                    <div className='mt-10'>
                        <Link className="text-[20px] text-black font-bold hover:text-red-600 hover:duration-700"
                            style={{ fontFamily: "sans-serif" }} to="/">Home</Link>
                        <hr className='mt-3 mb-5'></hr>
                        <Link className="text-[18px] text-black font-bold hover:text-red-600 hover:duration-700"
                            style={{ fontFamily: "sans-serif" }} to="/">ABOUT US</Link>
                        <hr className='mt-3 mb-5'></hr>
                        <div className='w-[260px] flex'>
                            <details className='group group-open:ease-linear'>
                                <summary className='flex justify-between '>
                                    <span>
                                        <Link className="text-[18px] text-black font-bold hover:text-red-600 hover:duration-700"
                                            style={{ fontFamily: "sans-serif" }} to="/">SHOP</Link>
                                        <hr className='w-[260px] mt-3 mb-5'></hr>
                                    </span>
                                    <span className=''>
                                        <div className='border-2 px-3 py-2 ms-[-50px] mt-[-9px] flex justify-center items-center'>
                                            <i class="fa-solid fa-plus group-open:rotate-45 text-[20px]  group-open:ease-linear  group-hover:text-pink-500 hover:duration-700"></i>
                                        </div>
                                    </span>
                                </summary>
                                <div>
                                    <Link className="text-[18px] text-black font-bold hover:text-red-600 ms-5 hover:duration-700"
                                        style={{ fontFamily: "sans-serif" }} to="/">FAQs</Link>
                                    <hr className='mt-3 mb-5'></hr>
                                    <Link className="text-[18px] text-black font-bold hover:text-red-600 ms-5 hover:duration-700"
                                        style={{ fontFamily: "sans-serif" }} to="/">Privacy & Policy</Link>
                                    <hr className='mt-3 mb-5'></hr>
                                    <Link className="text-[18px] text-black font-bold hover:text-red-600 ms-5 hover:duration-700"
                                        style={{ fontFamily: "sans-serif" }} to="/">Terms & conditions</Link>
                                    <hr className='mt-3 mb-5'></hr>
                                    <Link className="text-[18px] text-black font-bold hover:text-red-600 ms-5 hover:duration-700"
                                        style={{ fontFamily: "sans-serif" }} to="/">Login</Link>
                                    <hr className='mt-3 mb-5'></hr>
                                    <Link className="text-[18px] text-black font-bold hover:text-red-600 ms-5 hover:duration-700"
                                        style={{ fontFamily: "sans-serif" }} to="/">Forgot Password</Link>
                                    <hr className='mt-3 mb-5'></hr>
                                    <Link className="text-[18px] text-black font-bold hover:text-red-600 ms-5 hover:duration-700"
                                        style={{ fontFamily: "sans-serif" }} to="/">My Cart</Link>
                                    <hr className='mt-3 mb-5'></hr>
                                    <Link className="text-[18px] text-black font-bold hover:text-red-600 ms-5 hover:duration-700"
                                        style={{ fontFamily: "sans-serif" }} to="/">My Wishlist</Link>
                                    <hr className='mt-3 mb-5'></hr>
                                    <Link className="text-[18px] text-black font-bold hover:text-red-600 ms-5 hover:duration-700"
                                        style={{ fontFamily: "sans-serif" }} to="/">Checkout</Link>
                                    <hr className='mt-3 mb-5'></hr>
                                    <Link className="text-[18px] text-black font-bold hover:text-red-600 ms-5 hover:duration-700"
                                        style={{ fontFamily: "sans-serif" }} to="/">Error 404</Link>
                                    <hr className='mt-3 mb-5'></hr>
                                </div>
                            </details>
                        </div>
                        <Link className="text-[18px] text-black font-bold hover:text-red-600 hover:duration-700"
                            style={{ fontFamily: "sans-serif" }} to="/">CONTACT US</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default sidebar
