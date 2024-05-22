import { useDispatch, useSelector } from "react-redux"
import Menubar from "../Menubar"
import Sidebar from "../Sidebar"
import ScrollMove from "../ScrollMove"
import { useState, useEffect } from "react"
import "../../scss/ShoppingBasket.scss"
import { MdCancel } from "react-icons/md";
import { shopping_basket_delete } from "../../modules/bookStore"
import ShoppingModal from "./ShoppingModal"


export default function ShoppingBasket(){

    const shoppingList = useSelector(state => state.bookStore.shopping_books)
    const dispatch = useDispatch();

    const [isAtTop, setIsAtTop] = useState(window.scrollY === 0);
    const [buyVisible, setBuyVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsAtTop(window.scrollY < 250);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(()=>{
        window.scrollTo(0, 0);
    },[])

    const basketBookDelete = (product) => {
        dispatch(shopping_basket_delete(product))
    }

    const buyBooks = () => {
        setBuyVisible(true);
    }

    const handleCancel = () => {
        setBuyVisible(false);
    }

    const totalPrice = shoppingList.map(item => item.price).reduce((sum, item) => sum + item, 0)

    return(
        <>
            <Menubar isAtTop={isAtTop}/>
            <Sidebar />
            <ScrollMove isAtTop={isAtTop}/>
            <div className="shoppingContainer">
                <h1>장바구니</h1>
                <div className="selectBox">
                    {shoppingList.map(book => 
                        <div className="bookContainer">
                            <img src={book.link} alt=""></img>
                            <div className="bookName">{book.name}</div>
                            <div className="bookPrice">가격 : {book.price.toLocaleString()}원</div>
                            <div className="cancelButton"><MdCancel onClick={()=>basketBookDelete(book.link)}/></div>
                        </div>
                    )}
                </div>
                {
                    shoppingList.length !== 0 ?
                        <>
                            <div className="totalPrice">총 가격 : {totalPrice.toLocaleString()}원</div>
                            <div className="buyBooksButton" onClick={buyBooks}>구매하기</div>
                        </>
                        : <div className="totalPrice">장바구니가 비어 있습니다.</div>
                }
                {
                    buyVisible &&
                        <ShoppingModal buyVisible={buyVisible} totalPrice={totalPrice} handleCancel={handleCancel}/>
                }
            </div>
        </>
    )
}
