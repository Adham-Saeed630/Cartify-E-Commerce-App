import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { storeProducts } from '../../features/products/productsSlice';
import axios from "axios";
import Card from "../Card/Card";

export default function Grid(){

    const data = useSelector(state => state.products.data);
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get('https://dummyjson.com/products')
        .then((response) => {
            dispatch(storeProducts(response.data.products))
            console.log(response.data)
        })
    }, [dispatch]);

    useEffect(() => {
        console.log(data)
    }, [data])

    return(
        <div className="flex justify-center flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-15">
                {data.length > 0 ? data.map((product) => <Card key={product.id} product={product} />) : <span className="text-(--text-light) font-semibold text-lg">Loading...</span>}
            </div>
        </div>
    )
}