import "../../scss/Introduce.scss";

export default function TabIntro(){

    return(
        <div className="detailIntroduce">
            <ol>
                <li>
                    <span>Interval Text</span>
                    <ul>
                        <li><img alt="" src="https://eogks0218.github.io/BookStore/Introduce/intro_1.JPG" /></li>
                        <li className="detailTitle">사용 함수 : useState, useEffect</li>
                        <li className="detailContent">
                            웹사이트의 소개 문구를 타이핑 효과로 보여줍니다.<br />
                            ‘useState’를 사용해 현재 타이핑된 문구와 타이핑 상태를 관리합니다.<br />
                            ‘useEffect’를 사용해 타이핑 효과를 구현합니다. 일정 간격으로 문구가 한 글자씩 추가됩니다.
                        </li>
                    </ul>
                </li>
                <li>
                    <span>Introduce Tab</span>
                    <ul>
                        <li><img alt="" src="https://eogks0218.github.io/BookStore/Introduce/intro_2.JPG"></img></li>
                        <li className="detailTitle">사용 함수 : useSelector, useDispatch</li>
                        <li className="detailContent">
                            사용자가 소개 페이지에서 다른 탭으로 전환할 수 있게 합니다.<br />
                            ‘useSelector’를 사용해 현재 선택된 탭 상태를 Redux store에서 가져옵니다.<br />
                            ‘useDispatch’를 사용해 탭 클릭 이벤트를 Redux store에 반영하여 상태를 업데이트합니다.
                        </li>
                    </ul>
                </li>
            </ol>
        </div>
    )
}