import logo from "../../assets/logo.png";
import Cart from '@/components/Cart/Cart';
import { useDispatch, useSelector } from "react-redux";
import { toggleDisplayCart } from "@/features/cart/cart";
import { Search, Heart, UserRound, ShoppingBasket } from 'lucide-react';
import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import { Field } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export default function Nav(){

    const dispatch = useDispatch();
    const cartCounter = useSelector(state => state.cart.counter);

    return(
        <div className="relative w-full px-10 py-5 bg-(--background-light) text-(--text-light) flex items-center justify-between">
            <div className="flex items-center gap-5">
                <img src={logo} alt="Logo" className="w-7.5" />
                <span className="text-xl font-semibold">Cartify</span>
            </div>
            <div className="sticky right-[50%] translate-x-[50%]">
                <ul className="flex items-center gap-5 font-semibold">
                    <li>Home</li>
                    <li>Products</li>
                    <li>Categories</li>
                    <li>About</li>
                </ul>
            </div>
            <div className="flex gap-5">
                <button className="p-1.5 bg-neutral-50 rounded-lg flex items-center gap-5 group"><Search className="hover:scale-120 transition-all duration-200 cursor-pointer"/></button>
                <button className="p-1.5 bg-neutral-50 rounded-lg"><Heart className="hover:scale-120 transition-all duration-200 cursor-pointer"/></button>
                <button className="p-1.5 bg-neutral-50 rounded-lg"><UserRound className="hover:scale-120 transition-all duration-200 cursor-pointer"/></button>
                <button className="relative p-1.5 bg-neutral-50 rounded-lg cursor-pointer" onClick={() => dispatch(toggleDisplayCart())}>
                    <ShoppingBasket className="hover:scale-120 transition-all duration-200 cursor-pointer"/>
                    <span className={`${cartCounter === 0 ? "hidden" : "absolute"} bottom-0 right-0 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center`}>{cartCounter}</span>
                </button>
            </div>
            <Cart/>
        </div>
    )
}