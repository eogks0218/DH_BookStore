import "../../scss/Introduce.scss";

export default function TabETC(){

    return(
        <div className="detailIntroduce">
            <ol>
                <li>
                    <span>Top Menu</span>
                    <ul>
                        <li><img alt="" src="https://eogks0218.github.io/BookStore/Introduce/ETC_1.JPG" /></li>
                        <li><img alt="" src="https://eogks0218.github.io/BookStore/Introduce/ETC_2.JPG" /></li>
                        <li><img alt="" src="https://eogks0218.github.io/BookStore/Introduce/ETC_3.JPG" /></li>
                        <li className="detailTitle">사용 함수 : useSelector, useDispatch, useState, useRef, useEffect</li>
                        <li className="detailContent">
                            상단 메뉴바를 구현하고, 사용자 인증 상태에 따라 메뉴를 다르게 표시합니다.<br />
                            ‘useSelector’를 사용해 Redux store에서 인증 상태와 사용자 이름을 가져옵니다.<br/>
                            ‘useDispatch’를 사용해 로그아웃 액션을 디스패치합니다.<br />
                            ‘useState’를 사용해 드롭다운 메뉴의 열림/닫힘 상태를 관리합니다.<br />
                            ‘useRef’를 사용해 드롭다운 메뉴의 참조를 관리합니다.<br />
                            ‘useEffect’를 사용해 클릭 이벤트를 감지하고, 메뉴 외부 클릭 시 드롭다운을 닫습니다.<br />
                            사용자는 상단 메뉴에서 자신의 계정 정보를 확인할 수 있습니다.<br/>
                            또한, 메뉴 아이템을 클릭하여 다양한 페이지로 이동할 수 있습니다.
                        </li>
                    </ul>
                </li>
                <li>
                    <span>Side Menu</span>
                    <ul>
                    <li><img alt="" src="https://eogks0218.github.io/BookStore/Introduce/ETC_4.JPG" style={{ width: "150px", marginRight: "10px" }}/><img alt="" src="https://eogks0218.github.io/BookStore/Introduce/ETC_5.JPG" style={{ width: "150px" }}/></li>
                    <li></li>
                        <li className="detailTitle">사용 함수 : useState, useEffect, useDispatch, useLocation</li>
                        <li className="detailContent">
                            사이드 메뉴를 구현하고, 사용자가 메뉴를 클릭하여 페이지를 탐색할 수 있게 합니다.<br />
                            ‘useState’를 사용해 메뉴의 확장/축소 상태를 관리합니다.<br />
                            ‘useEffect’를 사용해 현재 경로에 따라 사이드 메뉴의 상태를 동기화합니다.<br />
                            ‘useDispatch’를 사용해 사용자가 특정 메뉴를 클릭할 때 필요한 Action을 디스패치합니다.<br />
                            ‘useLocation’을 사용해 현재 경로를 가져옵니다.
                        </li>
                    </ul>
                </li>
                <li>
                    <span>ScrollMove</span>
                    <ul>
                    <li><img alt="" src="https://eogks0218.github.io/BookStore/Introduce/ETC_6.JPG" style={{ width: "100px" }}/></li>
                        <li className="detailTitle">사용 함수 : useState, useEffect</li>
                        <li className="detailContent">
                            페이지 스크롤을 제어하여 사용자가 페이지 상단으로 쉽게 이동할 수 있게 합니다.<br />
                            ‘useState’를 사용해 현재 스크롤 위치를 저장하고, 페이지 상단 여부를 확인합니다.<br />
                            ‘useEffect’를 사용해 스크롤 이벤트를 감지하고, 스크롤 위치에 따라 상태를 업데이트합니다.
                        </li>
                    </ul>
                </li>
            </ol>
        </div>
    )
}