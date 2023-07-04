
import insta_logo from '../images/instagram.svg';
import vk_logo from '../images/vk.svg';
import telegram_logo from '../images/telegram.svg';
import '../style/characteristics.css';


import FlowerInfo from './FlowerInfo';

const Charact = () => {
    return (
    <div className="html-container">
        <header>
        <h2>Характеристика</h2>
    </header>

        {FlowerInfo.map(val=>{
            return (
            <table className={val.tableClassName}>
                <tr>
                    <td className={val.tdClassName}>
                        <h1>{val.h2name}</h1>
                        <img src={val.imgSrc} alt="" className={val.imgClassName}/>
                        {/* <ul className='txt'>
                                {CharactInfo.map(val2=>{
                                    <li>{val2.liInfo}</li>
                                })}
                        </ul> */}
                        {val.ulInfo}
                    </td>

                    <td className={val.tdClassName2}>
                        <h1>{val.h2name2}</h1>
                        <img src={val.imgSrc2} alt="" className={val.imgClassName2}/>
                        {/* <ul className='txt'>
                                {CharactInfo.map(val2=>{
                                    <li>{val2.liInfo}</li>
                                })}
                        </ul> */}
                        {val.ulInfo2}
                    </td>

                </tr>
            </table>
        )})}


    <footer>
        <h2>Где мы есть?</h2>
        <p>По любым вопросам, можете связаться с нами через:</p>
        <div className="social-media">
            <a href="https://instagram.com/violetta_merkul?igshid=YmMyMTA2M2Y="><img src={insta_logo} alt=""/>
            <span>Инстаграм</span></a>
            <a href="https://vk.com/viomerkul"><img src={vk_logo} alt=""/>
            <span>ВКонтакте</span></a>
            <a href=""><img className="telegram-icon" src={telegram_logo} alt=""/>
            <span>@viomer</span></a>
        </div>
    </footer>
    </div>
    )
}

export { Charact }