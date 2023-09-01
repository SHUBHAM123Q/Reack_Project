import {takeEvery} from 'redux-saga/effects'
import { PRODUCT_LIST } from '../Constant';

function* getProducts(){
     console.log("call api here");
     let data = yield fetch('http://localhost:3004/products');
     data = yield data.json()
     console.warn("action called" , data);
}


function* ProductSaga() {
  yield takeEvery(PRODUCT_LIST , getProducts)
}

export default ProductSaga