let info = [
    {text: 'I love Okten <3', text2: 'I love patience'},
]


for (let k = 0; k < 10; k++) {
    for (let i of info) {
        document.write(`
                <div>${info[0].text} - ${info[0].text2}</div>
            `)
    }
}

for (let k = 0; k < 10; k++) {
    for (let i of info) {
        document.write(`
                <div>----------------------------------------</div>
                <div>${info[0].text} - ${info[0].text2}</div>
                <div>${k}</div>
            `)
    }
}



let testingText = [
    {
        someText: 'Hello booois', anyText: 'Hello everyone!'
    },
]
let x = 0;
while (x < 20) {
    document.write(`<h1>${testingText[0].someText} - ${testingText[0].anyText}</h1>`);
    x++;
}
document.write('------------------------------------------------')
let p = 0
while (p < 20) {
    document.write(`<h1>${testingText[0].someText} - ${testingText[0].anyText}</h1>
                    <h1>${p}</h1>
                    `);
    p++;
}



let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];

document.write('<nav><ul>');
for (let i = 0; i < listOfItems.length; i++) {
    document.write(`
            <li>${listOfItems[i]}</li>
        `);
}
document.write('</ul></nav>');


let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://img.freepik.com/premium-photo/cup-tea-isolated-white-background_728202-1112.jpg'
    },
];

for(let items of products) {
    document.write(`
        <div class="product-card">
            <h3 class="product-title">${items.title}. Price - ${items.price}</h3>
            <img src="${items.image}" alt="tasty food" class="product-image"/>
        </div>
        `)
}


let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

document.write('Users that have true status')
for (let i = 0; i < users.length; i++){
    if (users[i].status === true){
        document.write(`
                <h4>${users[i].name}</h4>
        `)
    }
}
document.write('Users that have false status')
for (let i = 0; i < users.length; i++){
    if (users[i].status === false){
        document.write(`
                <h4>${users[i].name}</h4>
        `)
    }
}

document.write('Users 30+ age')

for (let i = 0; i < users.length; i++){
    if (users[i].age > 30){ //if (users[i].age >= 30)
        document.write(`
                <h4>${users[i].age}</h4>
        `)
    }
}



