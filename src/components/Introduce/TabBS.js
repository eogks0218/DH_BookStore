import "../../scss/Introduce.scss";

export default function TabBS(){

    return(
        <div className="detailIntroduce">
            <ol>
                <li>
                    <span>slick-carousel</span>
                    <ul>
                        <li><img alt="" src="https://eogks0218.github.io/DH_BookStore/Introduce/BS_1.JPG" /></li>
                        <li className="detailTitle">사용 라이브러리 : slick-carousel</li>
                        <li className="detailTitle">사용 함수 : useSelector, useEffect, useState</li>
                        <li className="detailContent">
                            이미지 슬라이드를 구현하기 위해 React 라이브러리 중 하나인 slick-carousel을 사용합니다.<br />
                            'useSelector'를 통해 Sidebar에서 선택한 연도에 해당하는 Redux의 State값을 가져옵니다.<br />
                            선택된 연도에 따라 해당하는 이미지 배열을 'useState'와 'useEffect'를 사용하여 동적으로 관리합니다.<br />
                            배열에서 상위 10개의 이미지를 화면에 출력하기 위해 slice와 map을 활용합니다.
                        </li>
                    </ul>
                </li>
                <li>
                    <span>Book List</span>
                    <ul>
                        <li><img alt="" src="https://eogks0218.github.io/DH_BookStore/Introduce/BS_2.JPG" /></li>
                        <li className="detailTitle">사용 함수 : useSelector, useEffect, useDispatch</li>
                        <li className="detailContent">
                            해당 연도에 속하는 도서 목록을 표시합니다.<br />
                            'useSelector'를 이용하여 선택된 연도에 해당하는 Redux의 State값을 가져옵니다.<br />
                            선택된 연도에 맞게 도서 데이터를 동적으로 가져오기 위해 'useState'와 'useEffect'를 사용합니다.<br />
                            가져온 데이터를 map 함수를 사용하여 화면에 출력합니다.<br />
                            각 도서는 id, 이름, 저자, 소개, 가격을 포함하고 있으며, '담기' 버튼을 클릭하면 Redux의 Action을 dispatch하여 해당 도서를 장바구니에 추가합니다.
                        </li>
                    </ul>
                </li>
                <li>
                    <span>Pagination</span>
                    <ul>
                        <li><img alt="" src="https://eogks0218.github.io/DH_BookStore/Introduce/BS_3.JPG" style={{ width: "150px" }}/></li>
                        <li className="detailTitle">사용 함수 : useState, useCallback, useRef</li>
                        <li className="detailContent">
                            페이지네이션을 구현하여 페이지 단위로 도서 목록을 표시합니다.<br />
                            'useState'를 사용하여 현재 페이지를 관리하고, 'useCallback'을 사용하여 페이지 변경 함수를 최적화합니다.<br />
                            'useRef'를 활용하여 총 아이템 수와 페이지당 아이템 수를 설정합니다.<br />
                            현재 페이지에 따라 표시할 데이터를 계산하고, 페이지 번호를 클릭하면 해당 페이지를 표시합니다.
                        </li>
                    </ul>
                </li>
            </ol>
        </div>
    )
}