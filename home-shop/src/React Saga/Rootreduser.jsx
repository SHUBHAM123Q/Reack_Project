import { combineReducers } from "redux";
import cartData from  './Reduser'
import productData from "./Product/Productreduser";
import whishData from "./Wishreduser";

export default combineReducers({cartData, whishData, productData})