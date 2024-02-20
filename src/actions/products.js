

import { ROOT_URL } from ".."
import { getProductAction } from "../reducers/productInfoReducer"
import { allProductsAction, categoryProductsAction, salesProductsAction } from "../reducers/productReducer"

export function fecthAllProducts(type){
    return function(dispatch){
        fetch(ROOT_URL+'/products/all')
            .then(res => res.json())
            .then(data => {
                if (type === 'all'){
                    dispatch(allProductsAction(data))
                } else if (type === 'sale'){
                    dispatch(salesProductsAction(data))
                }
            })
    }
}

export function fetchCategoryProducts(id){
    return function(dispatch){
        fetch(ROOT_URL+'/categories/'+id)
            .then(res => res.json())
            .then(data => dispatch(categoryProductsAction(data)))
    }
}

export function fetchProductDescription(id){
    return function(dispatch){
        fetch(ROOT_URL+'/products/'+id)
            .then(res => res.json())
            .then(data => dispatch(getProductAction(data[0])))
    }
}
