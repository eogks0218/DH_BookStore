import { useCallback, useState } from "react";
import './scss/BestSellers.scss'
import { useDispatch, useSelector } from "react-redux";
import { shopping_basket } from "../../modules/bookStore";

function BestSellersPagination({totalItems, itemsPerPage, imgList, selectedYear}){

    const auth = useSelector(state => state.bookStore.auth);
    const dispatch = useDispatch()

    const DataSelect = useSelector(state => state.bookStore.dataSelect);
    const shoppingBooks = useSelector(state => state.bookStore.shopping_books);

    const [currentPage, setCurrentPage] = useState(1);

    const totalPage = Math.ceil(totalItems / itemsPerPage);

    const pageNumbers = Array.from({length: totalPage}, (_, index)=>(index+1))

    const handleClick = useCallback((page)=>{
        setCurrentPage(page)
    }, [])
    const startIndex = (currentPage-1)*itemsPerPage
    const endIndex = startIndex + itemsPerPage;

    const shoppingBasket = (productId, selectedYear, data) => {
        if(!auth){
            alert('로그인이 필요합니다.')
            return;
        }
        const selectedBook = shoppingBooks.find(book => book.name === data.name);
        if (selectedBook) {
            alert(`'${data.name}'을(를) 장바구니에서 제거하였습니다.`);
            dispatch(shopping_basket(productId, selectedYear));
        } else {
            alert(`'${data.name}'을(를) 장바구니에 담았습니다.`);
            dispatch(shopping_basket(productId, selectedYear));
        }
    }
    
    const displayItems = Array.from({length: totalItems}, (_, index)=>(index+1))
                        .slice(startIndex, endIndex)
                        .map((item, index)=>
                            <div key={index} className="item">
                                {DataSelect
                                    .filter(data => data.id === item) // 먼저 조건에 맞는 요소만 필터링
                                    .map((data) =>{
                                        return(
                                            <div className="item-container">
                                                <div className="img-container">
                                                    <img src={imgList[data.id-1]} alt="" width='130px'/>
                                                </div>
                                                <div className="info-container">
                                                    <div className="item-name">{data.name}</div>
                                                    <div className="item-author">Author : {data.author}</div>
                                                    <div className="item-introduce">{data.introduce}</div>
                                                    <div className="item-price">Price : {data.price} </div>
                                                </div>
                                                <div className="item-checked">
                                                    <p onClick={()=>shoppingBasket(data.id-1, selectedYear, data)} style={{cursor: "pointer"}}>담기</p>
                                                </div>
                                            </div>
                                        )
                                })}
                            </div>
                        )

    return(
        <div className="pagination-container">
            <div className="items">{displayItems}</div>
            <ul className='page-numbers'>
                {pageNumbers.map((Number)=>
                    <li key={Number}
                    className={Number === currentPage ? 'active' : ''}
                    onClick={()=>handleClick(Number)}>
                        {Number}
                    </li>
                )}
            </ul>
        </div>
    )
}

export default BestSellersPagination;
