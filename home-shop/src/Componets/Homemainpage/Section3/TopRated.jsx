import React from 'react'
import '../Section3/Sec3.css';
import { useDispatch , useSelector } from 'react-redux';
import {productList} from "../../../React Saga/Product/Productlist"
import { useEffect } from 'react';
import {addToCart, addTowish} from "../../../React Saga/Action"

const TopRated = () => {

    let dispatch = useDispatch();
    let data = useSelector((state) => state.productData)

    useEffect(() => {
        dispatch(productList())
    }, [])

    return (
        <>
            <div className='containerrr h-auto flex justify-between flex-wrap'>
                {
                    data.filter((el) => {return el.type === 'top rated'}).map(topratedd => {
                        return (
                            <div class="one">
                                <div class="card h-[300px] w-[260px]">
                                    <img src={topratedd.image} alt="Not Show" class="ss cursor-pointer" style={{ height: "300px" }} />
                                    <div class="info">
                                        <div class="one1 hover:bg-[#f50963] group">
                                            <i onClick={() => dispatch(addTowish(topratedd))} class="fa-regular fa-heart text-[20px] ms-2 mt-2 group-hover:text-white"></i>
                                        </div>
                                        <div class="one2 hover:bg-[#f50963] group">                                        
                                            <i class="fa-regular fa-eye text-[20px] ms-2 mt-2 group-hover:text-white"></i>
                                        </div>
                                        <div class="one3 hover:bg-[#f50963]">
                                            <i class="fa-solid fa-link text-[20px] ms-2 mt-2 group-hover:text-white"></i> 
                                        </div>
                                    </div>
                                    <div class="info1">
                                        <button  onClick={()=>dispatch(addToCart(topratedd))}  class="w-[255px] h-[35px] bg-black text-white mt-[83px] ml-[-250px] hover:bg-[#f50963]">ADD TO CART</button>
                                    </div>
                                </div>
                                <p className='mt-4'>{topratedd.Name}</p>
                                <p className="text-gray-700 mt-1"><del>{topratedd.Delprice}</del> {topratedd.Price}</p>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default TopRated
