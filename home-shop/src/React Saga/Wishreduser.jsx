import { ADD_TO_WISH, REMOVE_TO_WISH } from "./Type"

let whishData = (data = [], action) => {
    switch(action.type){
        case ADD_TO_WISH:
            console.log(data)
            return [action.data, ...data]

        case REMOVE_TO_WISH:
            let removeItem = data.filter((item) => item.id !== action.data)
            return [...removeItem]

        default:
            return data
    }
}

export default whishData;