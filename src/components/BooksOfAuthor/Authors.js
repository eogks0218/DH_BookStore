import styled from "styled-components"
import { useState, useEffect } from "react";
import Menubar from "../Menubar";
import Sidebar from "../Sidebar";
import ScrollMove from "../ScrollMove";
import "../../scss/Authors.scss";
import { LuLayoutGrid, LuLayoutList } from "react-icons/lu";
import { useLocation, useNavigate } from "react-router-dom";
import AuthorBooks from "./AuthorBooks";
import { useDispatch, useSelector } from "react-redux";
import { change_author } from "../../modules/bookStore";

const Div = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export default function Authors(){

    const [isAtTop, setIsAtTop] = useState(window.scrollY === 0);
    const [viewStyle, setViewStyle] = useState("grid");

    const selectedAuthor = useSelector(state => state.bookStore.author)
    const dispatch = useDispatch();

    const location = useLocation();
    const navigate = useNavigate();

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

    useEffect(()=>{
        if(location.pathname === "/Authors/HG"){
            dispatch(change_author("HG"));
        }else if(location.pathname === "/Authors/MH"){
            dispatch(change_author("MH"));
        }else if(location.pathname === "/Authors/NN"){
            dispatch(change_author("NN"));
        }else if(location.pathname === "/Authors/GM"){
            dispatch(change_author("GM"));
        }else if(location.pathname === "/Authors/Etc"){
            dispatch(change_author("Etc"));
        }
    }, [location.pathname, dispatch])

    const authorSelect = (e) => {
        dispatch(change_author(e.target.value));
    }

    const viewStyleGridClick = () => {
        setViewStyle("grid");
    }
    const viewStyleListClick = () => {
        setViewStyle("list");
    }

    useEffect(()=>{
        if(selectedAuthor === "HG"){
            navigate("/Authors/HG");
        }else if(selectedAuthor === "MH"){
            navigate("/Authors/MH");
        }else if(selectedAuthor === "NN"){
            navigate("/Authors/NN");
        }else if(selectedAuthor === "GM"){
            navigate("/Authors/GM");
        }else if(selectedAuthor === "Etc"){
            navigate("/Authors/Etc");
        }
    }, [selectedAuthor, navigate])

    return(
        <Div>
            <Menubar isAtTop={isAtTop} />
            <Sidebar />
            <ScrollMove isAtTop={isAtTop} />
            <div className="author-container">
                <div className="viewStyle">
                    <span onClick={viewStyleGridClick}><LuLayoutGrid/></span>
                    <span onClick={viewStyleListClick}><LuLayoutList/></span>
                </div>
                <select className="authorList" onChange={authorSelect} value={selectedAuthor}>
                    <option value="none"> ---- 선택 ---- </option>
                    <option value="HG">히가시노 게이고</option>
                    <option value="MH">무라카미 하루키</option>
                    <option value="NN">넬레 노이하우스</option>
                    <option value="GM">기욤 뮈소</option>
                    <option value="Etc">기타</option>
                </select>
            </div>
            { selectedAuthor !== "none" && <AuthorBooks selectedAuthor={selectedAuthor} viewStyle={viewStyle}/>}
        </Div>
    )
}