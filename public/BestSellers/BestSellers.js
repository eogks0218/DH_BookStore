import Menubar from '../Menubar';
import styled from 'styled-components';
import './scss/BestSellers.scss'
import BestSellersSelect from './BestSellersSelect';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Sidebar from '../Sidebar';
import ScrollMove from '../ScrollMove';

const Div = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

function BestSellers(){

    const [isAtTop, setIsAtTop] = useState(window.scrollY === 0);

    const selectedYear = useSelector(state=>state.bookStore.year)
    useEffect(() => {
        const handleScroll = () => {
            setIsAtTop(window.scrollY < 250);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(()=>{
        window.scrollTo(0, 0);
    },[])

    return (
        <Div>
            <Menubar isAtTop={isAtTop}/>
            <Sidebar />
            <ScrollMove isAtTop={isAtTop}/>
            <BestSellersSelect selectedYear={selectedYear}/>
        </Div>
    )
}

export default BestSellers;