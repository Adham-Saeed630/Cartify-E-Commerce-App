import { createSlice } from '@reduxjs/toolkit';

export const productsSlice = createSlice({
    name: "products",
    initialState: {
        data: [],
        checkedCategories: [],
        priceRange: {
            min: 0,
            max: 20000,
        }
    },
    reducers: {
        storeProducts: (state, action) => {
            state.data = action.payload;
            state.checkedCategories = [...new Set(action.payload.map(product => product.category))]
        },
        toggleCategory: (state, action) => {

            const category = action.payload;

            if(state.checkedCategories.includes(category)){
                state.checkedCategories = state.checkedCategories.filter(cat => cat !== category);
            }else{
                state.checkedCategories.push(category);
            };
        },
        filterPriceRange: (state, action) => {
            state.priceRange.min = action.payload[0];
            state.priceRange.max = action.payload[1];
        }
    }
})

export const { storeProducts, toggleCategory, filterPriceRange } = productsSlice.actions;
export default productsSlice.reducer;