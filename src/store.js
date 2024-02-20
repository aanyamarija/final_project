// store.js

import { createStore, combineReducers, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import { productReducer } from './reducers/productReducer';
import categoryReducer from './reducers/categoryReducer';
import discountReducer from './reducers/discountReducer';

const rootReducer = combineReducers({
    categories: categoryReducer,
    products: productReducer,
    discounts: discountReducer,
    // другие редукторы
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
