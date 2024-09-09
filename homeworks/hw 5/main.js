//- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let squareCount = (a, b) => a * b;
console.log(squareCount(2,6))

//- створити функцію яка обчислює та повертає площу кола з радіусом r
let circleCount = (r) => 3.14 * r * 2;
console.log(circleCount(1))

//- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
let cylinderCount = (r, h) => 2 * 3.14 * r * h;
console.log(cylinderCount(5, 8))

//- створити функцію яка приймає масив та виводить кожен його елемент
let printingArray = (arr) => {
    for (const item of arr) {
        console.log(item);
    }
}
printingArray(array1 = [1,2,3,4,5,6,78,9]);

//- створити функцію яка створює параграф з текстом. Текст задати через аргумент
let someArray = (text) => {
    document.write(`<p>${text}</p>`)
}
someArray('Babyletik')
someArray('Pistoletik')

//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let creatingList = (tag, text) =>{
    for (let i = 0; i < 3; i++)
    document.write(`<ul><${tag}>${text}</${tag}></ul>`)
}
creatingList('li', 'hello babyletik')

//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let creatingList2 = (text, amountOfLi, tag) =>{
    document.write(`<ul>`)
    for (let item = 0; item < amountOfLi; item++) {
        document.write(`<${tag}>${text}</${tag}>`)
    }
    document.write(`</ul>`)
}
creatingList2('Babyletiks', 4, 'h3')

//- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let arrayOfElements = (arr) =>{
    document.write(`<ul>`);
        for (const item of arr) {
            document.write(`<li>${item}</li>`);
        }
    document.write(`</ul>`);
}
arrayOfElements(someArr = [1,2,3,4, 'hi', 'babyletik', false, 'hello', 'pistoletik', true]);

//- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let objectArray = (arr) =>{
    for (const item of arr) {
        document.write(`<p>${item.id}, ${item.name}, ${item.age}</p>`)
    }
}
arrayObj = [
    {id:1, name: 'Babyletik Svetik', age: 100},
    {id:2, name: 'Babyletik Ludik', age: 200},
    {id:3, name: 'Babyletik Valik', age: 300},
]
objectArray(arrayObj)

//- створити функцію яка повертає найменьше число з масиву
let CountMinValue = (arr) =>{
    let minValue = arr[0];
    for (const item of arr) {
        if (item < minValue){
            minValue = item;
        }

    }
    return minValue;
}
console.log(CountMinValue(arrayOfNumbers = [4123, 51230, 2133, 4912, 4292, 1223, 2212]));

//- створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
let sum = (arr) =>{
    let box = 0;
    for (const item of arr) {
        if (item){
            box = box + item;
        }

    }
    return box;
}
console.log(sum(arrayOfNums = [1,2,10]));

//- створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
let swap = (arr, index1, index2) => {
    let altArr = arr[index1];
    arr[index1] = arr[index2]
    arr[index2] = altArr

    return arr

}
console.log(swap([11, 22, 33, 44], 0,3))

//- Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

let exchange = (sumUAH, currencyValues, exchangeCurrency) => {
    let peekingCurrency;
    for (const item of currencyValues) {
        if (item.currency === exchangeCurrency){
            peekingCurrency = item;
        }

    }
    return result = sumUAH/peekingCurrency.value;
};
console.log(exchange(5000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'EUR'))