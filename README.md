
<img src="https://capsule-render.vercel.app/api?type=waving&color=auto&height=200&section=header&text=BookStore&fontSize=70" />

# React 이용 간단한 서점 웹사이트

사이트 이동 : <a href="https://eogks0218.github.io/DH_BookStore/">DH's BookStore</a>

## 📌목차

<ul>
  <li>📂프로젝트 구성</li>
  <li>📺페이지 설명</li>
  <li>✔프로젝트 진행 중 문제 및 해결</li>
  <li>😱문제점</li>
  <li>💡해결방안</li>
</ul>

## 📂프로젝트 구성

<img src="https://github.com/eogks0218/DH_BookStore/assets/160206306/1968861a-d1f0-403d-a46d-f7d11328357b" />

## 📺페이지 설명

### `Main`

<img src="https://github.com/eogks0218/DH_BookStore/assets/160206306/3f63ef83-2bad-4a54-b486-bcad5e2abac2" width="350px"/>
<br />

<ul>
  <li>메인페이지</li>
  <li>각 메뉴로 이동 기능</li>
</ul>

### `Register & Login`

<img src="https://github.com/eogks0218/DH_BookStore/assets/160206306/4c39b048-3842-40f2-9d28-54b2f362b361" width="350px" />
<br />

<ul>
  <li>회원가입 및 로그인 페이지</li>
  <li>tab 이용으로 아이콘 클릭 시 화면 전환</li>
  <li>토글 버튼으로 회원가입 시 비밀번호 표시 여부 설정 가능</li>
  <li>아이디 및 비밀번호 분실 시 Find 페이지로 이동 가능</li>
</ul>

### `Find`

<img src="https://github.com/eogks0218/DH_BookStore/assets/160206306/53a15473-28f7-488b-983b-30747e45ed54" width="350px" />
<br />

<ul>
  <li>아이디 및 비밀번호 찾기 페이지</li>
  <li>tab 이용으로 아이디 찾기 또는 비밀번호 찾기로 화면 전환 가능</li>
</ul>

### `Introduce`

<img src="https://github.com/eogks0218/DH_BookStore/assets/160206306/cd6f4bb4-caf9-4cd5-984b-41e3c1943dde" width="350px" />
<br />

<ul>
  <li>웹사이트 소개 페이지 및 상단 메뉴바</li>
  <li>각 페이지에 대한 설명문</li>
  <li>인증 상태(로그인 여부)에 따른 메뉴바 출력</li>
</ul>

### `Best Sellers`

<img src="https://github.com/eogks0218/DH_BookStore/assets/160206306/ea65ea04-226b-4185-85f4-9c6b1acd4446" width="350px" />
<br />

<ul>
  <li>연도별 베스트셀러 페이지 및 사이드 메뉴바</li>
  <li>선택한 연도에 맞는 이미지 및 책 정보 출력</li>
  <li>사이드 메뉴로 링크 이동 및 연도 선택 가능</li>
  <li>로그인 시 장바구니 기능(담기) 사용 가능</li>
</ul>

### `Book List By Author`

<img src="https://github.com/eogks0218/DH_BookStore/assets/160206306/32f6f9ca-e491-4e67-a56e-fcd9848287a1" width="350px" />
<br />

<ul>
  <li>작가별 도서목록 페이지</li>
  <li>아이콘 클릭 시 View Style 변경 가능</li>
  <li>리스트 스타일로 볼 경우 장바구니 기능 사용 가능</li>
</ul>

### `Shopping Basket`

<img src="https://github.com/eogks0218/DH_BookStore/assets/160206306/f165e2a2-9f78-4268-a675-e3a08dd89cc3" width="350px" />
<br />

<ul>
  <li>장바구니 페이지</li>
  <li>장바구니에 담았던 책의 이미지와 가격 표시</li>
  <li>구매하기 클릭 시 추가정보 입력 창 출력</li>
</ul>

### `Edit Member`

<img src="https://github.com/eogks0218/DH_BookStore/assets/160206306/95d6b8e0-1e54-4dbf-ad24-4f221780dec7" width="350px" />
<br />

<ul>
  <li>회원 정보 페이지</li>
  <li>아이디를 제외한 정보 수정 가능</li>
  <li>회원 탈퇴 가능</li>
</ul>

## ✔프로젝트 진행 중 문제 및 해결

### `사이드 바 생성 후 메인 화면을 가리는 문제`
<ol>
  <li>
    화면 작아질 시 사이드 바 숨기기. ❌
    <ul>
      <li>베스트셀러 연도 선택 등 상단 메뉴바만 사용해야 하는 불편함이 생김.</li>
    </ul>
  </li>
  <li>사이드바에 접기 토글 버튼 추가로 편의성 제공 ⭕</li>
</ol>

### `회원가입 및 로그인 시 Enter키로 가입 및 로그인이 불가능한 문제`
<ol>
  <li>
    Form태그로 변경 및 이벤트를 onSubmit으로 바꾸기. ❌
    <ul>
      <li>css 등 바꿔야 할게 많아서 오래 걸릴 것 같았음.</li>
      <li>다음부턴 미리 생각하고 구성하기.</li>
    </ul>
  </li>
  <li>onKeyDown 이벤트 추가하기로 편의성 제공 ⭕</li>
</ol>

## 😱문제점

### `DB 및 Server 미연결`
<ul>
  <li>사이트 재접속 또는 새로고침할 때마다 회원정보 등 초기화</li>
</ul>

### `내부 데이터 사용`
<ul>
  <li>이미지 및 도서 정보 등 내부 데이터 사용으로 코딩시간 증가</li>
</ul>

### `DeskTop 전용 UI`
<ul>
  <li>모바일 등 다른 기기들을 고려하지 않은 UI 설계</li>
</ul>

## 💡해결방안

### `DB 및 Server 연결`
<ul>
  <li>DB 연결 후 Aws 서버 연동으로 해결 가능</li>
  <li>서버가 유료라 부담되면 적어도 DB라도 연결하기</li>
</ul>

### `DB에 데이터 저장 및 외부 데이터 찾기`
<ul>
  <li>도서 Api가 따로 있나 찾아보고 사용하기</li>
  <li>없을 시 json보다는 DB에 저장해서 사용하기</li>
</ul>

### `다른 기기에서도 접속 가능한 UI 설계`
<ul>
  <li>모바일, Mac 등 Desktop을 제외한 기기에서도 UI가 올바르게 출력하도록 설계하기</li>
</ul>


<img src="https://capsule-render.vercel.app/api?type=waving&color=auto&height=200&section=footer" />
