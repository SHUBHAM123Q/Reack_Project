import React from 'react'
import './Mywishlist.css';
import {Link} from 'react-router-dom';
import emptycart from '../../../assets/emptycart.png'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeTowish } from '../../../React Saga/Action';
const Mywishlist = () => {
    let dispatch = useDispatch()
    let cartData = useSelector((state) => state.whishData)
  return (
    <>
    <div className='mt-20'>
        <div className='h-[300px] bg-[#f1f1f1] flex justify-center items-center'>
            <div className=''>
                <p className='xs:text-[50px] sm:text-[70px] text-[#03041c] font-bold mycart'>My Wishlist</p>
                <a href='#'><p className='text-center text-black'>Home<span className='ms-3'>Wishlist</span></p></a>
            </div>
        </div>
        <div className='flex justify-center'>
            <img src={emptycart} alt='not show' className='mt-40'/>
        </div>
        <p className='text-[18px] text-center mt-10 text-[#03041c]'>Your Cart is empty</p>
        <Link to='/' className='shop  flex justify-center m-auto max-w-[100px]  hover:bg-black hover:text-white mt-2  py-2 bg-[#f1f1f1]'>Go To Shop</Link>
    </div>

    <table className='table-auto w-11/12 xl:w-9/12 mx-auto mt-12 text-lg '>
                <thead>
                    <tr className='border'>
                        <th className='border p-5'>Images</th>
                        <th className='border p-5'>Name</th>
                        <th className='border p-5'>Unit price</th>
                        <th className='border p-5'>Quntity</th>
                        <th className='border p-5'>Total</th>
                        <th className='border p-5'>Remove</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        cartData.map((item) =>
                            <tr key={item.id} className='border text-center'>
                                <td className='border'><img src={item.image} className='w-auto h-24 mx-auto my-3' /></td>
                                <td className='border'>${item.Name}</td>
                                <td className='border'>${item.price2}</td>
                                <td className='flex justify-center items-center mt-10 gap-5'>
                                    <button className='border px-3 py-1'>-</button>
                                    <p className=''>{item.quntity}</p>
                                    <button className='border px-3 py-1' onClick={()=>dispatch(addToCart(item))}>+</button>
                                </td>
                                <td className='border'>${item.Price.toFixed(2)}</td>
                                <td className='border'><button onClick={() => dispatch(removeTowish(item.id))}>x</button></td>
                            </tr>
                        )
                    }
                </tbody>
            </table>


</>
  )
}

export default Mywishlist
