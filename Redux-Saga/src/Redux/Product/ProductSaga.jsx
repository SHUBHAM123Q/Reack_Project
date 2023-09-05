import {takeEvery , put} from 'redux-saga/effects'
import { PRODUCT_LIST , SET_PRODUCT_LIST} from '../Constant';

function* getProducts(){
     let data = yield fetch(' http://localhost:3004/posts');
     data = yield data.json()
     console.warn("action called" , data);
     yield put({type:SET_PRODUCT_LIST,data})
}


function* ProductSaga() {
  yield takeEvery(PRODUCT_LIST , getProducts)
}

export default ProductSaga