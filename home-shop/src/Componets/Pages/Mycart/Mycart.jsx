import React from 'react'
import './Mycart.css'; 
import emptycart from '../../../assets/emptycart.png'
import { useSelector, useDispatch } from 'react-redux'
import { decriment_qty, incriment_qty, removeToCart } from '../../../React Saga/Action'		
import {Link} from "react-router-dom";

const Mycart = () => {
    let dispatch = useDispatch()
    let cartData = useSelector((state) => state.cartData)
    let cartPrice = cartData.length && cartData.map((item) => item.Price).reduce((pre, next) => pre + next)
  return (
   <>
        <div className='mt-20'>
            <div className='h-[300px] bg-[#f1f1f1] flex justify-center items-center'>
                <div className=''>
                    <p className='xs:text-[50px] sm:text-[70px] text-[#03041c] font-bold mycart'>My Cart</p>
                    <a href='#'><p className='text-center text-black'>Home<span className='ms-3'>Cart</span></p></a>
                </div>
            </div>
            <div className='flex justify-center'>
                <img src={emptycart} alt='not show' className='mt-40'/>
            </div>
            <p className='text-[18px] text-center mt-10 text-[#03041c]'>Your Cart is empty</p>
            <Link to='/' className='shop  flex justify-center m-auto max-w-[100px]  hover:bg-black hover:text-white mt-2  py-2 bg-[#f1f1f1]'>Go To Shop</Link>
        </div>

        <table className='w-11/12 xl:w-9/12 mx-auto mt-12 text-lg  table-fixed'>
                <thead>
                    <tr className='border'>
                        <th className='border p-5'>Images</th>
                        <th className='border p-5'>Name</th>
                        <th className='border p-5'>Unit price</th>
                        <th className='border p-5'>Quntity</th>
                        <th className='border p-5'>Total</th>
                        <th className='border p-5'>remove</th>
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
                                    <button onClick={() => dispatch(decriment_qty(item.id))} className='border px-3 py-1'>-</button>
                                    <p className=''>{item.quntity}</p>
                                    <button onClick={() => dispatch(incriment_qty(item.id))} className='border px-3 py-1'>+</button>
                                </td>
                                <td className='border'>${item.Price}</td>
                                <td className='border'><button onClick={() => dispatch(removeToCart(item.id))}>x</button></td>
                            </tr>
                        )
                    }
                </tbody>
            </table>


            <div className='w-10/12 h-auto flex justify-end mt-10'>
                <div className=''>
                    <h1 className='text-2xl font-bold'>Cart Totals</h1>
                    <h1 className='w-96 h-10 text-lg items-center mt-5 border flex justify-between px-4'> <p>Subtotal</p> <p> ${cartPrice}</p></h1>
                    <h1 className='w-96 h-10 text-lg items-center border flex justify-between px-4'> <p>Total</p> <p> ${cartPrice}</p></h1>
                </div>
            </div>
   </>
  )
}

export default Mycart
