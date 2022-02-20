const cart = [{
    id: 'a',
    item: 'Laptop',
    quantity: 1,
    cost: 30000,
    currency: 'MXN',
}];

function addItemToCart(cart, properties, properties2) {
    const newCart = [...cart];
    newCart.push({...properties, id: 'b' }, {...properties2, id: 'c' });
    return newCart;
}​
// function addPropertyToItemInCart(cart, property, value, itemId) {
//     // Aquí estoy copiando todos los elementos de cart en newCart, a excepción del que tiene id itemId
//     const newCart = cart.filter(obj => obj.id !== itemId);​
//     // Aquí estoy encontrando el elemento al cual le agregaré la propiedad y el valor
//     const element = cart.find(e => e.id === itemId);​
//     // Aquí estoy agregando al nuevo array 
//     newCart.push({...element, [property]: value });​
//     return newCart;
// }​
const newCart = addItemToCart(cart, { item: 'Phone', currency: 'USD', cost: 1000, quantity: 1 }, { item: "Milk", quantity: 12 });​
// const cartModified = addPropertyToItemInCart(newCart, 'cost', 700, 'c');
// const cartModifiedAgain = addPropertyToItemInCart(cartModified, 'cost', 15000, 'a');​
console.log(cart);
console.log(newCart);
// console.log(cart);
// console.log(cartModified);
// console.log(cartModifiedAgain);