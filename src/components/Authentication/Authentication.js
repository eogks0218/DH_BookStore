import { useEffect, useRef, useState } from "react";
import { FaUserCheck, FaUserPlus, FaBook } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import "../../scss/Authentication.scss";
import "../../scss/MenuBar.scss";
import { connect } from "react-redux";
import { login_member, register_member } from "../../modules/bookStore";

function Authentication(props){

    const { member } = props;
    const { login_member, register_member } = props;
    
    const navaigate = useNavigate();

    const [loginUserName, setLoginUserName] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [registerUserName, setRegisterUserName] = useState("");
    const [registerPassword, setregisterPassword] = useState("");
    const [registerRepeatPassword, setRegisterRepeatPassword] = useState("");
    const [registerEmail, setRegisterEmail] = useState("");
    const [currentTab, setCurrentTab] = useState("sign-up");
    const passwordField = useRef(null);
    const repeatPasswordField = useRef(null);

    const togglePasswordVisibility = () => {
        const type = passwordField.current.type === "password" ? "text" : "password";
        passwordField.current.type = type;
        const typeTwo = repeatPasswordField.current.type === "password" ? "text" : "password";
        repeatPasswordField.current.type = typeTwo;
    }

    useEffect(()=>{
        clearFields();
    }, [currentTab])

    const clearFields = () => {
        setLoginUserName("");
        setLoginPassword("");
        setRegisterUserName("");
        setregisterPassword("");
        setRegisterRepeatPassword("");
        setRegisterEmail("");
        const checkBox = document.getElementById("check")
        const toggleCheckBox = document.getElementById("togglePassword")
        if(checkBox){
            checkBox.checked = false;
        }
        if(toggleCheckBox){
            toggleCheckBox.checked = false;
        }
    }

    const loginMember = () => {
        if (!member) {
            console.error("Member array not found in Redux state.");
            return;
        }
        const isMember = member.find(user => loginUserName === user.username && loginPassword === user.password);
        if(loginUserName === "" || loginPassword === ""){
            if(loginUserName === ""){
                alert("아이디를 입력해주세요.")
            }else if(loginPassword === ""){
                alert("비밀번호를 입력해주세요.")
            }
            return;
        }
        if(isMember){
            alert(loginUserName + "님, 로그인되었습니다.");
            login_member(loginUserName)
            navaigate(-1);
            return;
        }
        alert("존재하지 않는 아이디이거나 비밀번호가 잘못 입력되었습니다.");
        setLoginUserName("");
        setLoginPassword("");
    }

    const registerMember = () => {
        if (!member) {
            console.error("Member array not found in Redux state.");
            return;
        }
        const isMember = member.find(user => registerUserName === user.username);
        if(registerUserName === "" || registerPassword === "" || registerRepeatPassword === "" || registerEmail === ""){
            if(registerUserName === ""){
                alert("아이디를 입력해주세요.")
            }else if(registerPassword === ""){
                alert("비밀번호를 입력해주세요.")
            }else if(registerRepeatPassword === ""){
                alert("비밀번호 확인을 입력해주세요.")
            }else if(registerEmail === ""){
                alert("이메일을 입력해주세요.")
            }
            return;
        }
        if(registerPassword!== registerRepeatPassword){
            alert("비밀번호가 다르게 입력되었습니다. 다시 입력해주세요.");
            setRegisterRepeatPassword("");
            setregisterPassword("");
            return;
        }
        if(isMember){
            alert("이미 존재하는 아이디입니다.");
            setRegisterUserName("");
            return;
        }
        const newMember = {
            username : registerUserName,
            password : registerPassword,
            email : registerEmail
        }
        register_member(newMember);
        alert(registerUserName + "님, 회원가입되었습니다.")
        setCurrentTab("sign-in")
    }

    const handleKeyDown = (event) => {
        if(event.key === "Enter"){
            if(currentTab === "sign-in"){
                loginMember();
            }
            if(currentTab === "sign-up"){
                registerMember();
            }
        }
    }

    return(
        <>
        <div className="menuBox">
            <nav>
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
            </nav>
        </div>
        <div className="login-wrap" onKeyDown={handleKeyDown}>
            <div className="login-html">

                <input id="tab-1" type="radio" name="tab" className="sign-in" checked={currentTab === "sign-in"} onChange={() => setCurrentTab("sign-in")} />
                <label htmlFor="tab-1" className="tab"><FaUserCheck /></label>
                <input id="tab-2" type="radio" name="tab" className="sign-up" checked={currentTab === "sign-up"} onChange={() => setCurrentTab("sign-up")} />
                <label htmlFor="tab-2" className="tab"><FaUserPlus /></label>
                <div className="login-form">
                    <div className="sign-in-htm">
                        <div className="group">
                            <label htmlFor="loginuser" className="label">아이디</label>
                            <input id="loginuser" type="text" className="input" value={loginUserName} onChange={(e)=>setLoginUserName(e.target.value)}/>
                        </div>
                        <div className="group">
                            <label htmlFor="loginpass" className="label">패스워드</label>
                            <input id="loginpass" type="password" className="input" value={loginPassword} onChange={(e)=>setLoginPassword(e.target.value)}/>
                        </div>
                        <div className="group">
                            <input id="loginCheck" type="checkbox" className="check"/>
                            <label htmlFor="loginCheck"><span className="icon"></span> 아이디 저장</label>
                        </div>
                        <div className="group">
                            <button className="button" onClick={loginMember}>로그인</button>
                        </div>
                        <div className="hr"></div>
                        <div className="foot-lnk">
                            <Link to="/FindUser">비밀번호를 잊어버리셨나요?</Link>
                        </div>
                    </div>
                    <div className="sign-up-htm">
                        <div className="group">
                            <label htmlFor="registerUser" className="label">아이디</label>
                            <input id="registerUser" type="text" className="input" value={registerUserName} onChange={(e)=>setRegisterUserName(e.target.value)}/>
                        </div>
                        <div className="group">
                            <label htmlFor="registerPass" className="label">비밀번호</label>
                            <input id="registerPass" type="password" className="input" ref={passwordField} value={registerPassword} onChange={(e)=>setregisterPassword(e.target.value)}/>
                        </div>
                        <div className="group">
                            <label htmlFor="registerRepeatPass" className="label">비밀번호 확인</label>
                            <input id="registerRepeatPass" type="password" className="input" ref={repeatPasswordField} value={registerRepeatPassword} onChange={(e)=>setRegisterRepeatPassword(e.target.value)}/>
                        </div>
                        <div className="group">
                            <label htmlFor="registerEmail" className="label">이메일</label>
                            <input id="registerEmail" type="text" className="input" value={registerEmail} onChange={(e)=>setRegisterEmail(e.target.value)}/>
                        </div>
                        <div className="group">
                            <input id="togglePassword" type="checkbox" className="check" onClick={togglePasswordVisibility} />
                            <label htmlFor="togglePassword"><span className="icon"></span> 비밀번호 표시</label>
                        </div>
                        <div className="group">
                            <button className="button" onClick={registerMember}>회원가입</button>
                        </div>
                        <div className="hr"></div>
                        <div className="foot-lnk">
                            <label htmlFor="tab-1">아이디가 이미 있으신가요?</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}


export default connect(
    (state) => (
        {
            member: state.bookStore.member
        }
    ),
    {
        register_member, login_member
    }
)(Authentication);