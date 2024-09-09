// - створити блок
// - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
// Створюємо div
let block = document.createElement("div");
let someText = document.createElement("h1");
someText.textContent = "0oO0oO";
block.appendChild(someText);
block.classList.add('wrap', 'collapse', 'alpha', 'beta');
document.body.appendChild(block);
let clone = block.cloneNode(true);
document.body.appendChild(clone);

//- Є масив:
 let arr = ['Main','Products','About us','Contacts']
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)
let list = document.createElement("ul")
for (const item of arr) {
        let textLi = document.createElement("li");
        textLi.innerText = item;
        list.appendChild(textLi);
}
document.body.appendChild(list)

//- Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
for (const item of coursesAndDurationArray) {
    let block = document.createElement("div");
    block.innerText = `${item.title} - ${item.monthDuration}`;
    document.body.appendChild(block);
}


//- Є масив
let coursesAndDurationArray2 = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
// Завдання робити через цикли.
for (const item of coursesAndDurationArray2) {
    let div = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.innerText = item.title;
    let p = document.createElement('p');
    p.innerText = item.monthDuration;
    div.classList.add('item')
    h3.classList.add('heading')
    p.classList.add('description')



    div.append(h3, p)
    document.body.appendChild(div);
}
