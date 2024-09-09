// - взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини.
// Відобразити всі поля кожної корзини.
// let korzinka = document.getElementById('allCarts');
//
// fetch('https://dummyjson.com/carts')
//     .then(res => res.json())
//     .then(cartsObj => {
//         let { carts } = cartsObj;
//         console.log(carts);
//         for (const cart of carts) {
//             let box = document.createElement('div');
//             box.classList.add('dropInBox');
//             let divsInBox = document.createElement("div")
//             divsInBox.textContent = `
//             ID : ${cart.id}   |||
//             Total : ${cart.total}   |||
//             DiscountedTotal : ${cart.discountedTotal}   |||
//             UserId : ${cart.userId}   |||
//             TotalProducts : ${cart.totalProducts}   |||
//             TotalQuantity : ${cart.totalQuantity}   |||
//             `
//
//
//             let ul = document.createElement("ul")
//             for (const item of cart.products) {
//                 let li = document.createElement('li')
//                 li.textContent = `
//                     DiscountPercentage : ${item.discountPercentage}
//                     DiscountedTotal : ${item.discountedTotal}
//                     Id : ${item.id}
//                     Price : ${item.price}
//                     Quantity : ${item.quantity}
//                     Title : ${item.title}
//                     Total : ${item.total}
//                 `
//                 ul.appendChild(li)
//                 let img = document.createElement(`img`);
//                 img.src = item.thumbnail;
//                 li.appendChild(img);
//             }
//
//
//             box.append(divsInBox, ul);
//             korzinka.appendChild(box);
//         }
//     });

//- взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти.
// Інгредієнти повинні бути списком під час відображення.
let korzinka2 = document.getElementById('allRecipes')

let url = new URL('https://dummyjson.com/recipes');
url.searchParams.set('limit', '50');
fetch(url)
    .then (res => res.json())
    .then (recipesObj => {
    let {recipes} = recipesObj
        console.log(recipes)

        for (const recipe of recipes) {
            let generalBox = document.createElement("div");
            generalBox.classList.add('boxWithInfo')
            let componentsInDiv = document.createElement('div');
            componentsInDiv.textContent = `
                id : ${recipe.id} ||
                name : ${recipe.name}  ||
                prepTimeMinutes : ${recipe.prepTimeMinutes}  ||
                cookTimeMinutes : ${recipe.cookTimeMinutes}  ||
                servings : ${recipe.serving}  ||
                difficulty : ${recipe.difficulty}  ||
                cuisine: ${recipe.cuisine}  ||
                caloriesPerServing : ${recipe.caloriesPerServing} ||
                userId : ${recipe.userId}  ||
                rating : ${recipe.rating}  ||
                reviewCount : ${recipe.reviewCount}
            `

            let ingredients = document.createElement("ul")
            let textIngr = document.createElement('div')
            textIngr.textContent = `Ingredients : `
            for (const ingredient of recipe.ingredients) {
                let li = document.createElement("li")
                li.textContent = ingredient;
                ingredients.appendChild(li)
            }
            let instructions = document.createElement("ul")
            let textIstr = document.createElement('div')
            textIstr.textContent = `Instructions : `
            for (const instruction of recipe.instructions) {
                let li = document.createElement("li")
                li.textContent = instruction;
                instructions.appendChild(li)
            }

            let img = document.createElement("img");
            img.src = recipe.image;
            generalBox.append(componentsInDiv, textIngr, ingredients, textIstr, instructions, img)
            korzinka2.appendChild(generalBox)
        }

    });

