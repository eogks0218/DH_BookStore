import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom"
import Menubar from "../Menubar";
import ScrollMove from "../ScrollMove";
import Sidebar from "../Sidebar";
import { useEffect, useState } from "react";
import styled from "styled-components";
import "../../scss/MyPage.scss";
import { edit_member, remove_member } from "../../modules/bookStore";

const Div = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 100px;
`


export default function MyPage(){

    const [isAtTop, setIsAtTop] = useState(window.scrollY === 0);
    const {userName} = useParams();
    const dispatch = useDispatch();
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

    const memberList = useSelector(state => state.bookStore.member)
    const loginUser = memberList.find(member => member.username === userName);

    const [isEdit, setIsEdit] = useState(false)
    const [loginPassword, setLoginPassword] = useState("")
    const [loginEmail, setLoginEmail] = useState("")

    useEffect(()=>{
        if(isEdit){
            setLoginPassword(loginUser.password)
            setLoginEmail(loginUser.email)
        }else{
            setLoginPassword("")
            setLoginEmail("")
        }
    }, [isEdit, loginUser])

    const editClick = () => {
        const editMemberInfo = { username : loginUser.username, password : loginPassword, email : loginEmail };
        if(loginPassword === "" || loginEmail === ""){
            alert("비밀번호와 이메일을 모두 입력해주세요.");
            return;
        }
        dispatch(edit_member(editMemberInfo));
        setIsEdit(false);
        alert("회원정보가 수정되었습니다.");
    }

    const removeClick = () => {
        if(window.confirm("정말 탈퇴하시겠습니까?")){
            navigate(-1);
            dispatch(remove_member(loginUser.username));
            alert("회원정보가 삭제되었습니다.");
        }
    }

    return(
        <Div>
            <Menubar isAtTop={isAtTop}/>
            <Sidebar />
            <ScrollMove isAtTop={isAtTop}/>
            { loginUser &&
            <div className="login-box">
                <h2>회원정보</h2>
                <form>
                    <div className="user-box">
                        <input
                            type="text"
                            name=""
                            value={loginUser.username}
                            style={{color: "#776B5D", fontWeight: "bold", paddingLeft: "10px", cursor: "not-allowed"}}
                        />
                        <label>아이디</label>
                    </div>
                    <div className="user-box">
                        <input
                            type="text"
                            name=""
                            value={isEdit ? loginPassword : loginUser.password}
                            onChange={(e)=> setLoginPassword(e.target.value)}
                            style={isEdit ? null : {color: "#776B5D", fontWeight: "bold", paddingLeft: "10px", cursor: "not-allowed"}}
                        />
                        <label>비밀번호</label>
                    </div>
                    <div className="user-box">
                        <input
                            type="text"
                            name=""
                            value={isEdit ? loginEmail : loginUser.email}
                            onChange={(e)=> setLoginEmail(e.target.value)}
                            style={isEdit ? null : {color: "#776B5D", fontWeight: "bold", paddingLeft: "10px", cursor: "not-allowed"}}
                        />
                        <label>이메일</label>
                    </div>
                </form>
                <div className="user-button">
                    {
                        isEdit?
                        <>
                            <button onClick={editClick} className="btn"><span>수정하기</span></button>
                            <button onClick={()=> setIsEdit(false)} className="btn"><span>취소</span></button>
                        </>
                        :
                        <>
                            <button onClick={()=> setIsEdit(true)} className="btn"><span>회원수정</span></button>
                            <button onClick={removeClick} className="btn"><span>회원탈퇴</span></button>
                        </>
                    }
                </div>
            </div>
            }
        </Div>
    )
}