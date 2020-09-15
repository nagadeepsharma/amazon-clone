export const  initialState={
    basket:[],
}
export const myreducer=(state,action)=>{
    switch(action.type){
        case 'ADD_TO_BASKET':
            return{
                ...state,basket:[...state.basket,action.item]
            }
        case 'REMOVE_FROM_BASKET':
            let newBasket=[...state.basket].filter(item=>item.id!==action.id)
            return{
                ...state,
                basket:newBasket
            }
        default:
            return state
    }
}