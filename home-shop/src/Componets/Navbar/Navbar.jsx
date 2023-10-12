import React, { useState } from 'react'
import { Link  , useNavigate} from 'react-router-dom';
import './Navbar.css';
import aset_0 from "../../assets/asset0.svg";
import aset_90 from "../../assets/asset90.svg"
import aset_91 from "../../assets/asset91.svg"
import aset_92 from "../../assets/asset 92.svg"
import aset_93 from "../../assets/asset 93.svg"
import {useSelector} from "react-redux";

const Navbar = () => {
  let Data = useSelector((state => state.cartData))
  let WishData = useSelector((state => state.whishData))

  const navigate = useNavigate();

  const  sidenav =  () => {
    navigate('/sidebar');
  }

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
    return (
      <>
        <div className="bg-[#f0f2ee] h-[80px]  border-[1px] border-gray-300  border-t-0 border-r-0 border-l-0 fixed w-full z-50 top-0">
        <div className="xs:m-auto xs:max-w-[290px] sm:max-w-[550px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1200px] 2xl:max-w-[1440px] h-full">
          <header className='h-full'>
            <nav className="border-solid h-full flex justify-between items-center">
            <div>
              <Link to="/">
                <img src={aset_0} className='mt-[-3.5px]' alt="" />
              </Link>
            </div>
            <div className={click ? "123.active" : "124"}>
              <ul className="header-menu flex justify-between items-center h-full">
                <li>
                  <div className="flex gap-8 ">
                    <div>
                      <Link className="text-[525258] text-[15px] hover:text-red-600 "
                        style={{ fontFamily: "sans-serif" }} to="/">Home</Link>
                    </div>
                    <div>
                      <Link className="text-[525258] text-[15px] hover:text-red-600 "
                        style={{ fontFamily: "sans-serif" }} to="/About" >About Us</Link>
                    </div>
                    <div>
                      <Link className="text-[525258] text-[15px] hover:text-red-600 "
                        style={{ fontFamily: "sans-serif" }} to="/Shop">Shop</Link>
                    </div>
                    <div className="dropdown inline-block relative">
                      <button className="inline-flex items-center">
                        <span className="hover:text-pink-700">Pages</span>
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /> </svg>
                      </button>
                      <div className="dropdown-menu absolute hidden pt-5 pb-5 px-5 w-48 bg-white shadow-xl text-sm leading-7 cursor-pointer">
                        <Link to='/FAQs' className="hover:text-pink-700">FAQs</Link> <br />
                        <Link to='/Privacy' className="hover:text-pink-700">Privacy & Policy</Link> <br />
                        <Link to='/Terms' className="hover:text-pink-700">Terms & conditions</Link> <br />
                        <Link to='/Login' className="hover:text-pink-700">Login</Link> <br />
                        <Link to='/Register' className="hover:text-pink-700">Register</Link> <br />
                        <Link to='/ForgotPassword' className="hover:text-pink-700">Forgot Password</Link> <br />
                        <Link to='/Mycart' className="hover:text-pink-700">My Cart</Link> <br />
                        <Link to='/MyWishlist' className="hover:text-pink-700">My Wishlist</Link> <br />
                        <Link to='./Checkout' className="hover:text-pink-700">Checkout</Link> <br />
                        <Link to='/Pages' className="hover:text-pink-700">Error 404</Link>
                      </div>
                    </div>
                    <div>
                      <Link className="text-[525258] text-[15px] hover:text-red-600 "
                        style={{ fontFamily: "sans-serif" }} to='/Contactus'>Contact us</Link>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
              <div className="flex gap-6">
                <Link to="/Shop">
                  <img src={aset_90} alt="" />
                </Link>
                <Link to="/Login">
                  <img src={aset_91} alt="" />
                </Link>
                <Link to='MyWishlist'>
                  <img src={aset_92} alt="" />
                  <p className='h-[24px] w-[24px] absolute ms-[11px] mt-[-25px] text-center bg-red-400  rounded-full z-20 border-2 border-[#f0f2ee]'>{WishData.length}</p>
                </Link>
                <Link to='/Mycart'>
                  <img src={aset_93} alt="" />
                  <p className='h-[24px] w-[24px] absolute ms-[11px] mt-[-25px]  text-center bg-red-400  rounded-full z-20 border-2 border-[#f0f2ee]'>{Data.length}</p>
                </Link>
                <div className=''>
                  <button onClick={handleClick}>
                    <div className='group w-7 ms-2'>
                      <span className='h-[2px] w-6 bg-black block group-hover:bg-pink-500 translate-x-0 duration-500 group-hover:translate-x-2 group-hover:transition-transform group-hover:duration-300 group-hover:ease-linear'></span>
                      <span className='h-[2px] w-4 bg-black block my-[5px] mx-auto group-hover:bg-pink-500'></span>
                      <span className='h-[2px] w-6 bg-black block group-hover:-translate-x-2 translate-x-0 duration-500 ms-auto group-hover:duration-300 group-hover:ease-linear group-hover:transition-transform group-hover:bg-pink-500'></span>
                    </div>
                  </button>
                </div>
              </div>
            </nav>
          </header>
        </div>
      </div>
      </>
    )
}

export default Navbar