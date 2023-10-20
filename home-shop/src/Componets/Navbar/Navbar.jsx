import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import aset_0 from "../../assets/asset0.svg";
import aset_90 from "../../assets/asset90.svg";
import aset_91 from "../../assets/asset91.svg";
import aset_92 from "../../assets/asset 92.svg";
import aset_93 from "../../assets/asset 93.svg";
import { useSelector } from "react-redux";
import { Offcanvas, Ripple, initTE } from "tw-elements";
initTE({ Offcanvas, Ripple });
const Navbar = () => {
  let Data = useSelector((state) => state.cartData);
  let WishData = useSelector((state) => state.whishData);

  const [ismenuopen, setismenuopen] = useState(false);

  const toggalebutton = () => {
    setismenuopen(!ismenuopen);
  }

  return (
    <>
      <div className="bg-[#f0f2ee] h-[80px]  border-[1px] border-gray-300  border-t-0 border-r-0 border-l-0 fixed w-screen z-50 top-0">
        <div className="xs:m-auto xs:max-w-[290px] sm:max-w-[550px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1200px] 2xl:max-w-[1440px] h-full">
          <header className="h-full">
            <nav className="border-solid h-full flex justify-between items-center">
              <div>
                <Link to="/">
                  <img src={aset_0} className="mt-[-3.5px]" alt="" />
                </Link>
              </div>
              <div>
                <ul className="header-menu flex justify-between items-center h-full xs:hidden xl:flex">
                  <li>
                    <div className="flex lg:gap-8">
                      <div>
                        <Link
                          className="text-[525258] text-[15px] hover:text-red-600 "
                          style={{ fontFamily: "sans-serif" }}
                          to="/"
                        >
                          Home
                        </Link>
                      </div>
                      <div>
                        <Link
                          className="text-[525258] text-[15px] hover:text-red-600 "
                          style={{ fontFamily: "sans-serif" }}
                          to="/About"
                        >
                          About Us
                        </Link>
                      </div>
                      <div>
                        <Link
                          className="text-[525258] text-[15px] hover:text-red-600 "
                          style={{ fontFamily: "sans-serif" }}
                          to="/Shop"
                        >
                          Shop
                        </Link>
                      </div>
                      <div className="dropdown inline-block relative">
                        <button className="inline-flex items-center">
                          <span className="hover:text-pink-700">Pages</span>
                          <svg
                            className="fill-current h-4 w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
                          </svg>
                        </button>
                        <div className="dropdown-menu absolute hidden pt-5 pb-5 px-5 w-48 bg-white shadow-xl text-sm leading-7 cursor-pointer">
                          <Link to="/FAQs" className="hover:text-pink-700">
                            FAQs
                          </Link>{" "}
                          <br />
                          <Link to="/Privacy" className="hover:text-pink-700">
                            Privacy & Policy
                          </Link>{" "}
                          <br />
                          <Link to="/Terms" className="hover:text-pink-700">
                            Terms & conditions
                          </Link>{" "}
                          <br />
                          <Link to="/Login" className="hover:text-pink-700">
                            Login
                          </Link>{" "}
                          <br />
                          <Link to="/Register" className="hover:text-pink-700">
                            Register
                          </Link>{" "}
                          <br />
                          <Link
                            to="/ForgotPassword"
                            className="hover:text-pink-700"
                          >
                            Forgot Password
                          </Link>{" "}
                          <br />
                          <Link to="/Mycart" className="hover:text-pink-700">
                            My Cart
                          </Link>{" "}
                          <br />
                          <Link
                            to="/MyWishlist"
                            className="hover:text-pink-700"
                          >
                            My Wishlist
                          </Link>{" "}
                          <br />
                          <Link to="./Checkout" className="hover:text-pink-700">
                            Checkout
                          </Link>{" "}
                          <br />
                          <Link to="/Pages" className="hover:text-pink-700">
                            Error 404
                          </Link>
                        </div>
                      </div>
                      <div>
                        <Link
                          className="text-[525258] text-[15px] hover:text-red-600 "
                          style={{ fontFamily: "sans-serif" }}
                          to="/Contactus"
                        >
                          Contact us
                        </Link>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="flex">
                <div className="flex gap-6 xs:hidden md:flex me-[30px]">
                  <Link to="/Shop">
                    <img src={aset_90} alt="" />
                  </Link>
                  <Link to="/Login">
                    <img src={aset_91} alt="" />
                  </Link>
                  <Link to="MyWishlist">
                    <img src={aset_92} alt="" />
                    <p className="h-[24px] w-[24px] absolute ms-[11px] mt-[-25px] text-center bg-red-400  rounded-full z-20 border-2 border-[#f0f2ee]">
                      {WishData.length}
                    </p>
                  </Link>
                  <Link to="/Mycart">
                    <img src={aset_93} alt="" />
                    <p className="h-[24px] w-[24px] absolute ms-[11px] mt-[-25px]  text-center bg-red-400  rounded-full z-20 border-2 border-[#f0f2ee] ">
                      {Data.length}
                    </p>
                  </Link>
                </div>
                <div className="xl:hidden">
                  <button onClick={toggalebutton}>
                    <div className="group w-7 ms-2">
                      <span className="h-[2px] w-6 bg-black block group-hover:bg-pink-500 translate-x-0 duration-500 group-hover:translate-x-2 group-hover:transition-transform group-hover:duration-300 group-hover:ease-linear"></span>
                      <span className="h-[2px] w-4 bg-black block my-[5px] mx-auto group-hover:bg-pink-500"></span>
                      <span className="h-[2px] w-6 bg-black block group-hover:-translate-x-2 translate-x-0 duration-500 ms-auto group-hover:duration-300 group-hover:ease-linear group-hover:transition-transform group-hover:bg-pink-500"></span>
                    </div>
                  </button>
                </div>
              </div>
              {ismenuopen && (
                <div className="bg-white border-2 w-full sm:w-[400px] h-full fixed top-0 xs:right-0 sm:right-18 z-50 overflow-y-scroll">
                  <div class="flex-grow p-4">
                    <div className="xs:m-auto xs:max-w-[290px] sm:max-w-[300px] md:max-w-[700px] ">
                      <div className="grid xs:grid-cols-1 mt-10 max-w-[260px] m-auto">
                        <div className="flex justify-between items-center h-full">
                          <div>
                            <Link to="/">
                              <img
                                src={aset_0}
                                className="mt-[-3.5px]"
                                alt=""
                              />
                            </Link>
                          </div>
                          <div className="group flex justify-center items-center">
                            <button className="border-2 h-10 w-10 group-hover:text-white hover:duration-700 group-hover:bg-pink-500 rounded-full" onClick={toggalebutton}>
                              <div>
                                <span class="fa-solid fa-xmark text-lg block"></span>
                              </div>
                            </button>
                          </div>
                        </div>
                        <div>
                          <button className="bg-[rgb(245,9,99)] text-white text-[15px] ps-[20px] pe-[20px] pt-[10px] pb-[10px] hover:bg-black duration-500 mt-10">
                            Getting Started{" "}
                            <i class="fa-solid fa-greater-than ms-[5px] text-[12px]"></i>
                          </button>
                        </div>
                        <div>
                          <p className="text-xl font-bold mt-20">Follow:</p>
                          <div className="w-[200px] flex mt-2">
                            <div className="border-2 py-2 px-3 flex justify-center items-center group hover:duration-500 hover:bg-pink-500">
                              <span>
                                <i class="fa-brands fa-facebook-f text-[18px] group-hover:text-white"></i>
                              </span>
                            </div>
                            <div className="border-2 py-2 px-3  ms-2 flex justify-center items-center group hover:duration-500 hover:bg-pink-500">
                              <span>
                                <i class="fa-brands fa-twitter text-[18px] group-hover:text-white"></i>
                              </span>
                            </div>
                            <div className="border-2 py-2 ms-2 px-3 flex justify-center items-center group hover:duration-500 hover:bg-pink-500">
                              <span>
                                <i class="fa-brands fa-linkedin-in text-[18px] group-hover:text-white"></i>
                              </span>
                            </div>
                            <div className="border-2 py-2 ms-2 px-3 flex justify-center items-center group hover:duration-500 hover:bg-pink-500">
                              <span>
                                <i class="fa-brands fa-youtube text-[18px] group-hover:text-white"></i>
                              </span>
                            </div>
                          </div>
                        </div>
                        <hr className="mt-10"></hr>
                        <p className="text-xl font-bold mt-5">
                          +964 742 44 763
                        </p>
                        <p className="text-lg mt-2 hover:text-pink-500 hover:duration-700">
                          info@harry.com
                        </p>
                        <div className="mt-10">
                          <Link
                            className="text-[20px] text-black font-bold hover:text-red-600 hover:duration-700"
                            style={{ fontFamily: "sans-serif" }}
                            to="/"
                          >
                            Home
                          </Link>
                          <hr className="mt-3 mb-5"></hr>
                          <Link
                            className="text-[18px] text-black font-bold hover:text-red-600 hover:duration-700"
                            style={{ fontFamily: "sans-serif" }}
                            to="/About"
                          >
                            ABOUT US
                          </Link>
                          <hr className="mt-3 mb-5"></hr>
                          <div className="w-[260px] flex">
                            <details className="group group-open:ease-linear">
                              <summary className="flex justify-between ">
                                <span>
                                  <Link
                                    className="text-[18px] text-black font-bold hover:text-red-600 hover:duration-700"
                                    style={{ fontFamily: "sans-serif" }}
                                    to="/Shop"
                                  >
                                    SHOP
                                  </Link>
                                  <hr className="w-[260px] mt-3 mb-5"></hr>
                                </span>
                                <span className="">
                                  <div className="border-2 px-3 py-2 ms-[-50px] mt-[-9px] flex justify-center items-center">
                                    <i class="fa-solid fa-plus group-open:rotate-45 text-[20px]  group-open:ease-linear  group-hover:text-pink-500 hover:duration-700"></i>
                                  </div>
                                </span>
                              </summary>
                              <div>
                                <Link
                                  className="text-[18px] text-black font-bold hover:text-red-600 ms-5 hover:duration-700"
                                  style={{ fontFamily: "sans-serif" }}
                                  to="/FAQs"
                                >
                                  FAQs
                                </Link>
                                <hr className="mt-3 mb-5"></hr>
                                <Link
                                  className="text-[18px] text-black font-bold hover:text-red-600 ms-5 hover:duration-700"
                                  style={{ fontFamily: "sans-serif" }}
                                  to="/Privacy"
                                >
                                  Privacy & Policy
                                </Link>
                                <hr className="mt-3 mb-5"></hr>
                                <Link
                                  className="text-[18px] text-black font-bold hover:text-red-600 ms-5 hover:duration-700"
                                  style={{ fontFamily: "sans-serif" }}
                                  to="/Terms"
                                >
                                  Terms & conditions
                                </Link>
                                <hr className="mt-3 mb-5"></hr>
                                <Link
                                  className="text-[18px] text-black font-bold hover:text-red-600 ms-5 hover:duration-700"
                                  style={{ fontFamily: "sans-serif" }}
                                  to="/Login"
                                >
                                  Login
                                </Link>
                                <hr className="mt-3 mb-5"></hr>
                                <Link
                                  className="text-[18px] text-black font-bold hover:text-red-600 ms-5 hover:duration-700"
                                  style={{ fontFamily: "sans-serif" }}
                                  to="/ForgotPassword"
                                >
                                  Forgot Password
                                </Link>
                                <hr className="mt-3 mb-5"></hr>
                                <Link
                                  className="text-[18px] text-black font-bold hover:text-red-600 ms-5 hover:duration-700"
                                  style={{ fontFamily: "sans-serif" }}
                                  to="/Mycart"
                                >
                                  My Cart
                                </Link>
                                <hr className="mt-3 mb-5"></hr>
                                <Link
                                  className="text-[18px] text-black font-bold hover:text-red-600 ms-5 hover:duration-700"
                                  style={{ fontFamily: "sans-serif" }}
                                  to="/MyWishlist"
                                >
                                  My Wishlist
                                </Link>
                                <hr className="mt-3 mb-5"></hr>
                                <Link
                                  className="text-[18px] text-black font-bold hover:text-red-600 ms-5 hover:duration-700"
                                  style={{ fontFamily: "sans-serif" }}
                                  to="./Checkout"
                                >
                                  Checkout
                                </Link>
                                <hr className="mt-3 mb-5"></hr>
                                <Link
                                  className="text-[18px] text-black font-bold hover:text-red-600 ms-5 hover:duration-700"
                                  style={{ fontFamily: "sans-serif" }}
                                  to="/Pages"
                                >
                                  Error 404
                                </Link>
                                <hr className="mt-3 mb-5"></hr>
                              </div>
                            </details>
                          </div>
                          <Link
                            className="text-[18px] text-black font-bold hover:text-red-600 hover:duration-700"
                            style={{ fontFamily: "sans-serif" }}
                            to="/Contactus"
                          >
                            CONTACT US
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </nav>
          </header>
        </div>
      </div>
    </>
  );
};

export default Navbar;
