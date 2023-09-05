import React from 'react'
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom';

function Cart(){
  const cartData = useSelector((state) => state.cartData)
  let amount = cartData.length && cartData.map(item=>item.price).reduce((pre , next)=> pre+next)

  return (
    <>
      <Link to='/'>Productlist</Link>
      <h1>Cart Page</h1>
      <div>
        <table className=''>
          <thead>
            <tr>
              <td className='border-2'>Title</td>
              <td className='border-2'>Name</td>
              <td className='border-2'>Price</td>
              <td className='border-2'>Brand</td>
            </tr>
          </thead>

          <tbody>
            {
              cartData.map((item)=>
                <tr key={item.id}>
                  <td><img src={item.img} /></td>
                  <td className='border-2'>{item.title}</td>
                  <td className='border-2'>{item.type}</td>
                  <td className='border-2'>{item.price}</td>
                  <td className='border-2'>{item.brand}</td>
                </tr>
              )
            }
          </tbody>
        </table>
        <div>
          <div>Amount<span>{amount}</span></div>
          <div>Discount<span>{Math.round(0.10 * cartData)}</span></div>
          <h1><p>Tax</p>:{Math.round(0.18 * amount)}</h1>
          <h1><p>Total</p>:{Math.round(amount + (0.18 * amount) - (0.10 * amount))}</h1>
        </div>
      </div>
    </>
  )
}

export default Cart
