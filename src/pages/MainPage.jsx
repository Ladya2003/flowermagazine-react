import bouquet1 from '../images/1.jpg';
import bouquet2 from '../images/2.jpg';
import bouquet3 from '../images/3.jpg';
import bouquet4 from '../images/4.jpg';
import bouquet5 from '../images/5.jpg';
import bouquet6 from '../images/6.jpg'; 
import insta_logo from '../images/instagram.svg';
import vk_logo from '../images/vk.svg';
import telegram_logo from '../images/telegram.svg';
import '../style/style.css';

// компонент формы
import FillingExample from './FillingExample'
import { useState } from 'react';



const MainPage = () => {
 

    // номер нажатого букета
    const [text, setText] = useState(0);
    
    // используется для задания красного border у букетов
    const [flowerBorder1, setFlowerBorder1] = useState(true);
    const [flowerBorder2, setFlowerBorder2] = useState(true);
    const [flowerBorder3, setFlowerBorder3] = useState(true);
    const [flowerBorder4, setFlowerBorder4] = useState(true);
    const [flowerBorder5, setFlowerBorder5] = useState(true);
    const [flowerBorder6, setFlowerBorder6] = useState(true);

    // включение/отключения кнопки отправить
    const [disabledState, setDisabledState] = useState(true);

    
    // ф-ия для задания нажатого букета border а также добавления его номера в Поле формы: Номер букета
    const clickedFlower = (param) => {
        // задаем номер выбранного букета
        setText(cur => cur = param);
        // скрываем border у всех букетов
        setFlowerBorder1(cur => true)
        setFlowerBorder2(cur => true)
        setFlowerBorder3(cur => true)
        setFlowerBorder4(cur => true)
        setFlowerBorder5(cur => true)
        setFlowerBorder6(cur => true)

        // делаем выборку: в зависимости от номера букета, добавляем ему border
        if (param == 1)
         setFlowerBorder1(cur => !cur)
         
        if (param == 2)
        setFlowerBorder2(cur => !cur)
        
        if (param == 3)
         setFlowerBorder3(cur => !cur)
         
        if (param == 4)
        setFlowerBorder4(cur => !cur)
        
        if (param == 5)
         setFlowerBorder5(cur => !cur)
         
        if (param == 6)
        setFlowerBorder6(cur => !cur)

        // для выключения кнопки отправить
        setDisabledState(cur=> false);
        
    }



     

  return (
      <div id="html-container" className="html-container">
          <header className="mainpageHeader">
              <h1>Познакомьтесь<br/> с историями<br/> цветов</h1>
              <div className="header__img"></div>
              
              {/* <ThemeSelector /> */}
          </header>
          <div id="choose" className="choose">

              <h1>Выбери свой букет и заполни форму</h1>
              <div className="flowers">
                  <div className="photo_1-3">
                      <figure onClick={e=>clickedFlower(1)}>
                          <img className="flower1" src={bouquet1} alt=""
                          style={{borderColor: flowerBorder1 ? "transparent" : "red"}}
                          draggable="false"/>
                          <figcaption>1</figcaption>
                      </figure>
                      <figure onClick={e=>clickedFlower(2)}>
                        <img className="flower1"  src={bouquet2} alt=""
                        style={{borderColor: flowerBorder2 ? "transparent" : "red"}}/>
                          <figcaption>2</figcaption>
                      </figure>
                      <figure onClick={e=>clickedFlower(3)}>
                        <img className="flower1" src={bouquet3} alt=""
                        style={{borderColor: flowerBorder3 ? "transparent" : "red"}}/>
                          <figcaption>3</figcaption>
                      </figure>
                  </div>
                  <div className="photo_1-3">
                      <figure onClick={e=>clickedFlower(4)}>
                          <img src={bouquet4} alt=""
                           className="flower1"
                          style={{borderColor: flowerBorder4 ? "transparent" : "red"}}/>
                          <figcaption>4</figcaption>
                      </figure>
                      <figure onClick={e=>clickedFlower(5)}>
                          <img src={bouquet5} alt=""
                           className="flower1"
                          style={{borderColor: flowerBorder5 ? "transparent" : "red"}}/>
                          <figcaption>5</figcaption>
                      </figure>
                      <figure onClick={e=>clickedFlower(6)}>
                          <img src={bouquet6} alt=""
                           className="flower1"
                          style={{borderColor: flowerBorder6 ? "transparent" : "red"}}/>
                          <figcaption>6</figcaption>
                      </figure>
                  </div>
              </div>
              <form>
                  <h2>Форма заказа</h2>
                  <FillingExample text={text} disabledState={disabledState}></FillingExample>
              </form>

              <footer>
                  <h2>Где мы есть?</h2>
                  <p>По любым вопросам, можете связаться с нами через:</p>
                  <div className="social-media">
                      <a href="https://instagram.com/violetta_merkul?igshid=YmMyMTA2M2Y="><img src={insta_logo} alt=""/>
                          <span>Инстаграм</span></a>
                      <a href="https://vk.com/viomerkul"><img src={vk_logo} alt=""/>
                          <span>ВКонтакте</span></a>
                      <a href="/"><img className="telegram-icon" src={telegram_logo} alt=""/>
                          <span>@viomer</span></a>
                  </div>
              </footer>
          </div>
      </div>
  );
}

export {MainPage};
