import { combineReducers } from "redux";
import cartData from  './Reduser'
import productData from "./Product/Productreduser";

export default combineReducers({cartData, productData})