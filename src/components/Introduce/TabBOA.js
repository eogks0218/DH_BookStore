import "../../scss/Introduce.scss";

export default function TabBOA(){

    return(
        <div className="detailIntroduce">
            <ol>
                <li>
                    <span>View Style</span>
                    <ul>
                        <li><img alt="" src="https://eogks0218.github.io/DH_BookStore/Introduce/BOA_1.JPG" style={{ width: "150px" }}/></li>
                        <li className="detailTitle">사용 함수 : useState</li>
                        <li className="detailContent">
                            Grid View 또는 List View로 볼 수 있게 해주는 기능을 제공합니다.<br />
                            ‘useState’를 사용해 현재 view style을 관리합니다.<br />
                            각각의 view style 버튼을 클릭하면, setViewStyle 함수를 통해 view style 상태를 변경합니다.
                        </li>
                    </ul>
                </li>
                <li>
                    <span>Author Select</span>
                    <ul>
                        <li><img alt="" src="https://eogks0218.github.io/DH_BookStore/Introduce/BOA_2.JPG" style={{ width: "150px" }}/></li>
                        <li className="detailTitle">사용 함수 : useSelector, useDispatch, useEffect</li>
                        <li className="detailContent">
                            사용자가 특정 작가를 선택할 수 있게 합니다.<br />
                            ‘useDispatch’를 사용해 선택된 작가를 Redux store에 저장합니다.<br />
                            ‘useSelector’를 사용해 Redux store에서 현재 선택된 작가를 가져옵니다.
                        </li>
                    </ul>
                </li>
                <li>
                    <span>Grid Style</span>
                    <ul>
                        <li><img alt="" src="https://eogks0218.github.io/DH_BookStore/Introduce/BOA_3.JPG"/></li>
                        <li className="detailTitle">사용 함수 : useEffect</li>
                        <li className="detailContent">
                            데이터를 격자 형태로 보여줍니다.<br />
                            ‘useEffect’를 사용해 선택된 작가가 변경될 때마다 해당 작가의 데이터를 불러와 상태를 업데이트합니다.<br />
                            각 데이터를 map 함수를 사용해 화면에 출력합니다.
                        </li>
                    </ul>
                </li>
                <li>
                    <span>List Style</span>
                    <ul>
                        <li><img alt="" src="https://eogks0218.github.io/DH_BookStore/Introduce/BOA_4.JPG"/></li>
                        <li className="detailTitle">사용 함수 : useEffect, useSelector, useDispatch</li>
                        <li className="detailContent">
                            데이터를 리스트 형태로 보여줍니다.<br />
                            ‘useEffect’를 사용해 선택된 작가가 변경될 때마다 해당 작가의 데이터를 불러와 상태를 업데이트합니다.<br />
                            ‘useSelector’를 사용해 장바구니 상태를 Redux store에서 가져옵니다.<br />
                            ‘useDispatch’를 사용해 장바구니에 아이템을 추가하거나 제거합니다.<br />
                            각 데이터를 map 함수를 사용해 화면에 출력하며, 장바구니 버튼을 통해 아이템을 추가하거나 제거할 수 있습니다.
                        </li>
                    </ul>
                </li>
            </ol>
        </div>
    )
}