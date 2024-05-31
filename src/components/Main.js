import '../scss/Main.scss'
import { Link } from 'react-router-dom';
import data from '../data/Main.json'

const Main = () => {

    return (
        <div style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
            <section className='mainImg'>
                <div style={{textAlign:'center'}}>
                    <img src="https://eogks0218.github.io/DH_BookStore/image/OIG1.jpg" alt="OIG1" />
                </div>
            </section>
            <section className='mainMenu'>
                <ul>
                    {data.map((item, index) => {
                            return (
                                <li key={index}>
                                    <Link to={`/${item.link}`}>
                                        <div className='nameDiv'>{item.name}</div>
                                        <div className='imgDiv'><img src={item.src} alt='' /></div>
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </section>
        </div>
    );
};

export default Main;
