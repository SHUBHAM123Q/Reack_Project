import { ADD_TO_CART , DECRIMENT_QUT, INCRIMENT_QUT, REMOVE_TO_CART } from "./Type";

let cartData = (data = [], action) => {
    switch(action.type){
        case ADD_TO_CART:
            return [action.data, ...data]

        case REMOVE_TO_CART:
            let removeItem = data.filter((item) => item.id !== action.data)
            return [...removeItem]

        case INCRIMENT_QUT:
            let incrimentiyem = data.filter((item) => {
                if(item.id === action.data){
                    let quntity = item.quntity+=1;
                    let price = item.Price2+=item.Price;

                    return [price , quntity]
                }
                else{
                    return item;
                }
            })
            return [...incrimentiyem];
        
        case DECRIMENT_QUT:
            let decriment_qty = data.filter((item) => {
                if(item.id === action.data){
                    if(item.quntity !== 1){
                        let quntity = item.quntity-=1;
                        let price = item.Price2-=item.Price;

                        return [price , quntity]
                    }
                    else{
                        return item;
                    }
                }
                else{
                    return item;
                }
            })
            return [...decriment_qty];
        
        default:
            return data
    }
}

export default cartData