import { ADD_TO_CART , REMOVE_TO_CART } from "./Type";

let cartData = (data = [], action) => {
    switch(action.type){
        case ADD_TO_CART:
            return [action.data, ...data]

        case REMOVE_TO_CART:
            let removeItem = data.filter((item) => item.id !== action.data)
            return [...removeItem]

        default:
            return data
    }
}

export default cartData