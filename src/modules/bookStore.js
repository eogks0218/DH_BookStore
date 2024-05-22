import bsDataFile2023 from '../data/BestSellers2023.json'
import bsDataFile2022 from '../data/BestSellers2022.json'
import bsDataFile2021 from '../data/BestSellers2021.json'
import authorDataFileHG from '../data/AuthorHG.json'
import authorDataFileMH from '../data/AuthorMH.json'
import authorDataFileNN from '../data/AuthorNN.json'
import authorDataFileGM from '../data/AuthorGM.json'
import authorDataFileEtc from '../data/AuthorEtc.json'

const bsDataFile = { "2023" : bsDataFile2023, "2022" : bsDataFile2022, "2021" : bsDataFile2021}
const authorDataFile = { "HG" : authorDataFileHG, "MH" : authorDataFileMH, "NN" : authorDataFileNN, "GM" : authorDataFileGM, "Etc" : authorDataFileEtc}

const memberList = [];
const shoppingList = [];

const CHANGE_YEAR = 'bookStore/CHANGE_YEAR';
const CHANGE_AUTHOR = 'bookStore/CHANGE_AUTHOR';
const CHANGE_INTRODUCE = 'bookStore/CHANGE_INTRODUCE';
const SHOPPING_BASKET_AUTHOR = 'bookStore/SHOPPING_BASKET_AUTHOR';
const SHOPPING_BASKET = 'bookStore/SHOPPING_BASKET';
const SHOPPING_BASKET_DELETE = 'bookStore/SHOPPING_BASKET_DELETE';

const REGISTER_MEMBER = 'bookStore/REGISTER_MEMBER';
const LOGIN_MEMBER = 'bookStore/LOGIN_MEMBER';
const LOGOUT_MEMBER = 'bookStore/LOGOUT_MEMBER';
const EDIT_MEMBER = 'bookStore/EDIT_MEMBER';
const REMOVE_MEMBER = 'bookStore/REMOVE_MEMBER';

export const change_year = (year) => ({type: CHANGE_YEAR, year});
export const change_author = (author) => ({type: CHANGE_AUTHOR, author});
export const change_introduce = (tab) => ({type: CHANGE_INTRODUCE, tab});
export const shopping_basket_author = (product) => ({type: SHOPPING_BASKET_AUTHOR, product});
export const shopping_basket = (product, year) => ({type: SHOPPING_BASKET, product, year});
export const shopping_basket_delete = (product) => ({type: SHOPPING_BASKET_DELETE, product})

export const register_member = (member) => ({type: REGISTER_MEMBER, member})
export const login_member = (memberName) => ({type: LOGIN_MEMBER, memberName})
export const logout_member = () => ({type: LOGOUT_MEMBER})
export const edit_member = (member) => ({type: EDIT_MEMBER, member})
export const remove_member = (memberName) => ({type: REMOVE_MEMBER, memberName})

const initialState = {
    year: "2023",
    dataSelect: bsDataFile["2023"],
    auth: false,
    username: null,
    member: memberList,
    shopping_books: shoppingList,
    author: "none",
    authorData: authorDataFile["HG"],
    introduceTab: null
}

export const bookStore = (state=initialState, action) => {
    switch (action.type){
        case CHANGE_YEAR:
            return {
                ...state,
                year: action.year,
                dataSelect: bsDataFile[action.year]
            }
        case CHANGE_AUTHOR:
            return{
                ...state,
                author: action.author,
                authorData: authorDataFile[action.author]
            }
        case CHANGE_INTRODUCE:
            return{
                ...state,
                introduceTab: action.tab
            }
        case SHOPPING_BASKET_AUTHOR:
            const newAuthorData = state.authorData.map((item, index) => {
                if (index === action.product) {
                    return {
                        ...item,
                        checked:!item.checked
                    };
                } else {
                    return item;
                }
            });
            const selectedAuthorBook = newAuthorData.find((item, index) => index === action.product);
            let updatedShoppingAuthorList;
            if(selectedAuthorBook.checked){
                updatedShoppingAuthorList = [...state.shopping_books, selectedAuthorBook];
            }else{
                updatedShoppingAuthorList = state.shopping_books.filter(book => book.link!== selectedAuthorBook.link);
            }
            return{
                ...state,
                authorData: newAuthorData,
                shopping_books: updatedShoppingAuthorList
            }
        case SHOPPING_BASKET:
            const newData = state.dataSelect.map((item, index) => {
                if (index === action.product) {
                    return {
                        ...item,
                        checked: !item.checked
                    };
                } else {
                    return item;
                }
            });
            const selectedBook = newData.find((item, index) => index === action.product);
            let updatedShoppingList;
            if (selectedBook.checked) {
                updatedShoppingList = [...state.shopping_books, selectedBook];
            } else {
                updatedShoppingList = state.shopping_books.filter(book => book.link !== selectedBook.link);
            }

            return {
                ...state,
                dataSelect: newData,
                shopping_books: updatedShoppingList
            };
        case SHOPPING_BASKET_DELETE:
            return {
                ...state,
                shopping_books: state.shopping_books.filter(book => book.link!== action.product)
            }

        case LOGOUT_MEMBER:
        return{
            ...state,
            auth: false,
            username: null,
            member: state.member,
            shopping_books: shoppingList
        }
        case LOGIN_MEMBER:
            return{
                ...state,
                auth: true,
                username: action.memberName,
                member: state.member
            }
        case REGISTER_MEMBER:
            return{
                ...state,
                member: [...state.member, action.member]
            }
        case EDIT_MEMBER:
            return{
                ...state,
                member: [...state.member.map((item) => item.username === action.member.username ? action.member : item)]
            }
        case REMOVE_MEMBER:
            return{
                ...state,
                member: [...state.member.filter((item) => item.username !== action.memberName)],
                auth: false,
                username: null
            }
        default:
            return state;
    }
}