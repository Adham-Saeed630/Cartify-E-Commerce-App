import { ArrowBigDownDash } from 'lucide-react';
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Slider } from "../ui/slider";
import { toggleCategory, filterPriceRange } from '@/features/products/productsSlice';
import { toggleExpandFilter } from "@/features/setting/setting";

export default function Sidebar(){

    const dispatch = useDispatch();
    const data = useSelector(state => state.products.data);
    const checkedCategories = useSelector(state => state.products.checkedCategories);
    const expandFilter = useSelector(state => state.setting.expandFilter);

    const [priceRange, setPriceRange] = useState([0, 5000]);

    const categories = [...new Set(data.map(item => item.category))];

    return(
        <div className={`flex flex-col gap-5 transition-all duration-200 ${expandFilter ? "h-96" : "h-15"} lg:h-auto overflow-hidden`}>
            <div className='flex justify-between items-center cursor-pointer' onClick={() => dispatch(toggleExpandFilter())}>
                <span className="text-xl font-semibold">Filter Options</span>  
                <div className={`p-1 border-2 border-neutral-900 rounded-md flex items-center gap-2 lg:hidden`}>
                    <ArrowBigDownDash className={` transition-all duration-200 ${expandFilter ? "rotate-180" : "rotate-0"}`}/>
                </div>
            </div>
            <hr className="border-(--border-color)" />
            <div className="flex flex-col gap-5">
                <span className="text-lg font-semibold">By Category</span>
                <form action="" className="flex flex-col gap-2 pl-5">
                    {categories.map((item, index) => 
                        <div className="flex gap-2 items-center text-(--secondary-dark)" key={index} >
                            <input type="checkbox" id={index} checked={checkedCategories.includes(item)} onChange={() => dispatch(toggleCategory(item))}/>
                            <label htmlFor={index}>{item}</label>
                        </div>
                    )}
                </form>
            </div>
            <hr className="border-(--border-color)" />
            <div className="flex flex-col gap-5">
                <span className="text-lg font-semibold">Price</span>
                <span>{priceRange[0]}$ - {priceRange[1]}$</span>
                <Slider defaultValue={[0, 5000]} min={0} max={5000} step={1} onValueChange={(value) => {setPriceRange(value); dispatch(filterPriceRange(value))}} />
            </div>
            <div></div>
        </div>
    )
}