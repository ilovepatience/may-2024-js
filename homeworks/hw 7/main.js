// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function User(id, name, surname , email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
users  = [
    new User(4,'Okten', 'Oktenik', 'oktenikokten@gmail.com', '+123456782'),
    new User(9,'Albatros', 'Albatrosik', 'pelikan@gmail.com', '+88882228888'),
    new User(10,'Sun', 'Sunik', 'sunshine@gmail.com', '+87799882128'),
    new User(5,'Sergiy', 'Sergiynik', 'profesional@gmail.com', '+777777777'),
    new User(3,'Lad', 'Ladik', 'ladiklad@gmail.com', '+123456781'),
    new User(8,'Abrikos', 'Abrikosik', 'abrikosfruit@gmail.com', '+88888888888'),
    new User(2,'Pad', 'Padik', 'padikpad@gmail.com', '+123456780'),
    new User(6,'Zuravel', 'Zuravlik', 'profesional228@gmail.com', '+222222222'),
    new User(1,'Dap', 'Dapik', 'dapikdap@gmail.com', '+123456789'),
    new User(7,'Kokos', 'Kokosik', 'koks19@gmail.com', '+123456788'),
]
console.log(users)

//- Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
const filteredUsers = users.filter(value => {
    return value.id % 2 === 0;
});
console.log(filteredUsers);

//- Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
console.log(users.sort((aUser, bUser) => aUser.id - bUser.id));

//- створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
function Client (id, name, surname , email, phone, order) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = order;
}
let arrOfClients = [
    new Client(1,'Name1', 'Surname1', 'Email1@gmail.com', '+1234512345', ['item1', 'item2', 'item3']),
    new Client(2,'Name2', 'Surname2', 'Email2@gmail.com', '+5432154321', ['item33']),
    new Client(3,'Name3', 'Surname3', 'Email3@gmail.com', '+1234123455', ['item222', 'item333']),
    new Client(4,'Name4', 'Surname4', 'Email4@gmail.com', '+1231234455', ['item123', 'item122', 'item133']),
    new Client(5,'Name5', 'Surname5', 'Email5@gmail.com', '+5435432211', ['item333']),
    new Client(6,'Name6', 'Surname6', 'Email6@gmail.com', '+3213214455', ['item213']),
    new Client(7,'Name7', 'Surname7', 'Email7@gmail.com', '+2342345511', ['item113', 'item121', 'item313']),
    new Client(8,'Name8', 'Surname8', 'Email8@gmail.com', '+5415412323', ['item323']),
    new Client(9,'Name9', 'Surname9', 'Email9@gmail.com', '+1351352424', ['item32']),
    new Client(10,'Name10', 'Surname10', 'Email10@gmail.com', '+1341342525', [ 'item21', 'item33']),
]
console.log(arrOfClients)

//- Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
arrOfClients.sort((aClient, bClient) => {
    return  aClient.order.length - bClient.order.length;
})
console.log(arrOfClients)

//- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//     -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
function Car (model, brand, year, topSpeed, engineVolume){
    this.model = model;
    this.brand = brand;
    this.year = year;
    this.topSpeed = topSpeed;
    this.engine_volume = engineVolume;
    this.drive = function (){
        console.log(`їдемо зі швидкістю ${topSpeed} на годину`)
    }
    this.info = function () {
        for (const item in this) {
            console.log(item, this[item]);
            
        }
    }
    this.increaseMaxSpeed = function (newSpeed){
        this.topSpeed = this.topSpeed + newSpeed
    }
    this.changeYear = function (NewValue){
        this.year = NewValue;
    }
    this.addDriver = function (driverNew) {
        this.driver = driverNew;
    }
}

let car = new Car('Rs6', 'Audi', 2020, 270, '4l');
console.log(car);
car.drive();
car.info();
car.increaseMaxSpeed(121);
console.log(car);
car.changeYear(2021);
console.log(car);
car.addDriver('JDM');
console.log(car);

//- (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
 class Carr {
     constructor(modell, brandd, yearr, topSpeedd, engineVolumee) {
         this.modell = modell;
         this.brandd = brandd;
         this.yearr = yearr;
         this.topSpeedd = topSpeedd;
         this.engineVolumee = engineVolumee;
     }
     drivee = function (){
         console.log(`їдемо зі швидкістю ${topSpeedd} на годину`)
     }
     infoo = function () {
         for (const item in this) {
             console.log(item, this[item]);

         }
     }
     increaseMaxSpeedd = function (newSpeedd){
         this.topSpeedd = this.topSpeed + newSpeedd
     }
     changeYearr = function (NewValuee){
         this.yearr = NewValuee;
     }
     addDriverr = function (driverNeww) {
         this.driverr = driverNeww;
     }
 }

let carr = new Car('M3 Touring', 'BMW', 2022, 255, '3l');
console.log(carr)
carr.drive();
carr.info();
carr.increaseMaxSpeed(100);
carr.changeYear(1999);
console.log(carr);

//-створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// За допомоги циклу знайти яка попелюшка повинна бути з принцом..
// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }

}
class Prince {
    constructor(name, age, findShoe) {
        this.name = name;
        this.age = age;
        this.findShoe = findShoe;
    }
}
let cindarellas = [
    new Cinderella('Jenifer', '29', 36),
    new Cinderella('Lucy', '20', 31),
    new Cinderella('Kate', '30', 30),
    new Cinderella('Dare', '40', 19),
    new Cinderella('Penelopa', '1', 5),
    new Cinderella('Len', '50', 40),
    new Cinderella('Lee', '90', 30),
    new Cinderella('Leenox', '55', 36),
    new Cinderella('Victory', '21', 38),
    new Cinderella('Ivan', '44', 46),
];
let prince = new Prince('Lucifer', 300, 38)


for (const item of cindarellas) {
    if (item.footSize === prince.findShoe){
        console.log(`Попелюшка ${item.name} повинна бути з принцом ${prince.name}. `)
    }
}

let findingCindarella = cindarellas.find(cindar => cindar.footSize === prince.findShoe)
















