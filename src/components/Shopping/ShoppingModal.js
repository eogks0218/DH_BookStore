import styled from "styled-components";

const FullScreenDiv = styled.div`
    position: fixed;
    z-index: 10030;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.25);
    display: flex;
    justify-content: center;
    align-items: center;
`

const ModalDiv = styled.div`
    width: 380px;
    background: #EBE3D5;
    padding: 1.5rem;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.125);
    border-radius: 0.5rem;
    h2{
        margin-top: 0;
        text-align: center;
        border-bottom: 3px dotted #776B5D;
        padding-bottom: 1.5rem;
    };
    p{
        margin: 1.5rem 0;
        input{
            width: 50px;
            text-align: center;
            border: none;
            border-radius: 0.25rem;
            padding: 0.15rem;
            background-color: #F3EFE4;
            color: #776B5D;
            border: 0.5px solid #776B5D;
            font-weight: bold;
        }
        #addressInput{
            width: 280px;
            text-align: center;
            border: none;
            border-radius: 0.25rem;
            padding: 0.15rem;
            background-color: #F3EFE4;
            color: #776B5D;
            border: 0.5px solid #776B5D;
            font-weight: bold;
        }
    };
    .button{
        display: flex;
        justify-content: center;
        border-top: 3px dotted #776B5D;
    };
`

const StyledButton = styled.div`
    margin-top: 2rem;
    cursor: pointer;
    padding: 0.5rem;
    border: 2px solid #776B5D;
    background-color: #F3EFE4;
    border-radius: 0.25rem;
    transition: all 0.3s linear;
    &+&{
        margin-left: 0.75rem;
    };
    &:hover{
        box-shadow: 0 0 2px 2px #776B5D;
    };
`

export default function ShoppingModal(props){

    const { buyVisible, totalPrice, handleCancel } = props;

    if(!buyVisible) return null;

    return(
        <FullScreenDiv>
            <ModalDiv>
                <h2>결제하기</h2>
                <p>총 금액 : {totalPrice.toLocaleString()}원</p>
                <p>카드 번호 : <input type="text" /> - <input type="text" /> - <input type="text" /> - <input type="text" /></p>
                <p>카드 유효기간 : <input type="text" /> - <input type="text" /></p>
                <p>카드 비밀번호 : <input type="password" /></p>
                <p>주소 : <input type="text" id="addressInput"/></p>
                <div className="button">
                    <StyledButton >확인</StyledButton>
                    <StyledButton onClick={()=>handleCancel()}>취소</StyledButton>
                </div>
            </ModalDiv>
        </FullScreenDiv>
    )
}