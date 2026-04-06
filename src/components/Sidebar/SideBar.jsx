import { useState } from "react";
import { useSelector } from "react-redux";
import {Slider} from "../ui/slider";

export default function Sidebar(){

    const data = useSelector(state => state.products.data);
    const [priceRange, setPriceRange] = useState([33, 800]);

    const categories = [...new Set(data.map(item => item.category))];

    return(
        <div className="flex flex-col gap-5">
            <span className="text-xl font-semibold">Filter Options</span>
            <hr className="border-(--border-color)" />
            <div className="flex flex-col gap-5">
                <span className="text-lg font-semibold">By Category</span>
                <form action="" className="flex flex-col gap-2 pl-5">
                    {categories.map((item, index) => 
                        <div className="flex gap-2 items-center text-(--secondary-dark)" key={index} >
                            <input type="checkbox" id={index} />
                            <label htmlFor={index}>{item}</label>
                        </div>
                    )}
                </form>
            </div>
            <hr className="border-(--border-color)" />
            <div className="flex flex-col gap-5">
                <span className="text-lg font-semibold">Price</span>
                <span>{priceRange[0]}$ - {priceRange[1]}$</span>
                <Slider defaultValue={[33, 800]} min={0} max={1100} step={1} onValueChange={setPriceRange} />
            </div>
            <div></div>
        </div>
    )
}