export const initialState = {
    basket: [],
    user:null
}

export const getBasketTotal = (basket) =>
    basket?.reduce((a,b)=> a + b.price ,0)

const reducer = (state, action) => {
    console.log(action);
    switch(action.type) {
        //Create user
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }

        // Logic for adding item to basket
        case 'ADD_TO_BASKET':   
            return {
                ...state,
                basket: [...state.basket, action.item]
            };

        // Logic for Removing item from basket      
        case 'REMOVE_FROM_BASKET':
            let newBasket = [...state.basket];

            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id)

            if (index >= 0) {
                //item exists in basket, remove it...
                newBasket.splice(index,1);
            }else{
                console.warn(`Cant remove product (id: ${action.id}) as its not`);
            }

            return { ...state, basket:newBasket };
        default:
            return state;     
    }
}
export default reducer;