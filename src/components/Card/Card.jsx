import { Star } from 'lucide-react';

export default function Card({product}){
    return(
        <div className="flex flex-col justify-between items-center gap-4 w-full cursor-pointer transition-all duration-200 hover:scale-110">
            <div className="relative w-full aspect-square bg-white rounded-xl">
                <img src={product.images[0]} alt={product.brand} />
                <span className="absolute top-2.5 right-2.5 px-4 py-1 bg-green-600 rounded-2xl font-semibold text-sm text-white">
                    {(product.discountPercentage).toFixed()}% Off 
                </span>
            </div>
            <div className="flex flex-col gap-2 w-full">
                <span className="font-semibold text-xl text-wrap">{product.title}</span>
                <div className="flex justify-between items-center">
                    <span className={`text-sm font-semibold ${product.availabilityStatus === "In Stock" ? "text-green-500" : "text-red-500"}`}>
                        {product.availabilityStatus === "In Stock" ? `In Stock (${product.stock})` : "Out of Stock"}
                    </span>
                    <span className="text-sm font-semibold text-neutral-700">{product.category}</span>
                </div>
                <div className="flex justify-between items-center text-nowrap">
                    <div className="flex gap-1 items-center">
                        <Star className="text-yellow-400" />
                        <span className="text-sm text-semibold text-neutral-700">{product.rating}</span>
                    </div>
                    <div className="flex gap-2 items-center">
                        <span className="line-through text-sm text-(--text-light)">${product.price}</span>
                        <span className="text-xl font-bold">${(product.price - (product.price * product.discountPercentage / 100)).toFixed(2)}</span>
                    </div>
                </div>
            </div>
            <div className="flex flex-col flex-wrap items-center sm:flex-row gap-2 w-full text-nowrap">
                <button className="w-full sm:flex-1 px-3 sm:px-5 py-2 rounded-2xl bg-(--background-light) border-(--secondary-dark) border font-semibold text-sm sm:text-md text-(--text-light) text-center hover:shadow-[0_0_20px_var(--accent-light)] hover:bg-(--accent-light) hover:text-(--secondary-light) cursor-pointer transition-all duration-200">Add to Cart</button>
                <button className="w-full sm:flex-1 px-3 sm:px-5 py-2 rounded-2xl bg-(--background-dark) border-(--background-dark) border font-semibold text-sm sm:text-md text-(--text-dark) text-center hover:shadow-[0_0_20px_var(--background-dark)] cursor-pointer transition-all duration-200">Buy Now</button>
            </div>
        </div>
    )
}