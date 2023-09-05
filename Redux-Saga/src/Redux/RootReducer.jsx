import { combineReducers } from 'redux';
import cartData from './Reducer';
import productData from './Product/ProductReducer'

export default combineReducers({cartData,productData})