import { addToCart } from '../Redux/Action';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { removeTOCart } from '../Redux/Action';
import { emptyCart } from '../Redux/Action';
import { productlist } from '../Redux/Product/ProductAction';
import { useEffect } from 'react';


const Main = () => {

    const data = useSelector(state => state.productData)
    const dispatch = useDispatch();
    console.log("Main Componets", data);

    useEffect(() => {
        dispatch(productlist())
    }, [dispatch])

    return (
        <div>
            <div className='flex flex-wrap'>
                {
                    data.map((item) =>
                        <div key={item.id} className='border-black border-2 p-2 h-auto ms-5 mt-5'>
                        <img src={item.img} />
                        <h1>Title:{item.title}</h1>
                            <h1>Name:{item.type}</h1>
                            <h1>Brand:{item.brand}</h1>
                            <h1>Price:{item.price}</h1>
                            <div>
                                <button className='border-2 border-black mt-2' onClick={() => dispatch(addToCart(item))}>ADD_TO_CART</button>
                            </div>
                            <div>
                                <button className='border-2 border-black mt-2' onClick={() => dispatch(removeTOCart(item.id))}>REMOVE_TO_CART</button>
                            </div>
                        </div>
                    )
                }
            </div>
            <button onClick={() => dispatch(emptyCart())} className="bg-blue-500 hover:bg-blue-700 ms-5 text-white font-bold py-2 mt-5  px-4 rounded">Empty Cart</button>
            <button onClick={() => dispatch(productlist())} className="bg-blue-500 hover:bg-blue-700 ms-5 text-white font-bold py-2 mt-5  px-4 rounded">Product_List</button>
        </div>
    );
}

export default Main;