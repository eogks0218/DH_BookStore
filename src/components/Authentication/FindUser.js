import Menubar from "../Menubar"
import Sidebar from "../Sidebar"
import ScrollMove from "../ScrollMove"
import { useState, useEffect } from "react";
import styled from "styled-components";
import "../../scss/FindUser.scss";
import { useSelector } from "react-redux";

const Div = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 100px;
`

export default function FindUser(){

    const [isAtTop, setIsAtTop] = useState(window.scrollY === 0);

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
    
    const [currentTab, setCurrentTab] = useState("find-ID");
    const [findIdEmail, setFindIdEmail] = useState("");
    const [findPasswordId, setFindPasswordId] = useState("");
    const [findPasswordEmail, setFindPasswordEmail] = useState("");
    const [findIdResult, setFindIdResult] = useState("");
    const [findPasswordResult, setFindPasswordResult] = useState("");

    const memberList = useSelector(state => state.bookStore.member)

    useEffect(()=>{
        clearFields();
    }, [currentTab])

    const clearFields = () => {
        setFindIdEmail("");
        setFindPasswordId("");
        setFindPasswordEmail("");
        setFindIdResult("");
        setFindPasswordResult("");
    }

    const findIdClick = () => {
        if(findIdEmail === ""){
            setFindIdResult("이메일을 입력해주세요.")
        }else{
            const matchingMembers = memberList.filter(member => member.email === findIdEmail);
            if (matchingMembers.length > 0) {
                const usernames = matchingMembers.map(member => member.username).join("<br />아이디 : ");
                setFindIdResult("아이디 : " + usernames);
            } else {
                setFindIdResult("존재하지 않는 이메일입니다.");
            }
        }
        setTimeout(() => setFindIdResult(""), 5000);
    };

    const findPasswordClick = () => {
        if(findPasswordId === ""){
            setFindPasswordResult("아이디를 입력해주세요.")
        }else if(findPasswordEmail === ""){
            setFindPasswordResult("이메일을 입력해주세요.")
        }else{
            const findPasswordResult = memberList.find(member => member.username === findPasswordId && member.email === findPasswordEmail);
            if(findPasswordResult){
                setFindPasswordResult("비밀번호 : " + findPasswordResult.password)
            }else{
                setFindPasswordResult("존재하지 않는 아이디 또는 이메일입니다.")
            }
        }
        setTimeout(() => setFindPasswordResult(""), 5000);
    };

    return(
        <Div>
            <Menubar isAtTop={isAtTop}/>
            <Sidebar />
            <ScrollMove isAtTop={isAtTop}/>
            <div className="find-wrap">
                <div className="find-html">
                    <input id="tab-1" type="radio" name="tab" className="find-PASSWORD" checked={currentTab === "find-PASSWORD"} onChange={() => setCurrentTab("find-PASSWORD")} />
                    <label htmlFor="tab-1" className="tab">비밀번호 찾기</label>
                    <input id="tab-2" type="radio" name="tab" className="find-ID" checked={currentTab === "find-ID"} onChange={() => setCurrentTab("find-ID")} />
                    <label htmlFor="tab-2" className="tab">아이디 찾기</label>
                    <div className="find-form">
                        <div className="find-PASSWORD-htm">
                            <div className="group">
                                <label htmlFor="find-PASSWORD-ID" className="label">아이디</label>
                                <input id="find-PASSWORD-ID" type="text" className="input" value={findPasswordId} onChange={(e)=>setFindPasswordId(e.target.value)}/>
                            </div>
                            <div className="group">
                                <label htmlFor="find-PASSWORD-EMAIL" className="label">이메일</label>
                                <input id="find-PASSWORD-EMAIL" type="text" className="input" value={findPasswordEmail} onChange={(e)=>setFindPasswordEmail(e.target.value)}/>
                            </div>
                            <div className="group">
                                <button className="button" onClick={findPasswordClick}>비밀번호 찾기</button>
                            </div>
                            <div className="hr"></div>
                            <div className="result">
                                {findPasswordResult}
                            </div>
                            <div className="foot-lnk">
                                <label htmlFor="tab-2">아이디를 잊어버리셨나요?</label>
                            </div>
                        </div>
                        <div className="find-ID-htm">
                            <div className="group">
                                <label htmlFor="find-ID-EMAIL" className="label">이메일</label>
                                <input id="find-ID-EMAIL" type="text" className="input" value={findIdEmail} onChange={(e)=>setFindIdEmail(e.target.value)}/>
                            </div>
                            <div className="group">
                                <button className="button" onClick={findIdClick}>아이디 찾기</button>
                            </div>
                            <div className="hr"></div>
                            <div className="result" dangerouslySetInnerHTML={{ __html: findIdResult }}></div>
                            <div className="foot-lnk">
                                <label htmlFor="tab-1">비밀번호를 잊어버리셨나요?</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Div>
    )
}