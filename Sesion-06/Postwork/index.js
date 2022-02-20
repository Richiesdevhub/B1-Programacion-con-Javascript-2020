// const car = {
//    brand: "Nissan",
//    model: "Sentra"
// }
​
// // impura
// function addColor(car, color) {
//     //const newCar = Object.assign({}, car, { color: color });
//     //const newCar = Object.assign({}, car, { color });
//     //const newCar = {...car, color: color};
//     const newCar = {...car, color: color, hola: "mundo"};
​
//     return newCar;
// }
​
// console.log(car);
​
// const coloredCar = addColor(car, "Blue");
​
// console.log(coloredCar);
// console.log(car);
​
//const colors = ["azul", "verde", "amarillo"];
​
//const colorsWith7LettersOrMore = colors.filter(function(element) {
//    return element.length >= 7;
//});
//const colorsWith7LettersOrMore = colors.filter((element) => { return element.length >= 7 });
//const colorsWith7LettersOrMore = colors.filter(element => element.length >= 7);
//const colorsUppercase = colors.map(color => color.toUpperCase());
​
//console.log(colors);
//console.log(colorsWith7LettersOrMore);
//console.log(colorsUppercase);
//console.log(colors);
​
// const cart = [
//     {
//       id: 'a',
//       item: 'Laptop',
//       quantity: 1,
//       cost: 30_000,
//       currency: 'MXN',
//     }
// ];
​
// function addItemToCart(cart, properties, properties2) {
//     const newCart = [...cart];
​
//     newCart.push({...properties, id: 'b'}, {...properties2, id: 'c'});
​
//     return newCart;
// }
​
// function addPropertyToItemInCart(cart, property, value, itemId) {
//     // Aquí estoy copiando todos los elementos de cart en newCart, a excepción del que tiene id itemId
//     const newCart = cart.filter(obj => obj.id !== itemId);
​
//     // Aquí estoy encontrando el elemento al cual le agregaré la propiedad y el valor
//     const element = cart.find(e => e.id === itemId);
​
//     // Aquí estoy agregando al nuevo array 
//     newCart.push({...element, [property]: value});
​
//     return newCart;
// }
​
// const newCart = addItemToCart(cart, {item: 'Phone', currency: 'USD', cost: 1000, quantity: 1}, {item: "Milk", quantity: 12});
​
// const cartModified = addPropertyToItemInCart(newCart, 'cost', 700, 'c');
// const cartModifiedAgain = addPropertyToItemInCart(cartModified, 'cost', 15_000, 'a');
​
// console.log(cart);
// console.log(newCart);
// console.log(cart);
// console.log(cartModified);
// console.log(cartModifiedAgain);
​​
/*
    Reduce
*/
​
// const arrayOfNumbers = [1, { s: 1, b: 2 }, 2, 3, 5, undefined, 8, [], 13, null, 21, "123", ""];​
// const sum = arrayOfNumbers
//     .filter(e => !isNaN(e) && typeof e === "number")
//     .map(e => e * e)
//     .reduce(function(a, b) {
//         return a + b;
//     }, 0);​
// console.log(sum);
console.log(1 + 1);