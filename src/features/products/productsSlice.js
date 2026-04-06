import { createSlice } from '@reduxjs/toolkit';

export const productsSlice = createSlice({
    name: "products",
    initialState: {
        data: []
    },
    reducers: {
        storeProducts: (state, action) => {
            state.data = action.payload
        }
    }
})

export const { storeProducts } = productsSlice.actions;
export default productsSlice.reducer;