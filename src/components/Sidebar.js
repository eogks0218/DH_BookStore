import { useEffect, useState } from "react";
import "../scss/Sidebar.scss";
import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { change_year, change_author } from "../modules/bookStore";
import { FaBook } from "react-icons/fa";
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from "react-icons/md";


export default function Sidebar(){

    const [isBestSellers, setIsBestSellers] = useState(false);
    const [isAuthor, setIsAuthor] = useState(false);
    const [isSelectedYear2023, setIsSelectedYear2023] = useState(false);
    const [isSelectedYear2022, setIsSelectedYear2022] = useState(false);
    const [isSelectedYear2021, setIsSelectedYear2021] = useState(false);
    const [isSelectedAuthorHG, setIsSelectedAuthorHG] = useState(false);
    const [isSelectedAuthorMH, setIsSelectedAuthorMH] = useState(false);
    const [isSelectedAuthorNN, setIsSelectedAuthorNN] = useState(false);
    const [isSelectedAuthorGM, setIsSelectedAuthorGM] = useState(false);
    const [isSelectedAuthorETC, setIsSelectedAuthorETC] = useState(false);
    const [showMenu, setShowMenu] = useState(true);

    const dispatch = useDispatch();
    const location = useLocation();

    const handleSideMenu = (event) => {
        if(event.target.textContent === "연도별 베스트셀러"){
            setIsBestSellers(!isBestSellers);
            setIsAuthor(false);
            if(isBestSellers){
                setIsSelectedYear2023(false);
                setIsSelectedYear2022(false);
                setIsSelectedYear2021(false);
            }
        }else if(event.target.textContent === "작가별 도서목록"){
            setIsAuthor(!isAuthor);
            setIsBestSellers(false);
            setIsSelectedYear2023(false);
            setIsSelectedYear2022(false);
            setIsSelectedYear2021(false);
        }
    }

    const handleYearClick = (event) => {
        if(event.target.textContent === "2023년"){
            dispatch(change_year("2023"));
            setIsSelectedYear2023(true);
            setIsSelectedYear2022(false);
            setIsSelectedYear2021(false);
        }else if(event.target.textContent === "2022년"){
            dispatch(change_year("2022"));
            setIsSelectedYear2022(true);
            setIsSelectedYear2023(false);
            setIsSelectedYear2021(false);
        }else if(event.target.textContent === "2021년"){
            dispatch(change_year("2021"));
            setIsSelectedYear2021(true);
            setIsSelectedYear2022(false);
            setIsSelectedYear2023(false);
        }
    }

    const handleAuthorClick = (event) => {
        if(event.target.textContent === "히가시노 게이고"){
            dispatch(change_author("HG"));
            setIsSelectedAuthorHG(true);
            setIsSelectedAuthorMH(false);
            setIsSelectedAuthorNN(false);
            setIsSelectedAuthorGM(false);
            setIsSelectedAuthorETC(false);
        }else if(event.target.textContent === "무라카미 하루키"){
            dispatch(change_author("MH"));
            setIsSelectedAuthorMH(true);
            setIsSelectedAuthorHG(false);
            setIsSelectedAuthorNN(false);
            setIsSelectedAuthorGM(false);
            setIsSelectedAuthorETC(false);
        }else if(event.target.textContent === "넬레 노이하우스"){
            dispatch(change_author("NN"));
            setIsSelectedAuthorNN(true);
            setIsSelectedAuthorHG(false);
            setIsSelectedAuthorMH(false);
            setIsSelectedAuthorGM(false);
            setIsSelectedAuthorETC(false);
        }else if(event.target.textContent === "기욤 뮈소"){
            dispatch(change_author("GM"));
            setIsSelectedAuthorGM(true);
            setIsSelectedAuthorHG(false);
            setIsSelectedAuthorMH(false);
            setIsSelectedAuthorNN(false);
            setIsSelectedAuthorETC(false);
        }else if(event.target.textContent === "etc"){
            dispatch(change_author("Etc"));
            setIsSelectedAuthorETC(true);
            setIsSelectedAuthorHG(false);
            setIsSelectedAuthorMH(false);
            setIsSelectedAuthorNN(false);
            setIsSelectedAuthorGM(false);
        }
    }

    useEffect(()=>{
        if(location.pathname === "/bestSellers"){
            setIsBestSellers(true);
            setIsAuthor(false);
        }
    }, [location.pathname])

    useEffect(()=>{
        if(location.pathname === "/Authors" || location.pathname === "/Authors/HG" || location.pathname === "/Authors/MH" || location.pathname === "/Authors/NN" || location.pathname === "/Authors/GM" || location.pathname === "/Authors/Etc"){
            setIsAuthor(true);
            setIsBestSellers(false);
        }
        if(location.pathname === "/Authors/HG"){
            setIsSelectedAuthorHG(true);
            setIsSelectedAuthorMH(false);
            setIsSelectedAuthorNN(false);
            setIsSelectedAuthorGM(false);
            setIsSelectedAuthorETC(false);
        }else if(location.pathname === "/Authors/MH"){
            setIsSelectedAuthorMH(true);
            setIsSelectedAuthorHG(false);
            setIsSelectedAuthorNN(false);
            setIsSelectedAuthorGM(false);
            setIsSelectedAuthorETC(false);
        }else if(location.pathname === "/Authors/NN"){
            setIsSelectedAuthorNN(true);
            setIsSelectedAuthorHG(false);
            setIsSelectedAuthorMH(false);
            setIsSelectedAuthorGM(false);
            setIsSelectedAuthorETC(false);
        }else if(location.pathname === "/Authors/GM"){
            setIsSelectedAuthorGM(true);
            setIsSelectedAuthorHG(false);
            setIsSelectedAuthorMH(false);
            setIsSelectedAuthorNN(false);
            setIsSelectedAuthorETC(false);
        }else if(location.pathname === "/Authors/Etc"){
            setIsSelectedAuthorETC(true);
            setIsSelectedAuthorHG(false);
            setIsSelectedAuthorMH(false);
            setIsSelectedAuthorNN(false);
            setIsSelectedAuthorGM(false);
        }
    }, [location.pathname])

    const sideMenuShowHide = () => {
        setShowMenu(!showMenu)
    }

    return(
        <div className="sideContainer">
            <ul>
                <li>
                    <div onClick={sideMenuShowHide} className={showMenu ? "" : "hideMenu"}>
                        {showMenu ? <MdKeyboardDoubleArrowLeft /> : <MdKeyboardDoubleArrowRight />}
                    </div>
                </li>
                {showMenu &&
                <>
                    <li>
                        <span><Link to="/"><FaBook />Main</Link></span>
                    </li>
                    <li>
                        <span><Link to="/introduce">Introduce</Link></span>
                    </li>
                    <li>
                        <span onClick={handleSideMenu} className={isBestSellers ? "selectSideMenu" : ""}>연도별 베스트셀러</span>
                        <ul className={isBestSellers ? "sideShow" : "sideHide"}>
                            <li onClick={handleYearClick} className={isSelectedYear2023 ? "selectYear" : ""}><Link to="/bestSellers">2023년</Link></li>
                            <li onClick={handleYearClick} className={isSelectedYear2022 ? "selectYear" : ""}><Link to="/bestSellers">2022년</Link></li>
                            <li onClick={handleYearClick} className={isSelectedYear2021 ? "selectYear" : ""}><Link to="/bestSellers">2021년</Link></li>
                        </ul>
                    </li>
                    <li>
                        <span onClick={handleSideMenu} className={isAuthor ? "selectSideMenu" : ""}>작가별 도서목록</span>
                        <ul className={isAuthor ? "sideShow" : "sideHide"}>
                            <li onClick={handleAuthorClick} className={isSelectedAuthorHG ? "selectAuthor" : ""}><Link to="/Authors/HG">히가시노 게이고</Link></li>
                            <li onClick={handleAuthorClick} className={isSelectedAuthorMH ? "selectAuthor" : ""}><Link to="/Authors/MH">무라카미 하루키</Link></li>
                            <li onClick={handleAuthorClick} className={isSelectedAuthorNN ? "selectAuthor" : ""}><Link to="/Authors/NN">넬레 노이하우스</Link></li> 
                            <li onClick={handleAuthorClick} className={isSelectedAuthorGM ? "selectAuthor" : ""}><Link to="/Authors/GM">기욤 뮈소</Link></li>
                            <li onClick={handleAuthorClick} className={isSelectedAuthorETC ? "selectAuthor" : ""}><Link to="/Authors/Etc">etc</Link></li>
                        </ul>    
                    </li>
                </>
                }
            </ul>
        </div>
    )
}