import { fireEvent, render, screen } from '@testing-library/react';
import FillingExample from './FillingExample';


describe(FillingExample, () => {

    // проверяем чтобы все поля в форме компонента FillingExample были пусты 
    it("FillingExample displays correct initial form info", () => {
        const { getByTestId } = render(<FillingExample text={0} disabledState={false}/>); // getByTestId для динамически изменяемых объектов, которые мы не можем взять обычным образом. Данный атрибут также показывает, что данная переменная используется в тестах
                                                                                          // render(...) в качестве параметра записывается тестируемый компонент
        const secondNameValue = getByTestId("secondname").value;    
        const nameValue = getByTestId("name").value;                        // находим input с фамилией через атрибут data-testid и получаем его значение
        const surnameValue = getByTestId("surname").value; 
        const emailValue = getByTestId("email").value; 
        const countryValue = getByTestId("country").value; 
        const dataValue = getByTestId("data").value; 

        expect(secondNameValue).toEqual("");                                      // ожидаем что он первоначально пуст
        expect(nameValue).toEqual("");
        expect(surnameValue).toEqual("");
        expect(emailValue).toEqual("");
        expect(countryValue).toEqual("");
        expect(dataValue).toEqual("");
    })



    // проверяем чтобы информация автозаполнялась при нажатии на кнопку автозаполнения
    it("FillingExample correctly autofilling all fields after pressing autofilling button", () => {
        const { getByTestId } = render(<FillingExample text={0} disabledState={false}/>); 
                          
        const autofillingBttn = document.getElementsByClassName("autofill-input")[0];

        // симулируем нажатие на кнопку автозаполнения
        fireEvent.click(autofillingBttn);

        const secondNameValue = getByTestId("secondname").value;    
        const nameValue = getByTestId("name").value;                        
        const surnameValue = getByTestId("surname").value; 
        const emailValue = getByTestId("email").value; 
        const countryValue = getByTestId("country").value; 
        const dataValue = getByTestId("data").value; 

        expect(secondNameValue).toEqual("Меркуль");                                     
        expect(nameValue).toEqual("Виолетта");
        expect(surnameValue).toEqual("Сергеевна");
        expect(emailValue).toEqual("violetta@mail.ru");
        expect(countryValue).toEqual("Париж");
        expect(dataValue).toEqual("10.10.2022");
    })


    // проверяем что если мы не выбрали ни один букет, то поле Номер букета будет равно 0
    it("FillingExample displays correct initial number of bouquets", () => {
        const { getByTestId } = render(<FillingExample text={0} disabledState={false}/>);                                                                      // render(...) используется для теста определенного компонента
        const flower_num = Number(getByTestId("flower_num").textContent);  // получаем информацию из span Номер букета
        expect(flower_num).toEqual(0);
    })


    // проверяем что если букет не выбран - кнопка отправки недоступна
    it("FillingExample disables submit button if number of bouquets equals to zero", () => {
        const { getByTestId } = render(<FillingExample text={0} disabledState={true}/>);                                                                      // render(...) используется для теста определенного компонента
        const flower_num = Number(getByTestId("flower_num").textContent);

        const submit_button = getByTestId("submit_button");

        if (flower_num == 0)
            expect(submit_button.disabled).toEqual(true);
    })


    // проверяем что если букет выбран - кнопка отправки доступна
    it("FillingExample enables submit button if number of bouquets not a zero", () => {
        const { getByTestId } = render(<FillingExample text={1} disabledState={false}/>);                                                                      // render(...) используется для теста определенного компонента
        const flower_num = Number(getByTestId("flower_num").textContent);

        const submit_button = getByTestId("submit_button");

        if (flower_num != 0)
            expect(submit_button.disabled).toEqual(false);
    })
})
