const cart = [{
    id: 'a',
    item: 'Laptop',
    quantity: 1,
    cost: 30000,
    currency: 'MXN',
}];

function addNewProp(objArr, prop, prop2) {
    const tempCart = [...cart];
    tempCart.push({...prop, id: 'b' }, {...prop2, id: 'c' });
    return tempCart;
}

function addPropertyToItemInCart(cart, property, value, itemId) {
    const tempCart = [];
    cart.forEach(e => {
        if (e.id === itemId) {
            tempCart.push({...e, [property]: value });

        }
        if (e.id !== itemId) {
            tempCart.push({...e });
        }
    });
    return tempCart
}

const newCart = addNewProp(cart, {
    item: 'Phone',
    currency: 'USD',
    cost: 1000,
    quantity: 1
}, {
    item: "Milk",
    quantity: 12
});
const cartModified = addPropertyToItemInCart(newCart, 'cost', 700, 'c');
// console.log(cart);
// console.log(newCart);
console.log(cartModified[2].id === 'c')
console.log(cartModified);