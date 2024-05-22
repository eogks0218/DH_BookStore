import { FaBook, FaUser, FaUserCircle } from "react-icons/fa"
import { IoMdArrowDropdownCircle, IoMdArrowDropupCircle } from "react-icons/io";
import {Link} from "react-router-dom";
import "../scss/MenuBar.scss"
import { useDispatch, useSelector } from "react-redux";
import { logout_member } from "../modules/bookStore";
import { useEffect, useRef, useState } from "react";


const Menubar = (props) => {

    const {isAtTop} = props;

    const auth = useSelector(state => state.bookStore.auth);
    const authUser = useSelector(state => state.bookStore.username)

    const dispatch = useDispatch();

    const [isDropDown, setIsDropDown] = useState(false);
    const dropdownRef = useRef(null);

    const authDropDown = () => {
        setIsDropDown(!isDropDown);
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsDropDown(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="menuBox">
            <nav>
            {
                isAtTop ? (
                    <ul>
                        <li>
                            <Link to="/"><FaBook /></Link>
                        </li>
                        {auth ?
                            <li className="userLi" ref={dropdownRef}>
                                <FaUserCircle /> <span id="userID">{authUser}</span> <span id="authDropDown" onClick={authDropDown}>{isDropDown ? <IoMdArrowDropupCircle /> : <IoMdArrowDropdownCircle /> }</span>
                                <ul id="authDropDownUl" className={isDropDown ? "show" : "hide"}>
                                    <li><Link to={`/MyPage/${authUser}`}>회원정보 수정</Link></li>
                                    <li><Link to="/ShoppingBasket">장바구니</Link></li>
                                    <li><Link onClick={()=>dispatch(logout_member())} to="/">로그아웃</Link></li>
                                </ul>
                            </li>
                            :
                            <li className="userLi">
                                <Link to="/Authentication" className="userIcon"><FaUser /></Link>
                            </li>
                        }
                    </ul>
                ) : (
                    <ul>
                        <li>
                            <Link to="/"><FaBook /></Link>
                        </li>
                        <li>
                            <Link to="/Introduce">Introduce</Link>
                        </li>
                        <li>
                            <Link to="/bestSellers">베스트셀러</Link>
                        </li>
                        <li>
                            <Link to="/Authors">작가별 도서목록</Link>
                        </li>
                    </ul>
                )
            }   
            </nav>
        </div>
    )
}

export default Menubar;