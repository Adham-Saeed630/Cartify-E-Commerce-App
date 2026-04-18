import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '@/features/products/productsSlice';
import cartReducer from '@/features/cart/cart';
import settingReducer from '@/features/setting/setting';

export default configureStore({
    reducer: {
        products: productsReducer,
        cart: cartReducer,
        setting: settingReducer,
    }
})