import Main from "./components/Main";
import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
import Introduce from "./components/Introduce/Introduce";
import BestSellers from "./components/BestSellers/BestSellers"
import Authentication from "./components/Authentication/Authentication";
import ShoppingBasket from "./components/Shopping/ShoppingBasket";
import Authors from "./components/BooksOfAuthor/Authors";
import MyPage from "./components/Authentication/MyPage";
import FindUser from "./components/Authentication/FindUser";

const Div = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

function App() {
    return (
        <Div>
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/introduce' element={<Introduce />} />
            <Route path='/bestSellers' element={<BestSellers />} />
            <Route path='/Authentication' element={<Authentication />} />
            <Route path='/ShoppingBasket' element={<ShoppingBasket />} />
            <Route path='/Authors' element={<Authors />} />
            <Route path='/Authors/:authorName' element={<Authors />} />
            <Route path='/MyPage/:userName' element={<MyPage />} />
            <Route path='/FindUser' element={<FindUser />} />
          </Routes>
        </Div>
    );
}

export default App;
