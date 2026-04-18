import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        displayCart: false,
        counter: 0,
        productsInCart: [],
    },
    reducers: {
        toggleDisplayCart: (state) => {
            state.displayCart = state.displayCart ? false : true;
            console.log(state.displayCart);
        },
        addToCart: (state, action) => {
            const product = action.payload;

            if(state.productsInCart.every(item => item.details.id !== product.id)){
                const newProduct = {
                    details: action.payload,
                    count: 1,
                }
                state.productsInCart.push(newProduct);
                state.counter += 1;

            };
        },
        increaseProductCount: (state, action) => {
            const productId = action.payload;
            const cartItem = state.productsInCart.find(item => item.details.id === productId);
            cartItem.count += 1;
        },
        decreaseProductCount: (state, action) => {
            const productId = action.payload;
            const cartItem = state.productsInCart.find(item => item.details.id === productId);
            if(cartItem.count !== 0){
                cartItem.count -= 1;
            }
        },
        removeFromCart: (state, action) => {
            const productId = action.payload;
            const newArr = state.productsInCart.filter(item => item.details.id !== productId);
            state.productsInCart = newArr;
            state.counter -= 1;
        }
    }
});

export const { toggleDisplayCart, addToCart, increaseProductCount, decreaseProductCount, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;