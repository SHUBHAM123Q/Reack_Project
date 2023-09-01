import {PRODUCT_LIST} from '../Constant'

export const productlist = async()=>{
    let data = await fetch('https://jsonplaceholder.typicode.com/todos');
    data = await data.json()
    console.warn("action called" , data);
    return{
        type:PRODUCT_LIST,
        data
    }
}