import "../../scss/Introduce.scss";

export default function TabSB(){

    return(
        <div className="detailIntroduce">
            <ol>
                <li>
                    <span>Shopping Basket</span>
                    <ul>
                        <li><img alt="" src="/Introduce/SB_1.JPG" /></li>
                        <li className="detailTitle">사용 함수 : useState, useEffect, useDispatch, useSelector</li>
                        <li className="detailContent">
                            장바구니 페이지를 구현합니다.<br />
                            'useState'를 사용하여 장바구니 아이템의 상태와 모달의 표시 여부를 관리합니다.<br />
                            'useEffect'를 사용하여 초기화 및 페이지 로딩 시의 동작을 처리하며, 필요한 경우 상태를 업데이트합니다.<br />
                            'useDispatch'를 사용하여 Redux의 액션을 dispatch하고, 'useSelector'를 사용하여 Redux store의 상태를 가져와 장바구니에 추가된 상품들을 보여줍니다.
                        </li>
                    </ul>
                </li>
                <li>
                    <span>Shopping Modal</span>
                    <ul>
                        <li><img alt="" src="/Introduce/SB_2.JPG" /></li>
                        <li className="detailTitle">사용 함수 : useState</li>
                        <li className="detailContent">
                            장바구니에서 상품을 구매할 때 나타나는 Modal 창을 구현합니다.<br />
                            'useState'를 사용하여 Modal의 표시 여부를 관리하며, 사용자가 구매를 확인하거나 취소할 때 상태를 업데이트합니다.<br />
                            Modal은 총 구매 가격과 결제 관련 정보를 보여주고, 사용자의 입력을 받아 결제를 완료합니다.
                        </li>
                    </ul>
                </li>
            </ol>
        </div>
    )
}