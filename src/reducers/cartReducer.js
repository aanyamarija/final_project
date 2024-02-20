
const defaultState = {
    items: [],
    sumTotal: 0,
    countItems: 0
}

const ADD_ITEM = 'ADD_ITEM' 

export const cartReducer = (state = defaultState, action) => {
    switch(action.type){
        case ADD_ITEM:
            let findItemIndex = state.items.findIndex(el => el.id === action.payload.id)
            if (findItemIndex !== -1){
                return {...state, items: state.items.map(el => {
                    if (el.id ===  action.payload.id){
                        el.count += action.payload.count 
                    }
                    return el
                })}
            } else {
                return { 
                    ...state, 
                    items: [
                        ...state.items,  
                        {...action.payload}
                    ]
                }
            }
        default:
            return state
    }
}


export const addItemAction = (payload) => ({type: ADD_ITEM, payload})