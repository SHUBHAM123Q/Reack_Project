import React from 'react'
import topratedd from "./toproted.json"
import '../Section3/Sec3.css';
import aset_11 from "../../../assets/asset11.jpeg"
import aset_17 from "../../../assets/asset17.jpeg"
import { useDispatch , useSelector } from 'react-redux';
import {productList} from "../../../React Saga/Product/Productlist"
import { useEffect } from 'react';
import {addToCart} from "../../../React Saga/Action"
// import aset_23 from "../../../assets/asset23.jpeg"
// import aset_29 from "../../../assets/asset29.jpeg"
// import aset_35 from "../../../assets/asset35.jpeg"
// import aset_41 from "../../../assets/asset41.jpeg"
// import aset_47 from "../../../assets/asset47.jpeg"
// import aset_53 from "../../../assets/asset53.jpeg"
// import aset_59 from "../../../assets/asset59.jpeg"
// import aset_65 from "../../../assets/asset65.jpeg"
// import aset_75 from "../../../assets/asset75.jpeg"
// import aset_77 from "../../../assets/asset77.jpeg"
const TopRated = () => {
    let dispatch = useDispatch();
    let data = useSelector((state)=> state.productData)

    useEffect(()=>{
        dispatch(productList())
    },[])

    return (
        <>
            <div className='containerrr h-auto flex justify-between flex-wrap'>
                {
                    topratedd.map(topratedd => {
                        return (
                            <div class="one">
                                <div class="card h-[300px] w-[260px]">
                                    <img src={aset_11} alt="Not Show" class="ss cursor-pointer" style={{ height: "300px" }} />
                                    <div class="info">
                                        <div class="one1 hover:bg-[#f50963]">
                                            <a href='#'>
                                                <img src={aset_17} alt='Not Show' />
                                            </a>
                                        </div>
                                        <div class="one2 hover:bg-[#f50963]">
                                            <a href='#'>
                                                <img src={aset_17} alt='Not Show' />
                                            </a>
                                        </div>
                                        <div class="one3 hover:bg-[#f50963]">
                                            <a href='#'>
                                                <img src={aset_17} alt='Not Show' />
                                            </a>
                                        </div>
                                    </div>
                                    <div class="info1">
                                        <button  onClick={()=>dispatch(addToCart(topratedd))}  class="w-[255px] h-[35px] bg-black text-white mt-[83px] ml-[-250px] hover:bg-[#f50963]">ADD TO CART</button>
                                    </div>
                                </div>
                                <p className="text-[15px] mt-2">{topratedd.Buy}</p>
                                <p className="text-gray-700 mt-1"><del>{topratedd.Price1}</del>{topratedd.Price}</p>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default TopRated
