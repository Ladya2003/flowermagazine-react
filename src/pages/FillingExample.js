import React, {useState} from "react";


function FillingExample(props) {

  // рефы для связи с тегами DOM
  const secondname = React.useRef(null);
  const name = React.useRef(null);
  const surname = React.useRef(null);
  const email = React.useRef(null);
  const country = React.useRef(null);
  const data = React.useRef(null);
      

  // ф-ия автозаполнения
  const AutoFilling = () => {
    // свойство current указывает на элемент input
    secondname.current.value = "Меркуль"
    name.current.value = "Виолетта"
    surname.current.value = "Сергеевна"
    email.current.value = "violetta@mail.ru"
    country.current.value = "Париж"
    data.current.value = "10.10.2022"
    
  };

      return (
        <>
          <div className="surname">
                      <label>Фамилия:</label>
                      <input data-testid="secondname" type="text" ref={secondname}/>
                  </div>
                  <div className="name">
                      <label>Имя:</label>
                      <input data-testid="name" type="text" ref={name}/>
                  </div>
                  <div className="surname">
                      <label>Отчество:</label>
                      <input data-testid="surname" type="text" ref={surname}/>
                  </div>
                  <div className="number">
                      <label>Количество букетов:</label>
                      <div className="radio">
                          <input type="radio" name="1"/><span>1</span>
                          <input type="radio" name="1"/><span>2</span>
                          <input type="radio" name="1"/><span>3</span>
                      </div>
                  </div>
                  <div className="email">
                      <label>Email:</label>
                      <input data-testid="email" type="email" ref={email}/>
                  </div>
                  <div className="country">
                      <label>Страна проживания:</label>
                      <input data-testid="country" type="text" ref={country}/>
                  </div>
                  <div className="pr">
                      <label>Откуда узнали?</label>
                      <select>
                          <option>Мама рассказала</option>
                          <option>Брошюра</option>
                          <option>Знакомый</option>
                      </select>
                  </div>
                  <div className="flower">
                      <label>Номер букета:</label>
                      {/* props.text - передаем значение номера букета из MainPage */}
                      <span data-testid="flower_num" id="flower_num">{props.text}</span>
                  </div>
                  <div className="data">
                      <label>Дата заполнения:</label>
                      <input data-testid="data" type="text" ref={data}/>
                  </div>
                  <div className="submit-button">

                        <input
                          type="button"
                          value="Пример заполнения"
                          onClick={AutoFilling}
                          className="autofill-input"
                        />
                      <input 
                      data-testid="submit_button" 
                      type="submit" 
                      disabled={props.disabledState ? true : ""} 
                      id="submit_button" 
                      value="Отправить форму"
                      />
                  </div>
                 
        

        </>
      );
      }

  export default FillingExample