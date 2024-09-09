//- Знайти та вивести довижину настипних стрінгових значень
//     'hello world', 'lorem ipsum', 'javascript is cool'
let arrOfStr = ['hello world', 'lorem ipsum', 'javascript is cool'];
for (const item of arrOfStr) {
    console.log(item.length);
}

//- Перевести до великого регістру наступні стрінгові значення
//       'hello world', 'lorem ipsum', 'javascript is cool'
let Str = 'hello world --- lorem ipsum --- javascript is cool';
console.log(Str.toUpperCase());

//- Перевести до нижнього регістру настипні стрінгові значення
//       'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let Str1 = 'HELLO WORLD --- LOREM IPSUM --- JAVASCRIPT IS COOL';
console.log(Str1.toLowerCase());

//- Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let string = ' dirty string   '
let c = string.trim();
console.log(string);
console.log(c);

//- Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
//     let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

let stringToarray = str =>{
    let split = str.split(' ');
    return split;
}
console.log(stringToarray('Ревуть воли як ясла повні'));

//- є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
let someArr = [10,8,-7,55,987,-1011,0,1050,0];
let arrToStr = someArr.map(str => str.toString())
console.log(arrToStr)

//- створити функцію sortNums(array,direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
let sortNums = (array,direction) =>{
    if (direction === 'ascending'){
        console.log(array.sort((a, b) => a - b));
    }
    else if (direction === 'descending'){
        console.log(array.sort((a, b) => b - a));
    }
    else{
        console.log('Wtf?')
    }
    return array;
}
sortNums([11,21,3], 'ascending')
sortNums([11,21,3], 'descending')
sortNums([11,21,3], 'ascendingggg')

//- є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
//  1) -- відсортувати його за спаданням за monthDuration
//  2) -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
//  3) -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

console.log(coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration));
console.log(coursesAndDurationArray.filter(value => value.monthDuration > 5));
console.log(coursesAndDurationArray.map((value, index) => {
    value.id = index+1;
    return value;
}))

//описати колоду карт (від 6 до туза без джокерів)
//  - знайти піковий туз
//  - всі шістки
//  - всі червоні карти
//  - всі буби
//  - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//     value: '', // '6'-'10', 'ace','jack','queen','king'
//     color:'', // 'red','black'
// }
let arrayOfCardSuits = ['spade', 'diamond', 'heart', 'clubs'];
let arrayOfValues = ['6', '7', '8', '9', '10', 'ace', 'jack', 'queen', 'king']

let cards = [];

for (const suit of arrayOfCardSuits) {
    for (const values of arrayOfValues) {
        let card = {cardSuit: suit, value: values};
        if (suit === 'heart' || suit === 'diamond'){
            card.color = 'red'
        }
        else{
            card.color = 'black'
        }
        cards.push(card)
    }
}
console.log(cards)

//- знайти піковий туз
console.log(cards.find((card => card.value === 'ace' && card.cardSuit === 'spade')));
//  - всі шістки
console.log(cards.filter(card => card.value === '6'));
//  - всі червоні карти
console.log(cards.filter(card => card.color === 'red'));
//  - всі буби
console.log(cards.filter(card => card.cardSuit === 'diamond'));
//  - всі трефи від 9 та більше
console.log(cards.filter(card => card.cardSuit === 'clubs' && (
    card.value === '9' || card.value === '10' ||
    card.value === 'jack' || card.value === 'queen' ||
    card.value === 'king' || card.value === 'ace'
)));

//Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }
let redusing = cards.reduce((cardSuites, card) => {
    if (card.cardSuit === 'spade'){
        cardSuites[0].push(card);
    }
    else if (card.cardSuit === 'diamond'){
        cardSuites[1].push(card);
    }
    else if (card.cardSuit === 'heart'){
        cardSuites[2].push(card);
    }
    else if (card.cardSuit === 'clubs'){
        cardSuites[3].push(card);
    }
    else {
        console.log('???');
    }
    return cardSuites
}, [[], [], [], []]);
console.log(redusing);

//взяти з arrays.js масив coursesArray
// --написати пошук всіх об'єктів, в яких в modules є sass
// --написати пошук всіх об'єктів, в яких в modules є docker
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
console.log(coursesArray.filter(item => item.modules.includes('sass')));
console.log(coursesArray.filter(item => item.modules.includes('docker')));




