import { CircleX } from 'lucide-react';
import { useDispatch, useSelector } from "react-redux";
import { increaseProductCount, decreaseProductCount, removeFromCart } from "@/features/cart/cart";

export default function Cart(){

    const dispatch = useDispatch();
    const productsInCart = useSelector(state => state.cart.productsInCart);
    const displayCartStatus = useSelector(state => state.cart.displayCart);

    return(
        <div className={`${displayCartStatus ? "absolute" : "hidden"} z-5 top-17.5 right-10 min-w-xs px-4 py-2 bg-gray-100 flex flex-col gap-3 rounded-lg`}>
            {productsInCart.length > 0 ? 
                productsInCart.map((product) => {
                    return(
                        <div className="flex items-center gap-12.5 p-5 bg-(--background-light)" key={product.details.id}>
                            <div className="flex gap-4">
                                <div className="bg-gray-200 rounded-lg">
                                    <img src={product.details.images[0]} alt={product.details.title} className="w-25 h-25"/>
                                </div>
                                <div className="flex flex-col justify-center gap-2">
                                    <span className="font-semibold">{product.details.title}</span>
                                    <span className="w-75 text-sm text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam id sit in minima!</span>
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center gap-5">
                                    <button className="bg-orange-400 px-2 py-1 rounded-lg text-neutral-100 text-2xl font-semibold cursor-pointer hover:bg-orange-500 transition-all duration-200" onClick={() => dispatch(increaseProductCount(product.details.id))}>+</button>
                                    <span>{product.count}</span>
                                    <button className="bg-orange-400 px-2 py-1 rounded-lg text-neutral-100 text-2xl font-semibold cursor-pointer hover:bg-orange-500 transition-all duration-200" onClick={() => dispatch(decreaseProductCount(product.details.id))}>-</button>
                                </div>
                            </div>
                            <div>
                                <span className="">${(Number(product.details.price) * Number(product.count)).toFixed(2)}</span>
                            </div>
                            <div>
                                <button className="flex items-center cursor-pointer" onClick={() => dispatch(removeFromCart(product.details.id))}>
                                    <CircleX className="text-red-600"/>
                                </button>
                            </div>
                        </div>
                    )
                })
                : (<span className="p-10 text-gray-500 text-center">Cart is empty</span>)
            }
        </div>
    )
}