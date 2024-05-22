import { useRef } from "react";
import BestSellersPagination from "./BestSellersPagination";

function BestSellersPage({imgList, selectedYear}){

    const totalItems = useRef(30);
    const itemsPerPage = useRef(10);

    return(
        <>
            <BestSellersPagination totalItems={totalItems.current} itemsPerPage={itemsPerPage.current} imgList={imgList} selectedYear={selectedYear}/>
        </>
    )
}

export default BestSellersPage;