import "../../scss/Authors.scss";
import authorFileHG from "../../data/AuthorHG.json"
import authorFileMH from "../../data/AuthorMH.json"
import authorFileNN from "../../data/AuthorNN.json"
import authorFileGM from "../../data/AuthorGM.json"
import authorFileEtc from "../../data/AuthorEtc.json"
import { useEffect, useState } from "react";
import { TbShoppingCartX, TbShoppingCartHeart } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { shopping_basket_author, shopping_basket_delete } from "../../modules/bookStore";


export default function AuthorBooks(props){

    const { selectedAuthor, viewStyle } = props;

    const [authorFile, setAuthorFile] = useState(authorFileHG)

    const auth = useSelector(state => state.bookStore.auth);
    const shopping_books = useSelector(state => state.bookStore.shopping_books);
    const dispatch = useDispatch();

    useEffect(()=>{
        if(selectedAuthor === "HG"){
            setAuthorFile(authorFileHG)
        }else if(selectedAuthor === "MH"){
            setAuthorFile(authorFileMH)
        }else if(selectedAuthor === "NN"){
            setAuthorFile(authorFileNN)
        }else if(selectedAuthor === "GM"){
            setAuthorFile(authorFileGM)
        }else if(selectedAuthor === "Etc"){
            setAuthorFile(authorFileEtc)
        }
    }, [selectedAuthor])

    const addBasket = (product, name) => {
        if(!auth){
            alert("로그인이 필요합니다.")
            return;
        }
        const isSelected = shopping_books.find(book => book.link === product)
        if(isSelected){
            alert("장바구니에 이미 존재하는 책입니다.")
            return;
        }
        alert(`'${name}'을(를) 장바구니에 담았습니다.`)
        dispatch(shopping_basket_author(product))
    }

    const deleteBasket = (product, name) => {
        if(!auth){
            alert("로그인이 필요합니다.")
            return;
        }
        const isSelected = shopping_books.find(book => book.link === product)
        if(!isSelected){
            alert("장바구니에 존재하지 않는 책입니다.")
            return;
        }
        alert(`'${name}'을(를) 장바구니에서 제거하였습니다.`)
        dispatch(shopping_basket_delete(product))
    }

    return(
        <div className="AuthorBooksContainer">
            { (viewStyle === "grid") ?
                authorFile.map(item => {
                return(
                    <div className="gridShowBox">
                        <img src={item.link} alt="" />
                        <span>{item.name}</span>
                    </div>
                )
                }) :
                authorFile.map(item => {
                    return(
                        <div className="listShowBox">
                            <div className="listBox">
                                <div className="imgBox"><img src={item.link} alt="" /></div>
                                <div className="titleBox">
                                    <div className="title">{item.name}</div>
                                    {selectedAuthor === "Etc" &&
                                        <div className="author">{item.author}</div>
                                    }
                                    <div className="price">가격 : {item.price.toLocaleString()}원</div>
                                    <div className="basket">
                                        <TbShoppingCartHeart onClick={()=>addBasket(item.id-1, item.name)}/> <TbShoppingCartX onClick={()=>deleteBasket(item.link, item.name)} />
                                    </div>
                                </div>
                            </div>
                            <div className="content" dangerouslySetInnerHTML={{ __html: item.introduce }}></div>
                        </div>
                    )
                })
            }
        </div>
    )
}