import "../../scss/Introduce.scss";

export default function TabAuth(){

    return(
        <div className="detailIntroduce">
            <ol>
                <li>
                    <span>Register</span>
                    <ul>
                        <li><img alt="" src="https://eogks0218.github.io/DH_BookStore/Introduce/Auth_1.JPG" /></li>
                        <li className="detailTitle">사용 함수 : useState, useRef, useEffect, register_member</li>
                        <li className="detailContent">
                            회원가입 기능을 제공합니다.<br />
                            ‘useState’를 사용해 입력 필드의 값을 관리합니다.<br />
                            ‘useRef’를 사용해 비밀번호와 비밀번호 확인 필드의 참조를 관리합니다.<br />
                            ‘useEffect’를 사용해 탭 변경 시 입력 필드를 초기화합니다.<br />
                            ‘register_member’를 사용해 새로운 회원을 Redux store에 등록합니다.
                        </li>
                    </ul>
                </li>
                <li>
                    <span>Login</span>
                    <ul>
                        <li><img alt="" src="https://eogks0218.github.io/DH_BookStore/Introduce/Auth_2.JPG" /></li>
                        <li className="detailTitle">사용 함수 : useState, login_member</li>
                        <li className="detailContent">
                            로그인 기능을 제공합니다.<br />
                            ‘useState’를 사용해 입력 필드의 값을 관리합니다.<br />
                            ‘login_member’를 사용해 입력된 회원 정보를 Redux store와 비교하여 로그인합니다.
                        </li>
                    </ul>
                </li>
                <li>
                    <span>Find User</span>
                    <ul>
                        <li><img alt="" src="https://eogks0218.github.io/DH_BookStore/Introduce/Auth_3.JPG" style={{ width: "240px", marginRight: "10px" }} /><img alt="" src="/Introduce/auth_4.JPG" style={{ width: "240px" }}/></li>
                        <li className="detailTitle">사용 함수 : useState, useEffect, useSelector</li>
                        <li className="detailContent">
                            아이디와 비밀번호 찾기 기능을 제공합니다.<br />
                            ‘useState’를 사용해 입력 필드의 값을 관리합니다.<br />
                            ‘useEffect’를 사용해 탭 변경 시 입력 필드를 초기화합니다.<br />
                            ‘useSelector’를 사용해 Redux store에서 회원 목록을 조회합니다.
                        </li>
                    </ul>
                </li>
                <li>
                    <span>My Page</span>
                    <ul>
                        <li><img alt="" src="https://eogks0218.github.io/DH_BookStore/Introduce/Auth_5.JPG" style={{ width: "240px", marginRight: "10px" }} /><img alt="" src="/Introduce/auth_6.JPG" style={{ width: "240px" }}/></li>
                        <li className="detailTitle">사용 함수 : useState, useEffect, useDispatch, useSelector, useParams, useNavigate, edit_member, remove_member</li>
                        <li className="detailContent">
                            회원정보 조회 및 수정을 위한 기능을 제공합니다.<br />
                            ‘useState’를 사용해 수정 상태와 입력 필드의 값을 관리합니다.<br />
                            ‘useEffect’를 사용해 수정 모드 시 입력 필드를 초기화합니다.<br />
                            ‘useDispatch’를 사용해 Redux store의 Action을 디스패치합니다.<br />
                            ‘useSelector’를 사용해 Redux store에서 회원 정보를 조회합니다.<br />
                            ‘useParams’를 사용해 URL 파라미터에서 사용자 이름을 가져옵니다.<br />
                            ‘useNavigate’를 사용해 다른 페이지로 이동합니다.<br />
                            ‘edit_member’를 사용해 회원 정보를 수정합니다.<br />
                            ‘remove_member’를 사용해 회원 정보를 삭제합니다.
                        </li>
                    </ul>
                </li>
            </ol>
        </div>
    )
}