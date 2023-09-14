import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./Rootreduser";
import productSaga from "./Product/Productsaga";
import creatSagaMiddelware from 'redux-saga';

let sagaMiddelware = creatSagaMiddelware();
let store = configureStore({
    reducer: rootReducer,
    middleware: () => [sagaMiddelware]
})

sagaMiddelware.run(productSaga)

export default store;