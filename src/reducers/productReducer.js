
const defaultState = {
    category_title: '',
    products: []
}

const ALL_PRODUCTS = 'ALL_PRODUCTS'
const CATEGORY_PRODUCTS = 'CATEGORY_PRODUCTS'
const SALE_PRODUCTS = 'SALE_PRODUCTS'
const FILTER_BY_SALE = 'FILTER_BY_SALE'
const FILTER_BY_PRICE = 'FILTER_BY_PRICE'
const SORT_PRODUCTS = 'SORT_PRODUCTS'

function addIsShowProp(array){
    return array.map(el => ({...el, isShow: true, isShowPrice: true}))
}

export const productReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ALL_PRODUCTS:
            return { 
                category_title: 'All products', 
                products: addIsShowProp(action.payload) 
            }
        case CATEGORY_PRODUCTS:
            return { 
                category_title: action.payload.category.title, 
                products: addIsShowProp(action.payload.data) 
            }
        case SALE_PRODUCTS:
            let sales_products = action.payload.filter(elem => elem.discont_price)
            return {
                category_title: 'Discounted items', 
                products: addIsShowProp(sales_products)
            }
        case FILTER_BY_SALE: 
            if (action.payload){
                return {
                    ...state,
                    products: state.products.map(el => {
                        if (!el.discont_price){
                            el.isShow = false
                        }
                        return el
                    })
                }
            } else {
                return {
                    ...state,
                    products: state.products.map(el => ({...el, isShow: true}))
                }
            }
        case FILTER_BY_PRICE:
            const show_products = state.products.map(el => ({...el, isShowPrice: true}))
            return {
                ...state,
                products: show_products.map(el => {
                    const {from, to} = action.payload
                    const price = el.discont_price ?? el.price
                    // if (!(price >= from && price <= to)){
                    if (price < from || price > to){
                        el.isShowPrice = false
                    }
                    return el
                })
            }
        case SORT_PRODUCTS: 
            if (action.payload === 'price_asc'){
                return {
                    ...state,
                    products: state.products.sort((a,b) => a.price - b.price)

                }
            } else if (action.payload === 'price_desc'){
                return {
                    ...state,
                    products: state.products.sort((a,b) => b.price - a.price)

                }
            } else {
                return state
            }
        default:
            return state
    }
}


export const allProductsAction = (payload) => ({ type: ALL_PRODUCTS, payload })
export const categoryProductsAction = (payload) => ({ type: CATEGORY_PRODUCTS, payload })
export const salesProductsAction = (payload) => ({type: SALE_PRODUCTS, payload})
export const filterBySaleAction = (payload) => ({type: FILTER_BY_SALE, payload})
export const filterByPriceAction = (payload) => ({type: FILTER_BY_PRICE, payload})
export const sortProductsAction = (payload) => ({type: SORT_PRODUCTS, payload})



