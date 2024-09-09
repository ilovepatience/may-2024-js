//- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function square(SideA, SideB){
    let s = SideA * SideB;
    return  s;
}

let calculateSquare = square(10, 5);
console.log(`Площа прямокутника : ${calculateSquare}`)

//- створити функцію яка обчислює та повертає площу кола з радіусом r
function circle(r){
    let s = 3.14 * r * 2;
    return s;
}

let calculateCircle = circle(11);
console.log(`Площа кола : ${calculateCircle}`)

//- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function cylinder(r, h){
    let s = 2 * 3.14 * r * h;
    return s;
}

let calculateCylinder = cylinder(10, 40);
console.log(`Площа циліндра: ${calculateCylinder}`)

//- створити функцію яка приймає масив та виводить кожен його елемент
let firstArray = ['Hello', 102, true, 'Okten', 'Lord']

function printingArray(arr){
    for (const i of arr) {
        console.log(i)
    }
}
printingArray(firstArray)

//- створити функцію яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент
function someP(text, tag){
    document.write(`<${tag}>${text}</${tag}>`)
    console.log(arguments)
}

someP('Hello', 'p')
someP('Okten', 'p')
someP('Cucumber', 'p')

//- створити функцію яка створює ul з трьома елементами li та виводить його через document.write. Текст li задати через аргумент всім однаковий
function list(text, tag){
    document.write(`
             <ul>
                <${tag}>${text}</${tag}>
                <${tag}>${text}</${tag}>
                <${tag}>${text}</${tag}>
            </ul>
            `)
}

list('Hello Okten', 'li')

//- створити функцію яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write
function list2(text, counted, tag){
    document.write(`<ul>`)
    for (let p = 0; p < counted; p++){
        document.write(`<${tag}>${text}</${tag}>`)
    }
    document.write(`</ul>`)

}
list2('Helloooo Okteeen', '5', 'li')

//- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список (ul li) та виводить його через document.write
randArr =['Hello', 'Okten', true, false, 1002, -1223, false]

function printRandArr(arr){
    document.write(`<ul>`)
    for(let item of arr){
        document.write(`
                <li>${item}</li>
                      `)
    }
    document.write(`</ul>`)

}
printRandArr(randArr)

//- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
function users(arrayOfUsers) {
    for (const user of arrayOfUsers) {
        document.write(`<div>${user.id} | ${user.name} | ${user.age}</div>`);
    }
}

users([
    {
        id: 12, name: 'Kola', age: 200,
    },
    {
        id: 23, name: 'Pepsi', age: 230,
    },
    {
        id: 34, name: 'Sprite', age: 410,
    }
]);

//- створити функцію яка повертає найменше число з масиву
function findMinValue(arr){
    let minNum = arr[0]
    for (const item of arr){
        if (item < minNum){
            minNum = item
        }
    }
    return minNum;

}
console.log(findMinValue([13, 122, 341, 10, 412, 2315, 6]))

//- створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
function sum(arr){
    let finalValue = 0
    for (let summing of arr) {
            finalValue = finalValue + summing;
    }
    return finalValue;
}
console.log(sum([100, 291, 999, 192, 2003]))
//- створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відповідних індексах
function swap(arr, index1, index2){
    let altArr = arr[index1];
    arr[index1] = arr[index2]
    arr[index2] = altArr

    return arr

}
console.log(swap([11, 22, 33, 44], 0,1))
//- Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
//Приклад exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD') // => 400
function exchange(sumUAH,currencyValues, exchangeCurrency){
    let peekCurrency;
    for (const item of currencyValues) {
        if (item.currency === exchangeCurrency){
            peekCurrency = item;
        }

    }
    let final = sumUAH/peekCurrency.value
    return final;
}

console.log(exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD'))



