import { SET_PRODUCT_LIST } from "../Constant";

const producData = (data = [], action) => {
     switch (action.type) {
          case SET_PRODUCT_LIST:
               console.log("PRODUCT_LIST", action);
               return [...action.data];
          default: return data
     }
}

export default producData