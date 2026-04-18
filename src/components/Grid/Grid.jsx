import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { storeProducts } from '../../features/products/productsSlice';
import axios from "axios";
import Card from "../Card/Card";

export default function Grid(){

    const priceRange = useSelector(state => state.products.priceRange);
    const checkedCategories = useSelector(state => state.products.checkedCategories);
    const data = useSelector(state => state.products.data);
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get('https://dummyjson.com/products')
        .then((response) => {
            dispatch(storeProducts(response.data.products))
            console.log(response.data)
        })
    }, [dispatch]);

    const showedData = data.filter((product) => checkedCategories.includes(product.category) && product.price >= priceRange.min && product.price <= priceRange.max);
    const division = Math.ceil(showedData.length / 8);
    console.log(division)

    console.log(showedData)

    return(
        <div className="flex flex-col gap-15 justify-center flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-15">
                {showedData.length > 0 ? showedData.map((product) => <Card key={product.id} product={product} />) : <span className="w-full text-(--text-light) font-semibold text-lg text-center">No Product Available!</span>}
            </div>
            <div>
                <Pagination>
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious href="#" />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#">1</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#" isActive>2</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#">3</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationEllipsis />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationNext href="#" />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            </div>
        </div>
    )
}