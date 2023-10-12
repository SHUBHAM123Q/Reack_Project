import React from 'react'
import './Sec3.css';
import { useDispatch, useSelector } from 'react-redux';
import { productList } from "../../../React Saga/Product/Productlist"
import { useEffect } from 'react';
import { addToCart, addTowish } from "../../../React Saga/Action"
import {ToastContainer , toast} from 'react-toastify';

const TopRated = () => {

    let dispatch = useDispatch();
    let data = useSelector((state) => state.productData)

    useEffect(() => {
        dispatch(productList())
    }, [])

    return (
        <>
            <ToastContainer/>
            <div className='xs:m-auto xs:max-w-[290px] sm:max-w-[550px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1120px] 2xl:max-w-[1440px]'>
                <div className='grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-9'>
                    {
                        data.filter((el) => { return el.type === 'top rated' }).map(topratedd => {
                            return (
                                <>
                                    <div className='one'>
                                        <div className='card h-[300px] inline-block'>
                                            <img src={topratedd.image} className='ss xs:w-[320px] sm:w-[260px] md:w-[340px] lg:w-[275px] xl:w-[260px] 2xl:w-[390px] ' style={{ height: "300px" }} />
                                            <div className='info'>
                                                <div class="one1 hover:bg-[#f50963] group xs:mt-[-210px] xs:ml-[240px] sm:mt-[-210px] sm:ml-[210px] md:mt-[-220px] md:ml-[280px] lg:mt-[-240px] lg:ml-[230px] xl:mt-[-260px] xl:ml-[208px] 2xl:mt-[-240px] 2xl:ml-[290px]">
                                                    <i onClick={() => dispatch(addTowish(topratedd))} class="fa-regular fa-heart text-[20px] ms-2 mt-2 group-hover:text-white "></i>
                                                </div>
                                                <div class="one2 hover:bg-[#f50963] group xs:mt-[5px] xs:ml-[240px] sm:mt-[5px] sm:ml-[210px] md:mt-[5px] md:ml-[280px] lg:mt-[10px] lg:ml-[230px] xl:mt-[10px] xl:ml-[208px] 2xl:ml-[290px]">
                                                    <i class="fa-regular fa-eye text-[20px] ms-2 mt-2 group-hover:text-white"></i>
                                                </div>
                                                <div class="one3 hover:bg-[#f50963] xs:mt-[5px] xs:ml-[240px] sm:mt-[5px] sm:ml-[210px] md:mt-[5px] md:ml-[280px] lg:mt-[10px] lg:ml-[230px] xl:mt-[10px] xl:ml-[208px]  2xl:ml-[290px]">
                                                    <i class="fa-solid fa-link text-[20px] ms-2 mt-2 group-hover:text-white"></i>
                                                </div>
                                            </div>
                                            <div class="info1 xs:ml-[-320px] sm:ml-[-280px] md:ml-[-350px] lg:ml-[-300px] xl:ml-[-280px] 2xl:ml-[-390px]">
                                                <button onClick={() => dispatch(addToCart(topratedd))} class="h-[35px] bg-black text-white  hover:bg-[#f50963] ms-8 xs:w-[320px] sm:w-[260px] md:w-[340px] lg:w-[275px] xl:w-[260px] 2xl:w-[390px]">ADD TO CART</button>
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
        </>
    )
}

export default TopRated
