

const defaultState = {}

const GET_PRODUCT = 'GET_PRODUCT'
const CHANGE_COUNT_ITEM = 'CHANGE_COUNT_ITEM'

export const productInfoReducer = (state = defaultState, action) => {
    switch(action.type){
        case GET_PRODUCT:
            return {...action.payload, count: 1}
        case CHANGE_COUNT_ITEM:
            
        
            return {...state, count: state.count + action.payload}
        default:
            return state
    }
}

export const getProductAction = (payload) => ({type: GET_PRODUCT, payload})
export const changeCountItem = (payload) => ({type: CHANGE_COUNT_ITEM, payload})
