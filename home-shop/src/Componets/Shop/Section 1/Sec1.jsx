import React from 'react'
import "./Sec1.css"
import { addTowish, addToCart } from '../../../React Saga/Action'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { productList } from '../../../React Saga/Product/Productlist'
import { useEffect } from 'react'
import { useState } from 'react'



const Sec1 = () => {

  let dispatch = useDispatch();
  let data = useSelector((state) => state.productData)
  let [count, setCount] = useState("")

  useEffect(() => {
    dispatch(productList())
  }, [])

  let [currentPage, setCurrentPage] = useState(1);
  let recordsPerPage = 9;
  let lastIndex = currentPage * recordsPerPage;
  let firstIndex = lastIndex - recordsPerPage;
  let record = data.slice(firstIndex, lastIndex);
  let nPages = Math.ceil(data.length / recordsPerPage);
  let numbers = [...Array(nPages + 1).keys()].slice(1);

  let previousPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  let nextPage = () => {
    if (currentPage !== nPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  let changePage = (id) => {
    setCurrentPage(id)
  }

  let [shortt, shortfilter] = useState(data);

  function shorkfilter1() {
    setCount("");
    let short = data.sort((a, b) => a.id - b.id)
    shortfilter([...short])
  }

  function latestfilter() {
    shorkfilter1();
    setCount("latest product")
  }

  function pricefilter() {
    setCount("")
    let lowproduct = data.sort((a, b) => a.price2 - b.price2)
    shortfilter([...lowproduct])
  }

  function highfilter() {
    setCount("")
    let highproduct = data.sort((a, b) => b.Price - a.Price)
    shortfilter([...highproduct])
  }

  const [count1, setCount1] = useState("");

  function sortOne(price, Price2) {
    setCount(price)
    setCount1(Price2)
  }

  return (
    <>
      <div className='xs:m-auto xs:max-w-[290px] sm:max-w-[550px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1120px] 2xl:max-w-[1440px]'>
        <div className='mt-[200px] border-2 py-6 grid xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2'>
          <div className='py-3'>
            <p className='text-[18px]  ms-5'>Showing 1–9 of 27 results</p>
          </div>
          <div className='xs:ms-5 sm:flex sm:justify-start sm:ms-5 md:sm-0 md:flex md:justify-end'>
            <i class="fa-solid fa-table-cells-large text-[25px] text-[#ababab] me-[30px] mt-3"></i>
            <i class="fa-solid fa-bars text-[25px] text-[#ababab] me-[30px] mt-3"></i>
            <details className='group me-5 w-[250px]'>
              <summary className='flex justify-between py-2 border-2 h-auto xs:mt-4 sm:mt-0'>
                <span className='ms-2 text-[17px] mt-1 '>Short Filter</span>
                <span className='group-open:rotate-90 mt-1'>
                  <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" viewBox="0 0 24 24" width="24" className='-rotate-90'><path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <ul className='mt-3'>
                <li onClick={shorkfilter1} className='mb-1 cursor-pointer text-[16px] ms-1'>Short Filter</li>
                <li onClick={latestfilter} className='mb-1 cursor-pointer text-[16px] ms-1'>Latest Product</li>
                <li onClick={pricefilter} className='mb-1 cursor-pointer text-[16px] ms-1'>Price low to high</li>
                <li onClick={highfilter} className='mb-1 cursor-pointer text-[16px] ms-1'>Price high to low</li>
              </ul>
            </details>
          </div>
        </div>
      </div>

      <div className='flex justify-between xs:m-auto xs:max-w-[290px] sm:max-w-[550px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1120px] 2xl:max-w-[1440px] flex-wrap'>
        <div>
          <div className='mt-[90px] xs:w-[300px] sm:w-[550px] md:w-[700px] lg:w-[900px] xl:w-[300px]'>
            <details className='group transition-1000'>
              <summary className='flex justify-between transition-1000'>
                <span className='ipad text-[19px] text-[#232323]'>Ipad Phone & Tablets</span>
                <span className='group-open:rotate-90'>
                  <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" viewBox="0 0 24 24" width="24" className='-rotate-90'><path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <ul className='list-disc'>
                <li onClick={() => setCount("phone")} className='ms-5 decimal marker:text-[20px]'><a href='#'>Phone</a></li>
                <li onClick={() => setCount("tablet")} className='ms-5 decimal marker:text-[20px]'><a href='#'>Teblet</a></li>
                <li onClick={() => setCount("phone")} className='ms-5 decimal marker:text-[20px]'><a href='#'>IPad</a></li>
              </ul>
            </details>

          </div>

          <div className='mt-1 w-[300px] xs:w-[300px] sm:w-[550px] md:w-[700px] lg:w-[900px] xl:w-[300px]'>
            <details className='group'>
              <summary className='flex justify-between'>
                <span className='ipad text-[19px] text-[#232323]'>Planer & Virtual</span>
                <span className='group-open:rotate-90'>
                  <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" viewBox="0 0 24 24" width="24" className='-rotate-90'><path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <ul className='list-disc'>
                <li className='ms-5 decimal marker:text-[20px]'><a href='#'>Planer</a></li>
                <li className='ms-5 decimal marker:text-[20px]'><a href='#'>Virtual</a></li>
              </ul>
            </details>
          </div>

          <div className='mt-1 w-[300px] xs:w-[300px] sm:w-[550px] md:w-[700px] lg:w-[900px] xl:w-[300px]'>
            <details className='group'>
              <summary className='flex justify-between'>
                <span className='ipad text-[19px] text-[#232323]'>Spinning Reel & Kettle</span>
                <span className='group-open:rotate-90'>
                  <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" viewBox="0 0 24 24" width="24" className='-rotate-90'><path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <ul className='list-disc'>
                <li className='ms-5 decimal marker:text-[20px]'><a href='#'>Spinning-Reel</a></li>
                <li className='ms-5 decimal marker:text-[20px]'><a href='#'>Kettle</a></li>
              </ul>
            </details>
          </div>

          <div className='mt-1 w-[300px] xs:w-[300px] sm:w-[550px] md:w-[700px] lg:w-[900px] xl:w-[300px]'>
            <details className='group'>
              <summary className='flex justify-between'>
                <span className='ipad text-[19px] text-[#232323]'>Computers Monitor & Laptop</span>
                <span className='group-open:rotate-90'>
                  <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" viewBox="0 0 24 24" width="24" className='-rotate-90'><path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <ul className='list-disc'>
                <li className='ms-5 decimal marker:text-[20px]'><a href='#'>Computers</a></li>
                <li className='ms-5 decimal marker:text-[20px]'><a href='#'>Leptop</a></li>
                <li className='ms-5 decimal marker:text-[20px]'><a href='#'>Monitor</a></li>
              </ul>
            </details>
          </div>

          <div className='mt-1 w-[300px] xs:w-[300px] sm:w-[550px] md:w-[700px] lg:w-[900px] xl:w-[300px]'>
            <details className='group'>
              <summary className='flex justify-between'>
                <span className='ipad text-[19px] text-[#232323]'>Exercise Bike & Shaver Clean</span>
                <span className='group-open:rotate-90'>
                  <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" viewBox="0 0 24 24" width="24" className='-rotate-90'><path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <ul className='list-disc'>
                <li className='ms-5 decimal marker:text-[20px]'><a href='#'>Exercise-Bike</a></li>
                <li className='ms-5 decimal marker:text-[20px]'><a href='#'>Shaver-Clean</a></li>
              </ul>
            </details>
          </div>

          <div className='mt-1 w-[300px] xs:w-[300px] sm:w-[550px] md:w-[700px] lg:w-[900px] xl:w-[300px]'>
            <details className='group'>
              <summary className='flex justify-between'>
                <span className='ipad text-[19px] text-[#232323]'>Wireless & Watches</span>
                <span className='group-open:rotate-90'>
                  <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" viewBox="0 0 24 24" width="24" className='-rotate-90'><path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <ul className='list-disc'>
                <li className='ms-5 decimal marker:text-[20px]'><a href='#'>Wireless</a></li>
                <li className='ms-5 decimal marker:text-[20px]'><a href='#'>Watch</a></li>
              </ul>
            </details>
          </div>

          <div className='mt-1 w-[300px] xs:w-[300px] sm:w-[550px] md:w-[700px] lg:w-[900px] xl:w-[300px]'>
            <details className='group'>
              <summary className='flex justify-between'>
                <span className='ipad text-[19px] text-[#232323]'>Camera Bluetooth & Headset</span>
                <span className='group-open:rotate-90'>
                  <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" viewBox="0 0 24 24" width="24" className='-rotate-90'><path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <ul className='list-disc'>
                <li className='ms-5 decimal marker:text-[20px]'><a href='#'>Camera</a></li>
                <li className='ms-5 decimal marker:text-[20px]'><a href='#'>Bluetooth</a></li>
                <li className='ms-5 decimal marker:text-[20px]'><a href='#'>Headset</a></li>
              </ul>
            </details>
          </div>

          <div className='w-[300px] mt-12 xs:w-[300px] sm:w-[550px] md:w-[700px] lg:w-[900px] xl:w-[300px]'>
            <details className='group' open>
              <summary className='flex justify-between'>
                <span className='ipad text-[19px] text-[#232323]'>Brands</span>
                <span className='group-open:rotate-90'>
                  <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" viewBox="0 0 24 24" width="24" className='-rotate-90'><path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <hr></hr>
              <input type='search' className='border-2 py-2 px-3 xs:w-[300px] sm:w-[550px] md:w-[700px] lg:w-[900px] xl:w-[300px]  mt-3' placeholder='Search Brands' />
              <div className='h-[120px] overflow-auto mt-8'>
                <input onClick={() => setCount("sony")} type='radio' name='brands' className='w-4 h-4 '></input><span className='ms-3 text-[16px]'>Sony</span><br />
                <input onClick={() => setCount("logitech")} type='radio' name='brands' className='w-4 h-4 mt-2'></input><span className='ms-3 text-[16px]'>Logitech</span><br />
                <input onClick={() => setCount("samsung")} type='radio' name='brands' className='w-4 h-4 mt-2'></input><span className='ms-3 text-[16px]'>Samsung</span><br />
                <input onClick={() => setCount("apple")} type='radio' name='brands' className='w-4 h-4 mt-2'></input><span className='ms-3 text-[16px]'>Apple</span><br />
                <input onClick={() => setCount("deepcool")} type='radio' name='brands' className='w-4 h-4 mt-2'></input><span className='ms-3 text-[16px]'>Deepcool</span>
              </div>
            </details>
          </div>

          <div className='w-[300px] mt-12 xs:w-[300px] sm:w-[550px] md:w-[700px] lg:w-[900px] xl:w-[300px]'>
            <details className='group' open>
              <summary className='flex justify-between'>
                <span className='ipad text-[19px] text-[#232323]'>Colors</span>
                <span className='group-open:rotate-90'>
                  <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" viewBox="0 0 24 24" width="24" className='-rotate-90'><path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <hr></hr>
              <div className='h-[150px] overflow-auto mt-8'>
                <input onClick={() => setCount("pink")} type='radio' name='brands' className='w-4 h-4 '></input><span className='ms-3 text-[16px]'>Green</span><br />
                <input type='radio' name='brands' className='w-4 h-4 mt-2'></input><span className='ms-3 text-[16px]'>Orenge</span><br />
                <input type='radio' name='brands' className='w-4 h-4 mt-2'></input><span className='ms-3 text-[16px]'>Black</span><br />
                <input type='radio' name='brands' className='w-4 h-4 mt-2'></input><span className='ms-3 text-[16px]'>Red</span><br />
                <input type='radio' name='brands' className='w-4 h-4 mt-2'></input><span className='ms-3 text-[16px]'>Pink</span><br />
                <input type='radio' name='brands' className='w-4 h-4 mt-2'></input><span className='ms-3 text-[16px]'>Gray</span><br />
                <input type='radio' name='brands' className='w-4 h-4 mt-2'></input><span className='ms-3 text-[16px]'>Blue</span><br />
                <input type='radio' name='brands' className='w-4 h-4 mt-2'></input><span className='ms-3 text-[16px]'>Yellow</span>
              </div>
            </details>
          </div>

          <div className='w-[300px] mt-12 xs:w-[300px] sm:w-[550px] md:w-[700px] lg:w-[900px] xl:w-[300px]'>
            <details className='group' open>
              <summary className='flex justify-between'>
                <span className='ipad text-[19px] text-[#232323]'>Price</span>
                <span className='group-open:rotate-90'>
                  <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" viewBox="0 0 24 24" width="24" className='-rotate-90'><path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <hr></hr>
              <div className='h-[150px] overflow-auto mt-8'>
                <input onClick={() => sortOne(20.00 , 49.00)} type='radio' name='brands' className='w-4 h-4 '></input><span className='ms-3 text-[16px]'>$10.00 - $49.00</span><br />
                <input onClick={() => sortOne(50.00 , 99.00)} type='radio' name='brands' className='w-4 h-4 mt-2'></input><span className='ms-3 text-[16px]'>$50.00 - $99.00</span><br />
                <input onClick={() => sortOne(100.00 , 199.00)} type='radio' name='brands' className='w-4 h-4 mt-2'></input><span className='ms-3 text-[16px]'>$100.00 - $199.00</span><br />
                <input onClick={() => sortOne(200.00 , 10000)} type='radio' name='brands' className='w-4 h-4 mt-2'></input><span className='ms-3 text-[16px]'>$200 +</span>
              </div>
            </details>
          </div>

          <button onClick={() => setCount("")} className='bg-pink-500 text-white py-2 xs:w-[300px] sm:w-[550px] md:w-[700px] lg:w-[900px] xl:w-[300px] font-semibold hover:bg-indigo-500 hover:duration-300'>Reset Filter</button>
        </div>

        <div className='lg:w-[900px] xl:w-[800px] 2xl:w-[1100px] mt-9 '>
          <div className='xs:m-auto xs:max-w-[290px] sm:max-w-[550px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1120px] 2xl:max-w-[1440px]'>
            <div className='grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-9'>
              {
                count === "" && record.map(topratedd => {
                  return (
                    <>
                      <div className='one'>
                        <div className='card h-[300px] inline-block'>
                          <img src={topratedd.image} className='ss xs:w-[320px] sm:w-[260px] md:w-[340px] lg:w-[275px] xl:w-[260px] 2xl:w-[390px] ' style={{ height: "300px" }} />
                          <div className='info'>
                            <div class="one1 hover:bg-[#f50963] group xs:mt-[-210px] xs:ml-[240px] sm:mt-[-210px] sm:ml-[210px] md:mt-[-220px] md:ml-[280px] lg:mt-[-240px] lg:ml-[230px] xl:mt-[-230px] xl:ml-[190px] 2xl:mt-[-240px] 2xl:ml-[200px]">
                              <i onClick={() => dispatch(addTowish(topratedd))} class="fa-regular fa-heart text-[20px] ms-2 mt-2 group-hover:text-white "></i>
                            </div>
                            <div class="one2 hover:bg-[#f50963] group xs:mt-[5px] xs:ml-[240px] sm:mt-[5px] sm:ml-[210px] md:mt-[5px] md:ml-[280px] lg:mt-[10px] lg:ml-[230px] xl:mt-[10px] xl:ml-[190px] 2xl:ml-[200px]">
                              <i class="fa-regular fa-eye text-[20px] ms-2 mt-2 group-hover:text-white"></i>
                            </div>
                            <div class="one3 hover:bg-[#f50963] xs:mt-[5px] xs:ml-[240px] sm:mt-[5px] sm:ml-[210px] md:mt-[5px] md:ml-[280px] lg:mt-[10px] lg:ml-[230px] xl:mt-[10px] xl:ml-[190px]  2xl:ml-[200px]">
                              <i class="fa-solid fa-link text-[20px] ms-2 mt-2 group-hover:text-white"></i>
                            </div>
                          </div>
                          <div class="info1 xs:ml-[-320px] sm:ml-[-280px] md:ml-[-350px] lg:ml-[-300px] xl:ml-[-280px] 2xl:ml-[-390px]">
                            <button onClick={() => dispatch(addToCart(topratedd))} class="h-[35px] bg-black text-white  hover:bg-[#f50963] ms-8 lg:ms-[30px] 2xl:ms-[80px] xs:w-[320px] sm:w-[260px] md:w-[340px] lg:w-[275px] xl:w-[260px] 2xl:w-[400px]">ADD TO CART</button>
                          </div>

                        </div>
                        <p className='mt-4'>{topratedd.Name}</p>
                        <p className="text-gray-700 mt-1"><del>{topratedd.Delprice}</del> {topratedd.Price}</p>
                      </div>
                    </>
                  )
                })
              }
              {
                data.filter((el) => { return el.brand === count }).map(topratedd => {
                  return (
                    <>
                      <div className='one'>
                        <div className='card h-[300px] inline-block'>
                          <img src={topratedd.image} className='ss xs:w-[320px] sm:w-[260px] md:w-[340px] lg:w-[275px] xl:w-[260px] 2xl:w-[390px] ' style={{ height: "300px" }} />
                          <div className='info'>
                            <div class="one1 hover:bg-[#f50963] group xs:mt-[-210px] xs:ml-[240px] sm:mt-[-210px] sm:ml-[210px] md:mt-[-220px] md:ml-[280px] lg:mt-[-240px] lg:ml-[200px] xl:mt-[-260px] xl:ml-[200px] 2xl:mt-[-240px] 2xl:ml-[200px]">
                              <i onClick={() => dispatch(addTowish(topratedd))} class="fa-regular fa-heart text-[20px] ms-2 mt-2 group-hover:text-white "></i>
                            </div>
                            <div class="one2 hover:bg-[#f50963] group xs:mt-[5px] xs:ml-[240px] sm:mt-[5px] sm:ml-[210px] md:mt-[5px] md:ml-[280px] lg:mt-[10px] lg:ml-[200px] xl:mt-[10px] xl:ml-[200px] 2xl:ml-[200px]">
                              <i class="fa-regular fa-eye text-[20px] ms-2 mt-2 group-hover:text-white"></i>
                            </div>
                            <div class="one3 hover:bg-[#f50963] xs:mt-[5px] xs:ml-[240px] sm:mt-[5px] sm:ml-[210px] md:mt-[5px] md:ml-[280px] lg:mt-[10px] lg:ml-[200px] xl:mt-[10px] xl:ml-[200px]  2xl:ml-[200px]">
                              <i class="fa-solid fa-link text-[20px] ms-2 mt-2 group-hover:text-white"></i>
                            </div>
                          </div>
                          <div class="info1 xs:ml-[-320px] sm:ml-[-280px] md:ml-[-350px] lg:ml-[-300px] xl:ml-[-280px] 2xl:ml-[-390px]">
                            <button onClick={() => dispatch(addToCart(topratedd))} class="h-[35px] bg-black text-white  hover:bg-[#f50963] ms-8 lg:ms-[50px] 2xl:ms-[80px] xs:w-[320px] sm:w-[260px] md:w-[340px] lg:w-[275px] xl:w-[260px] 2xl:w-[400px]">ADD TO CART</button>
                          </div>

                        </div>
                        <p className='mt-4'>{topratedd.Name}</p>
                        <p className="text-gray-700 mt-1"><del>{topratedd.Delprice}</del> {topratedd.Price}</p>
                      </div>
                    </>
                  )
                })
              }
              {
                data.filter((el) => { return el.categaty === count }).map(topratedd => {
                  return (
                    <>
                      <div className='one'>
                        <div className='card h-[300px] inline-block'>
                          <img src={topratedd.image} className='ss xs:w-[320px] sm:w-[260px] md:w-[340px] lg:w-[275px] xl:w-[260px] 2xl:w-[390px] ' style={{ height: "300px" }} />
                          <div className='info'>
                            <div class="one1 hover:bg-[#f50963] group xs:mt-[-210px] xs:ml-[240px] sm:mt-[-210px] sm:ml-[210px] md:mt-[-220px] md:ml-[280px] lg:mt-[-240px] lg:ml-[200px] xl:mt-[-260px] xl:ml-[200px] 2xl:mt-[-240px] 2xl:ml-[200px]">
                              <i onClick={() => dispatch(addTowish(topratedd))} class="fa-regular fa-heart text-[20px] ms-2 mt-2 group-hover:text-white "></i>
                            </div>
                            <div class="one2 hover:bg-[#f50963] group xs:mt-[5px] xs:ml-[240px] sm:mt-[5px] sm:ml-[210px] md:mt-[5px] md:ml-[280px] lg:mt-[10px] lg:ml-[200px] xl:mt-[10px] xl:ml-[200px] 2xl:ml-[200px]">
                              <i class="fa-regular fa-eye text-[20px] ms-2 mt-2 group-hover:text-white"></i>
                            </div>
                            <div class="one3 hover:bg-[#f50963] xs:mt-[5px] xs:ml-[240px] sm:mt-[5px] sm:ml-[210px] md:mt-[5px] md:ml-[280px] lg:mt-[10px] lg:ml-[200px] xl:mt-[10px] xl:ml-[200px]  2xl:ml-[200px]">
                              <i class="fa-solid fa-link text-[20px] ms-2 mt-2 group-hover:text-white"></i>
                            </div>
                          </div>
                          <div class="info1 xs:ml-[-320px] sm:ml-[-280px] md:ml-[-350px] lg:ml-[-300px] xl:ml-[-280px] 2xl:ml-[-390px]">
                            <button onClick={() => dispatch(addToCart(topratedd))} class="h-[35px] bg-black text-white  hover:bg-[#f50963] ms-8 lg:ms-[50px] 2xl:ms-[80px] xs:w-[320px] sm:w-[260px] md:w-[340px] lg:w-[275px] xl:w-[260px] 2xl:w-[400px]">ADD TO CART</button>
                          </div>

                        </div>
                        <p className='mt-4'>{topratedd.Name}</p>
                        <p className="text-gray-700 mt-1"><del>{topratedd.Delprice}</del> {topratedd.Price}</p>
                      </div>
                    </>
                  )
                })
              }
              {
                data.filter((el) => { return el.type === count }).map(topratedd => {
                  return (
                    <>
                      <div className='one'>
                        <div className='card h-[300px] inline-block'>
                          <img src={topratedd.image} className='ss xs:w-[320px] sm:w-[260px] md:w-[340px] lg:w-[275px] xl:w-[260px] 2xl:w-[390px] ' style={{ height: "300px" }} />
                          <div className='info'>
                            <div class="one1 hover:bg-[#f50963] group xs:mt-[-210px] xs:ml-[240px] sm:mt-[-210px] sm:ml-[210px] md:mt-[-220px] md:ml-[280px] lg:mt-[-240px] lg:ml-[200px] xl:mt-[-260px] xl:ml-[200px] 2xl:mt-[-240px] 2xl:ml-[200px]">
                              <i onClick={() => dispatch(addTowish(topratedd))} class="fa-regular fa-heart text-[20px] ms-2 mt-2 group-hover:text-white "></i>
                            </div>
                            <div class="one2 hover:bg-[#f50963] group xs:mt-[5px] xs:ml-[240px] sm:mt-[5px] sm:ml-[210px] md:mt-[5px] md:ml-[280px] lg:mt-[10px] lg:ml-[200px] xl:mt-[10px] xl:ml-[200px] 2xl:ml-[200px]">
                              <i class="fa-regular fa-eye text-[20px] ms-2 mt-2 group-hover:text-white"></i>
                            </div>
                            <div class="one3 hover:bg-[#f50963] xs:mt-[5px] xs:ml-[240px] sm:mt-[5px] sm:ml-[210px] md:mt-[5px] md:ml-[280px] lg:mt-[10px] lg:ml-[200px] xl:mt-[10px] xl:ml-[200px]  2xl:ml-[200px]">
                              <i class="fa-solid fa-link text-[20px] ms-2 mt-2 group-hover:text-white"></i>
                            </div>
                          </div>
                          <div class="info1 xs:ml-[-320px] sm:ml-[-280px] md:ml-[-350px] lg:ml-[-300px] xl:ml-[-280px] 2xl:ml-[-390px]">
                            <button onClick={() => dispatch(addToCart(topratedd))} class="h-[35px] bg-black text-white  hover:bg-[#f50963] ms-8 lg:ms-[50px] 2xl:ms-[80px] xs:w-[320px] sm:w-[260px] md:w-[340px] lg:w-[275px] xl:w-[260px] 2xl:w-[400px]">ADD TO CART</button>
                          </div>

                        </div>
                        <p className='mt-4'>{topratedd.Name}</p>
                        <p className="text-gray-700 mt-1"><del>{topratedd.Delprice}</del> {topratedd.Price}</p>
                      </div>
                    </>
                  )
                })
              }
              {
                data.filter((el) => { return el.color === count }).map(topratedd => {
                  return (
                    <>
                      <div className='one'>
                        <div className='card h-[300px] inline-block'>
                          <img src={topratedd.image} className='ss xs:w-[320px] sm:w-[260px] md:w-[340px] lg:w-[275px] xl:w-[260px] 2xl:w-[390px] ' style={{ height: "300px" }} />
                          <div className='info'>
                            <div class="one1 hover:bg-[#f50963] group xs:mt-[-210px] xs:ml-[240px] sm:mt-[-210px] sm:ml-[210px] md:mt-[-220px] md:ml-[280px] lg:mt-[-240px] lg:ml-[200px] xl:mt-[-260px] xl:ml-[200px] 2xl:mt-[-240px] 2xl:ml-[200px]">
                              <i onClick={() => dispatch(addTowish(topratedd))} class="fa-regular fa-heart text-[20px] ms-2 mt-2 group-hover:text-white "></i>
                            </div>
                            <div class="one2 hover:bg-[#f50963] group xs:mt-[5px] xs:ml-[240px] sm:mt-[5px] sm:ml-[210px] md:mt-[5px] md:ml-[280px] lg:mt-[10px] lg:ml-[200px] xl:mt-[10px] xl:ml-[200px] 2xl:ml-[200px]">
                              <i class="fa-regular fa-eye text-[20px] ms-2 mt-2 group-hover:text-white"></i>
                            </div>
                            <div class="one3 hover:bg-[#f50963] xs:mt-[5px] xs:ml-[240px] sm:mt-[5px] sm:ml-[210px] md:mt-[5px] md:ml-[280px] lg:mt-[10px] lg:ml-[200px] xl:mt-[10px] xl:ml-[200px]  2xl:ml-[200px]">
                              <i class="fa-solid fa-link text-[20px] ms-2 mt-2 group-hover:text-white"></i>
                            </div>
                          </div>
                          <div class="info1 xs:ml-[-320px] sm:ml-[-280px] md:ml-[-350px] lg:ml-[-300px] xl:ml-[-280px] 2xl:ml-[-390px]">
                            <button onClick={() => dispatch(addToCart(topratedd))} class="h-[35px] bg-black text-white  hover:bg-[#f50963] ms-8 lg:ms-[50px] 2xl:ms-[80px] xs:w-[320px] sm:w-[260px] md:w-[340px] lg:w-[275px] xl:w-[260px] 2xl:w-[400px]">ADD TO CART</button>
                          </div>

                        </div>
                        <p className='mt-4'>{topratedd.Name}</p>
                        <p className="text-gray-700 mt-1"><del>{topratedd.Delprice}</del> {topratedd.Price}</p>
                      </div>
                    </>
                  )
                })
              }
              {
                data.filter((el) => { return el.Price >= count && el.Price2 <= count1 }).map(topratedd => {
                  return (
                    <>
                      <div className='one'>
                        <div className='card h-[300px] inline-block'>
                          <img src={topratedd.image} className='ss xs:w-[320px] sm:w-[260px] md:w-[340px] lg:w-[275px] xl:w-[260px] 2xl:w-[390px] ' style={{ height: "300px" }} />
                          <div className='info'>
                            <div class="one1 hover:bg-[#f50963] group xs:mt-[-210px] xs:ml-[240px] sm:mt-[-210px] sm:ml-[210px] md:mt-[-220px] md:ml-[280px] lg:mt-[-240px] lg:ml-[200px] xl:mt-[-260px] xl:ml-[200px] 2xl:mt-[-240px] 2xl:ml-[200px]">
                              <i onClick={() => dispatch(addTowish(topratedd))} class="fa-regular fa-heart text-[20px] ms-2 mt-2 group-hover:text-white "></i>
                            </div>
                            <div class="one2 hover:bg-[#f50963] group xs:mt-[5px] xs:ml-[240px] sm:mt-[5px] sm:ml-[210px] md:mt-[5px] md:ml-[280px] lg:mt-[10px] lg:ml-[200px] xl:mt-[10px] xl:ml-[200px] 2xl:ml-[200px]">
                              <i class="fa-regular fa-eye text-[20px] ms-2 mt-2 group-hover:text-white"></i>
                            </div>
                            <div class="one3 hover:bg-[#f50963] xs:mt-[5px] xs:ml-[240px] sm:mt-[5px] sm:ml-[210px] md:mt-[5px] md:ml-[280px] lg:mt-[10px] lg:ml-[200px] xl:mt-[10px] xl:ml-[200px]  2xl:ml-[200px]">
                              <i class="fa-solid fa-link text-[20px] ms-2 mt-2 group-hover:text-white"></i>
                            </div>
                          </div>
                          <div class="info1 xs:ml-[-320px] sm:ml-[-280px] md:ml-[-350px] lg:ml-[-300px] xl:ml-[-280px] 2xl:ml-[-390px]">
                            <button onClick={() => dispatch(addToCart(topratedd))} class="h-[35px] bg-black text-white  hover:bg-[#f50963] ms-8 lg:ms-[50px] 2xl:ms-[80px] xs:w-[320px] sm:w-[260px] md:w-[340px] lg:w-[275px] xl:w-[260px] 2xl:w-[400px]">ADD TO CART</button>
                          </div>

                        </div>
                        <p className='mt-4'>{topratedd.Name}</p>
                        <p className="text-gray-700 mt-1"><del>{topratedd.Delprice}</del> {topratedd.Price}</p>
                      </div>
                    </>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
      <nav className='mt-10'>
        <ul className='flex justify-center gap-3'>
          <li onClick={previousPage} className='cursor-pointer border px-4 py-2 hover:bg-pink-500 hover:text-white'>
            <a className=''>
              <i className="fa-solid fa-arrow-left"></i>  Previous
            </a>
          </li>
          {numbers.map((pgPage, i) => (
            <li key={i} onClick={() => changePage(pgPage)} className={`${currentPage === pgPage ? 'active' : ''} cursor-pointer page border px-4 py-2 hover:bg-pink-500 hover:text-white`} >
              <a className=''>
                {pgPage}
              </a>
            </li>
          ))}
          <li onClick={nextPage} className='cursor-pointer border px-4 py-2 hover:bg-pink-500 hover:text-white'>
            <a className=''>
              Next <i className="fa-solid fa-arrow-right"></i>
            </a>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Sec1
