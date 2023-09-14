import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Cart() {
  const cartData = useSelector((state) => state.cartData)
  let amount = cartData.length && cartData.map(item => item.price).reduce((pre, next) => pre + next)

  return (
    <>
      <Link to='/'>
        <button className='bg-red-500 flex m-auto px-3 py-2 text-center border-2 border-black'>Back Page</button>
      </Link>
      <div className='flex justify-between max-w-[1200px] m-auto mt-10'>
        <div>
          <table className='w-[1000px]'>
            <thead>
              <tr>
                <td className='border-2 w-[200px]'>Img</td>
                <td className='border-2'>Title</td>
                <td className='border-2'>Type</td>
                <td className='border-2'>Price</td>
                <td className='border-2'>Brand</td>
              </tr>
            </thead>

            <tbody>
              {
                cartData.map((item) =>
                  <tr key={item.id}>
                    <td className='border-2'><img src={item.img} /></td>
                    <td className='border-2'>{item.title}</td>
                    <td className='border-2'>{item.type}</td>
                    <td className='border-2'>{item.price}</td>
                    <td className='border-2'>{item.brand}</td>
                  </tr>
                )
              }
            </tbody>
          </table>
        </div>
      <div className=''>
        <h1>Amount<span>{amount}</span></h1>
        <h1>Discount<span>{Math.round(0.10 * amount)}</span></h1>
        <h1 className='flex'><p>Tax</p>:{Math.round(0.18 * amount)}</h1>
        <h1 className='flex'><p>Total</p>:{Math.round(amount + (0.18 * amount) - (0.10 * amount))}</h1>
      </div>
      </div>
    </>
  )
}

export default Cart
