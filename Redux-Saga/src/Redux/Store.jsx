import { configureStore } from "@reduxjs/toolkit";
import RootReducer from "./RootReducer";
import ProductSaga from "./Product/ProductSaga";
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

const store =configureStore(
    {
        reducer:RootReducer,
        middleware:()=> [sagaMiddleware]
    }
);
sagaMiddleware.run(ProductSaga)
export default store