import {ADD_TO_CART , REMOVE_TO_CART , EMPTY_CART} from './Constant';


export const addToCart = (data) => {
    console.log("action called",data);
    return{
        type:ADD_TO_CART,
        data
    }
}

export const removeTOCart = (data) => {
    console.warn("action cencale",data);
    return{
        type:REMOVE_TO_CART,
        data
    }
}

export const emptyCart = (data) => {
    console.warn("action remove" , data);
    return{
        type:EMPTY_CART,
        data
    }
}