//Масиви та об'єкти
let array = ['Jay', 'Lay', 9, 100, -102, true, false, 'Kay', 'Pay', 'Tay']
console.log(array);

let book1 = {
    title: 'Harry Potter',
    pageCount: 203,
    genre: 'Fantasy'
}
let book2 = {
    title: 'Sunshine',
    pageCount: 310,
    genre: 'Comedy'
}
let book3 = {
    title: 'Hunger Games',
    pageCount: 444,
    genre: 'Thriller'
}


let book11 = {
    title: 'Harry Potter',
    pageCount: 203,
    genre: 'Fantasy',
    author: [
        {name:'Balumba', age:20},
    ]
}
let book22 = {
    title: 'Sunshine',
    pageCount: 310,
    genre: 'Comedy',
    author: [
        {name:'Ballon', age:48},
    ]
}
let book33 = {
    title: 'Hunger Games',
    pageCount: 444,
    genre: 'Thriller',
    author: [
        {name:'Tubma', age:40},
    ]
}


let users = [
    {name:'Ivan', surname:'Ivanin', password:'qwerty'},
    {name:'Ben', surname:'Benin', password:'asdfgh'},
    {name:'Kark', surname:'Karkin', password:'12345'},
    {name:'Lop', surname:'Lopin', password:'093213'},
    {name:'Kol', surname:'Kolin', password:'zxcvbn'},
    {name:'Zen', surname:'Zenin', password:'mnbvcx123'},
    {name:'Jen', surname:'Jenin', password:'0119283'},
    {name:'Nensy', surname:'Nensin', password:'lkjhgfd12'},
    {name:'Gov', surname:'Govin', password:'mkonji0'},
    {name:'Vog', surname:'Vogin', password:'[p;okfdqw'},
]
console.log(users[0].password)
console.log(users[1].password)
console.log(users[2].password)
console.log(users[3].password)
console.log(users[4].password)
console.log(users[5].password)
console.log(users[6].password)
console.log(users[7].password)
console.log(users[8].password)
console.log(users[9].password)


let weekTemperature = [
    {idDay: 1, morning: 10, afternoon: 15, evening: 9},
    {idDay: 2, morning: 12, afternoon: 17, evening: 10},
    {idDay: 3, morning: 5, afternoon: 7, evening: 4},
    {idDay: 4, morning: 10, afternoon: 15, evening: 7},
    {idDay: 5, morning: 25, afternoon: 28, evening: 22},
    {idDay: 6, morning: 3, afternoon: 10, evening: 9},
    {idDay: 7, morning: 26, afternoon: 30, evening: 25},
]


//Логічні розгалуження

let x = 1
let a = 0
    if (x!==0) {
        console.log('Right');
    }
    else{
        console.log('Not right')
    }
    if (a!==0) {
        console.log('Right');
    }
    else{
        console.log('Not right')
    }


let time = 23
    if (time<=15){
        console.log('Перша чверть')
    }
    else if (time<=30){
        console.log('Друга чверть')
    }
    else if (time<=45){
        console.log('Третя чверть')
    }
    else if (time<=59){
        console.log('Четверта чверть')
    }
    else {
        console.log('(.)_(.)')
}


let day = 25
    if (day <=10){
        console.log('Ви у першій частині місяця')
    }
    else if (day <=20){
        console.log('Ви у другій частині місяця')
    }
    else if (day <=31){
        console.log('Ви у третій частині місця')
    }
    else {
        console.log('ВИ У КОСМОСІ')
    }




let daySchedule = (prompt('Введіть день тижня: понеділок - 1, Неділя - 7'))

    switch (daySchedule){
        case '1':
            console.log('Go to the office');
            break;

        case '2':
            console.log('Go for a walk');
            break;

        case '3':
            console.log('Go to the cinema')
            break

        case '4':
            console.log('Go to the beach');
            break;

        case '5':
            console.log('Go to the office');
            break;

        case '6':
            console.log('Clean the penthouse')
            break;

        case '7':
            console.log('Go for a date');
            break;

        default:
            console.log('There are no more days')
    }



let b = 110;
let c = 110;
    if (b>c){
        console.log('Number ' + b + ' is greater');
    }
    else if (c>b){
        console.log('Number ' + c + ' is greater');
    }
    else if(b===c){
        console.log('Two numbers are equal')
    }


//Не знаю чи правильно я зрозумів суть завдання, але зробив якось, якщо неправильно, скажіть про це будь ласка)
let xx = !!null;
    if (!xx){
        console.log('default')
    }
    // else if (xx === !!null){
    //     console.log('default')
    // }
    // else if (xx === !!''){
    //     console.log('default')
    // }
    // else if(xx === !!undefined){
    //     console.log('default')
    // }
    // else if(xx === !!0){
    //     console.log('default')
    // }
    // else {
    //     console.log('(?)_(?)')
    // }



let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4},
]
    if (coursesAndDurationArray[0].monthDuration > 5){
        console.log('Супер, ви навчаєтеся на курсі вже більше 5 місяців')
    }
    if (coursesAndDurationArray[1].monthDuration > 5){
        console.log('Супер, ви навчаєтеся на курсі вже більше 5 місяців')
    }
    if (coursesAndDurationArray[2].monthDuration > 5){
        console.log('Супер, ви навчаєтеся на курсі вже більше 5 місяців')
    }
    if (coursesAndDurationArray[3].monthDuration > 5){
        console.log('Супер, ви навчаєтеся на курсі вже більше 5 місяців')
    }
    if (coursesAndDurationArray[4].monthDuration > 5){
        console.log('Супер, ви навчаєтеся на курсі вже більше 5 місяців')
    }
    if (coursesAndDurationArray[5].monthDuration > 5){
        console.log('Супер, ви навчаєтеся на курсі вже більше 5 місяців')
    }

