import { addToCart } from '../Redux/Action';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { removeTOCart } from '../Redux/Action';
import { emptyCart } from '../Redux/Action';
import { productlist } from '../Redux/Product/ProductAction';
import Header from './Header';

function Main() {



    const data = useSelector(state => state)
    console.log("Main Componets", data);

    const dispatch = useDispatch();
    const product = {
        name: "iphone",
        type: "Mobile",
        price: 20000,
        color: "red"
    }

    return (
        <div>
            <Header />
            <button onClick={() => dispatch(addToCart(product))} class="bg-blue-500 hover:bg-blue-700 ms-5 text-white font-bold py-2   px-4 rounded">Add Iteam</button>
            <button onClick={() => dispatch(removeTOCart(product))} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 ms-5  px-4 rounded">Add Remove</button>
            <button onClick={() => dispatch(emptyCart(product))} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 ms-5  px-4 rounded">Empty Cart</button>
            <button onClick={() =>dispatch(productlist(product))} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 ms-5  px-4 rounded">Product List</button>

        </div>
    );
}

export default Main;