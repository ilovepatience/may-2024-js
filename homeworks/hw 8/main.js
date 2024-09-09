//Створити функцію, яка робить глибоку копію об'єкту.
// Додати перевірки на undefined, null, NaN.
// Подумати і реалізувати логіку, в якій кінцевий об'єкт буде мати функції,які в нього були до цього моменту.
let user = {
    name: 'Ubobmae',
    age: 10,
    username: 'Kalculator',
    car: 'BMW M3',
    randFunc(){},
    notARandFunc (){},
}
function cloner (object){

    if (object) {
        arrOfFuncs = [];
        for (const item in object) {
            if (typeof object[item] === "function"){
                let funcCopy = object[item].bind();
                arrOfFuncs.push({funcCopy, item});
            }
        }
        console.log(arrOfFuncs)
        let text = JSON.stringify(object);
        let deepCopy = JSON.parse(text);
        for (const key of arrOfFuncs) {
            deepCopy[key.item] = key.funcCopy;
        }
        return deepCopy
    }
    else{
        console.log('Sorry you fked up')
    }
}
console.log(cloner(user));
//- є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
// Зробити все ВИКЛЮЧНО за допомоги інлайн конструкції
console.log(coursesAndDurationArray.map((value, index) => ({...value, id: index + 1})));





