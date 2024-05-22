import { BiArrowToTop } from "react-icons/bi";
import styled from "styled-components";

const Div = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: fixed;
    bottom: 0;
    left: 50%;
`
const Span = styled.span`

    
    &+&{
        margin-left: 30px;
    }
    svg{
        font-size: 3vh;
        cursor: pointer;
        border-radius: 50% 50% 0 0;
        background-color:#F3EFE4;
        &:hover{
            color: #F3EFE4;
            background-color: #776B5D;
            transition: all 0.5s linear;
        }
    }
`

export default function ScrollMove(props){

    const { isAtTop } = props;

    const toTopScroll = () => {
        if(!window.scrollY) return;
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return(
        !isAtTop && (
        <Div>
            <Span onClick={toTopScroll}><BiArrowToTop /></Span>
        </Div>
        )
    )
}