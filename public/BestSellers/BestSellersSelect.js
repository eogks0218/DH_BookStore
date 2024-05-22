import styled from 'styled-components';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './scss/BestSellers.scss'
import BestSellersPage from './BestSellersPage';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const images2023 = require.context('./BestSellersImg2023', false, /\.(png|jpe?g|svg)$/)
const keys2023 = images2023.keys();
const imgList2023 = keys2023.map(key => images2023(key));

const images2022 = require.context('./BestSellersImg2022', false, /\.(png|jpe?g|svg)$/)
const keys2022 = images2022.keys();
const imgList2022 = keys2022.map(key => images2022(key));

const images2021 = require.context('./BestSellersImg2021', false, /\.(png|jpe?g|svg)$/)
const keys2021 = images2021.keys();
const imgList2021 = keys2021.map(key => images2021(key));

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
}

const H2 = styled.h2 `
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 50px;
    font-size: 2rem;
    font-weight: bold;
    color: #776B5D;
`

function BestSellersSelect({selectedYear}){

    const [imgList, setImgList] = useState(imgList2023);

    const DataSelect = useSelector(state => state.bookStore.dataSelect)

    const bsData = DataSelect.map(data =>{
        return {
            id: data.id,
            name: data.name,
            author: data.author,
            price: data.price,
            introduce: data.introduce
        }
    });

    useEffect(()=>{
        const newImgList = selectedYear === "2023"? imgList2023 : selectedYear === "2022"? imgList2022 : imgList2021
        setImgList(newImgList)
    }, [selectedYear])

    return (
        <div className='container'>
            <div className='oneDiv'>
                <H2>{selectedYear}년 베스트셀러 Top10</H2>
                <Slider {...settings}>
                    {imgList.slice(0, 10).map((img, index) => (
                        <div key={index} className='boxDiv'>
                            <div className='nameDiv'>{bsData[index].name}</div>
                            <div className='imgDiv'>
                                <img src={img} alt=''/>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
            <div className='threeDiv'>
                <BestSellersPage imgList={imgList} selectedYear={selectedYear}/>
            </div>
        </div>
    )
}

export default BestSellersSelect;