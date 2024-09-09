//- Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript,
// зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
let b = document.getElementsByTagName("button")[0];
b.onclick = function (){
    document.getElementById('text').remove();
}

//- створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18,
// та повідомити про це користувача
let reading = document.getElementById('scnd_button');
reading.onclick = function (){
    let valueOfAge = document.getElementById('someText').value;
    if (valueOfAge < 18){
        document.getElementById(`Sorry you are too small`)
    }
    else if(valueOfAge > 100){
        document.write(`Are you sure you are alive?`)
    }
    else{
        document.write(`You are good`)
    }
}

//Стоврити форму з трьома полями для name,surname,age та кнопкою. При натисканні на кнопку зчитати данні з полів,
// та вивести об'єкт в документ.
// Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
let readingForm = document.forms.someForm;
let div = document.getElementById('putter');

document.getElementById("thrd_button").addEventListener("click", function (e) {
    e.preventDefault();
    let nameOfValue = readingForm.name.value;
    let surnameOfValue = readingForm.surname.value;
    let ageOfValue = readingForm.age.value;
    let object = {nameOfValue,surnameOfValue,ageOfValue};
    console.log(object);
    div.textContent = object.nameOfValue + ' ' + object.surnameOfValue + ' ' + object.ageOfValue
});
//є сторінка, на якій є блок, я кому знаходиьтся цифра.
// написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
let some = +localStorage.getItem('number');
some += 1;
localStorage.setItem('number', some)
document.getElementById('plusOne').textContent = some;

//Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще,
// в масив sessionsList зберігається інформація про дату та час відвідування сторінки.
// Є  сторінка sessionsListPage.html (назва довільна),
// при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html.
// Інфу НЕ виводити в консоль, а малювати в DOM
let sessionList = [];
if (localStorage.getItem('sessionList')){
    sessionList = JSON.parse(localStorage.getItem('sessionList'))
}
sessionList.push(new Date());
localStorage.setItem('sessionList', JSON.stringify(sessionList))

//створити конвертор ваги з кг в фунти. данні заповнюються через інпут.
// При введенні даних обрахунок стається миттєво, без натискань додаткових кнопок
let convertor = document.getElementById('convertid');
let resultBox = document.getElementById('result');

convertor.addEventListener('input', function() {
    let valueInput = +this.value;
    let result = valueInput * 2.2;
    resultBox.textContent = result;
});

//В localStorage зберігаються масиви.
// Вам потрібно зробити функцію, які дістає потрібний вам масив з localStorage та додає в нього об'єкт
// сигнатура функції -
// addToLocalStorage(arrayName:string,objToAdd:any{}):void
function addToLocalStorage(arrayName, objToAdd){
    let item = localStorage.getItem(arrayName)
    let arr = JSON.parse(item)
    arr.push(objToAdd)
    let jsonArr = JSON.stringify(arr);
    localStorage.setItem(arrayName, jsonArr);
}
addToLocalStorage('sessionList', {});

// Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
document.getElementById('createTable').addEventListener('click', function() {
    const rows = parseInt(document.getElementById('rows').value);
    const cells = parseInt(document.getElementById('cells').value);
    const content = document.getElementById('content').value;

    const tableContainer = document.getElementById('tableContainer');

    const table = document.createElement('table');

    for (let i = 0; i < rows; i++) {
        const tr = document.createElement('tr');
        for (let j = 0; j < cells; j++) {
            const td = document.createElement('td');
            td.textContent = content;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }

    tableContainer.appendChild(table);
});
