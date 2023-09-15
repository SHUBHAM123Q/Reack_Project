import { PRODUCT_LIST, SET_PRODUCT_LIST } from "../Type";
import { takeEvery, put } from 'redux-saga/effects';
import toprotedd from '../../Componets/Homemainpage/Section3/toproted.json'

function* getProduct(){
    yield put({type: SET_PRODUCT_LIST, toprotedd})
}

function* productSaga(){
    yield takeEvery(PRODUCT_LIST, getProduct)
}

export default productSaga