import { ADD_TO_CART , ADD_TO_WISH, DECRIMENT_QUT, INCRIMENT_QUT, REMOVE_TO_CART, REMOVE_TO_WISH } from "./Type"

export let addToCart = (data) => {
    return{
        type: ADD_TO_CART,
        data
    }
}

export let removeToCart = (data) => {
    return{
        type: REMOVE_TO_CART,
        data
    }
}

export let incriment_qty = (data) => {
    return{
        type: INCRIMENT_QUT,
        data
    }
}

export let decriment_qty = (data) => {
    return{
        type: DECRIMENT_QUT,
        data
    }
}

export let addTowish = (data) => {
    return{
        type: ADD_TO_WISH,
        data
    }
}

export let removeTowish = (data) => {
    return{
        type: REMOVE_TO_WISH,
        data
    }
}