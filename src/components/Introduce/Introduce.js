import Menubar from '../Menubar';
import styled from 'styled-components';
import Sidebar from '../Sidebar';
import { useState, useEffect } from 'react';
import ScrollMove from '../ScrollMove';
import "../../scss/Main.scss";
import "../../scss/Introduce.scss";
import { useDispatch, useSelector } from 'react-redux';
import { change_introduce } from '../../modules/bookStore';
import TabIntro from "./TabIntro"
import TabAuth from "./TabAuth";
import TabBS from "./TabBS";
import TabBOA from "./TabBOA";
import TabSB from "./TabSB";
import TabETC from './TabETC';

const Div = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 100px;
`

function Introduce(){

    const [isAtTop, setIsAtTop] = useState(window.scrollY === 0);

    const completionWord = '현재 웹사이트는 상업용이 아닌 ‘김대환’의 PROJECT 중 하나이기 때문에 현재 페이지는 각 페이지의 이벤트에 대한 소개페이지입니다.'
    const [title, setTitle] = useState('')
    const [count, setCount] = useState(0)

    const introduceTab = useSelector(state => state.bookStore.introduceTab);
    const dispatch = useDispatch();

    useEffect(() => {
        const typingInterval = setInterval(() => {
            setTitle((prevTitleValue) => {
                let result = prevTitleValue ? prevTitleValue + completionWord[count] : completionWord[0];
                setCount(count +1)

                if(count >= completionWord.length) {
                    clearInterval(typingInterval);
                    return prevTitleValue;
                }
                return result;
            });
        }, 100);
        return () => {
            clearInterval(typingInterval);
        }
    }, [count])

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

    const handleIntroduceTabClick = (event) => {
        dispatch(change_introduce(event.target.innerText));
    }


    return (
        <Div>
            <Menubar isAtTop={isAtTop}/>
            <Sidebar />
            <ScrollMove isAtTop={isAtTop}/>
            <section className='mainText'>
                <div>
                    <p>{title}</p>
                </div>
            </section>
            <div className='introduceTab'>
                <div className={"tab " + (introduceTab === "Introduce" ? "" : "hideTab")} onClick={handleIntroduceTabClick}>Introduce</div>
                <div className={"tab " + (introduceTab === "Authentication" ? "" : "hideTab")} onClick={handleIntroduceTabClick}>Authentication</div>
                <div className={"tab " + (introduceTab === "Best Sellers" ? "" : "hideTab")} onClick={handleIntroduceTabClick}>Best Sellers</div>
                <div className={"tab " + (introduceTab === "Books Of Author" ? "" : "hideTab")} onClick={handleIntroduceTabClick}>Books Of Author</div>
                <div className={"tab " + (introduceTab === "Shopping Basket" ? "" : "hideTab")} onClick={handleIntroduceTabClick}>Shopping Basket</div>
                <div className={"tab " + (introduceTab === "etc" ? "" : "hideTab")} onClick={handleIntroduceTabClick}>etc</div>
            </div>
            { introduceTab &&
                <div className="showTabBox">
                    {introduceTab === "Introduce" && <TabIntro />}
                    {introduceTab === "Authentication" && <TabAuth />}
                    {introduceTab === "Best Sellers" && <TabBS />}
                    {introduceTab === "Books Of Author" && <TabBOA />}
                    {introduceTab === "Shopping Basket" && <TabSB />}
                    {introduceTab === "etc" && <TabETC />}
                </div>
            }
        </Div>
    )
}

export default Introduce;