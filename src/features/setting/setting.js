import { createSlice } from '@reduxjs/toolkit';

export const settingSlice = createSlice({
    name: "setting",
    initialState: {
        expandFilter: false,
    },
    reducers: {
        toggleExpandFilter: (state) => {
            state.expandFilter = !state.expandFilter;
        }
    }
});

export const { toggleExpandFilter } = settingSlice.actions;
export default settingSlice.reducer;