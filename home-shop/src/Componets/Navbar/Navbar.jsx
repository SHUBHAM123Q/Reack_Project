import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';
import aset_0 from "../../assets/asset0.svg";
import aset_90 from "../../assets/asset90.svg"
import aset_91 from "../../assets/asset91.svg"
import aset_92 from "../../assets/asset 92.svg"
import aset_93 from "../../assets/asset 93.svg"
import {useSelector} from "react-redux";

const Navbar = () => {
  let Data = useSelector((state => state.cartData))

    return (
      <>
        <div className="bg-[#f0f2ee] h-[80px]  border-[1px] border-gray-300  border-t-0 border-r-0 border-l-0 navbar">
          <div className="containerr">
            <header>
              <nav className="border-solid">
                <br />
                <ul className="header-menu flex justify-between relative  items-center">
                  <a href="#">
                    <img src={aset_0} className='mt-[-3.5px]' />
                  </a>
                  <div className="flex absolute left-[260px] gap-8 ">
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
  
                        <a href="#" className="hover:text-pink-700">FAQs</a> <br />
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
                  <div className="flex gap-6">
                    <a href="#">
                      <img src={aset_90} alt="" />
                    </a>
                    <a href="#">
                      <img src={aset_91} alt="" />
                    </a>
                    <a href="#">
                      <img src={aset_92} alt="" />
                      <p className='h-[18px] w-[18px] absolute ms-[11px] mt-[-25px]  text-center bg-red-400  rounded-full z-20'>1</p>
                    </a>
                    <Link to='/Mycart'>
                    <img src={aset_93} alt="" />
                      <p className='h-[18px] w-[18px] absolute ms-[11px] mt-[-25px]  text-center bg-red-400  rounded-full z-20'>{Data.length}</p>
                      </Link>
                    
                  </div>
                </ul>
              </nav>
            </header>
          </div>
        </div>
      </>
    )
}

export default Navbar