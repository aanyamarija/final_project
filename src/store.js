// store.js

import { createStore, combineReducers, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import { productReducer } from './reducers/productReducer';
import categoryReducer from './reducers/categoryReducer';
import discountReducer from './reducers/discountReducer';
import { productInfoReducer } from './reducers/productInfoReducer';
import { cartReducer } from './reducers/cartReducer';

const rootReducer = combineReducers({
    categories: categoryReducer,
    products: productReducer,
    discounts: discountReducer,
    productInfo: productInfoReducer,
    cart: cartReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
